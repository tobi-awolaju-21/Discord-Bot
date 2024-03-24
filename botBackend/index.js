// Import necessary module
const { Client } = require('discord.js-selfbot-v13');
//abilites modules
const replyModule = require('./abilities/reply');
// const { setupVideoStream } = require('./abilities/streamVideo');
const { setRichPresence } = require('./abilities/richPrescence');
const config = require('./config/config');
const { GoogleGenerativeAI } = require("@google/generative-ai");


// Initialize Discord client
const client = new Client();
const token = config.botToken;

// Call setupVideoStream function from streamVideo module
//setupVideoStream(client);

// Discord client ready event
client.on('ready', async () => {
  console.log(`${client.user.username} is ready!`);
               // Set rich presence
              const { status, custom, spotify } = await setRichPresence(client);
              client.user.setPresence({ activities: [status, custom, spotify] });
});

// Discord messageCreate event
client.on("messageCreate", message => {
            // Call the function from reply module
            replyModule.replyToPing(message);
});


// Log in to Discord
client.login(token);
