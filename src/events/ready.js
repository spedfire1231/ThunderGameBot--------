const client = require('../../src/index');

client.on('ready', () => {
    console.log(`${client.user.tag} все файлы загружены\n
    Пакеты данных переданы
    Файлы обнаружены
    Проверка Базы Данных
    
    База Данных прошла проверку
    
    Все файлы проверены, готовы к работе! Powered by .thunder
    © 2021 ThunderBot, Inc.`);
})