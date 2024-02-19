const TelegramBot = require('node-telegram-bot-api')

const Token = '6489120932:AAFwQ8s1CE33q0F7H1ni520sUHKKIKQCTfQ'

const bot = new TelegramBot(Token, {
    polling: true
})

bot.on('message', async msg => {
    
    const text = msg.text;
    const chatId = msg.chat.id;
    console.log(msg);

    if (text === '/start') {
        await bot.sendPhoto(chatId, './1.png', {
            caption: 'Assalomu aleykum'
        })
        
        await bot.sendMessage(chatId, 'Tillni tanlang 🇺🇿\nВыберите язык 🇷🇺', {
                    reply_markup:  {
                        inline_keyboard: [
                            [{text: `O'zbekcha 🇺🇿`, callback_data: 'uzbek_language'},{text: 'Русский 🇷🇺', callback_data: 'rus_language'}]
                        ]
                    }
                })
                       
    }

    if (text === '1-120-2024-00183UZ'){
        return bot.sendMessage(chatId, `kod: 1-120-2024-00183UZ\nIsmi/Имя: KENJAYEVA OSIDAXON MAJITOVNA\nmodel: TRACKER-2\nnavbat/очередь: 347`)
    }

    if (text === '1-120-2024-00182UZ'){
        return bot.sendMessage(chatId, `kod: 1-120-2024-00182UZ\nIsmi/Имя: MATKARIMOV ZOKIR XUDOYBERDIYEVICH\nmodel: ONIX\nnavbat/очередь: 79`)
    }

    if (text === '1-120-2024-00181UZ'){
        return bot.sendMessage(chatId, `kod: 1-120-2024-00181UZ\nIsmi/Имя: SHUXRATJONOV ARAPATALI SHUXRATJON O‘G‘LI\nmodel: TRACKER-2\nnavbat/очередь: 897`)
    }

    if (text === '1-120-2024-00180UZ'){
        return bot.sendMessage(chatId, `kod: 1-120-2024-00180UZ\nIsmi/Имя: ASHURALIYEV NAVRO‘Z SADRIDDIN O‘G‘L\nmodel: TAHOE-2\nnavbat/очередь: 32`)
    }

    if (text === '1-120-2024-00179UZ'){
        return bot.sendMessage(chatId, `kod: 1-120-2024-00179UZ\nIsmi/Имя: INAMOV AZAMAT SHUXRAT O‘G‘LI\nmodel: TAHOE-2\nnavbat/очередь: 31`)
    }

    if (text === '1-120-2024-00176UZ'){
        return bot.sendMessage(chatId, `kod: 1-120-2024-00176UZ\nIsmi/Имя: SODIQOV AZAMJON AKRAMJONOVICH\nmodel: ONIX\nnavbat/очередь: 49`)
    }

    if (text === '1-120-2024-00177UZ'){
        return bot.sendMessage(chatId, `kod: 1-120-2024-00177UZ\nIsmi/Имя: YOKUBBAYEV ABDURAXIM XABIBULLO O‘G‘LI\nmodel: ONIX\nnavbat/очередь: 25`)
    }

    if (text === '1-120-2024-00174UZ'){
        return bot.sendMessage(chatId, `kod: 1-120-2024-00174UZ\nIsmi/Имя: KARIMOV NE’MAT ISROILJANOVICH\nmodel: MALIBU-2\nnavbat/очередь: 3`)
    }

    if (text === '1-120-2024-00173UZ'){
        return bot.sendMessage(chatId, `kod: 1-120-2024-00173UZ\nIsmi/Имя: KARIMOV NURIDDIN ISROILJON O‘G‘LI\nmodel: TRACKER-2\nnavbat/очередь: 45`)
    }

    if (text === '1-120-2024-00172UZ'){
        return bot.sendMessage(chatId, `kod: 1-120-2024-00172UZ\nIsmi/Имя: YUSUPOV XUSANBOY MO‘YDINBAYEVICH\nmodel: ONIX\nnavbat/очередь: 35`)
    }

    if (text === '1-120-2024-00171UZ'){
        return bot.sendMessage(chatId, `kod: 1-120-2024-00171UZ\nIsmi/Имя: KENJAYEV OYBEK AZAMATJONOVICH\nmodel: ONIX\nnavbat/очередь: 51`)
    }

    if (text === '1-120-2024-00170UZ'){
        return bot.sendMessage(chatId, `kod: 1-120-2024-00170UZ\nIsmi/Имя: YUSUBOV MAXMUDJON MURODJON O‘G‘LI\nmodel: ONIX\nnavbat/очередь: 30`)
    }

    if (text === '3-120-2024-00169UZ'){
        return bot.sendMessage(chatId, `kod: 3-120-2024-00169UZ\nIsmi/Имя: "MUSAFFO TA'MINOT BREAND MA'SULYATI CHEKLANGAN JAMIYAT\nmodel: TRACKER-2\nnavbat/очередь: 180`)
    }

    if (text === '1-120-2024-00143UZ'){
        return bot.sendMessage(chatId, `kod: 1-120-2024-00143UZ\nIsmi/Имя: YUSUPOVA SHIRMONOY HASANBOY QIZI\nmodel: TRACKER-2\nnavbat/очередь: 965`)
    }

    if (text === '1-120-2024-00114UZ'){
        return bot.sendMessage(chatId, `kod: 1-120-2024-00114UZ\nIsmi/Имя: DADAJONOV ZIYODULLO XAKIMJONOVICH\nmodel: TRACKER-2\nnavbat/очередь: 842`)
    }

    if (text === '1-120-2024-00062UZ'){
        return bot.sendMessage(chatId, `kod: 1-120-2024-00062UZ\nIsmi/Имя: XAMIDOVA MUKTOBARXON XXX\nmodel: TRACKER-2\nnavbat/очередь: 153`)
    }

    if (text === '1-120-2024-00057UZ'){
        return bot.sendMessage(chatId, `kod: 1-120-2024-00057UZ\nIsmi/Имя: НАБИЕВА МАМЛАКАТЖОН САБНАЗАРОВНА\nmodel: TRACKER-2\nnavbat/очередь: 931`)
    }

    if (text === '1-120-2023-78922US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-78922US\nIsmi/Имя: SAYIBBAYEV ISROILJON MAXAMADJANOVICH\nmodel: DAMAS-2\nnavbat/очередь: 4497`)
    }

    if (text === '1-120-2023-83812US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-83812US\nIsmi/Имя: DADABOYEV ELMUROD MAMATXUJAYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 4381`)
    }

    if (text === '1-120-2023-94670US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-94670US\nIsmi/Имя: ABDULMAJITOVA NILUFAR AXMADJON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 4424`)
    }

    if (text === '1-120-2023-78640US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-78640US\nIsmi/Имя: XOMIDOVA MARXAMAT RAXMONOVNA\nmodel: DAMAS-2\nnavbat/очередь: 4988`)
    }

    if (text === '1-120-2023-94911US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-94911US\nIsmi/Имя: AZIZOVA SAIDAXON MUMINJANOVNA\nmodel: DAMAS-2\nnavbat/очередь: 5106`)
    }

    if (text === '1-120-2023-72887US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-72887US\nIsmi/Имя: DJURAYEV ZAKIR TURGUNOVICH\nmodel: DAMAS-2\nnavbat/очередь: 5464`)
    }

    if (text === '1-120-2023-88380US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-88380US\nIsmi/Имя: Тураев Умеджон Абдумуталибович\nmodel: DAMAS-2\nnavbat/очередь: 242`)
    }

    if (text === '1-120-2023-82486US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-82486US\nIsmi/Имя: BOBIRJON AXMADJONOV AMINJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 5193`)
    }

    if (text === '1-120-2023-91964US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-91964US\nIsmi/Имя: TURSUNOV MO‘MINJON YO‘LDASHOVICH\nmodel: DAMAS-2\nnavbat/очередь: 4592`)
    }

    if (text === '1-120-2023-66515US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-66515US\nIsmi/Имя: ROXMONOV BOTIRJON YIGITALI O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 4583`)
    }

    if (text === '1-120-2023-91111US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-91111US\nIsmi/Имя: KUMRIYEV ILYOS MUXTORALIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 4642`)
    }

    if (text === '1-120-2023-72509US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-72509US\nIsmi/Имя: TURG‘UNOVA MUNIRAXON SHOKIRJONOVNA\nmodel: DAMAS-2\nnavbat/очередь: 4748`)
    }

    if (text === '1-120-2023-62668US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-62668US\nIsmi/Имя: XAKIMOVA XURINISSO XAMIDJANOVNA\nmodel: DAMAS-2\nnavbat/очередь: 4689`)
    }

    if (text === '1-120-2023-87880US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-87880US\nIsmi/Имя: MAMATKARIMOV ABDULLOH AZAMJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 4980`)
    }

    if (text === '1-120-2023-65259US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-65259US\nIsmi/Имя: ERGASHEV MUHRIDDINXON FAZLIDDINXON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 33403`)
    }

    if (text === '1-120-2023-80524US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-80524US\nIsmi/Имя: ALIMOV FARRUX MAXAMADOVICH\nmodel: COBALT\nnavbat/очередь: 48402`)
    }

    if (text === '1-120-2023-78170US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-78170US\nIsmi/Имя: ABDURAHIMOV MUHAMMADSODIQ OYBEK O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 33304`)
    }

    if (text === '1-120-2023-85773US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-85773US\nIsmi/Имя: Karimova Farqinsa Axmadjanovna\nmodel: DAMAS-2\nnavbat/очередь: 33307`)
    }

    if (text === '1-120-2023-93799US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-93799US\nIsmi/Имя: Ибрагимов Носирхон Рустамович\nmodel: COBALT\nnavbat/очередь: 47916`)
    }

    if (text === '1-120-2023-62339US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-62339US\nIsmi/Имя: SADIKOVA RISKINISSO BALTAYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 33291`)
    }

    if (text === '1-120-2023-72446US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-72446US\nIsmi/Имя: G‘AFUROV ULUG‘BEK ZAYLIDDIN O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 33405`)
    }

    if (text === '1-120-2023-99541US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-99541US\nIsmi/Имя: XOMIDOV JAMSHID IBRAGIMOVICH\nmodel: COBALT\nnavbat/очередь: 47222`)
    }

    if (text === '1-120-2023-98943US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-98943US\nIsmi/Имя: ABDULLAYEVA LUTFINISO DAMINOVNA\nmodel: DAMAS-2\nnavbat/очередь: 33273`)
    }

    if (text === '1-120-2023-73063US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-73063US\nIsmi/Имя: MAXMUDOVA SHAXNOZA RUSTOMOVNA\nmodel: COBALT\nnavbat/очередь: 47357`)
    }

    if (text === '1-120-2023-78635US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-78635US\nIsmi/Имя: AKBARALIYEVA TILLABUVISH NAMOZALI QIZI\nmodel: DAMAS-2\nnavbat/очередь: 43687`)
    }

    if (text === '1-120-2023-64526US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-64526US\nIsmi/Имя: ABDINAZAROVA MAXBUBA MIRZANAZAROVNA\nmodel: DAMAS-2\nnavbat/очередь: 2454`)
    }

    if (text === '1-120-2023-83291US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-83291US\nIsmi/Имя: SUPIXANOV ZUXRITDIN ZAYNITDINOVICH\nmodel: DAMAS-2\nnavbat/очередь: 43710`)
    }

    if (text === '1-120-2023-68221US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-68221US\nIsmi/Имя: UMARALIYEV XOSHIMJON BILOLIDDIN O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 44392`)
    }

    if (text === '1-120-2023-72049US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-72049US\nIsmi/Имя: RAFIKOV BEGZOD MANSURJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 43949`)
    }

    if (text === '1-120-2023-74855US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74855US\nIsmi/Имя: IMOMBERDIYEV DONIYOR EGAMBERDI O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 12036`)
    }

    if (text === '1-120-2023-86132US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-86132US\nIsmi/Имя: NORMATOVA MAVLUDA FAZILDINOVNA\nmodel: DAMAS-2\nnavbat/очередь: 3070`)
    }

    









    
})

bot.on('callback_query', async msg => {
    
    const data = msg.data;
    const chatId = msg.message.chat.id;
    console.log(msg);

    if (data == 'rus_language') {
        return bot.sendMessage(chatId, 'Нажмите на кнопку "Искать"', {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Искать 🔍',
                            callback_data: 'Search_katalog'
                        }
                    ]
                ]
            }
        })
        

        
    }

    if (data == 'uzbek_language') {
        return bot.sendMessage(chatId, '"Qidirish" knopkasini bosing', {
            reply_markup: {
                inline_keyboard: [
                    [
                        {
                            text: 'Qidirish 🔍',
                            callback_data: 'Search_katalog'
                        }
                    ]
                ]
            }
        })
    }

    if (data == 'Search_katalog') {
        return bot.sendMessage(chatId, `Namuna/Образец: kod 1-120-20XX-XXXXX XX`)
        
    }

   
    console.log(msg);
})




