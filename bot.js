var Discord = require('discord.js');
var bot = new Discord.Client();

bot.on('message', message => {

  var sender = message.author;
  var msg = message.content.toUpperCase();
  var prefix = '>'

  if (msg === prefix + 'PING') {
    message.channel.send('Pong!')
  }

});

//user joins Discord.
bot.on('guildMemberAdd', member => {
  //console.log('User ' + member.user.username + 'has joined the serwer!')
var role = member.guild.roles.find('name', 'Osadzeni');

member.addRole(role)

});

bot.login(process.env.BOT_TOKEN);
