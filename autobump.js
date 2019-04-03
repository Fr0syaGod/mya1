const Discord = new require("discord.js");
const bot = new Discord.Client();
const TOKEN = "NTM2NzI0NTUwMjg1Nzg3MTU3.DyeuGw.T1MrhlznqFH1Mo71YlCYAhgH9EA";

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
