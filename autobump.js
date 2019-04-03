const Discord = new require("discord.js");
const bot = new Discord.Client();
const TOKEN = "MzI3OTA0Nzc4NjU3MjAyMTc2.Dv_Cuw.sHr7RvcwoBkQMPBpSdJ_1TfFyM8";

bot.login(TOKEN);

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
