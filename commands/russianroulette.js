const Discord = require('discord.js')
const client = new Discord.Client()

client.on("ready", function() { 
  console.log('russianroullete.js aktif!!')
})



module.exports = {
  name: "rr",
  description: "Pernah denger permainan russian roulette?, permainan paling menantang dan berbahaya!",
  execute: async (client, message, args) => {
  
    var v = ~~(Math.random() * 3);
    var deathText = "<:dizzy_face:418874338138128395>    <:boom:418874561006927881> <:gun:418869220932190228> KURANG HOKI LU NGAB!";
    var aliveText = "<:sweat_smile:418874817719304215>           <:gun:418869220932190228> HOKI PARAH!";
    var defaultText = "<:smile:418868020623179797>            <:gun:418869220932190228>";

    message.channel.send(defaultText + "   3")
        .then(msg => {
            setTimeout(function() {
                msg.edit(defaultText + "   2")
                    .then(msg => {
                        setTimeout(function() {
                            msg.edit(defaultText + "   1")
                                .then(msg => {
                                    setTimeout(function() {
                                        if(v == 0){
                                            msg.edit(deathText);
                                        }else{
                                            msg.edit(aliveText);
                                        }
                                    }, 1000);
                                });
                        }, 1000);
                    });
            }, 1000);
        })

}
  
  }


