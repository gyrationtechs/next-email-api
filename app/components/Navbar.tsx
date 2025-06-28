import React from 'react';
import Link from 'next/link';

function Navbar() {
  return (
    <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center',
        marginBottom: '30px',
        padding: '15px 30px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <h1 style={{ color: '#333', margin: 0 }}>
          <Link href='/'>
          Email API Dashboard
          </Link>

        </h1>
        <div style={{ display: 'flex', gap: '10px' }}>
          <Link 
            href="/dashboard" 
            style={{
              padding: '8px 16px',
              backgroundColor: '#6c757d',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              fontSize: '14px'
            }}
          >
            Dashboard
          </Link>
          <Link 
            href="/settings" 
            style={{
              padding: '8px 16px',
              backgroundColor: '#6c757d',
              color: 'white',
              textDecoration: 'none',
              borderRadius: '4px',
              fontSize: '14px'
            }}
          >
            Settings
          </Link>
        </div>
      </div>
  )
}

export default Navbar;