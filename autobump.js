const Discord = new require("discord.js");
const bot = new Discord.Client();

bot.on("message", function(message)
{

    if (message.content === '!start'){
	if (message.member.hasPermission("MANAGE_ROLES"))	

      message.channel.send("**Автобамп включен, хай бебибон кста**")  

      var interval = setInterval (function ()       
            
            {
              message.channel.send("s.up")
            }, 18100000);       

      }

});

client.login.(process.env.BOT_TOKEN);
