import React from 'react'
import Form from '@/app/components/Form'
import Navbar from '../components/Navbar';

function Dashboard() {
  return (
    <>
        <Navbar />
        <div style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      {/* Navigation */}

      <div style={{ 
        border: '1px solid #e0e0e0', 
        borderRadius: '8px', 
        padding: '20px',
        backgroundColor: '#f9f9f9'
      }}>
        <h2 style={{ color: '#555', marginBottom: '20px' }}>Send Email</h2>
        <Form />
      </div>
    </div>
    </>
  )
}

export default Dashboard;