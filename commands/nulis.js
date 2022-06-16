const discord = require('discord.js')
const client = new discord.Client()
const needle = require('needle')
const _ = require('lodash')




client.on("ready", function () {
  console.log("nulis.js aktif!!!")
})

module.exports = {
  name: "nulis",
  description: "Menulis dibuku tanpa menulis!",
  usage: "nulis <text>",
  execute: async (client, message, args) => {
  

    
  let embednulis = new discord.MessageEmbed()
  const nulis = args.join(" ")
  let url = 'http://salism3.pythonanywhere.com/write?text='
  
    if (typeof nulis === 'undefined') { return message.channel.send('Masukkan text terlebih dahulu!') }
    if (nulis.indexOf('#') > -1) { nulis.replace(/\#/g, '')}
    
        needle(url + nulis, (err, resp, body) => {
        if (_.isEmpty(body) === true) {
          embednulis.setAuthor('Error...') 
          return message.channel.send(embednulis) 
        }
        if (_.isEmpty(body.images) === true) { 
          embednulis.setAuthor('Error || Masukkan teks terlebih dahulu!')
          return message.channel.send(embednulis) 
        }

        
            message.channel.send(body.images + `\n${message.author} || Gambar akan dihapus dalam 100 detik (Jika ingin mengunduh kualitas gambar HD buka link diatas!)`)
        
    }).catch(err => message.channel.send("```Error || Disarankan untuk tidak menggunakan copy-paste, harap ketik manual!```"));
  }
}






