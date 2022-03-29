const { MessageEmbed, Channel, Message, Permissions} = require('discord.js');
const Discord = require('discord.js')
const { get } = require('request');
const { mysql } = require('./config.json');
const client = new Discord.Client({
    partials: ["MESSAGE", "USER", "REACTION"]
  });
global.config = require("./config.json")

const query = require("samp-query");
const { getServerPing, getServerOnline } = require('./src/samp.js')
require('discord-buttons')(client)
const { MessageButton, MessageActionRow } = require('discord-buttons')
//const ticket = require('djs-tickets')
const enmap = require("enmap")
const settings = new enmap({
    name: "settings",
    autoFetch: true,
    cloneLevel: "deep",
    fetchAll: true
  });

let Samp_IP = "139.99.52.183:7778"
let Samp_Port = 7778
const prefix = "!";

var options = {
    host: Samp_IP,
    port: Samp_Port
}
var s;
var p1;

client.on('ready', () => {
    console.log(`Bot ${client.user.tag} is going online!!`);
    UpdateStatus();setInterval(UpdateStatus,30000)
});

RandomEx(min, max)
{
    return random(max - min) + min;
}

const {createConnection} = require('mysql');

let con = createConnection(mysql);

con.connect(err => {
    if (err) return console.log(err);

    console.log(`Database Berhasil Terhubung`);
});
 
function UpdateStatus()
{
    const randstatus = [
        "STREAMING",
        "LISTENING",
        "COMPETING",
        "WATCHING"
    ]
    const randomstats = Math.floor(Math.random() * (randstatus.length));
    const newRandomStats = randstatus[randomstats]
    query(options, function(error, response){
        if(error)
        {
            status = "SERVER UNDER MAINTENANCE";
            client.user.setActivity(status, {type: `${newRandomStats}`});
        }
        else
        {
            status = `${response['online']} Players | ${client.guilds.cache.size} Members`;
            client.user.setActivity(status, {type: `${newRandomStats}`});
        }
    })
}

function getServerInfo(msg)
{
    getServerPing("139.99.52.183:7778", 7778, function(error,response){
        if(!error)
        {
            spg = `${response}ms`
        }
        else
        {
            spg = "0ms"
        }
    })
    const randpesan = [
        "**```GREATROLEPLAY```**",
        "**```#Infinityrp```**",
        "**```Join us @greatroleplay.id```**"
    ];
    const randommes = Math.floor(Math.random() * (randpesan.length));
    const newRandomMes = randpesan[randommes];
    query(options, function(error, response){
        if(error)
        {
            const embedColor = 0xff0000;

            const logMessage = {
                embed: {
                    title: 'GREAT ROLEPLAY',
                    author: { 
                        name: 'GRP',
                        iconURL: 'https://i.postimg.cc/X7xv22Dd/IMG-20211025-183319-5873.jpg',
                    },
                    color: embedColor,
                    url: 'https://greatroleplay.id/',
                    fields: [
                        { name: '**Server Name**', value: 'GREAT ROLEPLAY', inline: false },
                        { name: '**Website**', value: 'https://greatroleplay.id/', inline: false },
                        { name: '**IP**', value: 'GREAT Roleplay.id', inline: false },
                        { name: '**Gamemode**', value: 'GRP v1.2.2', inline: false },
                        { name: '**Language**', value: 'Bahasa Indonesia', inline: false },
                        { name: '**Map**', value: 'Unknown', inline: false },
                        { name: '**Weburl**', value: 'Unknown', inline: false },
                        { name: '**Weather**', value: 'Unknown', inline: false },
                        { name: '**Status**', value: ':Offline', inline: false },
                        { name: '**Players**', value: '0/100', inline: false },
                        { name: '**Ping**', value: '0ms', inline: false },
                        { name: '**Pesan**', value: `${newRandomMes}`, inline: false },
                    ],
                    thumbnail: {
                        url: 'https://i.postimg.cc/X7xv22Dd/IMG-20211025-183319-5873.jpg',
                    },
                    timestamp: new Date(),
                    footer: {
                        text: 'GREAT ROLEPLAY',
                    }
                }
            }
            msg.edit(logMessage);
        }
        else
        {
            const embedColor = 0x800080;

            const logMessage = {
                embed: {
                    title: 'GREAT ROLEPLAY',
                    author: { 
                        name: 'GRP',
                        iconURL: 'https://i.postimg.cc/X7xv22Dd/IMG-20211025-183319-5873.jpg',
                    },
                    color: embedColor,
                    url: 'https://greatroleplay.id/',
                    fields: [
                        { name: '**Server Name**', value: response['hostname'], inline: false },
                        { name: '**Website**', value: 'https://greatroleplay.id/', inline: false },
                        { name: '**IP**', value: '139.99.52.183:7778', inline: false },
                        { name: '**Gamemode**', value: response['gamemode'], inline: false },
                        { name: '**Language**', value: response['mapname'], inline: false },
                        { name: '**Map**', value: response['rules'].mapname, inline: false },
                        { name: '**Weburl**', value: response['rules'].weburl, inline: false },
                        { name: '**Weather**', value: response['rules'].weather, inline: false },
                        { name: '**Status**', value: ':up:Online', inline: false },
                        { name: '**Players**', value: `${response['online']}/${response['maxplayers']}`, inline: false },
                        { name: '**Ping**', value: `${spg}`, inline: false },
                        { name: '**Pesan**', value: `${newRandomMes}`, inline: false },
                    ],
                    thumbnail: {
                        url: 'https://i.postimg.cc/X7xv22Dd/IMG-20211025-183319-5873.jpg',
                    },
                    timestamp: new Date(),
                    footer: {
                        text: 'GREAT ROLEPLAY',
                    }
                }
            }
            msg.edit(logMessage);
        }
    })
}
function ServerStatus(msg)
{
    getServerPing("139.99.52.183:7778", 1255, function(error,response){
        if(!error)
        {
            spg = `${response}ms`
        }
        else
        {
            spg = "0ms"
        }
    })
    query(options, function(error, response){
        if(error)
        {
            const embedColor = 0xff0000;

            const logMessage = {
                embed: {
                    title: 'GREAT ROLEPLAY',
                    author: { 
                        name: 'GRP',
                        iconURL: 'https://i.postimg.cc/X7xv22Dd/IMG-20211025-183319-5873.jpg',
                    },
                    color: embedColor,
                    url: 'https://greatroleplay.id/',
                    fields: [
                        { name: '**Server Name**', value: 'GREAT ROLEPLAY', inline: false },
                        { name: '**Website**', value: 'https://greatroleplay.id/', inline: false },
                        { name: '**IP**', value: '139.99.52.183:7778', inline: false },
                        { name: '**Gamemode**', value: 'GRP v1.0', inline: false },
                        { name: '**Language**', value: 'Bahasa Indonesia', inline: false },
                        { name: '**Status**', value: '🔴Offline', inline: false },
                        { name: '**Players**', value: '0/100', inline: false },
                        { name: '**Ping**', value: '0ms', inline: false },
                    ],
                    thumbnail: {
                        url: 'https://i.postimg.cc/X7xv22Dd/IMG-20211025-183319-5873.jpg',
                    },
                    timestamp: new Date(),
                    footer: {
                        text: 'GREAT ROLEPLAY',
                    }
                }
            }
            msg.channel.send(logMessage);
        }
        else
        {
            const embedColor = 0x800080;

            const logMessage = {
                embed: {
                    title: 'GREAT ROLEPLAY',
                    author: { 
                        name: 'GRP',
                        iconURL: 'https://i.postimg.cc/X7xv22Dd/IMG-20211025-183319-5873.jpg',
                    },
                    color: embedColor,
                    url: 'https://greatroleplay.id/',
                    fields: [
                        { name: '**Server Name**', value: response['hostname'], inline: false },
                        { name: '**Website**', value: 'https://greatroleplay.id/', inline: false },
                        { name: '**IP**', value: '139.99.52.183:7778', inline: false },
                        { name: '**Gamemode**', value: response['gamemode'], inline: false },
                        { name: '**Language**', value: response['mapname'], inline: false },
                        { name: '**Status**', value: ':green_circle:Online', inline: false },
                        { name: '**Players**', value: `${response['online']}/${response['maxplayers']}`, inline: false },
                        { name: '**Ping**', value: `${spg}`, inline: false },
                    ],
                    thumbnail: {
                        url: 'https://i.postimg.cc/X7xv22Dd/IMG-20211025-183319-5873.jpg',
                    },
                    timestamp: new Date(),
                    footer: {
                        text: 'GREAT ROLEPLAY',
                    }
                }
            }
            msg.channel.send(logMessage);
        }
    })
}

function badai(msg)
{
    const logMessagee = {
        embed: {
            title: "<a:pin:91792453458002396>GREATSERVER BADAI<a:pin:91792453458002396>",
            author: { 
                name: 'Server Offline',
                iconURL: 'https://i.postimg.cc/X7xv22Dd/IMG-20211025-183319-5873.jpg',
            },
            color: 0xff0000,
            fields: [
                 { name: '__**GREATROLEPLAY**__', value: 'Selamat Datang Di GreatRoleplay SA-MP, DiSini Kita Belajar Tentang Roleplay/Berperan Secara Via Game Yaitu SA-MP', inline: false },
                 { name: '__**BACA RULES SERVER**__', value: '<a:pin:933959114151821363>KAMUS ROLEPLAY: <#936966583388082207>\n<a:pin:933959114151821363>RULES SERVER: <#936967163128991744>\n<a:pin:933959114151821363>RULES DISCORD: <#936967244875976714>\n<a:pin:933959114151821363>RULES ROLEPLAY: <#936967332679524362>\n<a:pin:933959114151821363>RULES KERJA: <#936967530268983366>\n<a:pin:933959114151821363>RULES GREENZONE: <#936967420546007112>\n<a:pin:933959114151821363>HUKUMAN BR: <#936967592617320478>', inline: false },
                 { name: '__**IP SERVER**__', value: '<#930309434972979220>', inline: false },
                 { name: '__**DOWNLOAD LAUNCHER**__', value: '<#915128825808048158>', inline: false },
                 { name: '__**PC INFORMASI**__', value: '<#921339369506369536>', inline: false },
                 { name: '__**Status**__', value: ':red_circle:Offline', inline: false },
                 { name: '__**Players**__', value: `0/200`, inline: false },
                 { name: '__**Ping**__', value: `10-100+`, inline: false },
                 { name: '__**TAGS**__', value: '@everyone', inline: true},
                    ],
            image: {
                url: 'https://i.postimg.cc/vBBbq2X8/standard-2.gif',
            },
            timestamp: new Date(),
            footer: {
                text: 'Join us https://discord.gg/greatsamp',
            }
        }
    }
    msg.channel.send(logMessagee);
}

function mengudara(msg)
{
    const logMessagee = {
        embed: {
            title: "<a:pin:91792453458002396>GREATSERVER MENGUDARA<a:pin:91792453458002396>",
            author: { 
                name: 'Server Online',
                iconURL: 'https://i.postimg.cc/X7xv22Dd/IMG-20211025-183319-5873.jpg',
            },
            color: 0x00ff00,
            fields: [
                 { name: '__**GREATROLEPLAY**__', value: 'Selamat Datang Di Great Roleplay SA-MP, Di Sini Kita Belajar Tentang Roleplay/Berperan Secara Via Game Yaitu SA-MP', inline: false },
                 { name: '__**BACA RULES SERVER**__', value: '<a:pin:933959114151821363>KAMUS ROLEPLAY: <#936966583388082207>\n<a:pin:933959114151821363>RULES SERVER: <#936967163128991744>\n<a:pin:933959114151821363>RULES DISCORD: <#936967244875976714>\n<a:pin:933959114151821363>RULES ROLEPLAY: <#936967332679524362>\n<a:pin:933959114151821363>RULES KERJA: <#936967530268983366>\n<a:pin:933959114151821363>RULES GREENZONE: <#936967420546007112>\n<a:pin:933959114151821363>HUKUMAN BR: <#936967592617320478>', inline: false },
                 { name: '__**IP SERVER**__', value: '<#930309434972979220>', inline: false },
                 { name: '__**DOWNLOAD LAUNCHER**__', value: '<#915128825808048158>', inline: false },
                 { name: '__**PC INFORMASI**__', value: '<#921339369506369536>', inline: false },
                 { name: '__**PLAYERS**__', value: ':green_circle:Online', inline: false },
                 { name: '__**PLAYERS**__', value: `0/200`, inline: false },
                 { name: '__**PING**__', value: `10-100+`, inline: false },
                 { name: '__**TAGS**__', value: '@everyone', inline: true},
                    ],
            image: {
                url: 'https://i.postimg.cc/hvTwp9FP/standard-3.gif',
            },
            timestamp: new Date(),
            footer: {
                text: 'Join us https://discord.gg/greatsamp',
            }
        }
    }
    msg.channel.send(logMessagee);
}

function helpinfo(msg)
{
    const embedColor = 0x800080;

    const logMessage = {
        embed: {
            title: 'List Command',
            author: { 
                name: 'List Command Bot',
                iconURL: 'https://i.postimg.cc/X7xv22Dd/IMG-20211025-183319-5873.jpg',
            },
            color: embedColor,
            fields: [
                { name: `**\`\`\`${prefix}help\`\`\`**`, value: '**list cmd**', inline: false },
                { name: `**\`\`\`${prefix}status\`\`\`**`, value: '**get server status**', inline: false },
                { name: `**\`\`\`${prefix}players\`\`\`**`, value: '**get players online**', inline: false },
                { name: `**\`\`\`${prefix}start\`\`\`**`, value: '**Ping a live stats**', inline: false },
                { name: `**\`\`\`${prefix}takerole(OFF)\`\`\`**`, value: '**Taking some role on guild**', inline: false },
                { name: `**\`\`\`${prefix}stop\`\`\`**`, value: '**stop live stats**', inline: false },
                { name: `**\`\`\`${prefix}ping\`\`\`**`, value: '**getting ping**', inline: false },
                { name: `**\`\`\`${prefix}rr\`\`\`**`, value: '**GRP the reaction role**', inline: false },
                { name: `**\`\`\`${prefix}clean\`\`\`**`, value: '**clean message**', inline: false },
                { name: `**\`\`\`${prefix}invite\`\`\`**`, value: '**Support Us!**', inline: false },
                { name: `**\`\`\`${prefix}samp\`\`\`**`, value: '**Getting information on other server**', inline: false },
            ],
            thumbnail: {
                url: 'https://i.postimg.cc/X7xv22Dd/IMG-20211025-183319-5873.jpg',
            },
            timestamp: new Date(),
            footer: {
                text: 'Join us @greatroleplay.id',
            }
        }
    }
    msg.channel.send("@everyone");
}

function pengumuman (msg,params)
{
    if(params)
    {
        msg.channel.send("@everyone")
        const ann = new MessageEmbed()
        .setTitle(`Announcement from ${msg.author.username}`)
        .setAuthor('Announcement', 'https://i.postimg.cc/X7xv22Dd/IMG-20211025-183319-5873.jpg')
        .setDescription(`**${params}**`)
        .setThumbnail(`${msg.author.displayAvatarURL({format: 'png', dynamic: true })}`)
        .setFooter("GREATROLEPLAY")
        .setTimestamp(new Date())
        .setColor("ff0000")

        msg.channel.send(ann)
    }
    else
    {
        msg.channel.send("Usage: ```!ann [Text]```")
    }
}

function clearmsg(msg,params)
{
    const ammount = parseInt(params)
    if(ammount)
    {
        if(params < 2 ||params > 100) return msg.reply('Invalid Ammound')
        msg.channel.bulkDelete(ammount, true).catch(err => {
            console.log(err)
            msg.reply("An Error has ocurred")
        })
    }
    else
    {
        msg.reply("Usage: ```!clean [ammount]```")
    }
}

client.on('message', async msg => {
    if(!msg.content.startsWith(prefix) || msg.author.bot) return
    const args = msg.content.trim().split(/\s+/g)
    const cmd = args.shift().toLowerCase()

    if(cmd == '!samp')
    {
        if(!args.length) return msg.channel.send("USAGE: !samp [Ip][Port]")
        else if(!args[1]) return msg.channel.send("You didn't input the port")
        else if(args[2]) return msg.channel.send("Error")

        let server_ip = args[0]
        let server_port = parseInt(args[1])
        console.log(`Debug: ${server_ip}:${server_port}`)
        var samp = {
            host: server_ip,
            port: server_port
        }
        query(samp, function(error,response){
            if(error)
            {
                msg.channel.send("Server Unavailable")
            }
            else
            {
                const serger = new MessageEmbed()
                .setTitle(`${response['hostname']}`)
                .setColor('#800080')
                .addFields(
                    { name: 'Gamemode', value: `${response['gamemode']}`, inline: false},
                    { name: 'Players', value: `${response['online']}/${response['maxplayers']}`, inline: false },
                    { name: 'Language', value: `${response['mapname']}`, inline: false},
                    { name: 'Version', value: `${response['rules'].version}`, inline: false},
                    { name: 'Website', value: `${response['rules'].weburl}`, inline: false},
                    { name: 'Map', value: `${response['rules'].mapname}`, inline: false}
                )
                .setThumbnail('https://i.postimg.cc/X7xv22Dd/IMG-20211025-183319-5873.jpg')
                .setFooter('Join us @greatroleplay.id', 'https://i.postimg.cc/X7xv22Dd/IMG-20211025-183319-5873.jpg')
                .setTimestamp(new Date())
                 msg.channel.send(serger)
                 console.log(response)
            }
        })
    }
    if(msg.content.charAt(0) == prefix)
    {
        const request = msg.content.substr(1);
        let command, parameters = [];

        if(request.indexOf(" ") !== -1)
        {
            command = request.substr(0, request.indexOf(" "));
            parameters = request.split(" ");
            parameters.shift();
        }
        else
        {
            command = request;
        }
        switch(command.toLowerCase())
        {
            case "players":
                msg.channel.send(`Checking players...`)
                .then(msg => {
                    setTimeout(function(){
                        query(options, function(error,response){
                            if(error)
                            {
                                msg.edit("Server is Offline")
                            }
                            else
                            {
                                msg.edit(`${response['online']} Players`)
                            }
                        })
                    }, 1000)
                })
                break;
            case "status":
                ServerStatus(msg);
                break;
            case "start":
                 if(msg.member.roles.cache.has('916636843095781396'))
                {
                    msg.channel.bulkDelete(1)
                    msg.channel.send('ONLINE STATUS')
                    .then(msg => {
                        s = setInterval(function() {
                            getServerInfo(msg)
                        }, 2000)
                    })
                }
                else
                {
                    msg.reply("You don't have permission")
                }
                break;
            case "stop":
                if(msg.member.roles.cache.has('916636843095781396'))
                {
                    if(!s) 
                    {
                        msg.reply("I Can't find any live Statistics running")
                    }
                    else
                    {
                        msg.react('👍')
                        clearInterval(s)
                    }
                }
                else
                {
                    msg.reply("You don't have permission")
                }
                break;
            case "ping":
                var svping;
                getServerPing("139.99.52.183:7778", 7778, function(error,response){
                    if(error)
                    {
                        svping = `Server Ping: 0ms`
                    }
                    else
                    {
                        svping = `Server Ping: ${response}ms`
                    }
                })
                msg.channel.send("Calculating ping...")
                .then(message => {
                    setTimeout(function(){
                        var ping = message.createdTimestamp - msg.createdTimestamp 
                        message.edit(`Latency: ${ping}ms\n${svping}`)
                    }, 1000)
                })
                break;
            case "tendang":
                if(msg.member.roles.cache.has('805471217565433927'))
                {
                    if(msg.mentions.members.first()){
                        msg.mentions.members.first().kick().catch(err => {
                            console.log(err)//Debug
                            msg.reply("I Can't Kick This User")
                        });
                    }
                    else
                    {
                        msg.reply("Plesae tag someone, EX:```!tendang @Alpa#1234```")
                    }
                }
                else
                {
                    msg.reply("You don't have permission")
                }
                break;
            case "rr":
                if(msg.channel.id != '912504546205499442') return
                if(!msg.member.hasPermission('ADMINISTRATOR')) return msg.reply("You can't use that")
                msg.channel.bulkDelete(1)
                CreateButton(msg)
                break;
            case "ann":
                if(msg.channel.type == 'dm') return msg.reply("You can't use that here")
                if(msg.member.hasPermission('ADMINISTRATOR'))
                {
                    msg.channel.bulkDelete(1)
                    pengumuman(msg, parameters.join(" "))
                }
                else
                {
                    msg.reply("You don't have permission")
                }
                break;
            case "off":
                    if(msg.channel.type == 'dm') return msg.reply("You can't use that here")
                    if(msg.member.hasPermission('ADMINISTRATOR'))
                    {
                        msg.channel.bulkDelete(1)
                        badai(msg)
                    }
                    else
                    {
                        msg.reply("You don't have permission")
                    }
                    break;
            case "on":
                if(msg.channel.type == 'dm') return msg.reply("You can't use that here")
                if(msg.member.hasPermission('ADMINISTRATOR'))
                {
                    msg.channel.bulkDelete(1)
                    mengudara(msg)
                }
                else
                {
                    msg.reply("You don't have permission")
                }
                break;
            case "clean":
                if(msg.channel.type == 'dm') return msg.reply("You can't use that here")
                if(msg.member.hasPermission('MANAGE_MESSAGES'))
                {
                    msg.channel.bulkDelete(1)
                    clearmsg(msg, parameters.join(" "))
                }
                else
                {
                    msg.reply("You don't have permission")
                }
                break;
            case "invite":
                const inv = new MessageEmbed()
                .setTitle("GREATROLEPLAY")
                .setDescription("Hello you can support us by invite our bot to your server. You can join to our samp server too\n**Join discord:\n__npm startps://discord.gg/greatsamp__**\n**Play on Our SAMP Server:\n__```css\n139.99.52.183:7778:7778\n```__**\n**Invite Me!:\n__https://discord.com/api/oauth2/authorize?client_id=838072866469445662&permissions=8&scope=bot__**\n***__Thanks to use me anyway!__***")
                .setColor(0x800080)
                .setImage('https://i.postimg.cc/X7xv22Dd/IMG-20211025-183319-5873.jpg')
                .setThumbnail('https://i.postimg.cc/X7xv22Dd/IMG-20211025-183319-5873.jpg')
                .setFooter("Join us @greatroleplay.id")
                .setTimestamp(new Date())
                msg.channel.send(inv)
                break;
            case "help":
                helpinfo(msg)
                break;
        }
    }
})

client.login(config.token);
