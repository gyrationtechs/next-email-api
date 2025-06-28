'use client'
import React, { useState, useEffect } from 'react'
import Navbar from '../components/Navbar';

interface Settings {
  apiKey: string;
  fromEmail: string;
}

function SettingsPage() {
    const [settings, setSettings] = useState<Settings>({
        apiKey: '',
        fromEmail: ''
    });
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');

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

    const updateField = (field: keyof Settings, value: string) => {
        setSettings(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const handleSave = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setMessage('');

        // Validate required fields
        if (!settings.apiKey.trim()) {
            setMessage('Error: API Key is required');
            setIsLoading(false);
            return;
        }

        if (!settings.fromEmail.trim()) {
            setMessage('Error: From Email is required');
            setIsLoading(false);
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(settings.fromEmail)) {
            setMessage('Error: Please enter a valid email address');
            setIsLoading(false);
            return;
        }

        try {
            // Save to localStorage
            localStorage.setItem('emailSettings', JSON.stringify(settings));
            
            // Test the API key by making a test request
            const testRes = await fetch('/api/test-settings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(settings)
            });

            if (!testRes.ok) {
                const errorData = await testRes.json();
                throw new Error(errorData.error || 'Failed to test settings');
            }

            setMessage('Settings saved successfully!');
        } catch (error) {
            const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
            setMessage(`Error: ${errorMessage}`);
            console.error('Error saving settings:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleClear = () => {
        localStorage.removeItem('emailSettings');
        setSettings({
            apiKey: '',
            fromEmail: ''
        });
        setMessage('Settings cleared successfully!');
    };

    return (
        <>
        <Navbar />
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{ color: '#333', marginBottom: '30px', textAlign: 'center' }}>
                Email API Settings
            </h1>
            
            <div style={{ 
                border: '1px solid #e0e0e0', 
                borderRadius: '8px', 
                padding: '20px',
                backgroundColor: '#f9f9f9'
            }}>
                <form onSubmit={handleSave}>
                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                            Resend API Key:
                        </label>
                        <input
                            type="password"
                            value={settings.apiKey}
                            onChange={(e) => updateField('apiKey', e.target.value)}
                            placeholder="Enter your Resend API key"
                            required
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #ddd',
                                borderRadius: '4px',
                                fontSize: '14px'
                            }}
                        />
                        <small style={{ color: '#666', fontSize: '12px' }}>
                            Get your API key from <a href="https://resend.com/api-keys" target="_blank" rel="noopener noreferrer" style={{ color: '#007bff' }}>Resend Dashboard</a>
                        </small>
                    </div>

                    <div style={{ marginBottom: '20px' }}>
                        <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
                            From Email Address:
                        </label>
                        <input
                            type="email"
                            value={settings.fromEmail}
                            onChange={(e) => updateField('fromEmail', e.target.value)}
                            placeholder="Enter the email address to send from"
                            required
                            style={{
                                width: '100%',
                                padding: '10px',
                                border: '1px solid #ddd',
                                borderRadius: '4px',
                                fontSize: '14px'
                            }}
                        />
                        <small style={{ color: '#666', fontSize: '12px' }}>
                            This email must be verified in your Resend account
                        </small>
                    </div>

                    <div style={{ display: 'flex', gap: '10px', marginTop: '30px' }}>
                        <button 
                            type="submit"
                            disabled={isLoading}
                            style={{
                                flex: 1,
                                padding: '12px 24px',
                                fontSize: '16px',
                                backgroundColor: isLoading ? '#ccc' : '#007bff',
                                color: 'white',
                                border: 'none',
                                borderRadius: '6px',
                                cursor: isLoading ? 'not-allowed' : 'pointer'
                            }}
                        >
                            {isLoading ? 'Saving...' : 'Save Settings'}
                        </button>
                        
                        <button 
                            type="button"
                            onClick={handleClear}
                            style={{
                                padding: '12px 24px',
                                fontSize: '16px',
                                backgroundColor: '#dc3545',
                                color: 'white',
                                border: 'none',
                                borderRadius: '6px',
                                cursor: 'pointer'
                            }}
                        >
                            Clear Settings
                        </button>
                    </div>
                </form>

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
            </div>

            <div style={{ marginTop: '20px', padding: '15px', backgroundColor: '#e7f3ff', borderRadius: '6px' }}>
                <h3 style={{ margin: '0 0 10px 0', color: '#0056b3' }}>Instructions:</h3>
                <ol style={{ margin: 0, paddingLeft: '20px', color: '#0056b3' }}>
                    <li>Get your API key from the <a href="https://resend.com/api-keys" target="_blank" rel="noopener noreferrer" style={{ color: '#0056b3' }}>Resend Dashboard</a></li>
                    <li>Verify your domain or email address in Resend</li>
                    <li>Enter your API key and verified email address above</li>
                    <li>Click &ldquo;Save Settings&rdquo; to test and save your configuration</li>
                </ol>
            </div>
        </div>
        </>
    )
}

export default SettingsPage 