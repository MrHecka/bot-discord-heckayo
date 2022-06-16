
const discord = require('discord.js')
const client = new discord.Client()
const figlet = require("figlet"),
util = require("util"),
figletAsync = util.promisify(figlet);

client.on("ready", function (){
  console.log("brainly.js aktif!")  
})


module.exports = {
   name: "ascii",
   description: "Buat ascii!",
   usage: "ascii <args>",
   execute: async (client, message, args) => {

    let embed = new discord.MessageEmbed()
    const text = args.join(" ")
    
    if (args[0]) {
      message.delete()
    }

    if (!args[0]) {
      embed.setAuthor("Tolong masukkan kata-kata!!!") 
      return message.channel.send(embed)
    }

		if (!text || text.length > 20) {
			embed.setAuthor("ERROR | TERLALU BANYAK KATA-KATA!");
      return message.channel.send(embed)
    
    }
     


    const output = await figletAsync(text);
		message.channel.send("```" + output + "```")
     
  }
}






