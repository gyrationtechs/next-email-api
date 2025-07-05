import { Resend } from 'resend';

interface EmailRequest {
  to: string[];
  subject: string;
  html: string;
  apiKey: string;
  fromEmail: string;
}

export async function POST(request: Request) {
  try {
    const body: EmailRequest = await request.json();
    
    // Validate required fields
    if (!body.to || !Array.isArray(body.to) || body.to.length === 0) {
      return Response.json({ error: 'At least one email address is required' }, { status: 400 });
    }
    
    if (!body.subject) {
      return Response.json({ error: 'Subject is required' }, { status: 400 });
    }
    
    if (!body.html) {
      return Response.json({ error: 'Email content is required' }, { status: 400 });
    }

    if (!body.apiKey) {
      return Response.json({ error: 'API Key is required' }, { status: 400 });
    }

    if (!body.fromEmail) {
      return Response.json({ error: 'From Email is required' }, { status: 400 });
    }

    // Create Resend instance with the provided API key
    const resend = new Resend(body.apiKey);

    const { data, error } = await resend.emails.send({
      from: body.fromEmail,
      to: body.to,
      subject: body.subject,
      html: body.html,
      replyTo: 'davexrplion@qfsnewsletter.com',
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : 'Unknown error occurred' }, { status: 500 });
  }
}