client.on('ready',async () => {
let channel = hero.channels.find(r => r.id === '487045322929995777' && r.type === 'voice');
channel.join().catch(e => console.error(e));
});

client.login('487961782732849163.wgmX-qm4yy7SHE-8mROF7vUGA7s');
