# LMNT Real-Time Conversational AI Demo

This is the source code for the [Big Tony's Auto Emporium](https://lmnt-car-dealer.vercel.app/) project with speech provided by [LMNT](https://lmnt.com/). It demonstrates how to build a conversational voice AI agent using LiveKit Agents, LMNT, and Vapi.

## Quick Start

### 1. Configure a LiveKit server

You need a LiveKit server instance to transport realtime media between user and agent. The easiest way to get started is with a free [LiveKit Cloud](https://cloud.livekit.io/) account. You may also [self-host LiveKit](https://docs.livekit.io/home/self-hosting/local/) if you prefer.

### 2. Create API keys for LMNT, OpenAI, and Deepgram

You will need to create API keys for LMNT, OpenAI, and Deepgram. See [agent/README.md](agent/README.md) for detailed setup instructions.

### 3. Set Up the Agent

```bash
cd agent
# See agent/README.md for detailed setup
uv sync
cp ENV_VARS.agent.sample .env
# Configure API keys in .env
uv run agent.py dev
```

### 4. Set Up the Frontend

```bash
cd frontend
npm install
cp ENV_VARS.frontend.sample .env
# Configure LiveKit server credentials in .env
npm run dev
```

### 5. Test the Integration

Visiting your dev server frontend will now allow you to test the integration. Click "Web call" to start a voice conversation (Livekit) or call the phone number (Vapi).

## Project Structure

```
big-tony/
├── agent/                 # LiveKit voice AI agent
│   ├── agent.py          # Main agent implementation
│   ├── pyproject.toml    # Python dependencies
│   ├── ENV_VARS.agent.sample
│   └── README.md         # Detailed agent setup
├── frontend/             # Next.js web application
│   ├── app/              # Next.js App Router pages
│   ├── components/       # React components
│   ├── package.json      # Node.js dependencies
│   └── README.md         # Detailed frontend setup
└── README.md            # This file
```

## Technology Stack

### Agent
- **LMNT** - High-quality text-to-speech
- **LiveKit Agents** - Real-time voice AI framework.
- **OpenAI** - Language model
- **Deepgram** - Speech-to-text
- **Python** with **uv** package manager

### Frontend
- **Next.js** - React framework with App Router
- **LiveKit Client SDK** - WebRTC voice communication
- **Tailwind CSS** - Styling

### LiveKit Cloud
- Hosted servers that manage connections between the agent and the frontend.

### Vapi Phone Calling
- **Vapi agent** - configured and hosted by Vapi

## Key Features

- **Real-time voice conversation** with sub-second latency
- **Natural-sounding speech** using LMNT's TTS
- **Web-based interface** with microphone integration
- **Configurable voice selection** via LMNT voice IDs
- **Production-ready deployment** patterns

## LMNT Integration Details

This project demonstrates LMNT integration patterns for voice AI applications:

- **Voice Configuration**: Set `LMNT_VOICE_ID` environment variable to use different voices
- **Real-time Streaming**: LMNT TTS integrates seamlessly with LiveKit's streaming architecture
- **Quality vs Latency**: LMNT provides studio-quality speech with low latency suitable for real-time conversation

## Vapi

To set up a Vapi agent (what talks when you call the phone number), you will need to create a Vapi account, create an assistant, and create a phone number.

See our [documentation](https://docs.lmnt.com/integrations/vapi/introduction#getting-started) for more details.


## Documentation

- [agent/README.md](agent/README.md) - Detailed agent setup and LiveKit configuration
- [frontend/README.md](frontend/README.md) - Frontend setup and deployment guide