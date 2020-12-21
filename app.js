console.log('[Vk Bot] >> Я готов к работе');
(console.log`[Vk Bot] » Информация о боте:

	» Имя бота: [Vk Bot|AntonBot]
    » OC: компьютер создателя
	» Версия: 1.0
`)
const { VK } = require('vk-io');
const vk = new VK();
const commands = [];
const request = require('prequest');
let user = new VK();
user.setOptions({
	token: 'iiiiiiiiiiiiiiiia'
});

const https = require('https');
const requests = require('request');
const fs = require("fs");
const rq = require("prequest");
let giving = false;
const clans = require('./base/clans.json');
const botinfo = require('./base/botinfo.json');

const fortyn = '';
const win = ''; 
const lose = '';
const errors = '';

	var timeban = 604800;

setInterval(() => {
		timeban -= 1
	}, 604800);
let chatslist = require('./chatslist.json');

let settings = require('./settings.json'),
	base = require("./base.json"),
	chats = require('./chats.json');

const utils = {
	sp: (int) => {
		int = int.toString();
		return int.split('').reverse().join('').match(/[0-9]{1,3}/g).join('.').split('').reverse().join('');
	},
	rn: (int, fixed) => {
		if (int === null) return null;
		if (int === 0) return '0';
		fixed = (!fixed || fixed < 0) ? 0 : fixed;
		let b = (int).toPrecision(2).split('e'),
			k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3),
			c = k < 1 ? int.toFixed(0 + fixed) : (int / Math.pow(10, k * 3) ).toFixed(1 + fixed),
			d = c < 0 ? c : Math.abs(c),
			e = d + ['', 'тыс', 'млн', 'млрд', 'трлн'][k];

			e = e.replace(/e/g, '');
			e = e.replace(/\+/g, '');
			e = e.replace(/Infinity/g, 'Дохера!');

		return e;
	},
	gi: (int) => {
		int = int.toString();

		let text = ``;
		for (let i = 0; i < int.length; i++)
		{
			text += `${int[i]}&#8419;`;
		}

		return text;
	},
	decl: (n, titles) => { return titles[(n % 10 === 1 && n % 100 !== 11) ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2] },
	random: (x, y) => {
		return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x);
	},
	pick: (array) => {
		return array[utils.random(array.length - 1)];
	}
}

const rotateText = {
	q: 'q',
	w: 'ʍ',
	e: 'ǝ',
	r: 'ɹ',
	t: 'ʇ',
	y: 'ʎ',
	u: 'u',
	i: 'ᴉ',
	o: 'o',
	p: 'p',
	a: 'ɐ',
	s: 's',
	d: 'd',
	f: 'ɟ',
	g: 'ƃ',
	h: 'ɥ',
	j: 'ɾ',
	k: 'ʞ',
	l: 'l',
	z: 'z',
	x: 'x',
	c: 'ɔ',
	v: 'ʌ',
	b: 'b',
	n: 'n',
	m: 'ɯ',

	Q: 'q',
	W: 'ʍ',
	E: 'ǝ',
	R: 'ɹ',
	T: 'ʇ',
	Y: 'ʎ',
	U: 'u',
	I: 'ᴉ',
	O: 'o',
	P: 'p',
	A: 'ɐ',
	S: 's',
	D: 'd',
	F: 'ɟ',
	G: 'ƃ',
	H: 'ɥ',
	J: 'ɾ',
	K: 'ʞ',
	L: 'l',
	Z: 'z',
	X: 'x',
	C: 'ɔ',
	V: 'ʌ',
	B: 'b',
	N: 'n',
	M: 'ɯ',

	й: 'ņ',
	ц: 'ǹ',
	у: 'ʎ',
	к: 'ʞ',
	е: 'ǝ',
	н: 'н',
	г: 'ɹ',
	ш: 'm',
	щ: 'm',
	з: 'ε',
	х: 'х',
	ъ: 'q',
	ф: 'ф',
	ы: 'ıq',
	в: 'ʚ',
	а: 'ɐ',
	п: 'u',
	р: 'd',
	о: 'о',
	л: 'v',
	д: 'ɓ',
	ж: 'ж',
	э: 'є',
	я: 'ʁ',
	ч: 'һ',
	с: 'ɔ',
	м: 'w',
	и: 'и',
	т: 'ɯ',
	ь: 'q',
	б: 'ƍ',
	ю: 'oı',

	Й: 'ņ',
	Ц: 'ǹ',
	У: 'ʎ',
	К: 'ʞ',
	Е: 'ǝ',
	Н: 'н',
	Г: 'ɹ',
	Ш: 'm',
	Щ: 'm',
	З: 'ε',
	Х: 'х',
	Ъ: 'q',
	Ф: 'ф',
	Ы: 'ıq',
	В: 'ʚ',
	А: 'ɐ',
	П: 'u',
	Р: 'd',
	О: 'о',
	Л: 'v',
	Д: 'ɓ',
	Ж: 'ж',
	Э: 'є',
	Я: 'ʁ',
	Ч: 'һ',
	С: 'ɔ',
	М: 'w',
	И: 'и',
	Т: 'ɯ',
	Ь: 'q',
	Б: 'ƍ',
	Ю: 'oı'
}

let btc = 6000;

let users = require('./base/users.json');
let buttons = [];

	vk.updates.on(['chat_invite_user_by_link'], async (message, next) => {
		const [user_info] = await vk.api.users.get({ user_id: message.senderId });
let chatid = message.chatId;	
			if(chats[message.chatId].users[message.senderId].isBanned && chats[message.chatId].users[message.senderId].permanently){

		    vk.api.call("messages.removeChatUser", {chat_id: chatid, user_id: message.senderId});
		    return message.send('@id' + message.senderId + ' - находится в бане.');}

		message.send(`🎉 || Приветствую тебя, игрок - ${user[0].first_name}! Вы попали в беседу, где Вы можете общаться с другими пользователями.`, 
		{
			keyboard:JSON.stringify(
		{
			"one_time": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "Помощь"
		},
			"color": "default"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "Профиль"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "Казино 1к"
		},
			"color": "positive"
		},
			{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"4\"}",
				"label": "Убрать клавиатуру"
			},
				"color": "negative"
			}]
		]
			})
		});

		await next();
	});
	vk.updates.on(['chat_invite_user'], async (message, next) => {
		if(message.payload.action.member_id == message.senderId) return;

		let user = await vk.api.users.get({user_id: message.payload.action.member_id})
let chatid = message.chatId;	
			if(chats[message.chatId].users[message.payload.action.member_id].isBanned && chats[message.chatId].users[message.payload.action.member_id].permanently){

		    vk.api.call("messages.removeChatUser", {chat_id: chatid, user_id: message.payload.action.member_id});
		    return message.send('@id' + message.payload.action.member_id + ' - находится в бане.');}

			message.send(`🎉 || Приветствую тебя, участник - ${user[0].first_name}! Вы попали в беседу, где Вы можете общаться с другими пользователями.`, 
			);

		await next();
	});
	vk.updates.on(['chat_kick_user'], async (message, next) => {
		if(message.payload.action.member_id == message.senderId) return;

		let user = await vk.api.users.get({user_id: message.payload.action.member_id})

		message.send(`📢 || Пользователя под именем ${user[0].first_name}, к сожалению, исключён из этой беседы. Если хотите вернуть, то пишите создателю беседы.\n\n💬 >> Или Вы можете забыть про него :3`, 
    );

		await next();
	});




setInterval(async () => {
	await saveUsers();
}, 30000);


function clearTemp()
{
	users.map(user => {
		user.timers.translation = false;
		user.timers.hasWorked = false;
		user.timers.commands = false;
		user.timers.clanwar = false;
		user.timers.obva = false;
		user.timers.krik = false;
		user.timers.mine = false;
	});
}

clearTemp();

async function saveUsers()
{
	require('fs').writeFileSync('./base/users.json', JSON.stringify(users, null, '\t'));
	return true;
}

vk.setOptions({ token: process.env.BOT_TOKEN, pollingGroupId: 200398069 });
const { updates, snippets } = vk;

updates.startPolling();
updates.on('message', async (message) => {
	if(Number(message.senderId) <= 0) return;
	if(/\[public200398069\|(.*)\]/i.test(message.text)) message.text = message.text.replace(/\[public200398069\|(.*)\]/ig, '').trim();

	if(!users.find(x=> x.id === message.senderId))
	{
		const [user_info] = await vk.api.users.get({ user_id: message.senderId });
		const date = new Date();

		users.push({
			realname: user_info.first_name,
			realfam: user_info.last_name,
			id: message.senderId,
			uid: users.length,
			rating: 0,
			regDate: `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`,
			mention: true,
			ban: false,
			timers: {
				translation: false,
				hasWorked: false,
				commands: false,
				clanwar: false,
				delacc: false,
				obva: false,
				krik: false,
				mine: false,
			},
			tag: user_info.first_name,
			clanid: false,
			keyboard: true,
			numberss: false,
			work: 0,
			business: 0,
			pp: 0,
			notifications: true,
			ccard: false,
			seccard: 0,
			cardss: 0,
			exp: 1,
			level: 1,
			right: 1,
			foolder: 0,
			floder: 0,
			operator: 0,
			number: 0,
			call: 0,
			language: 1,
			healths: 100,
			hunger: 100,
			reals: 0,
			jalobs: 0,
			referal: null,
			msg: { 
				messages: 0, 
				last_msg: "" 
			}
		});
	}

	message.user = users.find(x=> x.id === message.senderId);
	if(message.user.ban) return;

	const bot = (text, params) => {
		return message.send(`${message.user.mention ? `@id${message.user.id} (${message.user.tag})` : `${message.user.tag}`}, ${text}`, params);
	}

	if (message.text) {
		message.user.floder += 1;
	}

	const command = commands.find(x=> x[0].test(message.text));
	if(!command) return;

	message.args = message.text.match(command[0]);
	await command[1](message, bot);

	console.log(`USER: ${message.text}`)
});


const cmd = {
	hear: (p, f) => {
		commands.push([p, f]);
	}
}
vk.updates.hear(/^(?:состав)/i, message => {  
	let creat, devs, admins, moders, vips, chat; 
	let devels = ``;
	creat = '🔺CREATOR🔺\n'; 
	devs = '\n▪Гл.Администраторы▪\n'; 
	gl = '\n▪Администраторы▪\n'; 
	admins = '\n▪Модераторы▪\n'
	for (let id in acc.users) {
		if(acc.users[id]){
		let user = acc.users[id];

		if (user.level == 6) creat += `&#8195;👑 @id${acc.users[id].id}(${acc.users[id].prefix}) [ID: ${id}]\n`; 
		if (user.level == 5) devs += `&#8195;⚙ @id${acc.users[id].id}(${acc.users[id].prefix}) [ID: ${id}]\n`; 
		if (user.level == 4) gl += `&#8195;💎 @id${acc.users[id].id}(${acc.users[id].prefix}) [ID: ${id}]\n`; 
		if (user.level == 3) admins += `&#8195;🔹 @id${acc.users[id].id}(${acc.users[id].prefix}) [ID: ${id}]\n`; 
		if (user.level == 2) moders += `&#8195;🔹  @id${acc.users[id].id}(${acc.users[id].prefix}) [ID: ${id}]\n`; 
		if (user.level == 1) vips += `&#8195;🔹  @id${acc.users[id].id}(${acc.users[id].prefix}) [ID: ${id}]\n`; 
		}
	}
	let text = `\n`;
	if (creat.length != 1) text += creat;
	if (devs.length != 24) text += devs;
	if (gl.length != 24) text += gl;
	if (admins.length != 24) text += admins;  
	if (moders.length != 24) text += moders;  
	if (vips.length != 24) text += vips; 
	return message.send(`${text}`);
})

cmd.hear(/^(?:-)$/i, async (message, bot) => {
	message.user.foolder += 1;	
	await message.send(`⛔не согласился с мнением⛔`)

}) 

cmd.hear(/^(?:№)$/i, async (message, bot) => {
	message.user.foolder += 1;	
	await message.send(`✅согласился с мнением✅`)

}) 

cmd.hear(/^(?:бот|bot)$/i, async (message, bot) => {
	message.user.foolder += 1;	
	await message.send(`привет, я личный бот сетки city of dreams.
	я буду следить за порядком и давать возможность как либо развлекаться людям.`)

})

cmd.hear(/^(?:пинг|ping|понг|пунг|панк)$/i, async (message, bot) => {
	message.user.foolder += 1;	
	await message.send(`ППППОООООННННГГГГ!!!`)

})

cmd.hear(/^(?:бот пидр)$/i, async (message, bot) => {
	message.user.foolder += 1;	
	await message.send(`сам пидр`)

})

cmd.hear(/^(?:суицид)$/i, async (message, bot) => {
	message.user.foolder += 1;	
	await message.send(`✅[id${message.user.id}|${message.user.tag}] совершил суицид✅`)

})

cmd.hear(/^(?:привет|прив|хай|кот|хеллоу|хеллов|хелоу|хелов|hello|hi|начать|start|приве|привт|котик)$/i, async (message, bot) => {
	message.user.foolder += 1;
		if(message.isChat) return;
					if(message.user.keyboard == false) {
	await message.send(`
	&#4448;&#4448;&#4448;список команд:
		
	  1. [💭] » Найти [id] |-| Полный список профиля у другого игрока
	  1.1 [📋] » Профиль - Ваш профиль. 
	  1.2 [📝] » Ник [ник/вкл/выкл]  |-| Ваш специальный ник
	
	&#4448;[📗] » Список менюшек:
	   2.1 [🔝] » топ [➕] 
	   2.2 [🔔] » игры [➕]
	   2.3 [🤖] » Бот [➕] 
	   2.4 [🔊] » рп алл [➕] 
	
	&#4448;[🔥] | Клан:
	 3. [👾] » Клан создать [фраза] - Создание вашего клана
	 3.1 [📖] » Клан - Информация о клане
	 3.2 [😟] » Покинуть - Покинуть клан
	 3.3 [🔑] » Вступить [id клана] - Войти в клан
	
	[🆘] » Репорт [текст] - Связь с Тех.Поддержкой`);
	}
if(message.user.keyboard == true) {
	await message.send(`
	&#4448;&#4448;&#4448;список команд:
		
	  1. [💭] » Найти [id] |-| Полный список профиля у другого игрока
	  1.1 [📋] » Профиль - Ваш профиль. 
	  1.2 [📝] » Ник [ник/вкл/выкл]  |-| Ваш специальный ник
	
	&#4448;[📗] » Список менюшек:
	   2.1 [🔝] » топ [➕] 
	   2.2 [🔔] » игры [➕]
	   2.3 [🤖] » Бот [➕] 
	   2.4 [🔊] » рп алл [➕] 
	
	&#4448;[🔥] | Клан:
	 3. [👾] » Клан создать [фраза] - Создание вашего клана
	 3.1 [📖] » Клан - Информация о клане
	 3.2 [😟] » Покинуть - Покинуть клан
	 3.3 [🔑] » Вступить [id клана] - Войти в клан
	
	[🆘] » Репорт [текст] - Связь с Тех.Поддержкой`);
}	
})
,
		{
			keyboard:JSON.stringify(
		{
			"one_time": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "Чат"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "Игры"
		},
			"color": "positive"
			},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "!manager"
		},
			"color": "positive"
			},
			{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"4\"}",
				"label": "Другое"
			},
				"color": "positive"
			}]
		]
			})
	}	

cmd.hear(/^(?:помощь|команды|меню)$/i, async (message, bot) => {
	message.user.foolder += 1;

			if(message.user.keyboard == false) {
await message.reply(`
&#4448;&#4448;&#4448;список команд:
	
  1. [💭] » Найти [id] |-| Полный список профиля у другого игрока
  1.1 [📋] » Профиль - Ваш профиль. 
  1.2 [📝] » Ник [ник/вкл/выкл]  |-| Ваш специальный ник

&#4448;[📗] » Список менюшек:
   2.1 [🔝] » топ [➕] 
   2.2 [🔔] » игры [➕]
   2.3 [🤖] » Бот [➕] 
   2.4 [🔊] » рп алл [➕] 

&#4448;[🔥] | Клан:
 3. [👾] » Клан создать [фраза] - Создание вашего клана
 3.1 [📖] » Клан - Информация о клане
 3.2 [😟] » Покинуть - Покинуть клан
 3.3 [🔑] » Вступить [id клана] - Войти в клан

[🆘] » Репорт [текст] - Связь с Тех.Поддержкой`);
}
if(message.user.keyboard == true) {
	await message.reply(`
	&#4448;&#4448;&#4448;список команд:
		
	  1. [💭] » Найти [id] |-| Полный список профиля у другого игрока
	  1.1 [📋] » Профиль - Ваш профиль. 
	  1.2 [📝] » Ник [ник/вкл/выкл]  |-| Ваш специальный ник
	
	&#4448;[📗] » Список менюшек:
	   2.1 [🔝] » топ [➕] 
	   2.2 [🔔] » игры [➕]
	   2.3 [🤖] » Бот [➕] 
	   2.4 [🔊] » рп алл [➕] 
	
	&#4448;[🔥] | Клан:
	 3. [👾] » Клан создать [фраза] - Создание вашего клана
	 3.1 [📖] » Клан - Информация о клане
	 3.2 [😟] » Покинуть - Покинуть клан
	 3.3 [🔑] » Вступить [id клана] - Войти в клан
	
	[🆘] » Репорт [текст] - Связь с Тех.Поддержкой`
	,
		{
			keyboard:JSON.stringify(
		{
			"one_time": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "чат"
		},
			"color": "positive"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "Игры"
		},
			"color": "positive"
			},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "!manager"
		},
			"color": "positive"
			},
			{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"4\"}",
				"label": "Другое"
			},
				"color": "positive"
			}]
		]
			})
		});
		}}
);	

cmd.hear(/^(?:игры)$/i, async (message, bot) => {
	message.user.foolder += 1;

			if(message.user.keyboard == false) {
	await message.reply(`[🎈] || Развлекательные:
🤔 » Кто [фраза]
📅 » Когда [фраза] 
📊 » Инфа [фраза] (выдает в %) 
🌆 » Погода [город]
✨ » Бутылочка
🤡 » Анекдот
`);
}
if(message.user.keyboard == true) {
	await message.reply(`[🎈] || Развлекательные:
🤔 » Кто [фраза]
📅 » Когда [фраза] 
📊 » Инфа [фраза] (выдает в %) 
🌆 » Погода [город]
✨ » Бутылочка
🤡 » Анекдот
`, 
		{
			keyboard:JSON.stringify(
		{
			"one_time": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "Помощь"
		},
			"color": "default"
		},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"2\"}",
				"label": "Гиф"
		},
			"color": "positive"
			},
		{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"3\"}",
				"label": "Анекдот"
		},
			"color": "positive"
			},
			{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"4\"}",
				"label": "Убрать клавиатуру"
			},
				"color": "negative"
			}]
		]
			})
		});
		}}
);	

cmd.hear(/^(?:!manager)$/i, async (message, bot) => {
	message.user.foolder += 1;
if(!message.isChat) return bot(`пожалуйста, напишите эту команду в беседе.`);
let text = ``;	
if(chats[message.chatid].activate == false) text += `🚧 » !Activate - Активация чата.`;
if(chats[message.chatid].activate == true) text += `
🆘 » !Warn [ссылка] - Выдать варн пользователю
⚠ » !Kick [ссылка] - Кикнуть пользователя с беседы
🔥 » !Unban [ссылка] - Разбанить пользователя
🌍 » !Permban [ссылка] - Забанить навсегда пользователя
✨ » !Роль - Ваша роль в беседе
🍎 » !Модер [ссылка] - Выдать модера пользователю
🍏 » !Админ [ссылка] - Выдать админа пользователю
🍊 » !Хелпер  [ссылка] - Выдать хелпера пользователю

♻ | Автоматически:
Варн за рекламу
Приветствие`;

			if(message.user.keyboard == false) {
					await message.reply(`[🛡] || Менеджер:

${text}
`);
}
if(message.user.keyboard == true) {
	await message.reply(`[🛡] || Менеджер:

${text}
`, 
		{
			keyboard:JSON.stringify(
		{
			"one_time": true,
			"buttons": [
			[{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"1\"}",
				"label": "Помощь"
		},
			"color": "default"
		},
			{
				"action": {
				"type": "text",
				"payload": "{\"button\": \"4\"}",
				"label": "Убрать клавиатуру"
			},
				"color": "negative"
			}]
		]
			})
		});
		}}
);
	
vk.updates.hear(/^(?:топ)$/i,  (message) => {
	let text = ``;
	var tops = []
	var tp = []
	for (i=0;i<200000;i++) {

		if(acc.users[i]){
		if(acc.users[i].level < 4 && acc.users[i].block_top == false){ 
			tops.push({
				id: i,
				idvk: acc.users[i].id,
				balance: acc.users[i].balance
				})
			}
		}  
	}
for (i=0;i<200000;i++) {
	if(acc.users[i]){
		if(acc.users[i].level < 4 && acc.users[i].block_top === false){
		tp.push({
			id: i,
			idvk: acc.users[i].id,
			lvl: acc.users[i].global_exs
			});
		}
	} 
}

tp.sort(function(a, b) {
		if (b.lvl > a.lvl) return 1;
		if (b.lvl < a.lvl) return -1;
		return 0;
	});

	tops.sort(function(a, b) {
		if (b.balance > a.balance) return 1
		if (b.balance < a.balance) return -1
		return 0
	})
	var ao = [];
	for (var g = 0; g < 5; g++) {
		if (tp.length > g) {
			let ups = g;
			ups += 1;
			if(g <= 8) ups = `&#8195;${ups}&#8419;`;
			if(g == 9) ups = `&#8195;&#128287;`;
			ao.push({
				id: tp[g].id,
				idvk: tp[g].idvk,
				lvl: tp[g].lvl,
				smile: `${ups}`
			});
		}
	}
	var yo = []
	for (var g = 0; g < 10; g++) {
		if (tops.length > g) {
			let ups = g;
			ups += 1;
			if(g <= 8) ups = `&#8195;${ups}&#8419;`
			if(g == 9) ups = `&#8195;&#128287;`
			yo.push({
				id: tops[g].id,
				idvk: tops[g].idvk,
				balance: tops[g].balance,
				smile: `${ups}`
			})
		}
	}
	text += `${people}\n\n➖➖➖➖➖➖➖➖➖➖\n\n${rating }`; 
	message.send(text);
});

cmd.hear(/^(?:роль 1)$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(message.user.right == 2) return bot(`вы уже имеете данную привилегию...`);
	if(message.user.right == 3) return bot(`вы уже имеете более высокую привилегию...`);
	if(message.user.right == 4) return bot(`вы уже имеете более высокую привилегию...`);
	if(message.user.reals < 5) return bot(`пополните баланс! Команда - товары`);
{
message.user.reals -= 5,
message.user.right = 2;
return message.send(`👍🏻 || Вы успешно купили привилегию: Vip`);
}
});

cmd.hear(/^(?:роль 2)$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(message.user.right == 3) return bot(`вы уже имеете данную привилегию...`);
	if(message.user.right == 4) return bot(`вы уже имеете более высокую привилегию...`);
	if(message.user.reals < 50) return bot(`пополните баланс! Команда - товары`);
{
message.user.reals -= 50,
message.user.right = 3;
return message.send(`👍🏻 || Вы успешно купили привилегию: Admin`);
}
});

cmd.hear(/^(?:VslomRasrabDonate 228666)$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(message.user.right == 4) return bot(`вы уже имеете данную привилегию...`);
	if(message.user.reals < 250) return bot(`пополните баланс! Команда - товары`);
{
message.user.reals -= 250,
message.user.right = 4;
return message.send(`👍🏻 || Вы успешно купили привилегию: разработчика`);
}
});

cmd.hear(/^(?:роль)$/i, async (message, bot) => {
	message.user.foolder += 1;

return bot(`тишина!`);
});


cmd.hear(/^(?:найти)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;

	let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);
		if(user.uid === message.user.uid) return bot(`неверный ID`);
			let text = ``;	
	
	text += `🔎 ID: ${user.uid}\n`;
	text += `&#128279; Ссылка:  vk.com/id${user.id}\n`;
	
	text += `\n🔥 ${user.right.toString().replace(/1/gi, "роль: Пользователь").replace(/2/gi, "Привилегия: Вип").replace(/3/gi, "Привилегия: Админ").replace(/4/gi, "Привилегия: Разработчик")}`;
	text += `\n📗 Дата регистрации в боте: ${user.regDate}`;
	return bot(`профиль игрока:\n${text}`);
	});

cmd.hear(/^(?:cid)$/i, async (message, bot) => {
if(!message.isChat) return bot(`команда работает только в беседе!`);
		return message.send(`[🎉] » ID этого чата: ${message.chatId}`);
	});   

cmd.hear(/^(?:профиль)$/i, async (message, bot) => {
	message.user.foolder += 1;
			let text = ``;	
			text += `Подробная статистика участника\n`;
    text += `[❤] || Основное:\n`;
	text += `&#4448;🔎 ⇢ ID: ${message.user.uid}\n`;
	text += `&#4448;👑 ⇢ Роль: ${message.user.right.toString().replace(/1/gi, "Пользователь").replace(/2/gi, "Вип").replace(/3/gi, "Админ").replace(/4/gi, "Разраб").replace(/5/gi, "СОЗДАТЕЛЬ")}\n`;
	text += `&#4448;&#128279; ⇢ Ссылка:  vk.com/id${message.user.id}\n`;
	text += `&#4448;🎵 ⇢ Голосовых:\n`
	text += `&#4448;🎧 ⇢ Аудио:\n`;
	text += `&#4448;📑 ⇢ Документов:\n`;
	text += `&#4448;📹 ⇢ Видео:\n`;
	text += `&#4448;📷 ⇢ Фото:\n`;
	text += `&#4448;🤣 ⇢ Стикеров и смайлов:\n`;
	text += `&#4448;👺 ⇢ Сообщений с матом:\n`;
	if(message.user.foolder) text += `&#4448;&#128228; ⇢ Использовано команд: ${message.user.foolder}\n`;
	if(message.user.floder) text += `&#4448;&#128229; ⇢ Всего сообщений: ${message.user.floder}\n`;
	if(message.user.diamonds || message.user.emeralds || message.user.coal || message.user.iron || message.user.gold)
	
    text += `=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=\n`;
    text += `&#4448;⚠ ⇢ Предупреждений: ${message.user.jalobs}\n`;

	text += `\n\n📗 ⇢ Дата регистрации: ${message.user.regDate}`;

	return message.send(`📢 | [id${message.user.id}|${message.user.tag}], вот ваш профиль:\n\n${text}`);
		}
);	

cmd.hear(/^(?:рп алл|rp all|все рп|рп команды)$/i, async (message, bot) => {
	message.user.foolder += 1;	
	await message.send(`
	&#4448;&#4448;&#4448;RP-команд:
	1.
	2.
	3.
	4.
	5.
	6.
	7.
	8.
	9.
	10.
	11.
	12.
	13.
	14.
	15.
	16.
	17.
	18.
	19.
	20.
	21.
	22.
	
	
	
	`)

})

vk.updates.on (['chat_invite_user', 'chat_invite_user_by_link'], async (context) => {
	if ((context.eventMemberId || context.senderId) === botId) {
	  await context.send ('🥰 божечки-кошечки, какой классный бот, я просто влюблена (• −− • −−− ••• - • - • −− - •• - ••• •• −− • −− • •• - • - • - • - • −− • −−− ••• - • - • - •• •• - • −−− ••• - • -) ')
	}
  })

cmd.hear(/^(?:Клан создать)\s(.*)$/i, async (message, bot) => {
    if(!message.args[1]) return bot(`введите название для клана!`); 
    if(message.user.right <= 1) {
    let zaprets1 = message.args[1].toLowerCase();
    var zapret = /(👨‍|🚀️|👩‍⚖️|👨‍⚖️|🎅|👸|🤴|👰|🤵|👼|🤰|🙇‍♀️|🙇|💁|💁‍♂️|🙅|🙅‍♂️|🙆|🙆‍♂️|🙋|🙋‍♂️|🤦‍♀️|🤦‍♂️|🤷‍♀️|🤷‍♂️|🙎|🙎‍♂️|🙍|🙍‍♂️|💇|💇‍♂️|💆|💆‍♂️|🕴|💃|🕺|👯|👯‍♂️|🚶‍♀️|🚶|🏃‍♀️|🏃|👫|👭|👬|💑|💏|👪|👚|👕|👖|👔|👗|👙|👘|👠|👡|👢|👞|👟|👒|🎩|👑|⛑|🎒|👝|👛|👜|💼|👓|🕶|🌂|☂|😀|😃|😄|😁|😆|😅|😂|🤣|☺|😊|😇|🙂|🙃|😉|😌|😍|😘|😗|😙|😚|😋|😜|😝|😛|🤑|🤗|🤓|😎|🤡|🤠|😏|😒|😞|😔|😟|😕|🙁|☹|😣|😖|😫|😩|😤|😠|😡|😶|😐|😑|😯|😦|😧|😮|😲|😵|😳|😱|😨|😰|😢|😥|🤤|😭|😓|😪|😴|🙄|🤔|🤥|😬|🤐|🤢|🤧|😷|🤒|🤕|😈|👿|👹|👺|💩|👻|💀|☠|👽|👾|🤖|🎃|😺|😸|😹|😻|😼|😽|🙀|😿|😾|👐|🙌|👏|🙏|🤝|👍|👎|👊|✊|🤛|🤜|🤞|✌|🤘|👌|👈|👉|👆|👇|☝|✋|🖐|🖖|👋|🤙|💪|🖕|✍|🤳|💅|🖖|💄|💋|👄|👅|👂|👃|👤|👣|👁|👀|🗣|👥|👶|👦|👧|👨|👩|👱‍♀️|👱|👴|👵|👲|👳‍♀️|👳|👮‍♀️|👮|👷‍♀️|👷|💂‍♀️|💂|🕵‍♀️|🕵|👩‍⚕️|👨‍⚕️|👩‍🌾️|👨‍🌾️|👩‍🍳️|👨‍🍳️|👩‍🎓️|👨‍🎓️|👩‍🎤️|👨‍🎤️|👩‍🏫️|👨‍🏫️|👩‍🏭️|👨‍🏭️|👩‍💻️|👨‍💻️|👩‍💼️|👨‍💼️|👩‍🔧️|👨‍🔧️|👩‍🔬️|👨‍🔬️|👩‍🎨️|👨‍🎨️|👩‍🚒️|👨‍🚒️|👩‍✈️|👨‍✈️|👩‍🚀️|👨‍🚀️|👩‍⚖️|👨‍⚖️|🎅|👸|🤴|👰|🤵|👼|🤰|🙇‍♀️|🙇|💁|💁‍♂️|🙅|🙅‍♂️|🙆|🙆‍♂️|🙋|🙋‍♂️|🤦‍♀️|🤦‍♂️|🤷‍♀️|🤷‍♂️|🙎|🙎‍♂️|🙍|🙍‍♂️|💇|💇‍♂️|💆|💆‍♂️|🕴|💃|🕺|👯|👯‍♂️|🚶‍♀️|🚶|🏃‍♀️|🏃|👫|👭|👬|💑|💏|👪|👚|👕|👖|👔|👗|👙|👘|👠|👡|👢|👞|👟|👒|🎩|🎓|👑|⛑|🎒|👝|👛|👜|💼|👓|🕶|🌂|☂|с о в а н е с п и т|сованикогданеспит|сова не спит никогда|красная сова|момо|momo|#|жопа|проебу|анально|не спит|никогда|сова|наркоторговец|наркота|наркотики|подкладка|подкладки|кокоин|кокаин|порно|хентай|секс|пидр|трах|насилие|зоофил|бдсм|сирия|hentai|hentay|синий кит|самоубийство|террористы|слив|цп|cp|маленькие|малолетки|сучки|трах|ебля|изнасилование|блять|хуй|пошел нах|тварь|мразь|сучка|гандон|уебок|шлюх|паскуда|оргазм|девственницы|целки|рассовое|мелкие|малолетки|несовершеннолетние|ебля|хентай|sex|bdsm|ebl|trax|syka|shlux|инцест|iznas|мать|долбаеб|долбаёб|хуесос|сучка|сука|тварь|пездюк|хуй|шлюх|бог|сатана|мразь)/
    var sss = zapret.test(zaprets1) 
if(zapret.test(zaprets1) == true){
    var check = true;
    return message.reply(`[🆘] » Ой... Похоже, что [nextgorun|Antoniksa] заблокировал запрещенные слова/символы/смайлики.\n\n[😉] » Чтобы убрать блокировку, Вы можете приобрести донат С Vip'а на сайте TopendBot.host || [nextgorun|админа]`);
}
	let text = message.args[1].toLowerCase();
 	var filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
	var filter1 = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/
	var lol = filter0.test(text)
	var lol1 = filter1.test(text)
	if(filter0.test(text) == true || filter1.test(text) == true){
		var check = true;
		return message.reply(`[🆘] »  Отказ! |-| Подозрительная сслыка.`);
}
	}else{ 
 	let user = message.user;
 	let name = message.args[1];
 	let clanid = message.user.clanid;
 	if(message.user.balance < 20) return message.reply(`[⚠] »  Создание клана стоит 10000000$!`);
 	message.user.balance -= 20;

 	if(clans[clanid]) return message.reply(`[⚠] »  У вас уже создан клан или Вы уже состоите в другом клане.`);
 	if(!clans[clanid]){
 		let smile = [`🤘`,`💥`,`💣`,`😻`,`😏`,`🤒`,`🤔`,`💎`,`♻`,`🏆`,`🔥`,`🌚`,`👻`,`💀`,`🎄`,`🎃`,`🚀`,`🎱`,`🍼`,`🍺`,`🐔`,`🐉`,`🌝`].random();  
 	 	botinfo.number += 1;
 	 	clans[botinfo.number] = {
 		owner: message.user,
 		users: {},
 		number: botinfo.number,
 		name: name,
 		balance: 0,
 		smile: smile,
 		open: true,
 		price: 100,
        exs: 0,
        people: 0
 	}
 	user.clanid = botinfo.number;
 	clans[botinfo.number].users[message.user.uid] = {
 		                    names: message.user.tag,
        	        		level: 2
    }
 	 

 	return message.send(`
 		&#4448;${clans[user.clanid].smile} + ${name} + ${clans[user.clanid].smile}&#4448; 

 		[${clans[user.clanid].smile}] >> Я успешно создал клан под названием - ${name}
 		[${clans[user.clanid].smile}] >> Создатель клана - vk.com/id${message.user.id}
 		[${clans[user.clanid].smile}] >> Логотип клана: ${clans[user.clanid].smile}
 		[${clans[user.clanid].smile}] >> Тип клана: открытый.

 		[${clans[user.clanid].smile}] >> Команды клана: Кпомощь
 		`);
}}
});

cmd.hear(/^(?:покинуть)/i, async (message, bot) => {


  
 
	let user = message.user;
	let idclan = message.user.clanid;
	if(!clans[idclan]) return message.reply(`Вы не в клане.`); 
    
	if(message.user.clanid == false) return message.reply(`Вы не состоите в клане.`); 
	if(clans[idclan].users[message.user.uid].level == 2) return message.reply(`Создатель не может выйти из клана.`);
	user.clanid = false;
	delete clans[idclan].users[message.user.uid];
    return message.reply(`Вы добровольно покинули клан.`);
});

cmd.hear(/^(?:Коткрыть)/i, async (message, bot) => {

	let user = message.user;
	let clanid = message.user.clanid;
	if(!clans[clanid]) return message.reply(`У вас нет клана.`); 
	if(clans[clanid].users[message.user.uid].level < 2) return message.reply(`Вы не создатель  клана.`);
    if(clans[clanid].open == true) return message.reply(`Клан уже открытый.`)
    clans[clanid].open = true;
	return message.reply(`Вы открыли клан. Цена за вход: ${clans[clanid].price}$`);
});

cmd.hear(/^(?:Кзакрыть)/i, async (message, bot) => {

	let user = message.user;
	let clanid = message.user.clanid;
	if(!clans[clanid]) return message.reply(`У вас нет клана.`);
	if(clans[clanid].users[message.user.uid].level < 2) return message.reply(`Вы не создатель  клана.`);
    if(clans[clanid].open == false) return message.reply(`Клан уже закрытый.`)
    clans[clanid].open = false;
	return message.reply(`Вы закрыли клан. Набор участников могут проводить только зам/создатель :3`);
});

cmd.hear(/^(?:Квход)\s([0-9]+)$/i, async (message, bot) => {

	let user = message.user;
	let clanid = message.user.clanid;
	if(!clans[clanid]) return message.reply(`У вас нет клана.`);
	if(clans[clanid].users[message.user.uid].level < 2) return message.reply(`Вы не создатель  клана.`);
    if(!message.args[1]) return message.reply(`Укажите сумму для входа в клан.`);
    if(message.args[1] < 100) return message.reply(`Сумма для входа в клан не должна быть < 100 Coins`);
    if(message.args[1] > 50000) return message.reply(`Сумма для входа в клан не должна быть > 50000 Coins`);
    clans[clanid].price = Number(message.args[1]);
    return message.reply(`Вы установили цену за вход в размере ${Number(message.args[1])} Coins`);
});

cmd.hear(/^(?:Вступить)\s([0-9]+)$/i, async (message, bot) => {



    let user = message.user;
	let idclan = message.args[1]; 
	if(message.users.clanid != false) return message.reply(`Вы уже состоите в клане.`);
	if(!message.args[1]) return message.reply(`Вы не указали ID клана.`);
	 
	 
	if(!clans[idclan]) return message.reply(`Данного клана не существует.`);
	if(clans[idclan].open == false) return message.reply(`Данный клан закрыт. В него нельзя войти.`);
	if(clans[idclan].open == true){
		if(message.user.balance < clans[idclan].price) return message.reply(`Вход в данный клан стоит: ${spaces(clans[idclan].price)} Coins`);
		message.user.balance -= Number(clans[idclan].price);
		clans[idclan].price += clans[idclan].price;
		message.user.clanid = Number(message.args[1]);
		if(!clans[idclan].users[message.user]){
        	        	clans[idclan].users[message.user.uid] = {
        	        		level: 0
        	        	}
        }
        return message.reply(`Вы вошли в клан за ${spaces(clans[idclan].price)} Coins \n\n Команды клана - Кпомощь`, {attachment: 'photo512809754_456239056'});
	}
});

cmd.hear(/^(?:Кназвание)\s([^]+)$/i, async (message, bot) => {


 	if(!message.args[1]) return message.send(`⚠ »  Укажите название для клана.`);
 	if(message.user.right <= 1) {
 	    let zaprets1 = message.args[1].toLowerCase();
    var zapret = /(с о в а н е с п и т|сованикогданеспит|сова не спит никогда|красная сова|момо|momo|#|жопа|проебу|анально|не спит|никогда|сова|наркоторговец|наркота|наркотики|подкладка|подкладки|кокоин|кокаин|порно|хентай|секс|пидр|трах|насилие|зоофил|бдсм|сирия|hentai|hentay|синий кит|самоубийство|террористы|слив|цп|cp|маленькие|малолетки|сучки|трах|ебля|изнасилование|блять|хуй|пошел нах|тварь|мразь|сучка|гандон|уебок|шлюх|паскуда|оргазм|девственницы|целки|рассовое|мелкие|малолетки|несовершеннолетние|ебля|хентай|sex|bdsm|ebl|trax|syka|shlux|инцест|iznas|мать|долбаеб|долбаёб|пизда|хуесос|сучка|сука|тварь|пездюк|хуй|шлюх|бог|сатана|мразь)/
    var sss = zapret.test(zaprets1) 
if(zapret.test(zaprets1) == true){
    var check = true;
 return message.reply(`[🆘] » Ой... Похоже, что [nextgorun|Antoniksa] заблокировал запрещенные слова/символы/смайлики.\n\n[😉] » Чтобы убрать блокировку, Вы можете приобрести донат С Vip'а на сайте TopendBot.host || [nextgorun|админа]`);
}
	let text = message.args[1].toLowerCase();
 	var filter0 = /(http(s)?:\/\/.)?(www\.)?[-a-z0-9@:%._\+~#=]{1,256}\.[a-z]{2,6}/
	var filter1 = /(?!http(s)?:\/\/)?(www\.)?[а-я0-9-_.]{1,256}\.(рф|срб|блог|бг|укр|рус|қаз|امارات.|مصر.|السعودية.)/
	var lol = filter0.test(text)
	var lol1 = filter1.test(text)
	if(filter0.test(text) == true || filter1.test(text) == true){
		var check = true;
		return message.send(`[🆘] »  Отказ! |-| Подозрительная сслыка.`);
}
	}else{
		 	let user = message.user;
			let clanid = user.clanid;
			if(!clans[clanid]) return message.reply(`У вас нет клана.`);
			if(clans[clanid].users[message.user.uid].level < 2) return message.reply(`Вы не создатель  клана.`);
		    if(clans[clanid].balance < 10000) return message.reply(`На балансе клана нету 10.000 Coins `);
		   	clans[clanid].balance -= 10000;

			if(clans[clanid]){
				if(message.user != clans[clanid].owner) return message.reply(`Изменить название клана может только Создатель!`);
				if(message.user == clans[clanid].owner){
					clans[clanid].name = message.args[1];
					return message.reply(`Вы успешно изменили название клана за 10.000 Coins!`);
				}
			}
	}  

});

cmd.hear(/^(?:Клого)/i, async (message, bot) => {

	let user = message.user;
	let clanid = message.user.clanid;
	if(!clans[clanid]) return message.reply(`У вас нет клана.`);
	if(clans[clanid].users[message.user.uid].level < 1) return message.reply(`Вы не создатель/заместитель клана.`);
    if(clans[clanid].balance < 10000) return message.reply(`На балансе клана нету 10.000 Coins`);
    clans[clanid].balance -= 10000;

	if(clans[clanid]){
			let smile = [`📺`,`💥`,`💣`,`💎`,`♻`,`🏆`,`🔥`,`🌚`,`👻`,`💀`,`🎄`,`🎃`,`🚀`,`🎱`,`🍼`,`🍺`,`🐔`,`🐉`,`🌈`,`🌝`].random(); 
			clans[clanid].smile = smile;
			return message.reply(`Вы успешно изменили логотип клана за 10.000 Coins!`);
	}
});

cmd.hear(/^(?:Клан)/i, async (message, bot) => {

let user = message.user;
	let clanid = message.user.clanid;
if(!clans[clanid]) return message.reply(`У вас нет клана.`);

let text = ``;
let tipe = ``;
text += `[🏆] | Участники Клана: \n\n`;

text += `[${clans[clanid].smile}] >> [id${clans[clanid].owner.id}|${clans[clanid].owner.tag}] | Создатель.\n\n`;
 	for(let id in clans[clanid].users) {
             let people = clans[clanid].users[id];   
        	 if(clans[clanid].users[id].level == 1) text += `[${clans[clanid].smile}] >> [id${clans[clanid].users[id]}|${people.prefix}] | Заместитель.\n\n`;
        	 if(clans[clanid].users[id].level == 0) text += `[${clans[clanid].smile}] >> [id${clans[clanid].users[id]}|${people.prefix}] | Участник.\n`;
        }

 function indexOfByKey(array, key, value) {
        for (var i = 0; i < array.length; i++) {
            if (array[i][key] == value) {
                return i;
            }
        }
        return null;
    }
    
    var tops = []
    for (let i in clans) {
        tops.push({
            id: i,
            balance: clans[i].balance
        })
    }
    tops.sort(function(a, b) {
        if (b.balance > a.balance) return 1
        if (b.balance < a.balance) return -1
        return 0
    })
   
    var inTop = indexOfByKey(tops, 'id', message.user);
    inTop++; 


if(clans[clanid].open == true) tipe += `Открытый.`
if(clans[clanid].open == false) tipe += `Закрытый.`
if(clans[clanid]){
    let exs = 0;
    let convert = 0;


	return message.reply(`
		[${clans[clanid].smile}]: ~ ${clans[clanid].name} ~ :[${clans[clanid].smile}]

 		[${clans[clanid].smile}] »  Создатель: [id${clans[clanid].owner.id}|${clans[clanid].owner.tag}]
 		[${clans[clanid].smile}] »  Номер клана: ${clans[clanid].number}
 		[${clans[clanid].smile}] »  Логотип клана: ${clans[clanid].smile} 
 		[${clans[clanid].smile}] »  Тип клана: ${tipe}
 		[${clans[clanid].smile}] »  Цена за вход: ${clans[clanid].price} Coins
        [💰] »  На балансе клана: ${clans[clanid].balance} Coins

        [🔥] »  Баланс клана: ${clans[clanid].balance}
        [🌍] »  Место в топе: ${inTop}

 		${text}
		`);
	} 
});

cmd.hear(/^(?:Кпомощь)/i, async (message, bot) => {

	let user = message.user;
 	let clanid = message.user.clanid;
 	if(!clans[clanid]) return message.reply(`У вас нет клана.`);

if(clans[clanid].users[message.user.uid].level < 1){
	return message.reply(`
		${clans[clanid].smile} - Команды клана -  ${clans[clanid].smile}
		${clans[clanid].smile} Клан - Информация о вашем клане.
		${clans[clanid].smile} КПоложить <сумма> - положить Coins в банк клана.
		${clans[clanid].smile} Кбанк - баланс клана.

		${clans[clanid].smile} Покинуть - Выйти из клана(от vip юзера)
		`);
}
if(clans[clanid].users[message.user.uid].level == 1){
	return message.reply(`
		${clans[clanid].smile} - Команды клана -  ${clans[clanid].smile}
		${clans[clanid].smile} Клан - Информация о вашем клане. 
		${clans[clanid].smile} ККик ID(user'a) - выгнать из клана.
		${clans[clanid].smile} КЛого - Сменить логотип клана.
		${clans[clanid].smile} КПоложить <сумма> - положить Coins в банк клана.
		${clans[clanid].smile} КБанк - баланс клана.

		${clans[clanid].smile} Покинуть - Выйти из клана (Только от vip пользователей)
		`);
}
if(clans[clanid].users[message.user.uid].level == 2){
	return message.reply(`
		${clans[clanid].smile} - Команды клана -   ${clans[clanid].smile}
		${clans[clanid].smile} Клан - Информация о вашем клане. 
		${clans[clanid].smile} ККик (ID Пользователя) - выгнать из клана.
		${clans[clanid].smile} Кмодер (ID Пользователя) - назначить заместителем.
		${clans[clanid].smile} КУдалить (ID Пользователя) - снять заместителя.
		${clans[clanid].smile} КНазвание (name) - изменить название клана.
		${clans[clanid].smile} КЛого - Сменить логотип клана.

		${clans[clanid].smile} КОткрыть - Открыть клан.
		${clans[clanid].smile} КЦена - Установить цену за вход.
		${clans[clanid].smile} КЗакрыть - Закрыть клан.

		${clans[clanid].smile} КПоложить <сумма> - положить Coins в банк клана.
		${clans[clanid].smile} КСнять <сумма> - снять Coins из банка клана.
		${clans[clanid].smile} КБанк - баланс клана.

		${clans[clanid].smile} Clanwar [id клана] [сумма] - Атаковать клан!
		`);
}
});

cmd.hear(/^(?:Кположить)\s(.*)$/i, async (message, bot) => {

	if(!message.args[1]) return message.reply(`Укажите сумму вклада.`);
	let user = message.user;
 	let clanid = message.user.clanid;
	if(!clans[clanid]) return message.reply(`У вас нет клана.`);
	if(message.args[1] > message.user.balance || message.args[1] <= 0) return message.reply(message.args[1] <= 0 ? `Вклад не может быть меньше 0 или равен 0 Coins.` : `Вклад не может превышать Ваш баланс.`);
	message.user.balance -= Number(message.args[1]);
	clans[clanid].balance += Number(message.args[1]);
	return message.reply(`Вы успешно положили ${spaces(message.args[1])} Coins в банк клана.`);
});

cmd.hear(/^(?:Кснять)\s(.*)$/i, async (message, bot) => {

	if(!message.args[1]) return message.reply(`Укажите сумму снятия.`);
	let user = message.user;
 	let clanid = message.user.clanid;
	if(!clans[clanid]) return message.reply(`У вас нет клана.`);
	if(clans[clanid].users[message.user.uid].level < 2) return message.reply(`Снимать деньги может только создатель клана.`);
    
	if(message.args[1] > clans[clanid].balance) return message.reply(`Данной суммы нет в банке клана.`);
	if(message.args[1] <= 0) return message.reply(`Сумма не должна быть меньше или равно 0 Coins`);
	message.user.balance += Number(message.args[1]);
	clans[clanid].balance -= Number(message.args[1]);
	return message.reply(`[${clans[clanid].smile}] »  Вы успешно сняли ${spaces(message.args[1])} Coins с банка клана.`);
});

cmd.hear(/^(?:clanwar)\s([0-9]+)\s([^\s	].*)$/i, async (message, bot) => {
		let clanid = message.user.clanid;
		if(!message.args[1]) return bot(`Укажите ID клана, который хотите атаковать.`);
		if(!message.args[2]) return bot(`Укажите ставку.`);
		let id = Number(message.args[1]); 
		let amount = parserInt(message.args[2]);
		if(!Number(amount)) return bot(`укажите корректно ставку.`);
		if(amount < 1000) return bot(`минимальная сумма для атаки 1.000💰`);
		if (clans[clanid].users[message.user.uid].level < 1) return bot(`вы не ~создатель/заместитель~  клана.`);
		if(id == clanid) return bot(`нельзя нападать на свой клан.`);
		if(amount > clans[clanid].balance) return bot(`на счету вашего клана не хватает 💰`);
		if(amount > clans[id].balance) return bot(`на счету клана не хватает 💰`); 
		if (clanid == false) return bot(`у вас нет клана.`);
		if (!clans[clanid]) return bot(`у вас нет клана.`);
		if (!clans[id]) return bot(`такого клана нет.`);

if(message.user.right <= 1) {
	if(message.user.timers.clanwar) return bot(`в ближайшие 10 минут, Вы сможете ещё раз атаковать клан!`);

	setTimeout(() => {
		message.user.timers.clanwar = false;
	}, 600000);

	message.user.timers.clanwar = true;
}

		let win = rand(1,2);
		if(win == 1){
			clans[id].balance += amount;
			clans[clanid].balance -= amount;
			return message.send(`🛡 Clan War 🛡\n[⚔] >> Клан ${clans[clanid].name} напал на ${clans[id].name}\n[🏆] >> Победу одержал клан: ${clans[id].name}\n💰 >> Выигрыш: ${spaces(amount)} 💰`);
		}else{
			clans[id].balance -= amount;
			clans[clanid].balance += amount;
			return message.send(`🛡 Clan War 🛡\n[⚔] >> Клан ${clans[clanid].name} напал на ${clans[id].name}\n[🏆] >> Победу одержал клан: ${clans[clanid].name}\n💰 >> Выигрыш: ${spaces(amount)} 💰`);
		}
	});	

cmd.hear(/^(?:Кмодер)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;

	let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);
		if(user.uid === message.user.uid) return bot(`неверный ID`);

 	let clanid = user.clanid;
 	if(!clans[clanid]) return message.reply(`этот человек не состоит в клане.`);
 	if(clans[clanid].users[message.user.uid].level < 2) return message.reply(`Вы не создатель/заместитель клана.`);
        	        
    if(message.args[4]) {
        var domain = message.args[4].split(" ");
        vk.api.call("utils.resolveScreenName", {
            screen_name: message.args[4]
        })
        .then((res) => {

        	        if(!clans[clanid]) return message.reply(`этот человек не состоит в клане.`);
              	    if(user.clanid != message.user.clanid) return message.reply(`Юзер уже состоит в другом клане.`);
        	       

        	        clans[clanid].users[user.uid].level = 1;
        	        return message.reply(`vk.com/id${user.id} был назначен заместителем в клане.`); 

        })
        return;
    }else{

        if(!clans[clanid]) return message.reply(`этот человек не состоит в клане.`);
        if(user.clanid != message.user.clanid) return message.reply(`Юзер уже состоит в другом клане.`);
          

        	clans[clanid].users[user.uid].level = 1;
        	return message.reply(`vk.com/id${user.id} был назначен заместителем в клане.`); 
    }
});

cmd.hear(/^(?:Кудалить)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;

	let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);
		if(user.uid === message.user.uid) return bot(`неверный ID`);


 	let clanid = message.user.clanid;
 	if(!clans[clanid]) return message.reply(`этот человек не состоит в клане.`);
 	if(clans[clanid].users[message.user.uid].level < 2) return message.reply(`Вы не создатель/заместитель клана!`);
        	        
    if(message.args[4]) {
        var domain = message.args[4].split(" ");
        vk.api.call("utils.resolveScreenName", {
            screen_name: message.args[4]
        })
        .then((res) => {

              	    if(user.clanid != acc.users[message.user.uid].clanid) return message.reply(`Юзер уже состоит в другом клане.`);
         			if(!clans[clanid]) return message.reply(`этот человек не состоит в клане.`);
        	        
        	        clans[clanid].users[user.uid].level = 0;
        	        return message.reply(`vk.com/id${user.id} был понижен до "участника" в клане.`);
        })
        return;
    }else{

        if(acc.users[user.uid].clanid != acc.users[message.user].clanid) return message.reply(`Юзер уже состоит в другом клане.`);
         if(!clans[clanid]) return message.reply(`этот человек не состоит в клане.`);

        	clans[clanid].users[user.uid].level = 0;
        	return message.reply(`vk.com/id${user.id} был понижен до "участника" в клане.`);      
    }
});






cmd.hear(/^(?:уведомления)\s(выкл|вкл)$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(message.args[1].toLowerCase() === 'выкл')
	{
		message.user.notifications = false;
		return bot(`🔕 || ${message.user.tag}, к сожалению, Вы отключили уведомления! :(`);
	}

	if(message.args[1].toLowerCase() === 'вкл')
	{
		return message.send(`🔔 || [id${message.user.id}|${message.user.tag}], Вы обрано включили уведомления! :3`);
	}
});

cmd.hear(/^(?:ник)\s(вкл|выкл)$/i, async (message, bot) => {
	message.user.foolder += 1;

	if(message.args[1].toLowerCase() === 'вкл')
	{
		message.user.mention = true;
		return bot(`гиперссылка включена!`);
	}

	if(message.args[1].toLowerCase() === 'выкл')
	{
		message.user.mention = false;
		return bot(`гиперссылка отключена!`);
	}
});

cmd.hear(/^(?:ник|зови меня|зови)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
if(message.user.right <= 1) {
	if(message.args[1].length >= 16) return bot(`максимальная длина ника 15 символов\n\n» Чтобы убрать блокировку, Вы можете приобрести донат С Vip'а на сайте TopendBot.host || [nextgorun|админа]`);
}
	message.user.tag = message.args[1];
	return bot(`вы теперь "${message.user.tag}"`);
});





vk.updates.hear(/^(?:unban)\s?([0-9]+)?/i, (message) => { 
	let user = acc.users[user_id(message.user)];
	if(!message.$match[1]) return message.send(`🔸  Пример команды: unban ID`);
	if(!Number(message.$match[1])) return message.send(`🔸  Число должно быть цифрового вида.`);
	if(user.level < 3) return message.send(`🔸  Вы не администратор`);
	if(!acc.users[message.$match[1]]) return message.send(`❎  Такого игрока нет!`);
	acc.users[message.$match[1]].ban = false 
	vk.api.call('messages.send', {
		peer_id: acc.users[message.$match[1]].id,
		message: `✅  ${user.prefix} разблокировал Вас.`
	});
	var is = [user_id(message.user), message.text] 
	adm_log(is)
	return message.send(`✅  Вы разблокировали игрока [${acc.users[message.$match[1]].prefix}]`);
}); 
////////////////////
///////////////////////////////////
vk.updates.hear(/^(?:warn)\s?([0-9]+)?\s([^]+)?/i, (message) => { 
	let user = acc.users[user_id(message.user)];
	if(!message.$match[1] || !message.$match[2]) return message.send(`🔸  Пример команды: warn [ID] [ПРИЧИНА]`);
	if(!Number(message.$match[1])) return message.send(`🔸  Число должно быть цифрового вида.`);
	if(user.level < 2) return message.send(``);
	if(!acc.users[message.$match[1]]) return message.send(`❎  Такого игрока нет!`);

	acc.users[message.$match[1]].warn += 1;
	acc.users[message.$match[1]].warn_p.push(message.$match[2]);
	logs(user_id(message.user), message.$match[1], message.$match[2], type = 6)

	var is = [user_id(message.user), message.text] 
	adm_log(is)
	if(message.$match[1] == 1) {
			user.warn += 1;
			return message.send(`Нельзя! Ты получаешь 1 варн. После 3-х варнов, ты будешь забанен!`);
}

	let text = `✅  ${user.prefix} выдал вам warn (предупреждение) [${message.$match[2]}]`
	if(acc.users[message.$match[1]].warn == 3){
		acc.users[message.$match[1]].warn = 0;
		acc.users[message.$match[1]].ban = true;
		acc.users[message.$match[1]].warn_p = []
		text += `\n 🔸  У вас 3 предупреждения.\n🔸  Ваш аккаунт заблокирован.`
	}
	vk.api.call('messages.send', {
		peer_id: acc.users[message.$match[1]].id,
		message: text
	});
	user.ainfo.warns += 1;
	return message.send(`✅  Вы выдали предупреждение игроку [${acc.users[message.$match[1]].prefix}].`);
}); 
///////////////////////////////
vk.updates.hear(/^(?:unwarn)\s?([0-9]+)?/i, (message) => { 
	let user = acc.users[user_id(message.user)];
	if(!message.$match[1]) return message.send(`🔸  Пример команды: unwarn ID`);
	if(!Number(message.$match[1])) return message.send(` 🔸  Число должно быть цифрового вида.`);
	if(user.level < 5) return message.send(`🔸  Вы не администратор`);
	if(!acc.users[message.$match[1]]) return message.send(`❎  Такого игрока нет!`);

	acc.users[message.$match[1]].warn = 0; 
	acc.users[message.$match[1]].warn_p = []

	vk.api.call('messages.send', {
		peer_id: acc.users[message.$match[1]].id,
		message: `✅  Администратор снял Вам все предупреждения`
	});
	var is = [user_id(message.user), message.text] 
	adm_log(is)
	return message.send(`✅  Вы сняли все предупреждения игроку [${acc.users[message.$match[1]].prefix}].`);
}); 
///////////////////////////////
vk.updates.hear(/^(?:vig)\s?([0-9]+)?/i, (message) => { 
	if(user_id(message.user) != 1) return;
	let user = acc.users[user_id(message.user)];
	if(!message.$match[1]) return message.send(`🔸 Пример команды: vig [ID] `);
	if(!Number(message.$match[1])) return message.send(`🔸 Число должно быть цифрового вида.`);
	if(user.level < 4) return message.send(`🔸  Вы не администратор`);
	if(!acc.users[message.$match[1]]) return message.send(`❎Такого игрока нет!`);

	acc.users[message.$match[1]].ainfo.vig += 1; 

	var is = [user_id(message.user), message.text] 
	adm_log(is)

	let text = `✅ ➾ ${user.prefix} выдал вам админ-выговор.\n✅ После 3 вас снимет с админ-поста.`
	if(acc.users[message.$match[1]].ainfo.vig == 3){
		acc.users[message.$match[1]].ainfo.vig = 0;  
		acc.users[message.$match[1]].level = 0;
		text += `\n🔸 ➾ У вас 3 предупреждения.\n🔸 Вы лишились админ-прав.`
	}
	vk.api.call('messages.send', {
		peer_id: acc.users[message.$match[1]].id,
		message: text
	}); 
	return message.send(`✅ Вы выдали выговор игроку [${acc.users[message.$match[1]].prefix}].`);
});  
cmd.hear(/^(?:топ)$/i, async (message, bot) => {
	message.user.foolder += 1;

	return bot(`вот список топов:

		[&#9993;] >> "Топ сообщений"
		[&#9993;] >> "Топ кланы"`);
});

	cmd.hear(/^(?:топ кланы)$/i, async (message, bot) => {
	message.user.foolder += 1;
		let text = "";
		let tops = [];
		
		for(key in clans) {
			tops.push({
				id: key,
				balance: clans[key].balance,
				name: clans[key].name,
				owner: clans[key].owner,
				exp: 0
			});
		}
		tops.sort((a,b) => {
			if(a.balance < b.balance)
				return 1;
			else if (a.balance > b.balance)
				return -1;
			return 0;
		});
		
		let topClans = [];
		for(i = 0; i < (tops.length > 10 ? 9 : tops.length); i++) {
			topClans.push({
				id: tops[i].id,
				balance: tops[i].balance,
				name: tops[i].name,
				owner: tops[i].owner,
				exp: 0,
				number: i
			})
		};
		
		
		return message.send(
			"💰 » Топ самых сильных кланов: \n\n" +
			topClans.map(e => 
				(e.number+1) + `&#8419;. ` + e.name +
				`\n🐱 » Основатель: [id${e.owner.id}|${e.owner.tag}]\n` +
				`\n🔥 » Id клана: ` + e.number +
				`\n🌍 » Количество участников: ` + e.people + `\n\n`)
		);
});

cmd.hear(/^(?:топ сообщений)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let top = [];

	users.map(x=> {
		top.push({ foolder: x.foolder, tag: x.tag, id: x.id, mention: x.mention });
	});

	top.sort((a, b) => {
		return b.foolder - a.foolder;
	});

	let text = ``;
	const find = () => {
		let pos = 1000;

		for (let i = 0; i < top.length; i++)
		{
			if(top[i].id === message.senderId) return pos = i;
		}

		return pos;
	}

	for (let i = 0; i < 10; i++)
	{
		if(!top[i]) return;
		const user = top[i];

		text += `${i === 9 ? `&#128287;` : `${i + 1}&#8419;`} @id${user.id} (${user.tag}) — ${utils.sp(user.foolder)}&#9993;
		`;
	}

	return message.send(`Топ участников по сообщениям:
		${text}
—————————————————

 ${message.user.tag} — ${utils.sp(message.user.foolder)}&#9993;`);
});

cmd.hear(/^(?:репорт|реп|rep|жалоба)\s([^]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.isChat) return bot(`команда работает только в ЛС.`);

       let zaprets1 = message.args[1].toLowerCase();
    var zapret = /(🥃|👨‍|🚀️|👩‍⚖️|👨‍⚖️|🎅|👸|🤴|👰|🤵|👼|🤰|🙇‍♀️|🙇|💁|💁‍♂️|🙅|🙅‍♂️|🙆|🙆‍♂️|🙋|🙋‍♂️|🤦‍♀️|🤦‍♂️|🤷‍♀️|🤷‍♂️|🙎|🙎‍♂️|🙍|🙍‍♂️|💇|💇‍♂️|💆|💆‍♂️|🕴|💃|🕺|👯|👯‍♂️|🚶‍♀️|🚶|🏃‍♀️|🏃|👫|👭|👬|💑|💏|👪|👚|👕|👖|👔|👗|👙|👘|👠|👡|👢|👞|👟|👒|🎩|👑|⛑|🎒|👝|👛|👜|💼|👓|🕶|🌂|☂|😀|😃|😄|😁|😆|😅|😂|🤣|☺|😊|😇|🙂|🙃|😉|😌|😍|😘|😗|😙|😚|😋|😜|😝|😛|🤑|🤗|🤓|😎|🤡|🤠|😏|😒|😞|😔|😟|😕|🙁|☹|😣|😖|😫|😩|😤|😠|😡|😶|😐|😑|😯|😦|😧|😮|😲|😵|😳|😱|😨|😰|😢|😥|🤤|😭|😓|😪|😴|🙄|🤔|🤥|😬|🤐|🤢|🤧|😷|🤒|🤕|😈|👿|👹|👺|💩|👻|💀|☠|👽|👾|🤖|🎃|😺|😸|😹|😻|😼|😽|🙀|😿|😾|👐|🙌|👏|🙏|🤝|👍|👎|👊|✊|🤛|🤜|🤞|✌|🤘|👌|👈|👉|👆|👇|☝|✋|🖐|🖖|👋|🤙|💪|🖕|✍|🤳|💅|🖖|💄|💋|👄|👅|👂|👃|👤|👣|👁|👀|🗣|👥|👶|👦|👧|👨|👩|👱‍♀️|👱|👴|👵|👲|👳‍♀️|👳|👮‍♀️|👮|👷‍♀️|👷|💂‍♀️|💂|🕵‍♀️|🕵|👩‍⚕️|👨‍⚕️|👩‍🌾️|👨‍🌾️|👩‍🍳️|👨‍🍳️|👩‍🎓️|👨‍🎓️|👩‍🎤️|👨‍🎤️|👩‍🏫️|👨‍🏫️|👩‍🏭️|👨‍🏭️|👩‍💻️|👨‍💻️|👩‍💼️|👨‍💼️|👩‍🔧️|👨‍🔧️|👩‍🔬️|👨‍🔬️|👩‍🎨️|👨‍🎨️|👩‍🚒️|👨‍🚒️|👩‍✈️|👨‍✈️|👩‍🚀️|👨‍🚀️|👩‍⚖️|👨‍⚖️|🎅|👸|🤴|👰|🤵|👼|🤰|🙇‍♀️|🙇|💁|💁‍♂️|🙅|🙅‍♂️|🙆|🙆‍♂️|🙋|🙋‍♂️|🤦‍♀️|🤦‍♂️|🤷‍♀️|🤷‍♂️|🙎|🙎‍♂️|🙍|🙍‍♂️|💇|💇‍♂️|💆|💆‍♂️|🕴|💃|🕺|👯|👯‍♂️|🚶‍♀️|🚶|🏃‍♀️|🏃|👫|👭|👬|💑|💏|👪|👚|👕|👖|👔|👗|👙|👘|👠|👡|👢|👞|👟|👒|🎩|🎓|👑|⛑|🎒|👝|👛|👜|💼|👓|🕶|🌂|☂|с о в а н е с п и т|сованикогданеспит|сова не спит никогда|красная сова|момо|momo|#|жопа|проебу|анально|не спит|никогда|сова|наркоторговец|наркота|наркотики|подкладка|подкладки|кокоин|кокаин|порно|хентай|секс|пидр|трах|насилие|зоофил|бдсм|сирия|hentai|hentay|синий кит|самоубийство|террористы|слив|цп|cp|маленькие|малолетки|сучки|трах|ебля|изнасилование|блять|хуй|пошел нах|тварь|мразь|сучка|гандон|уебок|шлюх|паскуда|оргазм|девственницы|целки|рассовое|мелкие|малолетки|несовершеннолетние|ебля|хентай|sex|bdsm|ebl|trax|syka|shlux|инцест|iznas|мать|долбаеб|долбаёб|хуесос|сучка|сука|тварь|пездюк|хуй|шлюх|бог|сатана|мразь)/
    var sss = zapret.test(zaprets1) 
if(zapret.test(zaprets1) == true){
    var check = true;
    return message.reply(`☒ -> Отказ отправление репорта!

    	⚠ >> Причина:
    	Прости, но нельзя использовать символы и маты в репортах.`);
}

	vk.api.messages.send({ user_id: 341406505, forward_messages: message.id, message: `<<☐>> Чтобы отправить ответ пользователю, вы должны написать - Ответ ${message.user.uid} (Ваш ответ) <<☐>>` }).then(() => {
		return bot(`ваше сообщение на стадии расмотрения.`);
	}).catch((err) => {
		return message.send(`☒ -> Отказ отправление репорта!
			
			⚠ >> Причина:
			Кажись, одмен, который купил етого бота, не правильно настроил его.
			Вы можете написать НАСТОЯЩЕМУ администратору бота - [Повелителю|Антону] (vk.com/iiiiiiiiiiiiiiiia)`);
	});
});
	

/* |                                       | */
/* |          Чат команды (Беседа)         | */
/* V                                       V */

cmd.hear(/^(?:кто)/i, async (message, bot) => {
	message.user.foolder += 1;
	if(!message.isChat) return bot(`команда работает только в беседе!`);
    let { profiles } = await vk.api.messages.getConversationMembers({
        peer_id: message.peerId
    });
    let profile = getRandomElement(profiles);
    await message.send(
        getRandomElement(['Это точно', 'Я уверен, что это', 'Твоя мама говрит, что это', 'Кнч, это', 'Думаю, что это', 'Наверное, это', 'Википедия говорит, что это', 'Сотку даю, что это']) + ' -- @id' + profile.id + '(' + profile.first_name + ')'
    );
});

cmd.hear(/^(?:бутылочка)$/i, async (message, bot) => { 
	message.user.foolder += 1;
		if(!message.isChat) return bot(`команда работает только в беседе!`);
let { profiles } = await vk.api.messages.getConversationMembers({ 
peer_id: message.peerId 
}); 
let profile = utils.pick(profiles); 
let profile2 = utils.pick(profiles); 
message.send(`[🍷]: Бутылочка :[🍷]

[id${profile.id}|${profile.first_name}] и [id${profile2.id}|${profile2.first_name}] — любимое действие для парочек: ` + utils.pick(['Заняться сексом!', 'Поцеловаться', 'Сесть на бутылочку', 'Начать встречаться', '*Вы пропускаете ход*','69', 'Раздеться', 'Бухнуть', 'Пожениться'])); 
});

cmd.hear(/^(?:онлайн|Кто онлайн)$/i, async (message, bot) => {
	message.user.foolder += 1;
		if(!message.isChat) return bot(`команда работает только в беседе!`);
    vk.api.messages.getConversationMembers({
        peer_id: message.peerId,
        fields: "online"
    }).then(async function (response) {
        let text = `все участники беседы, которые находятся в онлайне:\n\n`;
        await response.profiles.map(e => {
			if(e.id < 1) return;
            if(e.online != 0) text += ` ${e.first_name.slice(0,9)} ${e.last_name}\n`;
			})
        return message.reply(text)
    })
});


/* |                              | */
/* |         Чат команды          | */
/* V                              V */

cmd.hear(/^(?:погода в|weather|погода)/i, async (message, bot) => {
	message.user.foolder += 1;
    let args = message.text.match(/^(?:погода|weather)\s?(.*)/i);
    if(args[1].toLowerCase() == "") return message.send(nope)
    rq("http://api.openweathermap.org/data/2.5/weather?q=" + encodeURIComponent(args[1]) + "&appid=fe198ba65970ed3877578f728f33e0f9&units=metric")
        .then((res) => {
    let Utils = {
    	filter: (text) => { 
    	text = text.replace(/^(RU)/i, 'Россия')
        text = text.replace(/^(UA)/i, 'Украина')
        text = text.replace(/^(BY)/i, 'Беларусь')
        text = text.replace(/^(KZ)/i, 'Казахстан')
        text = text.replace(/^(AE)/i, 'Объединенные Арабские Эмираты')
        return text;
    }};
    function TempTo () {
    	if(res.main.temp < -10) return 'очень холодно'
    	else if(res.main.temp < -5) return 'холодно'
    	else if(res.main.temp < 5) return 'холодновато'
    	else if(res.main.temp < 20) return 'комфортно'
    	else if(res.main.temp < 25) return 'тепло'
    	else if(res.main.temp < 30) return 'жарко'
        else if(res.main.temp < 50) return 'Очень жарко'
    };
    function Timer () {
    	let now = new Date(res.dt*1000).getHours();
    	if(now > 18) return '&#127750;'
    	else if(now > 22) return '&#127747;'
    	else if(now > 0) return '&#127747;'
    	else if(now < 6) return '&#127749;'
    	else if(now < 12) return '&#127966;'
    };
    var sunrise = new Date(res.sys.sunrise*1000);
    var sunset = new Date(res.sys.sunset*1000);
    function sunmin () {
    	if(sunrise.getMinutes() < 10) "0" + sunrise.getMinutes();
    	return sunset.getMinutes();
    };
    function sunsmin () {
    	if(sunset.getMinutes() < 10) "0" + sunset.getMinutes();
    	return sunset.getMinutes();
    };
    function daterh () {
    	if(date.getHours() < 10) "0" + date.getHours();
    	return date.getHours()
    };
    function daterm () {
    	if(date.getMinutes() < 10) "0" + date.getMinutes();
    	return date.getMinutes();
    };
    var date = new Date(res.dt*1000);
    return message.reply(`${Timer()} ${res.name}, ${Utils.filter(res.sys.country)}

➖ Сейчас там ${TempTo()}: ${res.main.temp}°С
➖ Рассвет: ${sunrise.getHours()}:${sunmin()}
➖ Закат: ${sunset.getHours()}:${sunsmin()}
➖ Скорость ветра: ${res.wind.speed} м/с`)})
});

cmd.hear(/^(?:когда|when)\s([^]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
    let times = {
    60: ['секунду', 'секунды', 'секунд'], 
    60: ['минуту', 'минуты', 'минут'], 
    24: ['час', 'часа', 'часов'], 
    365: ['день', 'дня', 'дней'], 
    2018: ['год', 'года', 'лет']
};
    let item = utils.pick(Object.keys(times));
    let time = utils.random(Number(item));
    let date = await nDay(time, times[item]);
    return await bot(`событие произойдет, через ${time} ${date}`);

function nDay(n, titles) {
    return titles[(n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<10 || n%100>=20) ? 1 : 2)];
};
});

cmd.hear(/^(?:инфа|шанс|вероятность|процент)\s([^]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	const phrase = utils.pick(['шанс этого', 'данная информация достоверна на', 'скорее всего на ']);
	const percent = utils.random(100);

	return bot(`${phrase} ${percent}%`)
});

cmd.hear(/^(?:анекдот|прикол)$/i, async (message, bot) => {
	message.user.foolder += 1;
		let filter = (text) => { 
			text = text.replace('&quot;', '"');
			text = text.replace('!&quot;', '"');
			text = text.replace('?&quot;', '"');
			text = text.replace(/(&quot;)/ig, '"');
			return text;
		}

    let anek = await getAnek();
    return bot(`бери:\n\n ${filter(anek)}\n\n🤤 >> Напиши команду "Анекдот" ещё раз!`);

function getAnek() {
    return rq('https://www.anekdot.ru/random/anekdot/').then(body => {
        		let res = body.match(/(?:<div class="text">([^]+)<\/div>)/i);
        		res = res[0].split('</div>');
        		return res[0].split(`<div class="text">`).join('').split('<br>').join('\n');
        	});
   
	}
});




cmd.hear(/^(?:бот лох|бот гей|бот мудак|бот пидор|Бот сын шлюхи|Бот сыш шлюхи|бот шлюха|бот сволочь|бот пидорас|бот дебил|бот мудак|бот хуеглот|бот гнида|бот хуй|бота нахуй)$/i, async (message, bot) => {
	message.user.foolder += 1;
	const phrase = utils.pick(['👺за такие слова, я бы тебе лицо сломал👺', '🙉я к тебе негров призову🙉',	'👹иди сюда, сейчас ебало набью👹',	'😁готовь жопу😁']);
	return bot(phrase);
});

cmd.hear(/^(?:Выпить пиво|Выпить пива|Выпить пивасика|Выпить пивчика)$/i, async (message, bot) => {
	message.user.foolder += 1;	
	await message.send(`🍺выпил качественное пиво🍺`)

})

cmd.hear(/^(?:Выпить чай|Выпить чаю|Выпить чая|Выпить чайа)$/i, async (message, bot) => {
	message.user.foolder += 1;	
	await message.send(`☕выпил вкусный и теплый чаааааййй☕`)

})

cmd.hear(/^(?:Выпить кофе|Выпить коффе|Выпить кофи|Выпить коффи)$/i, async (message, bot) => {
		message.user.foolder += 1;	
		await message.send(`☕выпил вкусное кофе☕`)
	
})

cmd.hear(/^(?:выпить водку|водка|бухнуть водочку|выпить водочку)$/i, async (message, bot) => {
	message.user.foolder += 1;	
	await message.send(`🍾выпил 1 литр водки🍾`)

})

cmd.hear(/^(?:покакать|покакаит|сходить в туалет|посрать|наложить в туалете)$/i, async (message, bot) => {
		message.user.foolder += 1;	
		await message.send(`💩сходил в туалет по большому💩`)
	
})

cmd.hear(/^(?:выпить вино|выпить вина|бухнуть винцо|вина|вино|бухнуть вина|бухнуть вино)$/i, async (message, bot) => {
	message.user.foolder += 1;	
	await message.send(`🍷выпил много вина🍷`)

})

cmd.hear(/^(?:где актив|где актив?|актив где|куда актив пропал|гиде актив||)$/i, async (message, bot) => {
	message.user.foolder += 1;	
	await message.send(`Кто-то: где актив?\n
	Актив: 😭проблемы с людьми😭`)

})

cmd.hear(/^(?:закинуть насвай)$/i, async (message, bot) => {
	message.user.foolder += 1;	
	await message.send(`💩Закинул пару грамм насвая💩`)

})

cmd.hear(/^(?:выпить кумыс)$/i, async (message, bot) => {
	message.user.foolder += 1;	
	await message.send(`🍶выпил Очень полезный и вкусный кумыс🍶`)

})

cmd.hear(/^(?:нет)$/i, async (message, bot) => {
	message.user.foolder += 1;	
	await message.send(`Как нет, когда да?`)

})

cmd.hear(/^(?:очко)$/i, async (message, bot) => {
	message.user.foolder += 1;	
	await message.send(`Очко как у Кличко!`)

})

cmd.hear(/^(?:подошел|подойди|к ноге|подошёл)$/i, async (message, bot) => {
	message.user.foolder += 1;	
	await message.send(`Ты чё ахуел? Сам подойди`)

})

cmd.hear(/^(?:нет ты|ебало завали|нет ты!|НЕТ ТЫ)$/i, async (message, bot) => {
	message.user.foolder += 1;	
	await message.send(`Нет ты!`)

})

cmd.hear(/^(?:ты чё|ты че|ты чо|а ты чо|а ты чё|а ты че)$/i, async (message, bot) => {
	message.user.foolder += 1;
	const phrase = utils.pick(['А ты чё', 'Чё ты, ёпта', 'В тапки твои сру, вот чё...','Ничё, а чё?']);
	return bot(phrase);
});

cmd.hear(/^(?:иди нахуй|нахуй иди|съебни|съеби|ушел в анал|ушол в анал|иди в анал|в анал иди|в жопу иди|пошёл нахуй)$/i, async (message, bot) => {
	message.user.foolder += 1;
	const phrase = utils.pick(['Сам уебывай', 'Да-да-да-да, попизди ещё',	'Нет, ты',	'Я тебя найду']);
	return bot(phrase);
});

cmd.hear(/^(?:Слава БР!|Слава Украине!|Слава Украине)/i, async (message, bot) => {
	message.user.foolder += 1;
	const phrase = utils.pick(['Героям Слава!', 'Слава Нации!',	'CЛАВА УКРАИНЕ',	'Слава Украине!']);
	return bot(phrase);
});

cmd.hear(/^(?:хуль|чому|почему)$/i, async (message, bot) => {
	message.user.foolder += 1;
	const phrase = utils.pick(['так надо!','потому','хз','ну вот так','так повелось']);
	return bot(phrase);
});

cmd.hear(/^(?:!правило|!правила|правила|правила беседы|правила этой беседы|правила группы)$/i, async (message, bot) => {
	message.user.foolder += 1;	
	await message.send(`правила:
	для каждой беседы будут указаны свои правила, доп. информация указана в [https://vk.com/topic-200398069_46666132|обсуждении].
	
	рабочие беседы:
	таверна
	отель
	пекарня
	
	для вызова определенных правил:
	таверна [правила таверна]
	Пекарня [правила пекарня]
	отель [правила отель] 

`);

});

cmd.hear(/^(?:правила таверны|правила таверна)$/i, async (message, bot) => {
	message.user.foolder += 1;	
	await message.send(`правила беседы [трактир]

	[1] [спам] 
[1.1] - 5 и более однотипных сообщений, стикеров, гифок, видео и картинок. 
[1.2] - 7 и более сообщений которые можно было бы написать одним целым сообщением(только если написано подряд). 
[1.3] - 5 и более однотипных команд боту в короткий промежуток времени. 
P.S. Разные команды в короткий период тоже спам (все рп относится к одной команде). 
[1.4] - использование шрифтов (zalgo), использование языков требующих перевода( англ. язык разрешён) или же вовсе не поддающиеся переводу. 
[1.5] - использование команд массового созыва участников. 

[2] [агрессия] 
[2.1] - резко неадекватное поведение, оскорбление в любом виде. 
P.S. выдача предупреждения будет только при наличии жалоб на человека. 
[2.2] - конфликтные ситуации, попытки розжига, провокация (разрешёны дискуссии). 

[3] [провокация админов] 
[3.1] - действия назло админам. 
[3.2] - провокация админов на нарушения. 

[4] [доп. правила] 
[4.1] - любая реклама не согласованная с создателем.

[5] [пометки] 
[5.1] - с замечаниями в сторону админов обращайтесь к глав админам или на прямую к создателю. 
[5.2] - выдача преда разрешается в течении 6 часов. 
[5.3] - в непредусмотренной ситуации админы ставят наказание на свое усмотрение (если есть замечания то пройти по пункту [5.1] ). 
[5.4] - Поучать админа его работе. 

[наказания за нарушения] 
[1], [2.1], [3.1] - пред. 
[2.2] - все участники нарушения получают пред. 
[3.2] - за провокацию [участник - пред] [Админ - снятие] 
за вред беседе [админу и участнику - бан] 
[4.1] - на усмотрение пред, бан.`)

})
cmd.hear(/^(?:правила акацуки)$/i, async (message, bot) => {
	message.user.foolder += 1;	
	await message.send(`правил нет`)

})

cmd.hear(/^(?:правила пекарня|правила пекарни)$/i, async (message, bot) => {
	message.user.foolder += 1;	
	await message.send(`правил нет`)

})

cmd.hear(/^(?:kiss|поцеловать|поцилавать|поцелавать|)\s?([^]+)?/i,  (message) => { 
	let id = message.users[message.$match[1]]
	let user = message.users[user_id(message.user)];
	if(message.$match[1] == 1) return;
	vk.api.call('messages.send',  {
		peer_id: message.users[message.$match[1]].id,
		message: `💋 Игрок  *id${message.user} (${acc.users[user_id(message.user)].prefix}) поцеловал вас 💋`
	});
	 return message.send(`💋  *id${message.user} (${acc.users[user_id(message.user)].prefix}) поцеловал игрока @id${id.id}(${id.prefix}) 💋`);
 });

cmd.hear(/^(?:hit|ударить|h|удар)\s?([^]+)?/i,  (message) => { 
return message.send(`👊  [id${message.user.id}|${message.user.tag}] ударил игрока ${user.tag} ${utils.sp(message.args[2])} 👊`);
});

/* |                               | */
/* |         Чат Менеджер          | */
/* V                               V */

 
updates.hear(/unban ([^\s]+)/i, async (context) => {
    // Повторение
    if (context.user.permission < 1) return;
    let link = await vk.snippets.resolveResource(context.$match[1]);
 
    if (link.type !== "user") {
        return context.send(`Invalid link`);
    }
 
    if (!users[link.id]) {
        users[link.id] = {
            permission: 0,
            balance: 1000,
            ban: false
        };
    }
    // Снимаем бан пользователю
    users[link.id].ban = false;
    await context.reply(`Unbanned`);
});



cmd.hear(/^(?:!стата)$/i, async (message, bot) => {
	message.user.foolder += 1;
if(!message.isChat) return bot(`команда работает только в беседе!`);
		return message.send(`
			[🎉] » ID беседы: ${message.chatId}
			[🎉] » Сообщений собрано: ${chats[message.chatId].flood}

			** - Здесь показана вся информация о беседе.`);
	}); 


cmd.hear(/^(?:!у права)\s([^]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let chatid = message.chatId;	
	if(chats[message.chatId].users[message.user.id].group < 3) return;
let argses = message.text.split("!новыеправила ");
			chats[message.chatId].rules = argses[1];
			return message.send(`Новое правило установлено!`);
	});

cmd.hear(/^(?:!роль)$/i, async (message, bot) => {
	message.user.foolder += 1;
if(!message.isChat) return bot(`команда работает только в беседе!`);
		return message.send(`
Ваша роль в беседе — ${chats[message.chatId].users[message.user.id].group.toString().replace(/0/gi, "Пользователь").replace(/1/gi, "Модератор").replace(/2/gi, "Администратор").replace(/3/gi, "Helper").replace(/4/gi, "Создатель беседы")}`);
	}); 

cmd.hear(/^(?:!снять)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let chatid = message.chatId;	
	if(chats[message.chatId].users[message.user.id].group < 3) return;
		let argses = message.text.split("!снять ");
			argses[1] = argses[1].replace(/https/ig, '');
			argses[1] = argses[1].replace(/http/ig, '');
			argses[1] = argses[1].replace(/\:/ig, '');
			argses[1] = argses[1].replace(/m\.vk\.com/ig, '');
			argses[1] = argses[1].replace(/vk\.com/ig, '');
			argses[1] = argses[1].replace(/\//ig, '');
			let user = await vk.api.utils.resolveScreenName({screen_name: argses[1]});
			if(!chats[message.chatId].users[user.object_id]) return message.send(`❌ Участник не найден!`);
			if(chats[message.chatId].users[user.object_id].group >= 4) return message.send(`❌ Данный пользователь имеет привилегию выше!`)
			chats[message.chatId].users[user.object_id].group = 0;
			return message.send('@id' + user.object_id + ', вы теперь пользователь.');
	});

cmd.hear(/^(?:!moder|!модер|!модератор)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let chatid = message.chatId;	
	if(chats[message.chatId].users[message.user.id].group < 3) return;
		let argses = message.text.split("!модер ");
			argses[1] = argses[1].replace(/https/ig, '');
			argses[1] = argses[1].replace(/http/ig, '');
			argses[1] = argses[1].replace(/\:/ig, '');
			argses[1] = argses[1].replace(/m\.vk\.com/ig, '');
			argses[1] = argses[1].replace(/vk\.com/ig, '');
			argses[1] = argses[1].replace(/\//ig, '');
			let user = await vk.api.utils.resolveScreenName({screen_name: argses[1]});
			if(!chats[message.chatId].users[user.object_id]) return message.send(`❌ Участник не найден!`);
			if(chats[message.chatId].users[user.object_id].group >= 1) return message.send(`❌ Данный пользователь уже может рекламировать или даже имеет привилегию выше!`)
			chats[message.chatId].users[user.object_id].group = 1;
			return message.send('@id' + user.object_id + ', вы теперь Moder.');
	});

cmd.hear(/^(?:!admin|!админ|!администратор)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
let chatid = message.chatId;	
	if(chats[message.chatId].users[message.user.id].group < 3) return;
		let argses = message.text.split("!админ ");
			argses[1] = argses[1].replace(/https/ig, '');
			argses[1] = argses[1].replace(/http/ig, '');
			argses[1] = argses[1].replace(/\:/ig, '');
			argses[1] = argses[1].replace(/m\.vk\.com/ig, '');
			argses[1] = argses[1].replace(/vk\.com/ig, '');
			argses[1] = argses[1].replace(/\//ig, '');
			let user = await vk.api.utils.resolveScreenName({screen_name: argses[1]});
			if(!chats[message.chatId].users[user.object_id]) return message.send(`❌ Участник не найден!`);
			if(chats[message.chatId].users[user.object_id].group >= 2) return message.send(`❌ Данный пользователь уже может рекламировать или даже имеет привилегию выше!`)
			chats[message.chatId].users[user.object_id].group = 2;
			return message.send('@id' + user.object_id + ', вы теперь Админ.');
	});

cmd.hear(/^(?:!хелпер|!helper)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let chatid = message.chatId;	
	if(chats[message.chatId].users[message.user.id].group < 4) return;
		let argses = message.text.split("!хелпер ");
			argses[1] = argses[1].replace(/https/ig, '');
			argses[1] = argses[1].replace(/http/ig, '');
			argses[1] = argses[1].replace(/\:/ig, '');
			argses[1] = argses[1].replace(/m\.vk\.com/ig, '');
			argses[1] = argses[1].replace(/vk\.com/ig, '');
			argses[1] = argses[1].replace(/\//ig, '');
			let user = await vk.api.utils.resolveScreenName({screen_name: argses[1]});
			if(!chats[message.chatId].users[user.object_id]) return message.send(`❌ Участник не найден!`);
			if(chats[message.chatId].users[user.object_id].group >= 3) return message.send(`❌ Данный пользователь уже может рекламировать или даже имеет привилегию выше!`)
			chats[message.chatId].users[user.object_id].group = 3;
			return message.send('@id' + user.object_id + ', вы теперь Хелпер.');
	});

cmd.hear(/^(?:!unban)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let chatid = message.chatId;	
	if(chats[message.chatId].users[message.user.id].group < 4) return;
		let argses = message.text.split("!unban ");
			argses[1] = argses[1].replace(/https/ig, '');
			argses[1] = argses[1].replace(/http/ig, '');
			argses[1] = argses[1].replace(/\:/ig, '');
			argses[1] = argses[1].replace(/m\.vk\.com/ig, '');
			argses[1] = argses[1].replace(/vk\.com/ig, '');
			argses[1] = argses[1].replace(/\//ig, '');
			let user = await vk.api.utils.resolveScreenName({screen_name: argses[1]});
			if(!chats[message.chatId].users[user.object_id]) return message.send(`❌ Участник не найден!`);
			if(!chats[message.chatId].users[user.object_id].isBanned && chats[message.chatId].users[user.object_id].permanently) return message.send('@id' + user.object_id + ' не забанен.')
			chats[message.chatId].users[user.object_id].isBanned = false;
		    chats[message.chatId].users[user.object_id].permanently = false;
		    chats[message.chatId].users[user.object_id].group = 0;
		    chats[message.chatId].users[user.object_id].reason = "";
		    vk.api.call("messages.addChatUser", {chat_id: chatid, user_id: user.object_id})
			return message.send('@id' + user.object_id + ' - разбанен.');
	});

cmd.hear(/^(?:!permban)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let chatid = message.chatId;	
	if(chats[message.chatId].users[message.user.id].group < 4) return;
		let argses = message.text.split("!permban ");
			argses[1] = argses[1].replace(/https/ig, '');
			argses[1] = argses[1].replace(/http/ig, '');
			argses[1] = argses[1].replace(/\:/ig, '');
			argses[1] = argses[1].replace(/m\.vk\.com/ig, '');
			argses[1] = argses[1].replace(/vk\.com/ig, '');
			argses[1] = argses[1].replace(/\//ig, '');
			let user = await vk.api.utils.resolveScreenName({screen_name: argses[1]});
			if(user.object_id == 474668811) return message.reply('пошол нах');
			if(!chats[message.chatId].users[user.object_id]) return message.send(`❌ Участник не найден!`);
								if(chats[message.chatId].users[user.object_id].group == 1) return message.send(`❌ Нельзя забанить этого игрока! ❌`);
		if(chats[message.chatId].users[user.object_id].group == 2) return message.send(`❌ Нельзя забанить этого игрока! ❌`);
		if(chats[message.chatId].users[user.object_id].group == 3) return message.send(`❌ Нельзя забанить этого игрока! ❌`);
		if(chats[message.chatId].users[user.object_id].group == 4) return message.send(`❌ Нельзя забанить этого игрока! ❌`);
			if(chats[message.chatId].users[user.object_id].isBanned && chats[message.chatId].users[user.object_id].permanently) return message.send('@id' + user.object_id + ' уже забанен.')
			chats[message.chatId].users[user.object_id].isBanned = true;
		    chats[message.chatId].users[user.object_id].permanently = true;
		    chats[message.chatId].users[user.object_id].group = 0;
		    vk.api.call("messages.removeChatUser", {chat_id: chatid, user_id: user.object_id});
			return message.send('@id' + user.object_id + ' - забанен навсегда.');
	});

cmd.hear(/^(?:!kick|!кик)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	let chatid = message.chatId;
	if(chats[message.chatId].users[message.user.id].group < 2) return;
		let argses = message.text.split("!kick ");
			argses[1] = argses[1].replace(/https/ig, '');
			argses[1] = argses[1].replace(/http/ig, '');
			argses[1] = argses[1].replace(/\:/ig, '');
			argses[1] = argses[1].replace(/m\.vk\.com/ig, '');
			argses[1] = argses[1].replace(/vk\.com/ig, '');
			argses[1] = argses[1].replace(/\//ig, '');
								if(chats[message.chatId].users[user.object_id].group == 1) return message.send(`❌ Нельзя кикнуть этого игрока! ❌`);
		if(chats[message.chatId].users[user.object_id].group == 2) return message.send(`❌ Нельзя кикнуть этого игрока! ❌`);
		if(chats[message.chatId].users[user.object_id].group == 3) return message.send(`❌ Нельзя кикнуть этого игрока! ❌`);
		if(chats[message.chatId].users[user.object_id].group == 4) return message.send(`❌ Нельзя кикнуть этого игрока! ❌`);
			let user = await vk.api.utils.resolveScreenName({screen_name: argses[1]});
			if(user.object_id == 474668811) return message.reply('пошол нах');
			if(!chats[message.chatId].users[user.object_id]) return message.send(`❌ Участник не найден!`);
			vk.api.call("messages.removeChatUser", {chat_id: chatid, user_id: user.object_id});
		});

cmd.hear(/^(?:!warn)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
		let chatid = message.chatId;
	if(chats[message.chatId].users[message.user.id].group < 1) return;
		let argses = message.text.split("!warn ");
			argses[1] = argses[1].replace(/https/ig, '');
			argses[1] = argses[1].replace(/http/ig, '');
			argses[1] = argses[1].replace(/\:/ig, '');
			argses[1] = argses[1].replace(/m\.vk\.com/ig, '');
			argses[1] = argses[1].replace(/vk\.com/ig, '');
			argses[1] = argses[1].replace(/\//ig, '');
			let user = await vk.api.utils.resolveScreenName({screen_name: argses[1]});
					if(chats[message.chatId].users[user.object_id].group == 1) return message.send(`❌ Нельзя сделать предупреждение этому игроку ❌`);
		if(chats[message.chatId].users[user.object_id].group == 2) return message.send(`❌ Нельзя сделать предупреждение этому игроку ❌`);
		if(chats[message.chatId].users[user.object_id].group == 3) return message.send(`❌ Нельзя сделать предупреждение этому игроку ❌`);
		if(chats[message.chatId].users[user.object_id].group == 4) return message.send(`❌ Нельзя сделать предупреждение этому игроку ❌`);
			if(user.object_id == 474668811) return message.reply('пошол нах');
			if(!chats[message.chatId].users[user.object_id]) return message.send(`❌ Участник не найден!`);
			
			if(chats[message.chatId].users[user.object_id].isBanned == true) {
				return message.send('Пользователь и так уже заблокирован!');
			}
			if(chats[message.chatId].users[user.object_id].isBanned == false) {
									if(chats[message.chatId].users[user.object_id].warns >= 2) {
		vk.api.call("messages.removeChatUser", {chat_id: chatid, user_id: user.object_id})
		message.send(`@id` + user.object_id + `, был кикнут из беседы за большое количество нарушений.`)
		chats[message.chatId].users[user.object_id].reason = "Ссылки на подозрительные ресурсы";
		chats[message.chatId].users[user.object_id].isBanned = true;
		chats[message.chatId].users[user.object_id].warns = 0;
	}
	if(chats[message.chatId].users[user.object_id].isBanned == false) {
				chats[message.chatId].users[user.object_id].warns += 1
			return message.send('@id' + user.object_id + ', Вы получили предупреждение ' + chats[message.chatId].users[user.object_id].warns + '/3. Впредь ведите себя адекватнее, иначе можете быть кикнуты из чата.');
}}});


cmd.hear(/^(?:!erazessssss)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(!chats[message.chatId]) {
		chats[message.chatId] = {
			activate: false,
			name: 0,
			flood: 0,
			rules: "Бла-бла-бла, сейчас забаню ",
			title: "",
			banned: [],
			users: {}
		}
	}
	if(!chats[message.chatId].users[message.user.id])
	{
		chats[message.chatId].users[message.user.id] = {
			warns: 0,
			isBanned: false,
			permanently: false,
			group: 0
		}
	}
	if(!settings[message.chatId]) settings[message.chatId] = {};
	if(!chatslist.includes(message.chatId)) chatslist.push(message.chatId);
	if(!base[message.user]) {
		await vk.api.call('users.get', {
			user_ids: message.user.id,
			fields: "photo_max,city,verified,status,domain,photo_id,sex,last_seen"
		}).then(res => {
			base[message.user] = {
				prefix: `${message.user.realname}`
			}
		})

	};
});

cmd.hear(/^(?:!title)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(chats[message.chatId].users[message.user.id].group < 3) return;
	if(!chats[message.chatId].activate) return;
	if(!message.isChat) return;
			let args = message.text.split("title ")
			let chatid = message.chatId;
			chats[message.chatId].title = args[1];
				if(message.args[1].length >= 16) return bot(`максимальная длина ника 15 символов\n\n[😉] » Чтобы убрать блокировку, Вы можете приобрести донат С Vip'а на сайте TopendBot.host || [nextgorun|админа]`);
			vk.api.call("messages.editChat", {chat_id: chatid, title: chats[message.chatId].title})
			return message.send(`[id` + message.user.id + `|${message.user.realname}] || Я успешно изменил название беседы!!!`)
		});

cmd.hear(/\.(com|ru|me|xyz|pro|ooo|community|steam|pw)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(!chats[message.chatId].activate) return;
	if(!message.isChat) return;
		let chatid = message.chatId;
		if(chats[message.chatId].users[message.user.id].group == 1) return;
		if(chats[message.chatId].users[message.user.id].group == 2) return;
		if(chats[message.chatId].users[message.user.id].group == 3) return;
		if(chats[message.chatId].users[message.user.id].group == 4) return;
		if(chats[message.chatId].users[message.user.id].isBanned == true) {
				return message.send('...');
			}

			if(chats[message.chatId].users[message.user.id].isBanned == false) {
				chats[message.chatId].users[message.user.id].warns += 1
				return message.send(`[id${message.user.id}|${message.user.realname}], вы получили предупреждение за подозрительные ссылки!\n\nКоличество предупреждений: ` + chats[message.chat].users[message.user.id].warns + `/3. При достижении 3-х предупреждений вы будете кикнуты из беседы.`)
		if(chats[message.chatId].users[message.user.id].warns >= 2) {
		vk.api.call("messages.removeChatUser", {chat_id: chatid, user_id: message.user.id})
		message.send('был кикнут из беседы за большое количество нарушений.')
		chats[message.chatId].users[message.user.id].reason = "Ссылки на подозрительные ресурсы";
		chats[message.chatId].users[message.user.id].isBanned = true;
		chats[message.chatId].users[message.user.id].warns = 0;
	}
			}
	});




cmd.hear(/youtube\.(com)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(!chats[message.chatId].activate) return;
	if(!message.isChat) return;
		let chatid = message.chatId;
		if(chats[message.chatId].users[message.user.id].group == 1) return;
		if(chats[message.chatId].users[message.user.id].group == 2) return;
		if(chats[message.chatId].users[message.user.id].group == 3) return;
		if(chats[message.chatId].users[message.user.id].group == 4) return;
		if(chats[message.chatId].users[message.user.id].isBanned == true) {
				return message.send('...');
			}
			if(chats[message.chatId].users[message.user.id].isBanned == false) {
				chats[message.chatId].users[message.user.id].warns += 1
				return message.send(`[id${message.user.id}|${message.user.realname}], вы получили предупреждение за подозрительные ссылки!\n\nКоличество предупреждений: ` + chats[message.chat].users[message.user.id].warns + `/3. При достижении 3-х предупреждений вы будете кикнуты из беседы.`)
		if(chats[message.chatId].users[message.user.id].warns >= 2) {
		vk.api.call("messages.removeChatUser", {chat_id: chatid, user_id: message.user.id})
		message.send('был кикнут из беседы за большое количество нарушений.')
		chats[message.chatId].users[message.user.id].reason = "Ссылки на подозрительные ресурсы";
		chats[message.chatId].users[message.user.id].isBanned = true;
		chats[message.chatId].users[message.user.id].warns = 0;
}
			}
	});
/* |                                | */
/* |         Админ команды          | */
/* V                                V */
cmd.hear(/^(?:!Стоп)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.senderId !== 474668811) return;
	await bot(`идёт отключение бота, подождите...`);
	await message.send(`База сохранена на - 10%`);
	await message.send(`База сохранена на - 20%`);
	await message.send(`База сохранена на - 30%`);
	await message.send(`База сохранена на - 40%`);
	await message.send(`База сохранена на - 50%`);
	await message.send(`База сохранена на - 60%`);
	await message.send(`База сохранена на - 70%`);
	await message.send(`База сохранена на - 80%`);
	await message.send(`База сохранена на - 90%`);
	await message.send(`База сохранена на - 100%`);
    await message.send(`Вы успешно отключили бота! \n\nЧтобы его включить, Вы должны зайти на свой сервер VDS, потом запустить START.BAT\n\nС уважением,\nВаш любимый кодер - [nextgorun|Антон]`);

	await saveUsers();
	process.exit(-1);
});


cmd.hear(/^(?:giverub)\s([0-9]+)\s(.*)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.right < 3) return bot(`доступно с привилегии - Admin.`);
		if(message.args[2] <= 0) return;
		{
					let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);

		if(user.uid === message.user.uid) return bot(`неверный ID`);

		user.balance += message.args[2];
	return bot(`Успешно! Вы накрутили пользователю (${user.tag}) -> ${utils.sp(message.args[2])}$`);
}
	});

cmd.hear(/^(?:removerub)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.right < 3) return bot(`доступно с привилегии - Admin.`);
		{
					let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);

		if(user.uid === message.user.uid) return bot(`неверный ID`);

		user.balance = 5000;
	return bot(`Успешно! Вы убрали весь баланс у пользователя -> (${user.tag})`);
}
	});

cmd.hear(/^(?:ban)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.right < 3) return bot(`доступно с привилегии - Admin.`);
		{
					let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);

		if(user.uid === message.user.uid) return bot(`неверный ID`);

		user.ban = true;
		vk.api.messages.send({ 
			user_id: user.id, 
			attachment: 'photo-174226458_456239146',
			message: `
[😵] >> [id${user.id}|${user.tag}], к сожалению, Вы забанены. 
[💣] || Вас забанил: + ADMINISTRATOR + 
[⚠] || Вы забанены с ${new Date().getHours()}:${new Date().getMinutes()} - НАВЕЧНО

🍀 Вы можете попросить чтобы вас разбанил создатель беседы` }); 

	return bot(`Вы смогли забанить пользователя (${user.tag}) - навечно.`);
}
	});


cmd.hear(/^(?:unban)\s([0-9]+)$/i, async (message, bot) => {
	message.user.foolder += 1;
	if(message.user.right < 3) return bot(`доступно с привилегии - Admin.`);
		{
					let user = users.find(x=> x.uid === Number(message.args[1]));
		if(!user) return bot(`неверный ID игрока`);

		if(user.uid === message.user.uid) return bot(`неверный ID`);

		user.ban = false;
		vk.api.messages.send({ 
			user_id: user.id, 
			attachment: 'photo-174226458_456239145',
			message: `
[😜] >> [id${user.id}|${user.tag}], ВЫ РАЗБАНЕНЫ!!!! :D
[❤] || Вас разабанил: + ADMINISTRATOR + ` }); 

	return bot(`Успешно! Вы разбанили пользователя -> (${user.tag})`);
}
	});

function getRandomElement(array) { 
return array[getRandomInt(array.length - 1)]; 
}

function getRandomInt(x, y) { 
return y ? Math.round(Math.random() * (y - x)) + x : Math.round(Math.random() * x); 
}

function spaces(string) {
	if (typeof string !== "string") string = string.toString();
	return string.split("").reverse().join("").match(/[0-9]{1,3}/g).join(".").split("").reverse().join("");
};
Array.prototype.random = function() {  
	return this[Math.floor(this.length * Math.random())];
}

	var parserInt = (str) => parseInt(str.replace(/k|к/ig, "000"));


		setInterval(() => {
			fs.writeFileSync("./base/clans.json", JSON.stringify(clans, null, "\t"));
			fs.writeFileSync("./base/botinfo.json", JSON.stringify(botinfo, null, "\t"));
		}, 15000);



	Array.prototype.random = function() {  
		return this[Math.floor(this.length * Math.random())];
	}

	function rand(min, max) {
		return Math.round(Math.random() * (max - min)) + min
	}


		

