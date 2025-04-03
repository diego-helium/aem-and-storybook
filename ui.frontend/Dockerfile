# Use a Node.js base image with Playwright
FROM mcr.microsoft.com/playwright:v1.37.0-focal
# Set working directory inside the container
WORKDIR /app
# Copy package.json and package-lock.json for dependency installation

COPY . ./

# Install the project dependencies
RUN npm ci
# Copy the entire project

# Install Playwright browsers (chromium, firefox, webkit)
RUN npx playwright install --with-deps


# Default command to run Storybook
CMD ["npx", "playwright", "test"]