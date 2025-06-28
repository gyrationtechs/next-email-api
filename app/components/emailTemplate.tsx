import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  content?: string;
}

export function EmailTemplate({ firstName, content }: EmailTemplateProps) {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '600px' }}>
      <h1 style={{ color: '#333', marginBottom: '20px' }}>Welcome, {firstName}!</h1>
      <p style={{ color: '#666', lineHeight: '1.6' }}>
        Thank you for signing up with our service. We're excited to have you on board!
      </p>
      {content && (
        <div style={{ 
          backgroundColor: '#f8f9fa', 
          padding: '15px', 
          borderRadius: '5px', 
          margin: '20px 0',
          borderLeft: '4px solid #007bff'
        }}>
          <p style={{ color: '#333', lineHeight: '1.6', margin: 0 }}>
            {content}
          </p>
        </div>
      )}
      <p style={{ color: '#666', lineHeight: '1.6' }}>
        If you have any questions, feel free to reach out to our support team.
      </p>
    </div>
  );
}