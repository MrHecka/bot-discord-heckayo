const { MessageEmbed } = require("discord.js")

const ms = require("ms")


const { Util } = require("discord.js");
const { YOUTUBE_API_KEY, QUEUE_LIMIT, COLOR } = require("./config.json");
const ytdl = require("ytdl-core");
const YoutubeAPI = require("simple-youtube-api");
const youtube = new YoutubeAPI(YOUTUBE_API_KEY);
const { play } = require("../musik.js");
module.exports = {
  name: "play",
  description: "Dengerin lagu",
  async execute(client, message, args) {
    let embed = new MessageEmbed()
    .setColor(COLOR);



    if (!args.length) {

      embed.setAuthor("🚫 || Contoh : --play <Despacito> atau <link video>`")
      return message.channel.send(embed);
    }

    const { channel } = message.member.voice;
        
    if (!channel) {

      embed.setAuthor("🚫 || Kamu harus berada di voice channel terlebih dahulu!")
      return message.channel.send(embed);
    }



    const targetsong = args.join(" ");
    const videoPattern = /^(https?:\/\/)?(www\.)?(youtube\.com|youtu\.?be)\/.+$/gi;
    const playlistPattern = /^.*(youtu.be\/|list=)([^#\&\?]*).*/gi;
    const urlcheck = videoPattern.test(args[0]);

    if (!videoPattern.test(args[0]) && playlistPattern.test(args[0])) {
      embed.setAuthor("🚫 || Aku tidak bisa memainkan playlist saat ini!")
      return message.channel.send(embed);
    }

    const serverQueue = message.client.queue.get(message.guild.id);

    const queueConstruct = {
      textChannel: message.channel,
      channel,
      connection: null,
      songs: [],
      loop: false,
      volume: 100,
      playing: true
    };
    
    const voteConstruct = {
      vote: 0,
      voters: []
    }

    let songData = null;
    let song = null;
    

    if (urlcheck) {
      try {
        songData = await ytdl.getInfo(args[0]);
      
        song = {
          title: songData.videoDetails.title,
          url: songData.videoDetails.video_url,
          duration: songData.videoDetails.lengthSeconds,
          thumbnail: songData.videoDetails.thumbnail.thumbnails[3].url,
          likescount: songData.videoDetails.likes,
          dislikescount: songData.videoDetails.dislikes,
        };
      } catch (error) {
        if (message.include === "copyright") {
          return message
            .reply("🚫 || Lagunya Copyright Gan :/")
            .catch(console.error);
        } else {
          console.error(error);
        }
      }
    } else {
          
      try {
        const result = await youtube.searchVideos(targetsong, 1);
        songData = await ytdl.getInfo(result[0].url);
      
        song = {
          title: songData.videoDetails.title,
          url: songData.videoDetails.video_url,
          duration: songData.videoDetails.lengthSeconds,
          thumbnail: songData.videoDetails.thumbnail.thumbnails[3].url,
          likescount: songData.videoDetails.likes,
          dislikescount: songData.videoDetails.dislikes,
          
        };




      } catch (error) {
        console.log(error)
        if(error.errors[0].domain === "usageLimits") {
          return message.channel.send("YT API LIMIT >> ERROR >> KEMBALI LAGI DALAM 24 JAM!")
        }
      }
    }

    if (serverQueue) {
        if(serverQueue.songs.length > Math.floor(QUEUE_LIMIT - 1) && QUEUE_LIMIT !== 0) {
      return message.channel.send(`🚫 || Kamu tidak bisa menambahkan lagu sampai ${QUEUE_LIMIT} antrian`)
    }
          

      serverQueue.songs.push(song);
      embed.setAuthor("🎵 || Menambahkan lagu ke antrian!", client.user.displayAvatarURL())
      embed.setDescription(`**[${song.title}](${song.url})**`)
      embed.setThumbnail(song.thumbnail)
      .setFooter("Suka - " + `${song.likescount}` + ", Tidak suka - " +  `${song.dislikescount}`)
      
      return serverQueue.textChannel
        .send(embed)
        .catch(console.error);
    } else {
      queueConstruct.songs.push(song);
    }

    if (!serverQueue)
      message.client.queue.set(message.guild.id, queueConstruct);
       message.client.vote.set(message.guild.id, voteConstruct);
    if (!serverQueue) {
      try {
        queueConstruct.connection = await channel.join();
        play(queueConstruct.songs[0], message);
      } catch (error) {
        console.error(`Could not join voice channel: ${error}`);
        message.client.queue.delete(message.guild.id);
        await channel.leave();
        return message.channel
          .send({
            embed: {
              description: `🚫 || Tidak bisa join ke voice channel: ${error}`,
              color: "#ff2050"
            }
          })
          .catch(console.error);
      }
    }
  }
};



