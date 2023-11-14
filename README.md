# Code-Pulse

> A GitHub App built with [Probot](https://github.com/probot/probot) that Code Pulse, a Probot app, transforms GitHub pull requests. Fetching and explaining code snippets, it enhances code review clarity. Additionally, contributors can specify expected code outputs, streamlining collaboration. Experience an elevated GitHub workflow with Code Pulse&#x27;s intuitive features

# Features
Seamless Integration :
The app seamlessly integrates with all GitHub repositories, ensuring accessibility across your entire codebase.
Code Execution Trigger:
Trigger code execution by including the command /execute in a pull request comment or commit message.

# Example Video
> click on the image to watch the demo video
[![Watch the Video](/resources/code-pulse-thumbnail.png)](https://www.dropbox.com/scl/fi/emgzgdfyckjkm2uvya04w/code-pulse-watcher-demo.mp4?rlkey=g941f7ltxtazkmmykyp5exjao&dl=0)

##  🚩 Technologies used:
#### Programming Languages : <img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node-dot-js&logoColor=white"/><img alt="JavaScript" src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"/> <img alt="openAi" src="https://img.shields.io/badge/OpenAI-412991.svg?style=for-the-badge&logo=OpenAI&logoColor=white"/>
#### Version Control : <img alt="Git" src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"/>  
#### Hosting : <img alt="Heroku" src="https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white"/>
####  Frameworks/Libraries/Technologies : ProoBot, Github Web Hooks
###### You can also see the list of dependencies in the package.json file.

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
## Getting the required Environment variables automatically Using Probot

* Run the app locally by running npm start in your terminal.
* Next follow the instructions to visit http://localhost:3000 (or your custom Glitch URL).
* You should see something like this:
  *<img src="/resources/probot-setup-wizard.png" />
* Go ahead and click the Register a GitHub App button.
* Next, you'll get to decide on an app name that isn't already taken. Note: if you see a message "Name is already in use" although no such app exists, it means that a GitHub organization with that name exists and cannot be used as an app name.
* After registering your GitHub App, you'll be redirected to install the app on any repositories. At the same time, you can check your local .env and notice it will be populated with values GitHub sends us in the course of that redirect.
* Restart the server in your terminal (press ctrl + c to stop the server)

## Contributing

If you have suggestions for how code-pulse could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2023 Rittik Sharma
