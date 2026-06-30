$ErrorActionPreference = 'Stop'

$base = 'https://www.prairierailsolutions.com'
$targetDir = 'public/assets/extracted'
New-Item -ItemType Directory -Force -Path $targetDir | Out-Null

function Get-UrlText {
  param([string]$Url)
  $ua = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0 Safari/537.36'
  return (& curl.exe -L -s -A $ua $Url)
}

$siteUrls = @()
try {
  $rootSitemap = Get-UrlText -Url "$base/sitemap.xml"
  $rootLocs = [regex]::Matches($rootSitemap, '<loc>(.*?)</loc>')

  foreach ($loc in $rootLocs) {
    $locUrl = $loc.Groups[1].Value.Trim()
    if ($locUrl -match '\.xml($|\?)') {
      try {
        $childMap = Get-UrlText -Url $locUrl
        $childLocs = [regex]::Matches($childMap, '<loc>(.*?)</loc>')
        foreach ($c in $childLocs) {
          $cUrl = $c.Groups[1].Value.Trim()
          if ($cUrl -notmatch '\.xml($|\?)') {
            $siteUrls += $cUrl
          }
        }
      } catch {
        Write-Output "WARN: Failed to parse nested sitemap $locUrl"
      }
    } else {
      $siteUrls += $locUrl
    }
  }
} catch {
  $siteUrls = @(
    "$base/",
    "$base/about",
    "$base/services",
    "$base/careers",
    "$base/contact",
    "$base/privacy-policy",
    "$base/accessibility-statement"
  )
}

# Ensure core known routes are still included even if sitemap is sparse.
$siteUrls += @(
  "$base/",
  "$base/about",
  "$base/services",
  "$base/careers",
  "$base/contact",
  "$base/privacy-policy",
  "$base/accessibility-statement",
  "$base/track-inspection",
  "$base/routine-track-maintenance",
  "$base/preventative-maintenance",
  "$base/railcar-storage",
  "$base/rail-operations",
  "$base/track-labourer",
  "$base/track-mobile-operator-yard-maintenance-labourer",
  "$base/apply"
)

$siteUrls = $siteUrls | Sort-Object -Unique

$imageSet = New-Object 'System.Collections.Generic.HashSet[string]'
$manifest = New-Object System.Collections.Generic.List[Object]

foreach ($u in $siteUrls) {
  try {
    $html = Get-UrlText -Url $u
    if ([string]::IsNullOrWhiteSpace($html)) {
      throw "Empty response body"
    }
    $imgMatches = [regex]::Matches($html, 'https://static\.wixstatic\.com/media/[^"''\s\)<>]+')
    foreach ($im in $imgMatches) {
      $imgUrl = $im.Value
      if ($imageSet.Add($imgUrl)) {
        $manifest.Add([pscustomobject]@{ page = $u; image_url = $imgUrl }) | Out-Null
      }
    }
  } catch {
    Write-Output "WARN: Failed to parse $u"
  }
}

$downloaded = 0
$failed = 0
$index = 1
foreach ($row in $manifest) {
  $imgUrl = $row.image_url
  $pathPart = ($imgUrl -replace '^https://static\.wixstatic\.com/media/', '')
  $fileBase = ($pathPart -split '/')[0]
  $ext = [System.IO.Path]::GetExtension(($imgUrl -split '\?')[0])
  if ([string]::IsNullOrWhiteSpace($ext)) {
    $ext = '.jpg'
  }

  $safeBase = ($fileBase -replace '[^a-zA-Z0-9_-]', '_')
  $outFile = Join-Path $targetDir ("{0:D4}_{1}{2}" -f $index, $safeBase, $ext)

  try {
    & curl.exe -L -s $imgUrl -o $outFile | Out-Null
    if (-not (Test-Path $outFile)) {
      throw "Download missing output file"
    }
    $row | Add-Member -NotePropertyName local_file -NotePropertyValue $outFile
    $downloaded++
  } catch {
    $row | Add-Member -NotePropertyName local_file -NotePropertyValue 'DOWNLOAD_FAILED'
    $failed++
  }

  $index++
}

$manifestPath = Join-Path $targetDir 'manifest.csv'
$manifest | Export-Csv -Path $manifestPath -NoTypeInformation -Encoding UTF8

Write-Output "Pages scanned: $($siteUrls.Count)"
Write-Output "Unique image URLs found: $($manifest.Count)"
Write-Output "Downloaded: $downloaded"
Write-Output "Failed: $failed"
Write-Output "Manifest: $manifestPath"
