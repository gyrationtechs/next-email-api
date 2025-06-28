'use client'
import React from 'react'
import Link from 'next/link'
import Navbar from './components/Navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: '100vh', backgroundColor: '#f8f9fa' }}>
        {/* Hero Section */}
        <section style={{
          padding: '80px 20px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <h1 style={{
              fontSize: '3.5rem',
              marginBottom: '20px',
              fontWeight: '700',
              textShadow: '0 2px 4px rgba(0,0,0,0.3)'
            }}>
              Email API Platform
            </h1>
            <p style={{
              fontSize: '1.3rem',
              marginBottom: '40px',
              opacity: '0.9',
              lineHeight: '1.6'
            }}>
              Send beautiful, personalized emails to multiple recipients with our powerful and easy-to-use email API platform.
            </p>
            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link
                href="/dashboard"
                style={{
                  padding: '15px 30px',
                  backgroundColor: '#28a745',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  transition: 'transform 0.2s',
                  display: 'inline-block'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-2px)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                Get Started
              </Link>
              <Link
                href="/settings"
                style={{
                  padding: '15px 30px',
                  backgroundColor: 'transparent',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  border: '2px solid white',
                  transition: 'all 0.2s',
                  display: 'inline-block'
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = 'white';
                  e.currentTarget.style.color = '#667eea';
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = 'white';
                }}
              >
                Configure Settings
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section style={{ padding: '80px 20px', backgroundColor: 'white' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h2 style={{
              textAlign: 'center',
              fontSize: '2.5rem',
              marginBottom: '60px',
              color: '#333',
              fontWeight: '600'
            }}>
              Powerful Features
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '40px'
            }}>
              {/* Feature 1 */}
              <div style={{
                padding: '30px',
                borderRadius: '12px',
                backgroundColor: '#f8f9fa',
                textAlign: 'center',
                transition: 'transform 0.3s ease',
                border: '1px solid #e9ecef'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#007bff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '24px',
                  color: 'white'
                }}>
                  📧
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>
                  Multiple Recipients
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  Send emails to multiple recipients simultaneously using comma-separated email addresses. Perfect for newsletters and announcements.
                </p>
              </div>

              {/* Feature 2 */}
              <div style={{
                padding: '30px',
                borderRadius: '12px',
                backgroundColor: '#f8f9fa',
                textAlign: 'center',
                transition: 'transform 0.3s ease',
                border: '1px solid #e9ecef'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#28a745',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '24px',
                  color: 'white'
                }}>
                  🎨
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>
                  HTML Email Builder
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  Create beautiful, formatted emails using HTML. Built-in template buttons make it easy to add headings, paragraphs, and links.
                </p>
              </div>

              {/* Feature 3 */}
              <div style={{
                padding: '30px',
                borderRadius: '12px',
                backgroundColor: '#f8f9fa',
                textAlign: 'center',
                transition: 'transform 0.3s ease',
                border: '1px solid #e9ecef'
              }}
              onMouseOver={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'translateY(0)'}
              >
                <div style={{
                  width: '60px',
                  height: '60px',
                  backgroundColor: '#ffc107',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  fontSize: '24px',
                  color: 'white'
                }}>
                  ⚙️
                </div>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>
                  Easy Configuration
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  Simple settings page to configure your Resend API key and sender email address. No server configuration required.
                </p>
              </div>

            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section style={{ padding: '80px 20px', backgroundColor: '#f8f9fa' }}>
          <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
            <h2 style={{
              textAlign: 'center',
              fontSize: '2.5rem',
              marginBottom: '60px',
              color: '#333',
              fontWeight: '600'
            }}>
              How It Works
            </h2>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '30px'
            }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#007bff',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}>
                  1
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#333' }}>
                  Configure Settings
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  Add your Resend API key and verified sender email address in the settings page.
                </p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#28a745',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}>
                  2
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#333' }}>
                  Compose Email
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  Enter recipient emails, subject, and create your HTML email content using the built-in editor.
                </p>
              </div>

              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '50px',
                  height: '50px',
                  backgroundColor: '#ffc107',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 20px',
                  color: 'white',
                  fontSize: '20px',
                  fontWeight: 'bold'
                }}>
                  3
                </div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#333' }}>
                  Send & Track
                </h3>
                <p style={{ color: '#666', lineHeight: '1.6' }}>
                  Click send and get instant feedback. Track delivery status and handle any errors gracefully.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{
          padding: '80px 20px',
          textAlign: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white'
        }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <h2 style={{
              fontSize: '2.5rem',
              marginBottom: '20px',
              fontWeight: '600'
            }}>
              Ready to Get Started?
            </h2>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '40px',
              opacity: '0.9',
              lineHeight: '1.6'
            }}>
              Start sending professional emails in minutes. No complex setup required.
            </p>
            <Link
              href="/dashboard"
              style={{
                padding: '18px 40px',
                backgroundColor: '#28a745',
                color: 'white',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: '1.2rem',
                fontWeight: '600',
                transition: 'all 0.3s ease',
                display: 'inline-block',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(0,0,0,0.3)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
              }}
            >
              Start Sending Emails
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer style={{
          padding: '40px 20px',
          backgroundColor: '#333',
          color: 'white',
          textAlign: 'center'
        }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ marginBottom: '20px', opacity: '0.8' }}>
              Copyright &copy; 2025. Email API
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <Link href="/dashboard" style={{ color: '#007bff', textDecoration: 'none' }}>Dashboard</Link>
              <Link href="/settings" style={{ color: '#007bff', textDecoration: 'none' }}>Settings</Link>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
