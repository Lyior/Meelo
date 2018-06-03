const Discord = require('discord.js')
const bot = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

bot.on('message', message =>  {
	if (message.content === '/ping') {
		message.reply('pong !')
	}
});

bot.on('message', message =>  {
	if (message.content === '/forum') {
		message.reply('Voici le lien du forum : https://www.avatar-state.net/forum/')
	}
});

bot.on('message', message =>  {
	if (message.content === '/air') {
		message.reply('Tu veux connaître les sorts disponibles pour l\'air ou comment les utiliser ? Voilà pour toi :wink: https://www.avatar-state.net/forum/viewtopic.php?f=22&t=21')
	}
});

bot.on('message', message =>  {
	if (message.content === '/terre') {
		message.reply('Tu veux connaître les sorts disponibles pour la terre ou comment les utiliser ? Voilà pour toi :wink: https://www.avatar-state.net/forum/viewtopic.php?f=22&t=23')
	}
});

bot.on('message', message =>  {
	if (message.content === '/feu') {
		message.reply('Tu veux connaître les sorts disponibles pour le feu ou comment les utiliser ? Voilà pour toi :wink: https://www.avatar-state.net/forum/viewtopic.php?f=22&t=18')
	}
});

bot.on('message', message =>  {
	if (message.content === '/eau') {
		message.reply('Tu veux connaître les sorts disponibles pour l\'eau ou comment les utiliser ? Voilà pour toi :wink: https://www.avatar-state.net/forum/viewtopic.php?f=22&t=22')
	}
});

bot.on('message', message =>  {
	if (message.content === '/regles') {
		message.reply('Besoin d\'un rappel ou tout simplement consulter les règles du serveur ? Voici le règlement : https://www.avatar-state.net/forum/viewtopic.php?f=22&t=104')
	}
});

bot.on('message', message =>  {
	if (message.content === '/lands') {
		message.reply('Besoin d\'un rappel ou tout simplement consulter les règles du serveur ? Voici le règlement : https://www.avatar-state.net/forum/viewtopic.php?f=22&t=104')
	}
});

bot.on('message', message =>  {
	if (message.content === '/help') {
		message.author.createDM().then(channel => {
		channel.send('Les commandes disponibles sont :\n\n/ping : pong\n\n!forum : avoir le lien du forum\n\n/air : guide sur la maîtrise de l\'air\n\n/terre : guide sur la maîtrise de la terre\n\n/feu : guide sur la maîtrise du feu\n\n/eau : guide sur la maîtrise de l\'eau\n\n/regles : connaître les règles du serveur minecraft\n\n/lands : savoir comment fonctionne le système de lands\n\n/help : tu viens d\'éxécuter cette commande...')
	})
	}
});

bot.on('ready', function () {
	bot.user.setGame('Avatar-State');
})

bot.on('guildMemberAdd', function(member) {
	member.guild.channels.find("name", "général").send('Bienvenue ' + member + ' sur le Discord du serveur ***avatar-state.net*** ! Es-tu prêt à maîtriser l\'un des quatre éléments ?');
});

bot.login(process.env.TOKEN);
