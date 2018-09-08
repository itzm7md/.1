const Discord = require('discord.js');
const epic = new Discord.Client();

epic.on('ready',async () => {
  epic.channels.find(ch => ch.id === "487038806088876034" && ch.type === 'voice').join();
});

// طبعا عشان الكود يشتغل بكفاءة لازم يكون البوت مفتوح 24 ساعة
// البوت بيخرج برا الروم اذا الخادم قفل
// جميع الحقوق محفوظة لسيرفر كودز

epic.login("487961782732849163.wgmX-qm4yy7SHE-8mROF7vUGA7s")

