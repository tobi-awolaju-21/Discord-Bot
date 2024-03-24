module.exports = {
    activityMessage: function(message, n) {

        const channel = client.channels.cache.get('id');
        channel.send({
          activity: {
            type: 3, // MessageActivityType.Listen
            partyId: `spotify:${client.user.id}`,
          },
        });


    }
  };
  