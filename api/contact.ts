import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, company, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL || 'esla7.dev@gmail.com',
      subject: `رسالة جديدة من ${name} - موقع إصلاح`,
      html: `
        <div dir="rtl" style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1a1a1a; border-bottom: 3px solid #C5A572; padding-bottom: 10px;">
            رسالة جديدة من موقع إصلاح
          </h2>
          
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>الاسم:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>البريد الإلكتروني:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>الشركة/المؤسسة:</strong> ${company || 'غير محدد'}</p>
          </div>
          
          <div style="background: #ffffff; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
            <h3 style="color: #C5A572; margin-top: 0;">الرسالة:</h3>
            <p style="line-height: 1.6; color: #333;">${message}</p>
          </div>
          
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #666;">
            <p>هذه الرسالة مُرسلة من نموذج الاتصال في موقع ESLAH</p>
          </div>
        </div>
      `,
      replyTo: email,
    });

    return res.status(200).json({ success: true, data });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return res.status(500).json({ 
      error: 'Failed to send email', 
      details: error.message 
    });
  }
}
