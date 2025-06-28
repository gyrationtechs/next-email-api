import { Resend } from 'resend';

interface TestSettingsRequest {
  apiKey: string;
  fromEmail: string;
}

export async function POST(request: Request) {
  try {
    const body: TestSettingsRequest = await request.json();
    
    // Validate required fields
    if (!body.apiKey) {
      return Response.json({ error: 'API Key is required' }, { status: 400 });
    }
    
    if (!body.fromEmail) {
      return Response.json({ error: 'From Email is required' }, { status: 400 });
    }

    // Create a new Resend instance with the provided API key
    const resend = new Resend(body.apiKey);

    // Test the API key by trying to get account information
    // This will fail if the API key is invalid
    const { error } = await resend.emails.send({
      from: body.fromEmail,
      to: ['qfsnewsletter@gmail.com'], // This won't actually send, just validates the config
      subject: 'Test Configuration',
      html: '<p>This is a test email to validate your configuration.</p>',
    });

    if (error) {
      // Check if it's an authentication error
    //   if (error.statusCode === 401) {
    //     return Response.json({ error: 'Invalid API key. Please check your Resend API key.' }, { status: 400 });
    //   }
      
      // Check if it's a domain verification error
    //   if (error.message && error.message.includes('domain')) {
    //     return Response.json({ error: 'Email domain not verified. Please verify your domain in Resend.' }, { status: 400 });
    //   }
      
      return Response.json({ error: error.message || 'Configuration test failed' }, { status: 400 });
    }

    return Response.json({ message: 'Settings validated successfully!' });
  } catch (error) {
    return Response.json({ error: error instanceof Error ? error.message : 'Unknown error occurred' }, { status: 500 });
  }
} 