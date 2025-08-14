# Big Tony's Auto Emporium Agent

A LiveKit voice AI agent that embodies Big Tony, an enthusiastic car dealer ready to make deals!

## Prerequisites

- Python 3.9 or later
- [uv](https://docs.astral.sh/uv/) package manager (recommended) or pip

## Setup Instructions

### 1. Create LiveKit Cloud Account

1. Go to [LiveKit Cloud](https://cloud.livekit.io/) and create a free account
2. Create a new project
3. In your project dashboard, note down:
   - **LiveKit URL** (e.g., `wss://your-project.livekit.cloud`)
   - **API Key** and **API Secret** (found in Settings > Keys)

### 2. Create Required Service Accounts

This agent requires the following AI services:

#### Deepgram (Speech-to-Text)
1. Sign up at [Deepgram](https://deepgram.com/)
2. Create an API key in your dashboard

#### OpenAI (Language Model)
1. Sign up at [OpenAI](https://platform.openai.com/)
2. Create an API key in your dashboard
3. Ensure you have credits/billing set up

#### LMNT (Text-to-Speech)
1. Sign up at [LMNT](https://app.lmnt.com/account)
2. Create an API key in your dashboard

### 3. Configure Environment Variables

Copy the sample environment file and fill in your credentials:

```bash
cp ENV_VARS.agent.sample .env
```

Edit `.env` and add your API keys:

```bash
# LiveKit
LIVEKIT_URL=wss://your-project.livekit.cloud
LIVEKIT_API_KEY=your_api_key
LIVEKIT_API_SECRET=your_api_secret

# AI Services
DEEPGRAM_API_KEY=your_deepgram_key
OPENAI_API_KEY=your_openai_key
LMNT_API_KEY=your_lmnt_key

# Optional: Custom LMNT voice ID (defaults to Big Tony's voice)
LMNT_VOICE_ID=214a75ae-8548-4795-83c3-967f2bcad24d
```

### 4. Install Dependencies

Using uv (recommended):
```bash
uv sync
```

Using pip:
```bash
pip install -e .
```

### 5. Download Model Files

```bash
uv run agent.py download-files
```

## Running the Agent

### Development Mode

Run the agent in development mode (connects to LiveKit Cloud):

```bash
uv run agent.py dev
```

This will:
- Connect to your LiveKit server
- Make the agent available for voice calls through LiveKit's web interface
- Display connection details and logs

### Production Mode

For production deployment:

```bash
uv run agent.py start
```

## Usage

1. Once running in dev mode, run the frontend app in a separate terminal
2. Open the frontend app in your browser, and click 'Web call'
3. The agent will enthusiastically try to sell you cars with his signature high-energy style


## Project Structure

- `agent.py` - Main agent implementation with Big Tony's personality
- `pyproject.toml` - Python dependencies and project configuration
- `ENV_VARS.agent.sample` - Template for environment variables
- `.env` - Your actual environment variables (not committed to git)
