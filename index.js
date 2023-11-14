/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */

// const commands = require('probot-commands');
module.exports = (app) => {
  // Your code here
  app.log.info("Yay, the app was loaded! rittik");

  app.on(['issue_comment.created'], async (context) =>{
    console.log("testing the comment event ");
    const issueComment = context.issue({
      body: "Thanks for opening this issue!",
    });
    return context.octokit.issues.createComment(issueComment);
  });
  app.on("issues.opened", async (context) => {
    console.log(context.payload.issue.body);
    const issueComment = context.issue({
      body: "Thanks for opening this issue! rittik",
    });
    return context.octokit.issues.createComment(issueComment);
  });

  // For more information on building apps:
  // https://probot.github.io/docs/

  // To get your app running against GitHub, see:
  // https://probot.github.io/docs/development/
};
