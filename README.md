# code-pulse

> A GitHub App built with [Probot](https://github.com/probot/probot) that Code Pulse, a Probot app, transforms GitHub pull requests. Fetching and explaining code snippets, it enhances code review clarity. Additionally, contributors can specify expected code outputs, streamlining collaboration. Experience an elevated GitHub workflow with Code Pulse&#x27;s intuitive features

## Example Video

[![Watch the Video](/resources/code-pulse-thumbnail.png)](https://www.dropbox.com/scl/fi/emgzgdfyckjkm2uvya04w/code-pulse-watcher-demo.mp4?rlkey=g941f7ltxtazkmmykyp5exjao&dl=0)


## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t code-pulse .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> code-pulse
```

## Contributing

If you have suggestions for how code-pulse could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2023 Rittik Sharma
