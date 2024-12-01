# OpenVPN Tutorial Website

A comprehensive web application built with React and TypeScript that provides detailed tutorials for OpenVPN setup and configuration.

## Prerequisites

- Node.js (v18 or later)
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd openvpn-tutorial
```

2. Install dependencies:
```bash
npm install
```

## Development

### Running the Development Server

There are two ways to run the development server:

#### 1. Standard Development Mode
```bash
npm run dev
```
This will start the development server in the foreground. You can stop it by pressing `Ctrl+C`.

#### 2. Background Mode
To run the server in the background:
```bash
npm run server:start
```

To stop the background server:
```bash
npm run server:stop
```

The development server will be available at:
- Local: `http://localhost:5173`
- Network: `http://<your-ip>:5173`

## Building for Production

1. Create a production build:
```bash
npm run build
```

2. Preview the production build:
```bash
npm run preview
```

## Project Structure

```
openvpn-tutorial/
├── src/
│   ├── components/     # React components
│   ├── utils/         # Utility functions
│   ├── App.tsx        # Main application component
│   └── main.tsx       # Application entry point
├── scripts/
│   └── server.js      # Background server management script
└── public/            # Static assets
```

## Features

- Interactive tutorial sections
- Embedded video content
- Responsive design
- Code snippets for installation steps
- Tab-based navigation
- Background server management

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React Icons