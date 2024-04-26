import { SendMailOptions, createTransport } from "nodemailer";
import { MAILER_EMAIL, MAILER_PASSWORD, MAILER_TRANSPORT_HOST, MAILER_TRANSPORT_PORT, MAILER_TRANSPORT_SECURE } from "../config";

export async function sendEmail({ to, subject, text, html }: { to: string; subject: string; text?: string; html?: string }): Promise<string> {
  const transporter = createTransport({
    host: MAILER_TRANSPORT_HOST,
    port: MAILER_TRANSPORT_PORT,
    secure: MAILER_TRANSPORT_SECURE,
    auth: {
      user: MAILER_EMAIL,
      pass: MAILER_PASSWORD,
    },
  });

  console.log(MAILER_EMAIL, MAILER_PASSWORD, MAILER_TRANSPORT_HOST, MAILER_TRANSPORT_PORT);

  const mailOptions: SendMailOptions = {
    from: `Seven 365 <${MAILER_EMAIL}>`,
    to,
    subject,
  };

  if (text) {
    mailOptions.text = text;
  }

  if (html) {
    mailOptions.html = html;
  }

  try {
    await transporter.sendMail(mailOptions);
    return Promise.resolve("Email sent successfully");
  } catch (error) {
    return Promise.reject(error);
  }
}
