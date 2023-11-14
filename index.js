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

    const { payload } = context;
    console.log(payload.issue.pull_request);

    // Checking  if the comment is on a pull request or not 
    if (payload.issue.pull_request) {
      const prNumber = payload.issue.number;
      const repo = payload.repository.name;
      const owner = payload.repository.owner.login;
      const commentBody = payload.comment.body;
      console.log("logging the comment", commentBody);

      // Check if the comment on the PR contains a specific keyword or phrase ->
      if (commentBody.includes('/Explain')) {
        console.log("yes  it contains the explain command");
        
        // Get the details of the pull request
        const prDetails = await context.octokit.pulls.get({
          owner,
          repo,
          pull_number: prNumber,
        });

        // Accessing the SHA of the commit in the pull request
        const sha = prDetails.data.head.sha;

        // Getting the content of a specific file in the pull request  using octokit
        const fileContent = await context.octokit.repos.getContent({
          owner,
          repo,
          path: 'index.js', 
          ref: sha,
        });

        // Accessing the content of the file
        const codeContent = Buffer.from(fileContent.data.content, 'base64').toString('utf-8');

        console.log(`Code in PR#${prNumber}:\n${codeContent}`);
      }   
    } 
    // const issueComment = context.issue({
    //   body: "Thanks for opening this issue!",
    // });
    // return context.octokit.issues.createComment(issueComment);
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
