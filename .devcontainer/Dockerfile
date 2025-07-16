FROM mcr.microsoft.com/devcontainers/dotnet:8.0

# Verify dotnet installation
RUN dotnet --info

# Install additional dependencies
RUN apt-get update \
    && apt-get install -y libicu-dev \
    && apt-get clean

# Optional: Install Node.js and Gulp
ARG NODE_VERSION="16"
RUN if [ "${NODE_VERSION}" != "none" ]; then \
    su vscode -c "umask 0002 && . /usr/local/share/nvm/nvm.sh && nvm install ${NODE_VERSION}"; \
    fi

RUN npm install --global gulp-cli

# Optional: Install Azure CLI
RUN curl -sL https://aka.ms/InstallAzureCLIDeb | bash

# Set environment variable to enable globalization
ENV DOTNET_SYSTEM_GLOBALIZATION_INVARIANT=false
