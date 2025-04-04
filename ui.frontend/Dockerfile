# Use a Node.js base image with Playwright
FROM mcr.microsoft.com/playwright:v1.49.0-jammy
# Set working directory inside the container
WORKDIR /app


# Copy package.json and package-lock.json for dependency installation

COPY . ./

# Install the project dependencies
RUN npm ci
# Copy the entire project

# Install Playwright browsers (chromium, firefox, webkit)
RUN npx playwright install --with-deps

# Set environment variable with default value
ENV UPDATE_SNAPSHOTS=""

# Default command to run Playwright tests
CMD if [ "$UPDATE_SNAPSHOTS" = "true" ]; then \
        npx playwright test --update-snapshots; \
    else \
        npx playwright test; \
    fi