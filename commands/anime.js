const discord = require("discord.js")
const Kitsu = require('kitsu.js');
const kitsu =  new Kitsu();
const bot = new discord.Client

bot.on("ready", function (){
  console.log(`${bot.user.tag} anime.js aktif`);
    
})


module.exports = {
  name: "anime",
  description: "Cari anime disini!",
  usage: "anime <nama_anime>",
  execute:async (client, message, args) => {
    var search = message.content.split(/\s+/g).slice(1).join(" ");
    if (!args[0]) return message.channel.send ("**Tolong masukkan nama anime ! [--anime <nama_anime>]**")
    kitsu.searchAnime(search).then(async result => {
      if (result.length === 0) return message.channel.send("**Nama anime tidak valid/tidak benar !**")
      
      let anime = result[0]
      const animeEmbed = new discord.MessageEmbed()
      .setColor("RANDOM")
      .setAuthor (`${anime.titles.english ? anime.titles.english : search} | ${anime.showType}`, anime.posterImage.original)
      .setDescription(anime.synopsis.replace(/<[^>]*>/g, '').split('\n')[0])
      .addField('•Informasi•', `**Nama Anime :** ${anime.titles.romaji}\n**Rating Umur:** ${anime.ageRating}\n**NSFW? :** ${anime.nsfw ? 'Yes' : 'No'}`, true)
      .addField('•Stats•', `**Avg Rating:** ${anime.averageRating}\n\**Rank by rating:** ${anime.ratingRank}\n\**Rank by popularitas:** ${anime.popularityRank}`, true)
      .addField('•Status•', `**Jumlah Episode:** ${anime.episodeCount ? anime.episodeCount : 'N/A'}\n`, true)
      .setThumbnail(anime.posterImage.original, 100, 200);
      return message.channel.send(animeEmbed)
    }).catch(err => {
      console.log(err)
      message.channel.send(`**Tidak bisa menemukan ${search} !**`)
    })
    
    
  }
}


