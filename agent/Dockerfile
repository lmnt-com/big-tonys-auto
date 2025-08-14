# This is an example Dockerfile that builds a minimal container for running LK Agents
# syntax=docker/dockerfile:1
ARG PYTHON_VERSION=3.11.6
FROM python:${PYTHON_VERSION}-slim

# Keeps Python from buffering stdout and stderr to avoid situations where
# the application crashes without emitting any logs due to buffering.
ENV PYTHONUNBUFFERED=1

# Create a non-privileged user that the app will run under.
# See https://docs.docker.com/develop/develop-images/dockerfile_best-practices/#user
ARG UID=10001
RUN adduser \
    --disabled-password \
    --gecos "" \
    --home "/home/appuser" \
    --shell "/sbin/nologin" \
    --uid "${UID}" \
    appuser


# Install gcc and other build dependencies.
RUN apt-get update && \
    apt-get install -y \
    gcc \
    python3-dev \
    curl \
    && rm -rf /var/lib/apt/lists/*

# Switch to appuser early to avoid permission issues
USER appuser

RUN mkdir -p /home/appuser/.cache
WORKDIR /home/appuser

# Copy dependency files and install dependencies as appuser
COPY --chown=appuser:appuser pyproject.toml uv.lock ./
COPY --from=ghcr.io/astral-sh/uv:latest /uv /usr/local/bin/uv

# Clean any existing .venv and install fresh
RUN rm -rf .venv && uv sync --frozen --no-cache

# Copy the rest of the application files
COPY --chown=appuser:appuser . ./

ENV PATH="/home/appuser/.venv/bin:$PATH"

# ensure that any dependent models are downloaded at build-time
RUN uv run agent.py download-files

# Run the application.
CMD ["uv", "run", "agent.py", "start"]
