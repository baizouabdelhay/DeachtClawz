require('dotenv').config();
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMembers
    ]
});

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.get("1492561687490855222");

    if (channel) {
        channel.send(`🎉 Welcome To Server DeathClawz, ${member}!`);
    }
});
client.login(process.env.TOKEN);