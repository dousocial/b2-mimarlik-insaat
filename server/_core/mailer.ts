import nodemailer from "nodemailer";

type MailPayload = {
  name: string;
  email: string;
  phone?: string;
  projectType?: string;
  message: string;
};

const smtpHost = process.env.SMTP_HOST;
const smtpPort = parseInt(process.env.SMTP_PORT || "587", 10);
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;

const mailFrom = process.env.MAIL_FROM || smtpUser;
const mailTo = process.env.MAIL_TO || smtpUser;

const transporter =
  smtpHost && smtpUser && smtpPass
    ? nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      })
    : null;

export function isMailerConfigured() {
  return Boolean(transporter && mailFrom && mailTo);
}

export async function sendProposalEmail(payload: MailPayload) {
  if (!transporter || !mailFrom || !mailTo) {
    throw new Error("Email service is not configured.");
  }

  const subject = `New proposal request — ${payload.name}`;

  const lines = [
    "New proposal request received.",
    "",
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone: ${payload.phone || "-"}`,
    `Project Type: ${payload.projectType || "-"}`,
    "",
    "Message:",
    payload.message,
  ];

  await transporter.sendMail({
    from: mailFrom,
    to: mailTo,
    replyTo: payload.email,
    subject,
    text: lines.join("\n"),
  });
}
