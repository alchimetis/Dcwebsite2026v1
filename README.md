# Daily Compliance

A responsive compliance and sustainability website built with React, TypeScript, Vite, and Tailwind CSS.

## Features

- Responsive home, about, contact, and demo pages
- Light and dark theme support
- Animated sections powered by Framer Motion
- Contact form submission through the project service layer
- EmailJS integration for contact messages and PDF download requests
- React Router navigation
- Reusable layout and UI components

## Requirements

- Node.js 20.19 or newer (or Node.js 22.12 or newer)
- npm

## Getting Started

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Vite will print the local URL in the terminal, usually `http://localhost:5173`.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Start the Vite development server |
| `npm run build` | Run TypeScript checks and create a production build |
| `npm run lint` | Check the source code with Oxlint |
| `npm run preview` | Preview the production build locally |

## Environment Variables

Create a `.env` file in the project root when these values are needed:

```env
VITE_WHATSAPP_URL=https://wa.me/your-number?text=Hello%20Daily%20Compliance
VITE_CONTACT_EMAIL=info@thedailycompliance.com
VITE_CONTACT_PHONE=+1 000 000 0000
VITE_EMAILJS_PUBLIC_KEY=your_public_key
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_CONTACT_TEMPLATE_ID=your_contact_template_id
VITE_EMAILJS_PDF_TEMPLATE_ID=your_pdf_template_id
```

`VITE_EMAILJS_PUBLIC_KEY` is used for browser-side EmailJS initialization. The service ID and template IDs identify the EmailJS service and templates used for contact messages and PDF requests. Replace the placeholder values with your EmailJS project values before testing email features.

Variables prefixed with `VITE_` are exposed to the client. Do not place passwords, private keys, or other server-side secrets in them. Add `.env` to `.gitignore` before committing and use `.env.example` for shareable placeholders.

## Routes

| Path | Page |
| --- | --- |
| `/` | Home |
| `/about` | About |
| `/contact` | Contact |
| `/demo` | Demo |
| `/terms` | Terms of Service |
| `/privacy` | Privacy |

Unknown paths are handled by the not-found page.

## Project Structure

```text
src/
├── App.tsx                 # Application shell and global UI
├── main.tsx                # React entry point
├── assets/                 # Images and visual assets
├── components/             # Page sections, layout, and reusable UI
├── pages/                  # Route-level page components
├── router/                 # Route definitions and route constants
├── service/                # External service integrations
├── theme/                  # Theme provider and theme toggle
└── lib/                    # Shared utilities
```

## Building for Production

Create a production build with:

```bash
npm run build
```

The generated files are written to `dist/`. To serve that build locally:

```bash
npm run preview
```
