const Discord = require("discord.js");//NWA
const db = require("quick.db");//NWA
exports.run = (client, message, args) => {//NWA
  if (args[0] == "aç") {//NWA
    if (db.has(`antiraidK_${message.guild.id}`) === true) {
      return message.channel.send("Anti-raid zaten açılmış.");//NWA
    }
    db.set(`antiraidK_${message.guild.id}`, "anti-raid-aç");//NWA
    message.reply("Anti-raid sistemi başarıyla açıldı");//NWA
  }
 
  if (args[0] == "kapat") {//NWA
    if (db.has(`antiraidK_${message.guild.id}`) === false) {//NWA
      return message.channel.send(
        "Anti-raid açılmamış. Açmak için **-anti-raid aç**"//NWA
      );
    }
    db.delete(`antiraidK_${message.guild.id}`, "anti-raid-aç");//NWA
    message.reply("Anti-raid sistemi başarıyla kapatıldı");//NWA
  }
  if (!args[0])//NWA
    return message.reply(//NWA
      "Lütfen geçerli işlem girin. Örnek: **-anti-raid aç/kapat**"//NWA
    );
};
exports.conf = {
  enabled: true,//NWA
  guildOnly: true,//NWA//NWA
  aliases: [],//NWA
  permLevel: 0//NWA
};//NWA
exports.help = {
  name: "anti-raid"//NWA
};