const { MessageEmbed } = require("discord.js")
const Genius = new (require("genius-lyrics")).Client(process.env.geniusapi);
const { COLOR } = require("./config.json");

module.exports = {
  name: "lirik",
  description: "Lirik lagu!",
  async execute (client, message, args) {
    let embed = new MessageEmbed()
    .setDescription("Sedang mencari lirik dari lagu ini!")
    .setColor("RANDOM")
    
    if(!args.length) {
      return message.channel.send("🚫 || Tolong masukkan nama lagu nya!")
    }
    
    const msg = await message.channel.send(embed)
     try {
          const songs = await Genius.songs.search(args.join(" "));
          const lyrics = await songs[0].lyrics();
          
           if (lyrics.length > 4095) {
             msg.delete()
        return message.channel.send('🚫 || Lirik terlalu panjang gan :/');
     }
      if (lyrics.length < 2048) {
        const lyricsEmbed = new MessageEmbed()
          .setColor(COLOR)
          .setDescription(lyrics.trim());
        return msg.edit(lyricsEmbed);
      } else {

        const firstLyricsEmbed = new MessageEmbed()
          .setColor(COLOR)
          .setDescription(lyrics.slice(0, 2048));
        const secondLyricsEmbed = new MessageEmbed()
          .setColor(COLOR)
          .setDescription(lyrics.slice(2048, lyrics.length));
        msg.edit(firstLyricsEmbed);
        message.channel.send(secondLyricsEmbed);
        return;
      }
      
       
     } catch(e) {
       
       embed.setDescription("ERROR : " + e)
       msg.edit(embed)
          console.log(e);
     }
    
    
  }
  
}

