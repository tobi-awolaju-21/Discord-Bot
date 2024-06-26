// streamVideo.js
const { DiscordStreamClient } = require('discord-stream-client');

module.exports = {
  setupVideoStream: async function(client) {
    new DiscordStreamClient(client);

    client.on('ready', async () => {
      console.log('Ready!', client.user.tag);
      const channel = client.channels.cache.get('id'); // Replace 'id' with your channel ID
      const connection = await client.streamClient.joinVoiceChannel(channel, {
        selfDeaf: true,
        selfMute: true,
        selfVideo: false,
      });
      const stream = await connection.createStream();
      const player = client.streamClient.createPlayer(
        'https://cdn.discordapp.com/attachments/820557032016969751/1196424904384446605/Yooh_MariannE.mp4', // Replace with your video URL
        stream.udp,
      );
      player.on('error', err => console.error(err));
      player.play({
        kbpsVideo: 7000, // FHD 60fps
        fps: 60,
        hwaccel: true,
        kbpsAudio: 128,
        volume: 1,
      });
    });
  }
};
