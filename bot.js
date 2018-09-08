const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});
client.on('ready',async () => {
let channel = hero.channels.find(r => r.id === '487038806088876034' && r.type === 'voice');
channel.join().catch(e => console.error(e));
});

client.login('487961782732849163.wgmX-qm4yy7SHE-8mROF7vUGA7s');
