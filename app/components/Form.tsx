'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'

interface EmailData {
  to: string;
  subject: string;
  html: string;
}

interface Settings {
  apiKey: string;
  fromEmail: string;
}

function Form() {
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [settings, setSettings] = useState<Settings | null>(null);
    const [emailData, setEmailData] = useState<EmailData>({
        to: '',
        subject: '',
        html: ''
    });

    // Load settings from localStorage on component mount
    useEffect(() => {
        const savedSettings = localStorage.getItem('emailSettings');
        if (savedSettings) {
            try {
                const parsedSettings = JSON.parse(savedSettings);
                setSettings(parsedSettings);
            } catch (error) {
                console.error('Error parsing saved settings:', error);
            }
        }
    }, []);

    const updateField = (field: keyof EmailData, value: string) => {
        setEmailData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const parseEmails = (emailString: string): string[] => {
        return emailString
            .split(',')
            .map(email => email.trim())
            .filter(email => email !== '');
    };

    const validateEmails = (emails: string[]): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emails.every(email => emailRegex.test(email));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

        // Check if settings are configured
        if (!settings || !settings.apiKey || !settings.fromEmail) {
            setMessage('Error: Please configure your API settings first. Go to /settings to set up your API key and from email.');
            setIsLoading(false);
            return;
        }

        const emails = parseEmails(emailData.to);
        
        if (emails.length === 0) {
            setMessage('Error: At least one email address is required');
            setIsLoading(false);
            return;
        }

        if (!validateEmails(emails)) {
            setMessage('Error: Please enter valid email addresses');
            setIsLoading(false);
            return;
        }

        if (!emailData.subject.trim()) {
            setMessage('Error: Subject is required');
            setIsLoading(false);
            return;
        }

        if (!emailData.html.trim()) {
            setMessage('Error: Email content is required');
            setIsLoading(false);
            return;
        }

        try {
            const res = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    to: emails,
                    subject: emailData.subject,
                    html: emailData.html,
                    apiKey: settings.apiKey,
                    fromEmail: settings.fromEmail
                })
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.error || 'Failed to send message');
            }

            const data = await res.json();
            setMessage('Email sent successfully!');
            console.log('Email sent successfully', data);
            
            // Reset form
            setEmailData({
                to: '',
                subject: '',
                html: ''
            });
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
            setMessage(`Error: ${errorMessage}`);
            console.error('Error sending email:', error);
        } finally {
            setIsLoading(false);
        }
    }

    const insertTemplate = (template: string) => {
        setEmailData(prev => ({
            ...prev,
            html: prev.html + template
        }));
    };

    // Show settings warning if not configured
    if (!settings || !settings.apiKey || !settings.fromEmail) {
        return (
            <div style={{ 
                padding: '20px', 
                backgroundColor: '#fff3cd', 
                border: '1px solid #ffeaa7', 
                borderRadius: '6px',
                textAlign: 'center'
            }}>
                <h3 style={{ color: '#856404', marginBottom: '10px' }}>Settings Not Configured</h3>
                <p style={{ color: '#856404', marginBottom: '15px' }}>
                    Please configure your API settings before sending emails.
                </p>
                <Link 
                    href="/settings" 
                    style={{
                        padding: '10px 20px',
                        backgroundColor: '#007bff',
                        color: 'white',
                        textDecoration: 'none',
                        borderRadius: '4px',
                        display: 'inline-block'
                    }}
                >
                    Go to Settings
                </Link>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '800px', margin: '0 auto' }}>
            {/* Settings Status */}
            <div style={{ 
                padding: '10px', 
                backgroundColor: '#d4edda', 
                border: '1px solid #c3e6cb', 
                borderRadius: '4px',
                marginBottom: '20px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <span style={{ color: '#155724' }}>
                    ✅ Using settings: {settings.fromEmail}
                </span>
                <Link 
                    href="/settings" 
                    style={{ 
                        color: '#007bff', 
                        textDecoration: 'none',
                        fontSize: '14px'
                    }}
                >
                    Change Settings
                </Link>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                    Email Addresses:
                </label>
                <textarea
                    value={emailData.to}
                    onChange={(e) => updateField('to', e.target.value)}
                    placeholder="Enter email addresses separated by commas (e.g., john@example.com, jane@example.com)"
                    rows={3}
                    style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '14px',
                        resize: 'vertical'
                    }}
                />
                <small style={{ color: '#666', fontSize: '12px' }}>
                    Separate multiple email addresses with commas
                </small>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                    Subject:
                </label>
                <input
                    type="text"
                    value={emailData.subject}
                    onChange={(e) => updateField('subject', e.target.value)}
                    placeholder="Enter email subject"
                    required
                    style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '14px'
                    }}
                />
            </div>

            <div style={{ marginBottom: '20px' }}>
                <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                    Email Content (HTML):
                </label>
                
                {/* HTML Template Buttons */}
                <div style={{ marginBottom: '10px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                    <button
                        type="button"
                        onClick={() => insertTemplate('<h1>Hello!</h1>')}
                        style={{
                            padding: '5px 10px',
                            backgroundColor: '#6c757d',
                            color: 'white',
                            border: 'none',
                            borderRadius: '3px',
                            cursor: 'pointer',
                            fontSize: '12px'
                        }}
                    >
                        H1
                    </button>
                    <button
                        type="button"
                        onClick={() => insertTemplate('<h2>Subtitle</h2>')}
                        style={{
                            padding: '5px 10px',
                            backgroundColor: '#6c757d',
                            color: 'white',
                            border: 'none',
                            borderRadius: '3px',
                            cursor: 'pointer',
                            fontSize: '12px'
                        }}
                    >
                        H2
                    </button>
                    <button
                        type="button"
                        onClick={() => insertTemplate('<p>Paragraph text</p>')}
                        style={{
                            padding: '5px 10px',
                            backgroundColor: '#6c757d',
                            color: 'white',
                            border: 'none',
                            borderRadius: '3px',
                            cursor: 'pointer',
                            fontSize: '12px'
                        }}
                    >
                        Paragraph
                    </button>
                    <button
                        type="button"
                        onClick={() => insertTemplate('<strong>Bold text</strong>')}
                        style={{
                            padding: '5px 10px',
                            backgroundColor: '#6c757d',
                            color: 'white',
                            border: 'none',
                            borderRadius: '3px',
                            cursor: 'pointer',
                            fontSize: '12px'
                        }}
                    >
                        Bold
                    </button>
                    <button
                        type="button"
                        onClick={() => insertTemplate('<em>Italic text</em>')}
                        style={{
                            padding: '5px 10px',
                            backgroundColor: '#6c757d',
                            color: 'white',
                            border: 'none',
                            borderRadius: '3px',
                            cursor: 'pointer',
                            fontSize: '12px'
                        }}
                    >
                        Italic
                    </button>
                    <button
                        type="button"
                        onClick={() => insertTemplate('<a href="https://example.com">Link</a>')}
                        style={{
                            padding: '5px 10px',
                            backgroundColor: '#6c757d',
                            color: 'white',
                            border: 'none',
                            borderRadius: '3px',
                            cursor: 'pointer',
                            fontSize: '12px'
                        }}
                    >
                        Link
                    </button>
                    <button
                        type="button"
                        onClick={() => insertTemplate('<br>')}
                        style={{
                            padding: '5px 10px',
                            backgroundColor: '#6c757d',
                            color: 'white',
                            border: 'none',
                            borderRadius: '3px',
                            cursor: 'pointer',
                            fontSize: '12px'
                        }}
                    >
                        Line Break
                    </button>
                </div>

                <textarea
                    value={emailData.html}
                    onChange={(e) => updateField('html', e.target.value)}
                    placeholder="Enter your email content in HTML format..."
                    rows={12}
                    required
                    style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #ddd',
                        borderRadius: '4px',
                        fontSize: '14px',
                        resize: 'vertical',
                        fontFamily: 'monospace'
                    }}
                />
                <small style={{ color: '#666', fontSize: '12px' }}>
                    Use HTML tags to format your email. Click the buttons above to insert common HTML elements.
                </small>
            </div>

            <button 
                type="submit"
                disabled={isLoading}
                style={{
                    width: '100%',
                    padding: '12px 24px',
                    fontSize: '16px',
                    backgroundColor: isLoading ? '#ccc' : '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '6px',
                    cursor: isLoading ? 'not-allowed' : 'pointer'
                }}
            >
                {isLoading ? 'Sending...' : 'Send Email'}
            </button>

            {message && (
                <div style={{
                    padding: '10px',
                    marginTop: '10px',
                    borderRadius: '4px',
                    backgroundColor: message.includes('Error') ? '#f8d7da' : '#d4edda',
                    color: message.includes('Error') ? '#721c24' : '#155724',
                    border: `1px solid ${message.includes('Error') ? '#f5c6cb' : '#c3e6cb'}`
                }}>
                    {message}
                </div>
            )}
        </form>
    )
}

export default Form