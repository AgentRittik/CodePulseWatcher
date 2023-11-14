const OpenAI= require('openai');

console.log("apikey",process.env.OPENAI_API_KEY);
const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

async function getExplanation(codeSnippet) {
    const prompt = `Explain the following code:\n${codeSnippet}`;
    const completion = await openai.completions.create({
        model: "davinci-002",
        prompt:"meaning of good word",
        max_tokens:5,
      });
    //   console.log(completion.choices[0].text);
      return completion.choices[0].text;
}
module.exports = {
    getExplanation
}




 

// const {Configuration ,OpenAIApi} = require('openai');


// const config = new Configuration({
//     apiKey: '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'
// });

// // const openaiApiKey = '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';

// const openai = new OpenAIApi(config);

// async function getExplanation(codeSnippet) {
//   try {
//     const prompt = `Explain the following code:\n${codeSnippet}`;
//     const response = await openai.createCompletion({
//       engine: 'text-davinci-003',
//       prompt: prompt,
//       max_tokens: 150,
//       temperature: 1,
//     });

//     const explanation = response.data.choices[0].text;
//     console.log(explanation);
//   } catch (error) {
//     console.error('Error:', error.message || error.response.data);
//   }
// }

