# 📧 Email API Platform

A modern, user-friendly email API platform built with Next.js and Resend API. Send beautiful, personalized emails to multiple recipients with an intuitive web interface.

![Email API Platform](https://img.shields.io/badge/Next.js-15.3.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Resend](https://img.shields.io/badge/Resend-4.6.0-purple?style=for-the-badge)

## ✨ Features

- **📧 Multiple Recipients**: Send emails to multiple recipients simultaneously using comma-separated email addresses
- **🎨 HTML Email Builder**: Create beautiful, formatted emails using HTML with built-in template buttons
- **⚙️ Easy Configuration**: Simple settings page to configure your Resend API key and sender email address
- **🚀 Fast & Reliable**: Built on Next.js and Resend API for fast, reliable email delivery
- **📱 Responsive Design**: Modern, mobile-friendly interface that works on all devices
- **🔒 Secure**: Client-side settings management with no server-side storage of sensitive data
- **📊 Real-time Feedback**: Instant success/error messages and loading states

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm
- Resend API key ([Get one here](https://resend.com/api-keys))

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd email-api
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage

### 1. Configure Settings

1. Navigate to `/settings` in your application
2. Enter your Resend API key
3. Add your verified sender email address
4. Click "Save Settings" to test and save your configuration

### 2. Send Emails

1. Go to `/dashboard` to access the email form
2. Enter recipient email addresses (comma-separated)
3. Add a subject line
4. Create your HTML email content using the built-in editor
5. Click "Send Email" to send to all recipients

### 3. HTML Email Templates

Use the built-in template buttons to quickly add common HTML elements:
- **H1**: `<h1>Hello!</h1>`
- **H2**: `<h2>Subtitle</h2>`
- **Paragraph**: `<p>Paragraph text</p>`
- **Bold**: `<strong>Bold text</strong>`
- **Italic**: `<em>Italic text</em>`
- **Link**: `<a href="https://example.com">Link</a>`
- **Line Break**: `<br>`

## 🏗️ Project Structure

```
email-api/
├── app/
│   ├── api/
│   │   ├── send-email/
│   │   │   └── route.ts          # Email sending API endpoint
│   │   └── test-settings/
│   │       └── route.ts          # Settings validation endpoint
│   ├── components/
│   │   ├── Form.tsx              # Main email form component
│   │   ├── Navbar.tsx            # Navigation component
│   │   └── emailTemplate.tsx     # Email template component
│   ├── dashboard/
│   │   └── page.tsx              # Dashboard page
│   ├── settings/
│   │   └── page.tsx              # Settings configuration page
│   ├── globals.css               # Global styles
│   ├── layout.tsx                # Root layout
│   └── page.tsx                  # Home page
├── public/                       # Static assets
├── package.json                  # Dependencies and scripts
├── tsconfig.json                 # TypeScript configuration
└── README.md                     # This file
```

## 🔧 Configuration

### Environment Variables

The application uses client-side settings management, but you can optionally set server-side environment variables:

```bash
# .env.local
RESEND_API_KEY=your_resend_api_key_here
```

### Resend API Setup

1. **Create a Resend account** at [resend.com](https://resend.com)
2. **Get your API key** from the [API Keys section](https://resend.com/api-keys)
3. **Verify your domain** or email address in Resend
4. **Configure the app** using the settings page

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push your code to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy via Vercel Dashboard**
   - Go to [vercel.com](https://vercel.com)
   - Sign up/Login with GitHub
   - Click "New Project"
   - Import your repository
   - Click "Deploy"

3. **Add Environment Variables** (Optional)
   - Go to your Vercel project dashboard
   - Navigate to Settings → Environment Variables
   - Add `RESEND_API_KEY` with your API key

For detailed deployment instructions, see [DEPLOYMENT.md](./DEPLOYMENT.md).

## 🛠️ Development

### Available Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint
```

### Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: Inline styles with CSS-in-JS approach
- **Email Service**: [Resend API](https://resend.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## 🔒 Security

- **API Keys**: Stored securely in browser localStorage (client-side only)
- **No Server Storage**: Sensitive data is not stored on the server
- **User Management**: Each user manages their own API credentials
- **HTTPS**: Automatic HTTPS when deployed to Vercel

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
