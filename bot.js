const Discord = require ("discord.js");
const bot = new Discord.Client({ partials: ['MESSAGE', 'CHANNEL', 'REACTION'] } || {disableEveryone: false});
const { readdirSync } = require('fs');
const { join } = require('path');
const prefix = '--';



bot.on("ready", function (){
  bot.user.setActivity('Hecka Crewmate', { type: 'WATCHING'});
  console.log(`${bot.user.tag} Bot Aktif`);
    
})


bot.on('message', async message =>{
  if(!message.guild) return;
  if(!message.content.startsWith(prefix)) return;
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  

  let args = message.content.slice(prefix.length).trim().split(" ");
  let command = args.shift().toLowerCase();
  var ping = Date.now() - message.createdTimestamp + "ms";
  
  
  if(message.content === `${prefix}halo`){
    message.channel.send(`Halo ${message.author}`);
  } else if (message.content === `${prefix}anjay`){
    message.channel.send('mabar @everyone 😎👊');
  } else if (message.content === `${prefix}help`){
    const helpEmbed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('BANTUAN')
    .setDescription('Aku dibuat oleh **@MrBear** (MrBear#9374)\n**Prefix : --**\n')
    .addFields(
      {name: '⚠️ Perintah Berfaedah ⚠️', value: '\n•jadwal\n•magnet\n•rangkum\n•nulis\n•brainly\n•cekresi\n•filmtrend\n•ytdl\n•rekomenanime\n', inline:true}
    )
    .addFields(
      {name: '🤖 BOT 🤖', value: '\n•help\n•ping\n•poll\n•wow\n•mute/unmute\n•say\n•kirim\n•sms1 - •sms2\n•translate - •terjemahan\n', inline:true}
    )

    .addFields(
      {name: '🎵 MUSIK 🎵', value: '\n•play\n•skip\n•stop\n•queue\n•volume\n•lirik\n•loop\n', inline:true}
    )
    .addFields(
      {name: '😄 FUN 😄', value: '\n•anjay\n•tanya\n•anime\n•ascii\n•rr\n', inline:true}
    )


    .setThumbnail('https://cdn.glitch.com/d2744c78-64b8-4367-a416-4cc8b6ddfd51%2Fbebetter%20chillAF-.png?v=1602407562736')
    .setFooter('Created By MrHecka (MrBear#9374)')
    
    message.channel.send(helpEmbed);
    
  } else if (message.content === `${prefix}`){
    message.channel.send('```Mohon Gunakan Command --help Untuk Melihat List Command / Bantuan.```'); 
  } else if (message.content === `${prefix}ping`){
    let pollDescription = `\n**______**\n⏲️ PING KAMU : **${ping}**\n\n⏳ BOT PING : **${bot.ws.ping}ms**\n**______**`;
    let embedPing = new Discord.MessageEmbed()
    .setTitle(`⚠️ PING || @${message.author.username} ⚠️`)
    .setDescription(pollDescription)
    .setColor('BLUE')
    message.channel.send(embedPing);
    
  }
  
  



});





require("./reaction.js");
require("./poll.js");
require("./jadwal.js");
require("./commands/anime.js");
require("./commands/config.json");
require("./index.js");
require("./cekresi.js");
require("./badwords.js")
require("./badwords.json")
require("./wow.js");
require("./pesan.js");
require("./reloadbot.js");
require("./server.js");
require("./commands/tanya.js");
require("./commands/play.js");
require("./commands/lyrics.js");
require("./commands/volume.js");
require("./commands/stop.js");
require("./commands/skip.js");
require("./commands/queue.js");
require("./musik.js");
require("./commands/rangkum.js");
require("./commands/mute.js");
require("./commands/unmute.js");
require("./commands/nulis.js");
require("./commands/ascii.js");
require("./commands/magnet.js");




bot.login(process.env.BOT_TOKEN).catch(console.error)


