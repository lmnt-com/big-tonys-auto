# Big Tony's Auto Emporium Frontend

A Next.js frontend application that provides a web interface for customers to interact with Big Tony, the enthusiastic car dealer AI agent. Features both a marketing landing page and a LiveKit-powered voice call interface.

## Prerequisites

You will need to have a running LiveKit server and agent. See [../agent/README.md](../agent/README.md) for instructions.

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Environment Configuration

This frontend connects to your LiveKit server and agent.

Copy the sample environment file and fill in your LiveKit server credentials. These can be found in your LiveKit project dashboard. See [../agent/README.md](../agent/README.md) for more information.

```bash
cp .ENV_VARS.frontend.sample .env
```

Edit `.env` and add your LiveKit server credentials and, optionally, your Vapi phone number.

```bash
LIVEKIT_URL=
LIVEKIT_API_KEY=
LIVEKIT_API_SECRET=

VAPI_PHONE_NUMBER=
```

### 3. Start the Development Server

```bash
npm run dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

## Running the Application

### Development Mode
```bash
npm run dev
```

### Production Build
```bash
npm run build
npm run start
```

### Code Quality
```bash
# Format code
npm run format

# Check formatting
npm run format:check

# Lint and fix issues
npm run lint
```

## Usage

### Landing Page
- Navigate to `http://localhost:3000` to see Big Tony's Auto Emporium marketing page
- Features phone number for traditional calls and "Web call" button for browser-based calls

### Web Call Interface
- Click "Web call" or navigate to `/call` to start a browser-based conversation with Big Tony
- Requires microphone permissions
- Make sure the LiveKit agent is running (see [../agent/README.md](../agent/README.md))

## Deployment

For production deployment:

1. Build the application:
   ```bash
   npm run build
   ```

2. Deploy to your hosting platform (Vercel, Netlify, etc.)

3. Ensure your LiveKit server and agent are accessible from your production domain

## Troubleshooting

- **Microphone access denied**: Check browser permissions and ensure HTTPS in production
- **Connection issues**: Verify the LiveKit agent is running and accessible
- **Audio problems**: Check browser compatibility and audio device settings
- **Build errors**: Ensure all dependencies are installed with `npm install`
