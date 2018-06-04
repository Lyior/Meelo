const Discord = require('discord.js'); 
const bot = new Discord.Client()

const PREFIX = "/";

var dispatcher;

function sendError(message, description) {
	message.channel.send({embed: {
		color : 15158332,
		description: ':x: ' + description
	}})
}

bot.on('ready', function() {
	console.log("Je suis pret !");
})
//(node:4) DeprecationWarning: ClientUser#setGame: use ClientUser#setActivity instead
bot.on('ready', function () {
	bot.user.setGame('Avatar-State');
})

bot.on('guildMemberAdd', function(member) {
	member.guild.channels.find("name", "discussion").send('Bienvenue ' + member + ' sur le Discord du serveur ***avatar-state.net*** ! Es-tu prêt à maîtriser l\'un des quatre éléments ?');
});


bot.on('message', message => {
	if(message.content[0] === PREFIX) {
		let splitMessage = message.content.split(" ");
		if(splitMessage[0] === '/play') {
			if(splitMessage.length === 2) 
			{
				if(message.member.voiceChannel) 
				{
					message.member.voiceChannel.join().then(connextion => {
						dispatcher = connection.playArbitraryInput(splitMessage[1]);

						dispatcher.on('error', e => {
							console.log(e)
						});

						dispatcher.on('end', e => {
							console.log('Fin du son');
						});
					}).catch(console.log);
				}

			}
			else
				sendError(message, "Erreur, Vous devez d'abord rejoindre un canal vocal");
		}
		else if(splitMessage[0] === "/pause") {
			if(dispatcher !== undefined)
				dispatcher.pause();
		}
		else if(splitMessage[0] === "/resume") {
			if(dispatcher !== undefined)
				dispatcher.resume();
		}
		else if(splitMessage[0] === "/air")
				message.reply('Tu veux connaître les sorts disponibles pour l\'air ou comment les utiliser ? Voilà pour toi :wink: https://www.avatar-state.net/forum/viewtopic.php?f=22&t=21');
	
		else if(splitMessage[0] === "/eau") 
				message.reply('Tu veux connaître les sorts disponibles pour l\'eau ou comment les utiliser ? Voilà pour toi :wink: https://www.avatar-state.net/forum/viewtopic.php?f=22&t=22');

		else if(splitMessage[0] === "/terre")
				message.reply('Tu veux connaître les sorts disponibles pour la terre ou comment les utiliser ? Voilà pour toi :wink: https://www.avatar-state.net/forum/viewtopic.php?f=22&t=23');
			
		else if(splitMessage[0] === "/feu") 
				message.reply('Tu veux connaître les sorts disponibles pour le feu ou comment les utiliser ? Voilà pour toi :wink: https://www.avatar-state.net/forum/viewtopic.php?f=22&t=18');

		else if(splitMessage[0] === "/forum") 
				message.reply('Voici le lien du forum : https://www.avatar-state.net/forum/');
			
		else if(splitMessage[0] === "/lands") 
				message.reply('Besoin d\'un rappel ou tout simplement consulter les règles du serveur ? Voici le règlement : https://www.avatar-state.net/forum/viewtopic.php?f=22&t=104');
			

		else if(splitMessage[0] === "/regles") 
				message.reply('Besoin d\'un rappel ou tout simplement consulter les règles du serveur ? Voici le règlement : https://www.avatar-state.net/forum/viewtopic.php?f=22&t=104');
			

		else if(splitMessage[0] === "/help") 
				message.author.createDM().then(channel => {
				channel.send('Les commandes disponibles sont :\n\n/ping : pong\n\n/forum : avoir le lien du forum\n\n/air : guide sur la maîtrise de l\'air\n\n/terre : guide sur la maîtrise de la terre\n\n/feu : guide sur la maîtrise du feu\n\n/eau : guide sur la maîtrise de l\'eau\n\n/regles : connaître les règles du serveur minecraft\n\n/lands : savoir comment fonctionne le système de lands\n\n/help : tu viens d\'éxécuter cette commande...')
			})
			else
				sendError(message, "Erreur, problème dans les paramètres")
		}
	})
bot.login(process.env.TOKEN);
