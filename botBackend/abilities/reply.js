// reply.js
const { GoogleGenerativeAI } = require("@google/generative-ai");

module.exports = {
    replyToPing: function(message) {
        if (message.author.username !== 'haward_not_duck') {
            // Your code here if the username is not 'haward_not_duck'
           // Make sure to store your API key securely, environment variables are a good option
           const API_KEY = 'AIzaSyDc_o0-hRwjwHNofqBtaNHo3QebzQx-BVU'; // Replace 'AIzaSyDc_o0-hRwjwHNofqBtaNHo3QebzQx-BVU' with your actual API key
           // Access your API key as an environment variable (see "Set up your API key" above)
           const genAI = new GoogleGenerativeAI(API_KEY);
   
           async function run() {
               // For text-only input, use the gemini-pro model
               const model = genAI.getGenerativeModel({ model: "gemini-pro"});
               
               const prompt = message.content;
               
               const result = await model.generateContent(prompt);
               const response = await result.response;
               const text = response.text();
               message.reply(text);
               console.log(message.author.username);
   
           }
   
           run();
       
       
        }
        
    
    } 
};
