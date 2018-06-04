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

bot.on('ready', function () {
	bot.user.setGame('Avatar State | /help');
})

bot.on('guildMemberAdd', function(member) {
	member.guild.channels.find("name", "discussion").send('Bienvenue ' + member + ' sur le Discord d\'***avatar-state.net*** ! Es-tu prêt à maîtriser l\'un des quatre éléments ?');
});


bot.on('message', message => {
	if(message.content[0] === PREFIX) {
		let splitMessage = message.content.split(" ");
		if(splitMessage[0] === PREFIX + "infodiscord"){
			var embed = new Discord.RichEmbed()
			.setDescription("Information du Discord")
			.addField("Nom du Discord", message.guild.name)
			.addField("Créé le", message.guild.createdAt)
			.addField("Tu as rejoins le", message.member.joinedAt)
			.addField("Utilisateurs sur le Discord", message.guild.memberCount)
			.setColor("0x0000FF")
			message.channel.sendEmbed(embed)
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
        else if (message.content === PREFIX + "embed"){
				var embed = new Discord.RichEmbed()
				.setColor("€40A497")
				.setTitle("Titre")
				.setAuthor("Avatar State", ["https://imgur.com/a/gmZlvRd"], [www.avatar-state.net])
				.setDescription("Ceci est un test")
				.addField("Zebi", "zbeub")
				.addField("suce", "bite")
				.setFooter("Menu de khla")
				message.channel.sendMessage(embed);
			}
		else
				sendError(message, "Erreur, problème dans les paramètres")
		}
	});
bot.login(process.env.TOKEN);
