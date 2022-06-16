const Discord = require('discord.js');

const client = new Discord.Client({ disableEveryone: true, disabledEvents: ["TYPING_START"] });

const { readdirSync } = require('fs');

const { join } = require('path');

const { TOKEN, PREFIX } = require("./commands/config.json")

client.commands= new Discord.Collection();

const prefix = '--';

client.commands = new Discord.Collection()
client.prefix = PREFIX
client.queue = new Map();
client.vote = new Map();


const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));

for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}


client.on("error", console.error);

client.on('ready', () => {
    console.log('index.js ready!');
});


client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;

    if(message.content.startsWith(PREFIX)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/);

        const command = args.shift().toLowerCase();

        if(!client.commands.has(command)) {
          return;
        }

        try {
            client.commands.get(command).execute(client, message, args)

        } catch (error){
            console.error(error);
        }
    }
})

client.login(TOKEN);



