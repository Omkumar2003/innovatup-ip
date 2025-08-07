import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

// Initialize Resend with your API key from environment variables
const resend = new Resend(process.env.RESEND_API_KEY)
const TO_EMAIL = 'omkumar7420031@gmail.com';
const FROM_EMAIL = 'InnovatUp <onboarding@resend.dev>'; // This domain MUST be verified in Resend

/**
 * Main handler for all POST requests to /api/contact
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("API Endpoint received body:", body); 

    // Generate the appropriate email payload
    const { subject, htmlContent } = generateEmailPayload(body);

    // Send the email using Resend
    const { data, error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: [TO_EMAIL],
      subject: subject,
      html: htmlContent,
      // This is key: it lets you reply directly to the user
      reply_to: body.email,
    });

    if (error) {
      console.error('Resend API Error:', error);
      return NextResponse.json({ success: false, message: 'Failed to send email' }, { status: 500 });
    }

    console.log('Email sent successfully:', data);
    return NextResponse.json({ success: true, message: 'Message sent successfully' });

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    console.error('Error in API route:', errorMessage);
    return NextResponse.json({ success: false, message: 'Failed to process request', details: errorMessage }, { status: 400 });
  }
}

/**
 * Generates the email subject and HTML content based on the form type.
 * This function also validates the incoming data.
 */
function generateEmailPayload(body: any): { subject: string; htmlContent: string } {
  const { type } = body;

  switch (type) {
    case 'contact': {
      const { name, email, message } = body;
      if (!name || !email || !message) {
        throw new Error('Validation failed for contact form: Missing name, email, or message.');
      }
      return {
        subject: `📧 Contact Form Message from: ${name}`,
        htmlContent: `
          <div style="font-family: Arial, sans-serif; max-width: 600px;">
            <h2 style="color: #059669;">New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="padding: 15px; border-left: 4px solid #059669; background-color: #f0fdf4;">${message.replace(/\n/g, '<br>')}</p>
          </div>
        `,
      };
    }
    
    case 'startup_idea': {
      const { name, email, title, description, techStack } = body;
      if (!name || !email || !title || !description || !techStack) {
        throw new Error('Validation failed for startup idea: Missing required fields.');
      }
      return {
        subject: `🚀 New Startup Idea: "${title}"`,
        htmlContent: `
          <div style="font-family: Arial, sans-serif; max-width: 600px;">
            <h2 style="color: #2563eb;">New Startup Idea Submitted</h2>
            <p><strong>Submitted by:</strong> ${name}</p>
            <p><strong>Contact Email:</strong> ${email}</p>
            <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;" />
            <p><strong>Idea Title:</strong> ${title}</p>
            <p><strong>Description:</strong></p>
            <p style="padding: 15px; border-left: 4px solid #2563eb; background-color: #eff6ff;">${description.replace(/\n/g, '<br>')}</p>
            <p><strong>Proposed Tech Stack:</strong> ${techStack}</p>
          </div>
        `,
      };
    }

    default:
      throw new Error(`Invalid form type specified: "${type}"`);
  }
}
