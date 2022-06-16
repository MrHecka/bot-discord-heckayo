const Discord = require('discord.js')
const bot = new Discord.Client()
const fetch = require('node-fetch')
const prefix = "--"

bot.on("ready", function() {
  
  console.log('cekresi.js READY!')
  
})

bot.on("message", async message => {
  if(message.author.bot || message.channel.type === "dm") return;


const messageArray = message.content.split(' ');
const cmd = messageArray[0];
const kurir = messageArray[1];
const resi = messageArray[2];
  
if (cmd === `${prefix}cekresi`) {


if(!messageArray[1,2]) return message.channel.send('```Masukkan nama ekspedisi dan nomor resi terlebih dahulu!``` [Contoh : --cekresi jnt JB00xxxxxxxx]')
  
var url = 'https://api.terhambar.com/resi'


const fetchJson = (url, options) =>
    new Promise((resolve, reject) =>
        fetch(url, options)
            .then(response => response.json())
            .then(json => resolve(json))
            .catch(err => {
                console.error(err)
                reject(err)
            })
    )

 // _________________________________CEK RESI_________________________________ 
                    
    fetchJson(url + `?resi=${resi}&kurir=${kurir}`)
        .then((result) => {

          if (result.status.code != 200 && result.status.description != 'OK') return message.channel.send(result.status.description + "\n___________________\n" + "\n**Masukkan nama kurir/ekspedisi dengan benar!\nList :\n\n•jnt\n•jne\n•sicepat\n•lion\n•wahana\n•tiki\n•pos\n•ninja\n**")

            const { result: { courier, summary, details, delivery_status, manifest } } = result
            const manifestText = manifest.map(x => `⏰ ${x.manifest_date} ${x.manifest_time}\n └ ${x.manifest_description}`)
            const resultText = `

📦 Data Ekspedisi
├ ${summary.courier_name}
├ Resi: ${summary.waybill_number || '-'}
├ Service: ${summary.service_code || '-'}
└ Dikirim Pada: ${details.waybill_date} ${details.waybill_time || '-'}
├      
💁🏼‍♂️ Data Pengirim
├ Nama: ${details.shippper_name || '-'} 
├ Alamat: ${details.shipper_address1} ${details.shipper_city || '-'}
├     
🎯 Data Penerima
├ Nama: ${details.receiver_name || '-'}
├ Alamat: ${details.receiver_address1} ${details.receiver_city || '-'}
├     
📮 Status Pengiriman
├ ${delivery_status.status || '-'}
├                 
🚧 POD Detail\n
├
${manifestText.join('\n')}`


                

message.channel.send(resultText)

                        
    
    })
    
}


  
  
  
})    

            
                
              

             

       
bot.login(process.env.BOT_TOKEN);    
         
         

