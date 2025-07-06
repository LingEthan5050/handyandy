import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, phone, message, inquiryType } = await req.json();

    const emojiMap: { [key: string]: string } = {
      'Getting an Estimate': '📐',
      'Update on Current Renovation': '🚧',
      'General Question': '💬',
      'Contractor Inquiry': '🧰',
      'Emergency Repair': '🚨',
    };

    const emoji = emojiMap[inquiryType] || '📩';

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"HandyAndy Website Contact" <${process.env.EMAIL_USERNAME}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: `${emoji} New Inquiry: ${inquiryType} | From: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 8px;">
          <h2 style="color: #c65b37; border-bottom: 1px solid #ccc; padding-bottom: 10px;">New Website Inquiry</h2>
          
          <table style="width: 100%; margin-top: 20px;">
            <tr>
              <td style="font-weight: bold; padding: 8px;">Inquiry Type:</td>
              <td style="padding: 8px;">${inquiryType}</td>
            </tr>
            <tr>
              <td style="font-weight: bold; padding: 8px;">Name:</td>
              <td style="padding: 8px;">${name}</td>
            </tr>
            <tr>
              <td style="font-weight: bold; padding: 8px;">Email:</td>
              <td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
            <tr>
              <td style="font-weight: bold; padding: 8px;">Phone:</td>
              <td style="padding: 8px;">${phone || 'N/A'}</td>
            </tr>
          </table>

          <div style="margin-top: 20px;">
            <p style="font-weight: bold; margin-bottom: 5px;">Message:</p>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 6px; border: 1px solid #ddd;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>

          <p style="margin-top: 30px; font-size: 12px; color: #777;">This email was sent from the HandyAndy contact form.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Email send error:', error);
    return NextResponse.json({ success: false, error }, { status: 500 });
  }
}
