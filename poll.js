const Discord = require('discord.js');

const bot = new Discord.Client();



bot.on("ready", bot => {
  console.log('poll.js aktif!')
})

bot.on("message", async message => {
  if(message.author.bot || message.channel.type === "dm") return;

  
  const messageArray = message.content.split(' ');
  const cmd = messageArray[0];
  const args = messageArray.slice(1);
  
  
  
  if (cmd === '--poll'){
    if(!args[0,1]) return message.channel.send("**Contoh : --poll #channel-chat Mabar among us kuy?**")
    let pollChannel = message.mentions.channels.first();
    let pollDescription = args.slice(1).join(' ');
    
    let embedPoll = new Discord.MessageEmbed()
    .setTitle('🚧 AYO POLLING 🚧')
    .setDescription(pollDescription)
    .setColor('YELLOW')
    let msgEmbed = await pollChannel.send(embedPoll);
    await msgEmbed.react('✅')
    await msgEmbed.react('❎')
    
  }
  
})

bot.login(process.env.BOT_TOKEN);




