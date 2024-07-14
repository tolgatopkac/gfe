# First stage: build the application
FROM node:20 AS build-env

WORKDIR /app
COPY . .

RUN ls
RUN ls -la /app
RUN npm install
RUN npm run build
RUN npm install --omit=dev

# Second stage: create the runtime image
FROM gcr.io/distroless/nodejs20-debian11

# Copy built files and necessary dependencies from the build stage
COPY --from=build-env /app/build /app/build
COPY --from=build-env /app/node_modules /app/node_modules
COPY --from=build-env /app/package.json /app/package.json

# Expose the port that the application will run on
EXPOSE 3000


# Set the PORT environment variable

WORKDIR /app
CMD ["build"]