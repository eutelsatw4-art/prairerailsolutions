"use server";

import { appendFile, mkdir } from "node:fs/promises";
import nodemailer from "nodemailer";
import path from "node:path";

type ContactFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

function valueOf(formData: FormData, key: string): string {
  const raw = formData.get(key);
  return typeof raw === "string" ? raw.trim() : "";
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitContactForm(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const submission = {
    firstName: valueOf(formData, "firstName"),
    lastName: valueOf(formData, "lastName"),
    email: valueOf(formData, "email"),
    phone: valueOf(formData, "phone"),
    service: valueOf(formData, "service"),
    message: valueOf(formData, "message"),
    submittedAt: new Date().toISOString(),
  };

  if (!submission.firstName || !submission.lastName || !submission.phone || !submission.email || !submission.message) {
    return {
      status: "error",
      message: "Please complete first name, last name, phone, email, and message.",
    };
  }

  if (!validateEmail(submission.email)) {
    return {
      status: "error",
      message: "Please enter a valid email address.",
    };
  }

  try {
    const dataDir = path.join(process.cwd(), "data");
    const outFile = path.join(dataDir, "contact-submissions.ndjson");
    await mkdir(dataDir, { recursive: true });
    await appendFile(outFile, `${JSON.stringify(submission)}\n`, "utf8");

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT ?? 587);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const toEmail = process.env.CONTACT_TO_EMAIL ?? "operations@prairierailsolutions.com";

    if (smtpHost && smtpUser && smtpPass) {
      const transporter = nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: { user: smtpUser, pass: smtpPass },
      });

      await transporter.sendMail({
        from: smtpUser,
        to: toEmail,
        replyTo: submission.email,
        subject: `New quote request from ${submission.firstName} ${submission.lastName}`,
        text: `Name: ${submission.firstName} ${submission.lastName}\nEmail: ${submission.email}\nPhone: ${submission.phone}\nService: ${submission.service}\n\nMessage:\n${submission.message}\n\nSubmitted: ${submission.submittedAt}`,
      });
    }

    return {
      status: "success",
      message: "Thank you. Your inquiry has been submitted.",
    };
  } catch {
    return {
      status: "error",
      message: "We could not submit your inquiry right now. Please try again.",
    };
  }
}