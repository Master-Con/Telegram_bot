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

    if (text === '1-120-2023-75859US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-75859US\nIsmi/Имя: OBIDINOV TOLIBJON NASRIDIN O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 44286`)
    }

    if (text === '1-120-2023-70104US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-70104US\nIsmi/Имя: AXMADJONOVA MAHBUBA ABDUMALIK QIZI\nmodel: DAMAS-2\nnavbat/очередь: 44172`)
    }

    if (text === '1-120-2023-83724US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-83724US\nIsmi/Имя: ASHUROV AKMALJON ALIJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 44305`)
    }

    if (text === '1-120-2023-63542US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-63542US\nIsmi/Имя: ZIYAVADINOV XAMIDULLA TURGUNPULATOVICH\nmodel: DAMAS-2\nnavbat/очередь: 43181`)
    }

    if (text === '1-120-2023-83828US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-83828US\nIsmi/Имя: RAXIMOV JAMSHID RASHIDJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 12015`)
    }

    if (text === '1-120-2023-95641US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95641US\nIsmi/Имя: MULLABAYEV SAIBJON LUXMANOVICH\nmodel: DAMAS-2\nnavbat/очередь: 43455`)
    }

    if (text === '1-120-2023-95012US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95012US\nIsmi/Имя: KENJAYEV MURODJON KOBILJON-O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 43615`)
    }

    if (text === '1-120-2023-62733US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-62733US\nIsmi/Имя: OLIMOV SHERALI ULKANOVICH\nmodel: DAMAS-2\nnavbat/очередь: 42987`)
    }

    if (text === '1-120-2023-62268US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-62268US\nIsmi/Имя: QODIRXO‘JAYEV AMIRXON ALIXON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 43109`)
    }

    if (text === '1-120-2023-83954US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-83954US\nIsmi/Имя: ERNAZAROVA XOSIYATBI UMAROVNA\nmodel: DAMAS-2\nnavbat/очередь: 43362`)
    }

    if (text === '1-120-2023-74365US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74365US\nIsmi/Имя: ABDUG‘AFFOROV BEKZOD ABDURASHID O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 43281`)
    }

    if (text === '1-120-2023-95992US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95992US\nIsmi/Имя: XAYDAROV MUXTORJON XAYDAROVICH\nmodel: DAMAS-2\nnavbat/очередь: 42989`)
    }

    if (text === '1-120-2023-86091US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-86091US\nIsmi/Имя: MAMATOV AVAZBEK IKRAMOVICH\nmodel: DAMAS-2\nnavbat/очередь: 42933`)
    }

    if (text === '1-120-2023-92102US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-92102US\nIsmi/Имя: XOJIMATOV MUHAMMADDIN ATXAMJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 42963`)
    }

    if (text === '1-120-2023-87289US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-87289US\nIsmi/Имя: XUSANOV ANVAR MUMINJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 43642`)
    }

    if (text === '1-120-2023-77451US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-77451US\nIsmi/Имя: AXMEDOV TOXIRJON AZIMOVICH\nmodel: DAMAS-2\nnavbat/очередь: 43390`)
    }

    if (text === '1-120-2023-92980US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-92980US\nIsmi/Имя: MUZAFFAROV SHERZOD ISMAILOVICH\nmodel: DAMAS-2\nnavbat/очередь: 43514`)
    }

    if (text === '1-120-2023-88263US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-88263US\nIsmi/Имя: HOLMAMATOV AZIZJON UMIDJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 43579`)
    }

    if (text === '1-120-2023-76371US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-76371US\nIsmi/Имя: MAXSUDOVA MANZURA ROXATALIYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 2538`)
    }

    if (text === '1-120-2023-87543US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-87543US\nIsmi/Имя: DJURAXONOV KAMOLIDDINXON JAMOLIDINXON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 42409`)
    }

    if (text === '1-120-2023-75312US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-75312US\nIsmi/Имя: ULUG‘MIRZAYEV PAXLOVON O‘TKIRBEK O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 42418`)
    }

    if (text === '1-120-2023-93451US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-93451US\nIsmi/Имя: RAXMONKULOV MADAMINJON MAMASIDIKOVICH\nmodel: DAMAS-2\nnavbat/очередь: 42482`)
    }

    if (text === '1-120-2023-73388US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-73388US\nIsmi/Имя: PARPIYEV VALISHER TASHKANBOY O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 41452`)
    }

    if (text === '1-120-2023-66154US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-66154US\nIsmi/Имя: ISAYEVA GULNORA G‘AYRATJONOVNA\nmodel: DAMAS-2\nnavbat/очередь: 41659`)
    }

    if (text === '1-120-2023-74288US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74288US\nIsmi/Имя: XOLDOROVA MOXIRAXON MUXTOROVNA\nmodel: DAMAS-2\nnavbat/очередь: 41950`)
    }

    if (text === '1-120-2023-87649US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-87649US\nIsmi/Имя: YAKUBOVA AZIZA TURGUNBOYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 41979`)
    }

    if (text === '1-120-2023-86357US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-86357US\nIsmi/Имя: MASHRAPOV ALIMARDON NURDINXOJAYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 41600`)
    }

    if (text === '1-120-2023-76393US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-76393US\nIsmi/Имя: TURGUNOV JAVLONBEK DILSHOD O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 41555`)
    }

    if (text === '1-120-2023-71855US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-71855US\nIsmi/Имя: SHUKURJONOV SHUXRAT SHOKIROVICH\nmodel: DAMAS-2\nnavbat/очередь: 41807`)
    }

    if (text === '1-120-2023-64715US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-64715US\nIsmi/Имя: KENJAYEVA MUNISXON KARIMOVNA\nmodel: DAMAS-2\nnavbat/очередь: 42075`)
    }

    if (text === '1-120-2023-67344US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-67344US\nIsmi/Имя: ABDULLAYEV KOVILJON YUSUBOVICH\nmodel: DAMAS-2\nnavbat/очередь: 40285`)
    }

    if (text === '1-120-2023-98603US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-98603US\nIsmi/Имя: MAMAYUSUPOVA GULJAXON TURSINALI QIZI\nmodel: DAMAS-2\nnavbat/очередь: 40567`)
    }

    if (text === '1-120-2023-95259US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95259US\nIsmi/Имя: ZAKIROV NURALI IBRAGIMOVICH\nmodel: DAMAS-2\nnavbat/очередь: 40239`)
    }

    if (text === '1-120-2023-79227US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-79227US\nIsmi/Имя: Хомидов Ибрагим Исакович\nmodel: DAMAS-2\nnavbat/очередь: 40447`)
    }

    if (text === '1-120-2023-69024US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-69024US\nIsmi/Имя: MANSUROVA NOZILA RAXMONALI QIZI\nmodel: DAMAS-2\nnavbat/очередь: 2393`)
    }

    if (text === '1-120-2023-77065US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-77065US\nIsmi/Имя: DJURAYEV NODIR ALIMJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 2776`)
    }

    if (text === '1-120-2023-76185US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-76185US\nIsmi/Имя: ORIPOV OBIDXON RASHODXONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 40848`)
    }

    if (text === '1-120-2023-87475US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-87475US\nIsmi/Имя: TURSUNOV YODGOR QOSIMJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 40311`)
    }

    if (text === '1-120-2023-74599US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74599US\nIsmi/Имя: KALONOVA ZULXUMOR KAIMJONOVNA\nmodel: DAMAS-2\nnavbat/очередь: 39254`)
    }

    if (text === '1-120-2023-83815US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-83815US\nIsmi/Имя: MAMADALIYEV SHOXRUXBEK SHAVKATJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 12016`)
    }

    if (text === '1-120-2023-95507US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95507US\nIsmi/Имя: SHERALIYEV SHUXRATJON SOTVOLDIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 39162`)
    }

    if (text === '1-120-2023-60880US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-60880US\nIsmi/Имя: ABDUSAMATOV BOBURJON TOLIBJON O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 47565`)
    }

    if (text === '1-120-2023-80293US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-80293US\nIsmi/Имя: USMONALIYEV NODIRBEK ABDUSATTOR O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 2240`)
    }

    if (text === '1-120-2023-71338US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-71338US\nIsmi/Имя: MAXSUDOV ILHOMJON RAIMOVICH\nmodel: DAMAS-2\nnavbat/очередь: 38778`)
    }

    if (text === '1-120-2023-61283US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-61283US\nIsmi/Имя: ALOXO‘JAYEV SAYDULLOXON AYUBXON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 39676`)
    }

    if (text === '1-120-2023-82000US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-82000US\nIsmi/Имя: ISMANOV BEGZOD MUXAMADJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 39692`)
    }

    if (text === '1-120-2023-95637US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95637US\nIsmi/Имя: XAKIMOV SHAVKAT RASULJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 39062`)
    }

    if (text === '1-120-2023-61989US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-61989US\nIsmi/Имя: ROZIXUJAYEV ABDULXAY A’ZAMXON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 39464`)
    }

    if (text === '1-120-2023-96689US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-96689US\nIsmi/Имя: G‘AFUROVA NIGORA G‘AFUR QIZI\nmodel: DAMAS-2\nnavbat/очередь: 38885`)
    }

    if (text === '1-120-2023-96399US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-96399US\nIsmi/Имя: SOLIYEVA MOXIRA RAXIMOVNA\nmodel: DAMAS-2\nnavbat/очередь: 38384`)
    }

    if (text === '1-120-2023-78926US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-78926US\nIsmi/Имя: UMARALIYEVA UMIDA MAXMUDOVNA\nmodel: DAMAS-2\nnavbat/очередь: 38732`)
    }

    if (text === '1-120-2023-86559US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-86559US\nIsmi/Имя: LUTFULLAYEV AKMALXON MUXBULLAYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 12199`)
    }

    if (text === '1-120-2023-84644US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84644US\nIsmi/Имя: MADALIYEV ALIJON UMAROVICH\nmodel: COBALT\nnavbat/очередь: 47642`)
    }

    if (text === '1-120-2023-84284US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84284US\nIsmi/Имя: AZIMOV ULUG‘BEK XOSHIMOVICH\nmodel: DAMAS-2\nnavbat/очередь: 37837`)
    }

    if (text === '1-120-2023-64657US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-64657US\nIsmi/Имя: IZZATULLAYEV JAHONGIR BAXTIYOR O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 12031`)
    }

    if (text === '1-120-2023-73133US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-73133US\nIsmi/Имя: YULCHIYEV ABDUKODIR ABDULAZIZOVICH\nmodel: COBALT\nnavbat/очередь: 59021`)
    }

    if (text === '1-120-2023-86123US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-86123US\nIsmi/Имя: SADIQOV AZAMJON ERKINBOYEVICH\nmodel: COBALT\nnavbat/очередь: 47405`)
    }

    if (text === '1-120-2023-94611US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-94611US\nIsmi/Имя: SAIDUMAROVA MALIKA XOJIMATOVNA\nmodel: COBALT\nnavbat/очередь: 43382`)
    }

    if (text === '1-120-2023-81272US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-81272US\nIsmi/Имя: XAKIMOV SHOKIRJON RASULJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 37414`)
    }

    if (text === '1-120-2023-76894US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-76894US\nIsmi/Имя: TAJAXMEDOV LUTPIDIN BAXRIDDINOVICH\nmodel: COBALT\nnavbat/очередь: 48739`)
    }

    if (text === '1-120-2023-77046US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-77046US\nIsmi/Имя: DADABAYEV PULATJON USARBAYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 2136`)
    }

    if (text === '1-120-2023-65944US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-65944US\nIsmi/Имя: RAXMONAZAROV SAYDULLOXON ABDULLOJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 2116`)
    }

    if (text === '1-120-2023-73497US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-73497US\nIsmi/Имя: MAMADJANOV SAYFULLO NARZULLAYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 12208`)
    }

    if (text === '1-120-2023-62833US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-62833US\nIsmi/Имя: NURMATOV ISROILJON ABDUMAJIT O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 37782`)
    }

    if (text === '1-120-2023-78385US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-78385US\nIsmi/Имя: UMAROV KAMOL AZIMJONOVICH\nmodel: COBALT\nnavbat/очередь: 43738`)
    }

    if (text === '1-120-2023-60365US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-60365US\nIsmi/Имя: HAYDAROV DADOXON YURSINALIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 37005`)
    }

    if (text === '1-120-2023-82261US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-82261US\nIsmi/Имя: SOLIYEVA MASUDA MIRALIMOVNA\nmodel: DAMAS-2\nnavbat/очередь: 12135`)
    }

    if (text === '1-120-2023-92144US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-92144US\nIsmi/Имя: KOSIMOV YAXYOXON TOJIBOYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 37171`)
    }

    if (text === '1-120-2023-84425US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84425US\nIsmi/Имя: ROZIQOV SHERZOD MUMINJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 37824`)
    }

    if (text === '1-120-2023-86715US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-86715US\nIsmi/Имя: ATABOYEVA XAMROBI ALIJONOVNA\nmodel: DAMAS-2\nnavbat/очередь: 2165`)
    }

    if (text === '1-120-2023-74150US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74150US\nIsmi/Имя: SULAYMANOVA INOBAD GANIYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 11612`)
    }

    if (text === '1-120-2023-61457US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-61457US\nIsmi/Имя: SALOXIDDINOVA SAYYORA SALOXIDDIN QIZI\nmodel: COBALT\nnavbat/очередь: 49108`)
    }

    if (text === '1-120-2023-61822US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-61822US\nIsmi/Имя: DEXKANOV AXMADALI INOMJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 36528`)
    }

    if (text === '1-120-2023-87617US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-87617US\nIsmi/Имя: MAXMUDOV AYUBXON AKRAM O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 36575`)
    }

    if (text === '1-120-2023-68191US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-68191US\nIsmi/Имя: USMONOV UMIDJON ODILJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 36545`)
    }

    if (text === '1-120-2023-93488US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-93488US\nIsmi/Имя: KAMBAROV JAMOL KAMOLOVICH\nmodel: DAMAS-2\nnavbat/очередь: 36188`)
    }

    if (text === '1-120-2023-89943US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-89943US\nIsmi/Имя: POLVONOVA SANOXAT TURSUNALIYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 12072`)
    }

    if (text === '1-120-2023-98238US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-98238US\nIsmi/Имя: RAHMANOV SULTANALI QODIROVICH\nmodel: DAMAS-2\nnavbat/очередь: 35109`)
    }

    if (text === '1-120-2023-88726US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-88726US\nIsmi/Имя: BEGMATOVA YODGORBI MELIYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 34825`)
    }

    if (text === '1-120-2023-81957US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-81957US\nIsmi/Имя: TEMIROV AXMADJON MAMASOLIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 34976`)
    }

    if (text === '1-120-2023-95160US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95160US\nIsmi/Имя: MAHMUDOV BAHODIRJON SHUXRATJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 34939`)
    }

    if (text === '1-120-2023-87742US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-87742US\nIsmi/Имя: MUMINOV QOBILJONSAMIJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 34871`)
    }

    if (text === '1-120-2023-83265US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-83265US\nIsmi/Имя: AZIZOVA MAXBUBA DJURAYEVNA\nmodel: COBALT\nnavbat/очередь: 47733`)
    }

    if (text === '1-120-2023-63872US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-63872US\nIsmi/Имя: PARPIYEV MUXAMMADJON SHARIF O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 48775`)
    }

    if (text === '1-120-2023-60955US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-60955US\nIsmi/Имя: ABDUNAZAROVA ODINA TOSHQINBOY QIZI\nmodel: DAMAS-2\nnavbat/очередь: 35048`)
    }

    if (text === '1-120-2023-64397US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-64397US\nIsmi/Имя: MIRFAYZULLAYEV RAXMONJON USUBJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 1914`)
    }

    if (text === '1-120-2023-92631US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-92631US\nIsmi/Имя: XALIKOV ABDUSAMAT ABDUSATTOROVICH\nmodel: COBALT\nnavbat/очередь: 49006`)
    }

    if (text === '1-120-2023-61091US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-61091US\nIsmi/Имя: XATAMOV MUZAFFOR LATIFJONOVICH\nmodel: COBALT\nnavbat/очередь: 47767`)
    }

    if (text === '1-120-2023-99675US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-99675US\nIsmi/Имя: SALOXIDDINOV MAXMUDJON SALOXIDDIN O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 50109`)
    }

    if (text === '1-120-2023-83658US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-83658US\nIsmi/Имя: MAMADALIYEVA XABIBA BAXRIDDINOVNA\nmodel: COBALT\nnavbat/очередь: 43480`)
    }

    if (text === '1-120-2023-84102US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84102US\nIsmi/Имя: ABDULLAYEV MUXAMMADQODIR LUTFITDIN OGLI\nmodel: DAMAS-2\nnavbat/очередь: 32167`)
    }

    if (text === '1-120-2023-81325US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-81325US\nIsmi/Имя: ABDULLAYEV AKRAMJON ALISHEROVICH\nmodel: COBALT\nnavbat/очередь: 48465`)
    }

    if (text === '1-120-2023-93954US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-93954US\nIsmi/Имя: XAYDAROV G‘OFUR RAXMONALI UG‘LI\nmodel: DAMAS-2\nnavbat/очередь: 11736`)
    }

    if (text === '1-120-2023-61143US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-61143US\nIsmi/Имя: XOMIDOVA GULSORA AZIMOVNA\nmodel: DAMAS-2\nnavbat/очередь: 27990`)
    }

    if (text === '1-120-2023-67710US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-67710US\nIsmi/Имя: JAVXAROVA DILSHODAXON RASHITXON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 31178`)
    }

    if (text === '1-120-2023-76288US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-76288US\nIsmi/Имя: IMOMOV XOJIMIRZA GULAMOVICH\nmodel: DAMAS-2\nnavbat/очередь: 32009`)
    }

    if (text === '1-120-2023-70976US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-70976US\nIsmi/Имя: USMANOV AHROR VALIJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 32169`)
    }

    if (text === '1-120-2023-64480US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-64480US\nIsmi/Имя: Азизова Гулноза Мурод-кизи\nmodel: DAMAS-2\nnavbat/очередь: 27722`)
    }

    if (text === '1-120-2023-84882US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84882US\nIsmi/Имя: BAKIROV BAXTIYOR BOZORBOYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 11721`)
    }

    if (text === '1-120-2023-72392US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-72392US\nIsmi/Имя: NAKIYEVA BUSOLIYA MUYDINJANOVNA\nmodel: DAMAS-2\nnavbat/очередь: 31383`)
    }

    if (text === '1-120-2023-88463US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-88463US\nIsmi/Имя: ERKINOV AZAMAT DILMUROD O'G'LI\nmodel: COBALT\nnavbat/очередь: 45755`)
    }

    if (text === '1-120-2023-88364US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-88364US\nIsmi/Имя: RUSTAMOV ANVAR TURAKULOVICH\nmodel: COBALT\nnavbat/очередь: 46165`)
    }

    if (text === '1-120-2023-78605US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-78605US\nIsmi/Имя: MUXTOROVA MAFTUNA FAZLIDDIN QIZI\nmodel: DAMAS-2\nnavbat/очередь: 31251`)
    }

    if (text === '1-120-2023-73926US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-73926US\nIsmi/Имя: QUTBIDDINOV ZUHRIDDIN FAXRIDDIN O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 22503`)
    }

    if (text === '1-120-2023-81873US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-81873US\nIsmi/Имя: XALILOV AKRAM ULMASOVICH\nmodel: DAMAS-2\nnavbat/очередь: 31360`)
    }

    if (text === '1-120-2023-70360US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-70360US\nIsmi/Имя: MAMADALIYEVA MUNOJOT RAXMATALIYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 22435`)
    }

    if (text === '1-120-2023-98725US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-98725US\nIsmi/Имя: XABIBULLAYEV ISLOM IZZATULLA O'G'LI\nmodel: DAMAS-2\nnavbat/очередь: 22519`)
    }

    if (text === '1-120-2023-75768US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-75768US\nIsmi/Имя: JALOLOV JAVLON MUYDINJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 13984`)
    }

    if (text === '1-120-2023-89390US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-89390US\nIsmi/Имя: AXMATKULOV OBIDJON BAZARKULOVICH\nmodel: DAMAS-2\nnavbat/очередь: 22548`)
    }

    if (text === '1-120-2023-74147US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74147US\nIsmi/Имя: SAYDALIYEV ABDURASUL FAYZULLOYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 1553`)
    }

    if (text === '1-120-2023-90871US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-90871US\nIsmi/Имя: ALIMOVA FERUZA YOKUBJON-QIZI\nmodel: DAMAS-2\nnavbat/очередь: 14193`)
    }

    if (text === '1-120-2023-66431US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-66431US\nIsmi/Имя: Арипов Мухамаджон Алиевич\nmodel: DAMAS-2\nnavbat/очередь: 14410`)
    }

    if (text === '1-120-2023-60661US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-60661US\nIsmi/Имя: MUXAMMADJONOV ALIJON OLIMJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 11828`)
    }

    if (text === '1-120-2023-76069US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-76069US\nIsmi/Имя: TO‘YCHIBOYEV JAVOHIR KOMILJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 29524`)
    }

    if (text === '1-120-2023-64984US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-64984US\nIsmi/Имя: BOBOJONOVA FERUZA USMONALIYEVNA\nmodel: COBALT\nnavbat/очередь: 44555`)
    }

    if (text === '1-120-2023-60002US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-60002US\nIsmi/Имя: BUSTONOVA INOBAT RAXMONALIYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 29672`)
    }

    if (text === '1-120-2023-70996US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-70996US\nIsmi/Имя: NURULLAYEV NEMATJON MUXAMMADJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 29756`)
    }

    if (text === '1-120-2023-81127US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-81127US\nIsmi/Имя: YUSUPOV SALIMJON ABDULXAYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 22384`)
    }

    if (text === '1-120-2023-84501US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84501US\nIsmi/Имя: MAMADJANOV MAXMUDJON ALIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 21107`)
    }

    if (text === '1-120-2023-93780US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-93780US\nIsmi/Имя: SHAROPOV ABDUVAXOB KAIMOVICH\nmodel: DAMAS-2\nnavbat/очередь: 22404`)
    }

    if (text === '3-120-2023-84987US'){
        return bot.sendMessage(chatId, `kod: 3-120-2023-84987US\nIsmi/Имя: "MURODJON QURILISH MONTAJ" XUSUSIY KORXONA\nmodel: DAMAS-2\nnavbat/очередь: 29689`)
    }

    if (text === '1-120-2023-95500US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95500US\nIsmi/Имя: METINBOYEV JAVLONBEK ABDULXAMID O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 21183`)
    }

    if (text === '1-120-2023-60931US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-60931US\nIsmi/Имя: TESHABAYEVA MUAZZAM OLIMOVNA\nmodel: DAMAS-2\nnavbat/очередь: 21187`)
    }

    if (text === '1-120-2023-74795US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74795US\nIsmi/Имя: ISAQOV DOSTONBEK UBAYDULLAYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 29713`)
    }

    if (text === '1-120-2023-78146US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-78146US\nIsmi/Имя: YOQUBJANOVA NOZIMA AKRAMJON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 11790`)
    }

    if (text === '1-120-2023-63331US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-63331US\nIsmi/Имя: MODIYEVA GULNORA ASHIRALIYEVNA\nmodel: COBALT\nnavbat/очередь: 45032`)
    }

    if (text === '1-120-2023-77990US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-77990US\nIsmi/Имя: XAKIMJONOVA DILNURA BAHODIR QIZI\nmodel: DAMAS-2\nnavbat/очередь: 994`)
    }

    if (text === '1-120-2023-91531US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-91531US\nIsmi/Имя: NARGIZA MAMADJONOVA VALIYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 29605`)
    }

    if (text === '1-120-2023-89272US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-89272US\nIsmi/Имя: MAMADALIYEVA GULBAXOR MARUFALI QIZI\nmodel: DAMAS-2\nnavbat/очередь: 21450`)
    }

    if (text === '1-120-2023-63557US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-63557US\nIsmi/Имя: MALIKOV ULUG‘BEK XOLDARBOYEVICH\nmodel: COBALT\nnavbat/очередь: 26439`)
    }

    if (text === '1-120-2023-67735US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-67735US\nIsmi/Имя: ABDUROXIMOV MADAMINJON KOMILOVICH\nmodel: COBALT\nnavbat/очередь: 49187`)
    }

    if (text === '1-120-2023-86277US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-86277US\nIsmi/Имя: SOLIBOYEVA GULNOZA AHMADJON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 21451`)
    }

    if (text === '1-120-2023-80577US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-80577US\nIsmi/Имя: ABDURAXIMOV ULUG‘BEK RAIMOVICH\nmodel: DAMAS-2\nnavbat/очередь: 29761`)
    }

    if (text === '1-120-2023-68033US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-68033US\nIsmi/Имя: ORIFOVA BARNOXON ZOXIDJON-QIZI\nmodel: DAMAS-2\nnavbat/очередь: 1023`)
    }

    if (text === '1-120-2023-68424US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-68424US\nIsmi/Имя: ADOLATXON QURBONOVA ALIYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 21192`)
    }

    if (text === '1-120-2023-87817US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-87817US\nIsmi/Имя: NOSIRALIYEVA MUNIRA MIRZOVALI QIZI\nmodel: DAMAS-2\nnavbat/очередь: 21243`)
    }

    if (text === '1-120-2023-83128US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-83128US\nIsmi/Имя: UMAROV XASANJON MAXMUDJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 29343`)
    }

    if (text === '1-120-2023-76502US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-76502US\nIsmi/Имя: SHARIFJONOV SHOKIRJON SHUKURJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 29025`)
    }

    if (text === '1-120-2023-84461US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84461US\nIsmi/Имя: RAIMJONOVA MARXABO MUSAYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 20963`)
    }

    if (text === '1-120-2023-75140US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-75140US\nIsmi/Имя: MAMADJANOVA FAYZINISO ALIYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 20627`)
    }

    if (text === '1-120-2023-68686US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-68686US\nIsmi/Имя: SHOMURODOVA DILAFRUZ MAMADJONOVNA\nmodel: DAMAS-2\nnavbat/очередь: 21090`)
    }

    if (text === '1-120-2023-78679US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-78679US\nIsmi/Имя: MUMINOV ULMASBOY DEXKONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 21093`)
    }

    if (text === '1-120-2023-63179US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-63179US\nIsmi/Имя: ISOMADINOVA UMIDA USMONJONOVNA\nmodel: COBALT\nnavbat/очередь: 48863`)
    }

    if (text === '1-120-2023-82674US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-82674US\nIsmi/Имя: QURBONALIYEV AKRAMJON MUSINALIYEVICH\nmodel: COBALT\nnavbat/очередь: 48966`)
    }

    if (text === '1-120-2023-88275US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-88275US\nIsmi/Имя: YULCHIYEVA XIMOYATBU TO‘RAJANOVNA\nmodel: DAMAS-2\nnavbat/очередь: 20689`)
    }

    if (text === '1-120-2023-65120US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-65120US\nIsmi/Имя: BOTIROV QODIRALI ROXOTOVICH\nmodel: DAMAS-2\nnavbat/очередь: 20634`)
    }

    if (text === '1-120-2023-78077US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-78077US\nIsmi/Имя: MURODOV NURLANBEK GULOBBOYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 1871`)
    }

    if (text === '1-120-2023-81442US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-81442US\nIsmi/Имя: DAMINOV IKROMJON MUMINOVICH\nmodel: DAMAS-2\nnavbat/очередь: 1846`)
    }

    if (text === '1-120-2023-88126US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-88126US\nIsmi/Имя: JO‘RAYEV RUSTAMXON ISMOILXONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 28860`)
    }

    if (text === '1-120-2023-68954US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-68954US\nIsmi/Имя: RAXMANOVA INOBAT XXX\nmodel: DAMAS-2\nnavbat/очередь: 29062`)
    }

    if (text === '1-120-2023-98052US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-98052US\nIsmi/Имя: RUSTAMOV OBIDJON XOMIDJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 19887`)
    }

    if (text === '1-120-2023-84295US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84295US\nIsmi/Имя: TAJIBAYEVA ZULAYXO MO‘YDINOVNA\nmodel: DAMAS-2\nnavbat/очередь: 20001`)
    }

    if (text === '1-120-2023-77410US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-77410US\nIsmi/Имя: ISAMADDINOVA UKTAMOY TURAYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 20189`)
    }

    if (text === '1-120-2023-60091US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-60091US\nIsmi/Имя: RAXMONOV NIZOMIDIN AZIMJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 19900`)
    }

    if (text === '1-120-2023-66747US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-66747US\nIsmi/Имя: AXMADALIYEV XOSHIMALI MAMADALIYEVICH\nmodel: COBALT\nnavbat/очередь: 49495`)
    }

    if (text === '1-120-2023-69199US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-69199US\nIsmi/Имя: KARIMOV XALIM XAYDAROVICH\nmodel: DAMAS-2\nnavbat/очередь: 19984`)
    }

    if (text === '1-120-2023-93761US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-93761US\nIsmi/Имя: ABDULAYEVA XONZODA RUSTAMOVNA\nmodel: DAMAS-2\nnavbat/очередь: 18561`)
    }

    if (text === '1-120-2023-80360US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-80360US\nIsmi/Имя: JO‘RAYEVA MAFTUNA NURMAMATOVNA\nmodel: DAMAS-2\nnavbat/очередь: 28763`)
    }

    if (text === '1-120-2023-93421US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-93421US\nIsmi/Имя: KADIROVA SANOBAR UMATALIYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 20452`)
    }

    if (text === '1-120-2023-88787US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-88787US\nIsmi/Имя: MAMADJONOV BAXROMJON ALIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 28914`)
    }

    if (text === '1-120-2023-90344US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-90344US\nIsmi/Имя: SATTAROV RAVSHAN RAYIMBERDIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 18054`)
    }

    if (text === '1-120-2023-69944US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-69944US\nIsmi/Имя: ABDURASULOV AKMALJON MUXAMMADJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 17748`)
    }

    if (text === '1-120-2023-85114US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-85114US\nIsmi/Имя: IKROMOV DILSHOD SODIQJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 18552`)
    }

    if (text === '1-120-2023-85091US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-85091US\nIsmi/Имя: ХАКИМОВ ХАЛИМЖОН\nmodel: COBALT\nnavbat/очередь: 27281`)
    }

    if (text === '1-120-2023-74090US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74090US\nIsmi/Имя: SALOXIDDINOV OLIM ODILJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 11949`)
    }

    if (text === '1-120-2023-65621US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-65621US\nIsmi/Имя: NORMATOVA GULNOZA VALIJONOVNA\nmodel: DAMAS-2\nnavbat/очередь: 11982`)
    }

    if (text === '1-120-2023-67541US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-67541US\nIsmi/Имя: MIRFAYZULLAYEV MUZAFFAR SAYFULLAJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 18578`)
    }

    if (text === '1-120-2023-74802US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74802US\nIsmi/Имя: OTABAYEVA ZARIFA OBIDOVNA\nmodel: DAMAS-2\nnavbat/очередь: 13803`)
    }

    if (text === '1-120-2023-92593US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-92593US\nIsmi/Имя: SOIBOV AKBARALI RAXMONJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 13903`)
    }

    if (text === '1-120-2023-82457US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-82457US\nIsmi/Имя: RAHMONOVA SHAHZODA SOIBJON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 18254`)
    }

    if (text === '1-120-2023-97332US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-97332US\nIsmi/Имя: BOTIRXONOV JAMSHIDXON BAXROMXON OGLI\nmodel: DAMAS-2\nnavbat/очередь: 12148`)
    }

    if (text === '1-120-2023-83234US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-83234US\nIsmi/Имя: MADRAXIMOV MIRG‘OLIB VALIDJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 28460`)
    }

    if (text === '1-120-2023-70527US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-70527US\nIsmi/Имя: IBRAGIMOVA MINAJATXAN ISAVAYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 18755`)
    }

    if (text === '1-120-2023-71607US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-71607US\nIsmi/Имя: TUVG‘ANBOYEV MOHIRJON MAXMUDJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 28813`)
    }

    if (text === '1-120-2023-60794US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-60794US\nIsmi/Имя: BAXRIDINOV AXMADXON MARG‘UBILLOYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 884`)
    }

    if (text === '1-120-2023-73796US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-73796US\nIsmi/Имя: SHAMSIDDINOV ZUXRIDDIN ZAYNIDDINOVICH\nmodel: DAMAS-2\nnavbat/очередь: 28589`)
    }

    if (text === '1-120-2023-89209US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-89209US\nIsmi/Имя: KIRGIZOV JAVLON MAXKAMJONOVICH\nmodel: COBALT\nnavbat/очередь: 48263`)
    }

    if (text === '1-120-2023-96886US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-96886US\nIsmi/Имя: BAXRIDDINOV A’ZAMJON LUTPIDIN O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 28567`)
    }

    if (text === '1-120-2023-95139US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95139US\nIsmi/Имя: BEKMIRZAYEV RUSTAMJAN NURMIRZAYEVICH\nmodel: COBALT\nnavbat/очередь: 49812`)
    }

    if (text === '1-120-2023-81207US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-81207US\nIsmi/Имя: ESHATOV ULUG‘BEK TURSUNBOYEVICH\nmodel: COBALT\nnavbat/очередь: 49428`)
    }

    if (text === '1-120-2023-63181US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-63181US\nIsmi/Имя: MAHMUDOV TOLIBJON TO‘LQINJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 12322`)
    }

    if (text === '1-120-2023-94422US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-94422US\nIsmi/Имя: Temirov Dilshod Abduraxmanovich\nmodel: DAMAS-2\nnavbat/очередь: 681`)
    }

    if (text === '1-120-2023-60982US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-60982US\nIsmi/Имя: AKMAL MO‘YDINOV NUMONJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 28638`)
    }

    if (text === '1-120-2023-88926US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-88926US\nIsmi/Имя: IBRAGIMOV FARXODJON FAYZULLO-O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 26466`)
    }

    if (text === '1-120-2023-70924US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-70924US\nIsmi/Имя: SAIDOV OMADBEK ODILJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 15736`)
    }

    if (text === '1-120-2023-96665US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-96665US\nIsmi/Имя: Mamatov Nurillo Amanbayevich\nmodel: COBALT\nnavbat/очередь: 27026`)
    }

    if (text === '1-120-2023-65013US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-65013US\nIsmi/Имя: SHARIPOV MIRZOXID BAXROMOVICH\nmodel: COBALT\nnavbat/очередь: 47030`)
    }

    if (text === '1-120-2023-95227US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95227US\nIsmi/Имя: YULDASHEVA GULNORA YIGITALIYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 12146`)
    }

    if (text === '1-120-2023-83116US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-83116US\nIsmi/Имя: BUSTONOV MAXAMADALI DAVLATALIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 17375`)
    }

    if (text === '1-120-2023-98518US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-98518US\nIsmi/Имя: ASHURBOYEV JAMSHED ABDUSALIMOVICH\nmodel: DAMAS-2\nnavbat/очередь: 11846`)
    }

    if (text === '1-120-2023-85663US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-85663US\nIsmi/Имя: ZAKIROV IBRAGIM ABOSOVICH\nmodel: COBALT\nnavbat/очередь: 45972`)
    }

    if (text === '1-120-2023-63961US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-63961US\nIsmi/Имя: ABDUJALILOV SODIQJON MUXAMMADAMIN O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 15897`)
    }

    if (text === '1-120-2023-93827US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-93827US\nIsmi/Имя: MIRZAUMAROVA GULNAVOZ FARXODJON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 16882`)
    }

    if (text === '1-120-2023-71735US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-71735US\nIsmi/Имя: AZIZOVA HABIBA ABDUVALIYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 28395`)
    }

    if (text === '1-120-2023-62061US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-62061US\nIsmi/Имя: KURBANOVA SANOBAR SAYFULLAYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 13725`)
    }

    if (text === '1-120-2023-90561US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-90561US\nIsmi/Имя: Юлдошев Дониёр Абдухакимович\nmodel: DAMAS-2\nnavbat/очередь: 17235`)
    }

    if (text === '1-120-2023-61010US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-61010US\nIsmi/Имя: FAZLIDINOVA NARGIZA YUSUBJONOVNA\nmodel: COBALT\nnavbat/очередь: 46290`)
    }

    if (text === '1-120-2023-72021US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-72021US\nIsmi/Имя: GANIYEVA MUNIRA SHAMSIDINOVNA\nmodel: DAMAS-2\nnavbat/очередь: 744`)
    }

    if (text === '1-120-2023-83841US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-83841US\nIsmi/Имя: SAYFULLAJONOVA SURAYYO SOLIJONOVNA\nmodel: COBALT\nnavbat/очередь: 46385`)
    }

    if (text === '1-120-2023-99190US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-99190US\nIsmi/Имя: SULAYMONOVA GULMIRA TURSUNBOYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 14301`)
    }

    if (text === '1-120-2023-85039US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-85039US\nIsmi/Имя: OTAXONOV QODIRXON AXMADXONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 14711`)
    }

    if (text === '1-120-2023-63967US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-63967US\nIsmi/Имя: ASQAROV OTAYOR YUNISALIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 16621`)
    }

    if (text === '1-120-2023-98467US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-98467US\nIsmi/Имя: TOSHPO‘LATOV ILYOSJON ABDUSAMAT O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 16698`)
    }

    if (text === '1-120-2023-79477US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-79477US\nIsmi/Имя: ORIPOV DOSTONBEK MAXMUDJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 17113`)
    }

    if (text === '1-120-2023-82216US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-82216US\nIsmi/Имя: ISOQJONOVA MAXLIYOXON ADXAM QIZI\nmodel: DAMAS-2\nnavbat/очередь: 15821`)
    }

    if (text === '1-120-2023-74412US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74412US\nIsmi/Имя: ZIYOVIDDINOV JALOLIDDIN JAMOLIDDIN O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 15754`)
    }

    if (text === '1-120-2023-71483US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-71483US\nIsmi/Имя: SAYDAMATOV BOBIR XAMIDOVICH\nmodel: DAMAS-2\nnavbat/очередь: 15635`)
    }

    if (text === '1-120-2023-61830US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-61830US\nIsmi/Имя: Dehqonov Qodirjon Samijon o'g'li\nmodel: DAMAS-2\nnavbat/очередь: 14860`)
    }

    if (text === '1-120-2023-71631US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-71631US\nIsmi/Имя: RASULOV ANVAR AXMADJON-O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 15803`)
    }

    if (text === '1-120-2023-79678US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-79678US\nIsmi/Имя: TURSUNBOYEV XUDOYOR TOHIRJON O‘G‘LI\nmodel: DAMAS-\nnavbat/очередь: 12162`)
    }

    if (text === '1-120-2023-86015US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-86015US\nIsmi/Имя: AXMEDOV MUXIDDIN MASHRABXONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 756`)
    }

    if (text === '1-120-2023-71170US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-71170US\nIsmi/Имя: BOYDEDAYEV BILOLXON RASHID O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 15908`)
    }

    if (text === '1-120-2023-88987US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-88987US\nIsmi/Имя: RAXMANOV ILXOM BAXROMJANOVICH\nmodel: COBALT\nnavbat/очередь: 51848`)
    }

    if (text === '1-120-2023-90494US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-90494US\nIsmi/Имя: ISABOYEVA ZULXUMOR TOJIBOYEVNA\nmodel: COBALT\nnavbat/очередь: 53149`)
    }

    if (text === '1-120-2023-65042US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-65042US\nIsmi/Имя: KARIMOVA MASUDA OLIMJONOVNA\nmodel: COBALT\nnavbat/очередь: 50653`)
    }

    if (text === '1-120-2023-74780US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74780US\nIsmi/Имя: AXMEDOV BOTIR TURGUNOVICH\nmodel: COBALT\nnavbat/очередь: 52325`)
    }

    if (text === '1-120-2023-82183US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-82183US\nIsmi/Имя: QOZOQOV SHERBEK VOXIDJON O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 49030`)
    }

    if (text === '1-120-2023-74771US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74771US\nIsmi/Имя: XAYDAROV XONDAMIR MURXONJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 12362`)
    }

    if (text === '1-120-2023-89684US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-89684US\nIsmi/Имя: AXMEDOVA INOBAT ABDULLAYEVNA\nmodel: COBALT\nnavbat/очередь: 1232`)
    }

    if (text === '1-120-2023-81229US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-81229US\nIsmi/Имя: ASATOVA MANZURAXON AZAMOVNA\nmodel: DAMAS-2\nnavbat/очередь: 12193`)
    }

    if (text === '1-120-2023-81973US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-81973US\nIsmi/Имя: DADABOYEV SUXROB MANSURJONOVICH\nmodel: COBALT\nnavbat/очередь: 49248`)
    }

    if (text === '1-120-2023-81377US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-81377US\nIsmi/Имя: TURDALIYEV IBROXIMJON ABDUKOXXOROVICH\nmodel: DAMAS-2\nnavbat/очередь: 12293`)
    }

    if (text === '1-120-2023-68117US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-68117US\nIsmi/Имя: SHONIYOZOV MARDONBEK MURODJON O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 45299`)
    }

    if (text === '1-120-2023-76472US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-76472US\nIsmi/Имя: UKTAMOV DILSHODBEK ZOXIDJON O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 58894`)
    }

    if (text === '1-120-2023-72965US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-72965US\nIsmi/Имя: ISMOILOV BOTIRJON YUSUBOVICH\nmodel: COBALT\nnavbat/очередь: 45400`)
    }

    if (text === '1-120-2023-84669US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84669US\nIsmi/Имя: ASHURBOYEV JAXONGIR ABDUSALIMOVICH\nmodel: DAMAS-2\nnavbat/очередь: 11768`)
    }

    if (text === '1-120-2023-94321US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-94321US\nIsmi/Имя: SALADINOVA ADALAT XXX\nmodel: DAMAS-2\nnavbat/очередь: 10843`)
    }

    if (text === '1-120-2023-75402US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-75402US\nIsmi/Имя: XUDAYBERGANOV FARXODJON YUNUSJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 11773`)
    }

    if (text === '1-120-2023-78592US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-78592US\nIsmi/Имя: MAJIDOVA MUQIMAXON MAXAMADSOLIYEVNA\nmodel: COBALT\nnavbat/очередь: 44585`)
    }

    if (text === '1-120-2023-90219US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-90219US\nIsmi/Имя: SHARIFJONOV AZIZJON ABDURASHID O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 44165`)
    }

    if (text === '1-120-2023-65196US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-65196US\nIsmi/Имя: SHUKURJONOVA UGULBI NABIYEVNA\nmodel: COBALT\nnavbat/очередь: 26375`)
    }

    if (text === '1-120-2023-97075US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-97075US\nIsmi/Имя: QURANOVA TURG‘UNOY SOBIRJONOVNA\nmodel: DAMAS-2\nnavbat/очередь: 11715`)
    }

    if (text === '1-120-2023-74200US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74200US\nIsmi/Имя: AZIZBEK ABDUVOXIDOV ZOXIDJON O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 43604`)
    }

    if (text === '1-120-2023-61785US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-61785US\nIsmi/Имя: NISHANOV XAKIMJON KARIMOVICH\nmodel: COBALT\nnavbat/очередь: 43489`)
    }

    if (text === '1-120-2023-65280US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-65280US\nIsmi/Имя: QAMBARALIYEV ABDULAZIZ BAXTIYOR O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 11692`)
    }

    if (text === '1-120-2023-64514US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-64514US\nIsmi/Имя: AXMADJONOVA SHAXNOZA AKRAMJON QIZI\nmodel: COBALT\nnavbat/очередь: 43913`)
    }

    if (text === '1-120-2023-61632US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-61632US\nIsmi/Имя: KARIMJONOV AKMALJON BAXTIYOR O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 26395`)
    }

    if (text === '1-120-2023-94302US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-94302US\nIsmi/Имя: KUCHAROV ILHOMJON ODILJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 11662`)
    }

    if (text === '1-120-2023-64327US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-64327US\nIsmi/Имя: MAMADDINOV TURGUNJON NABIJONOVICH\nmodel: COBALT\nnavbat/очередь: 44177`)
    }

    if (text === '1-120-2023-86385US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-86385US\nIsmi/Имя: YAKUBOV MIRZOXID KUVVATALIYEVICH\nmodel: COBALT\nnavbat/очередь: 43291`)
    }

    if (text === '1-120-2023-87562US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-87562US\nIsmi/Имя: ERGASHEV ZOKIRJON MAMADJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 10468`)
    }

    if (text === '1-120-2023-75733US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-75733US\nIsmi/Имя: TUMOROV ALIMARDON KARIMBERDIYEVICH\nmodel: COBALT\nnavbat/очередь: 28528`)
    }

    if (text === '1-120-2023-67247US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-67247US\nIsmi/Имя: TOSHPO‘LATOVA DILNORAXON FARXODJON QIZI\nmodel: COBALT\nnavbat/очередь: 26656`)
    }

    if (text === '1-120-2023-82856US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-82856US\nIsmi/Имя: VALIYEV DILSHOD XALIMJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 10518`)
    }

    if (text === '1-120-2023-77446US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-77446US\nIsmi/Имя: BAROTOVA ZUHRAXON AHMADJON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 10638`)
    }

    if (text === '1-120-2023-61057US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-61057US\nIsmi/Имя: GANIJONOV ILYOSBEK ABDULAXAT OGLI\nmodel: COBALT\nnavbat/очередь: 30473`)
    }

    if (text === '1-120-2023-94344US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-94344US\nIsmi/Имя: RAXIMOV MUXAMMADAMIN BAXRIDDINOVICH\nmodel: DAMAS-2\nnavbat/очередь: 13561`)
    }

    if (text === '1-120-2023-79578US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-79578US\nIsmi/Имя: ABDULLAYEVA MARGUBA ABDUSATTAROVNA\nmodel: DAMAS-2\nnavbat/очередь: 13679`)
    }

    if (text === '1-120-2023-93279US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-93279US\nIsmi/Имя: VASIYEV BAXTIYORJON XAMIDOVICH\nmodel: COBALT\nnavbat/очередь: 28464`)
    }

    if (text === '1-120-2023-84169US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84169US\nIsmi/Имя: SHOKADIROVA SHOXISTA ASIMJONOVNA\nmodel: DAMAS-2\nnavbat/очередь: 13351`)
    }

    if (text === '1-120-2023-80800US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-80800US\nIsmi/Имя: TO‘RAYEV SAYDILLOXON KUTBIDINOVICH\nmodel: DAMAS-2\nnavbat/очередь: 10540`)
    }

    if (text === '1-120-2023-60041US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-60041US\nIsmi/Имя: MARUPOV ERKINJON MAXMUDOVICH\nmodel: DAMAS-2\nnavbat/очередь: 13406`)
    }

    if (text === '1-120-2023-75321US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-75321US\nIsmi/Имя: ABDULLAYEVA XURSHIDA ABIDOVNA\nmodel: COBALT\nnavbat/очередь: 28953`)
    }

    if (text === '1-120-2023-99552US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-99552US\nIsmi/Имя: ZOKIROVA RA’NOXON IBRAGIMOVNA\nmodel: DAMAS-2\nnavbat/очередь: 13656`)
    }

    if (text === '1-120-2023-90283US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-90283US\nIsmi/Имя: USMONOV ORIFJON KAXORJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 13385`)
    }

    if (text === '1-120-2023-71510US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-71510US\nIsmi/Имя: OMONBOYEV ISLOMJON INOMJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 13613`)
    }

    if (text === '1-120-2023-83392US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-83392US\nIsmi/Имя: KARIMOVA DILOROM SALIMOVNA\nmodel: COBALT\nnavbat/очередь: 2560`)
    }

    if (text === '1-120-2023-88262US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-88262US\nIsmi/Имя: SHAMSHIDDINOV ERKINBOY MAXAMATALIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 13876`)
    }

    if (text === '1-120-2023-62451US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-62451US\nIsmi/Имя: ABDULLAYEV AXRORBEK ANVARJON O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 27249`)
    }

    if (text === '1-120-2023-85158US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-85158US\nIsmi/Имя: ISMAILOV RASULJON TOJIBOYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 13511`)
    }

    if (text === '1-120-2023-89328US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-89328US\nIsmi/Имя: XOSHIMOV G‘ULOMJON O‘RINBOYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 13492`)
    }

    if (text === '1-120-2023-95720US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95720US\nIsmi/Имя: TADJIBAYEVA MUATTAR ALISHEROVNA\nmodel: COBALT\nnavbat/очередь: 58168`)
    }

    if (text === '1-120-2023-93186US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-93186US\nIsmi/Имя: ISMOILOVA MADINABONU BOTIRJON QIZI\nmodel: COBALT\nnavbat/очередь: 58575`)
    }

    if (text === '1-120-2023-68560US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-68560US\nIsmi/Имя: FAZLIDINOVA MAVLYUDA OLIMOVNA\nmodel: DAMAS-2\nnavbat/очередь: 13515`)
    }

    if (text === '1-120-2023-73241US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-73241US\nIsmi/Имя: TOJIBAYEVA FERUZA TOHIRJON QIZI\nmodel: COBALT\nnavbat/очередь: 1583`)
    }

    if (text === '1-120-2023-90378US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-90378US\nIsmi/Имя: XOLIQOV BURXON TASHPULATOVICH\nmodel: DAMAS-2\nnavbat/очередь: 13260`)
    }

    if (text === '1-120-2023-74331US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74331US\nIsmi/Имя: BAHROMOVA MOHINUR BAHROM QIZI\nmodel: DAMAS-2\nnavbat/очередь: 10414`)
    }

    if (text === '1-120-2023-84939US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84939US\nIsmi/Имя: SHAXNOZA XAMIDOVA ZOKIROVNA\nmodel: DAMAS-2\nnavbat/очередь: 13378`)
    }

    if (text === '1-120-2023-80098US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-80098US\nIsmi/Имя: YULDASHOV DOVUD SODIQOVICH\nmodel: DAMAS-2\nnavbat/очередь: 10421`)
    }

    if (text === '1-120-2023-75532US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-75532US\nIsmi/Имя: QODIROVA ZILOLAXON RAXIM QIZI\nmodel: COBALT\nnavbat/очередь: 28137`)
    }

    if (text === '1-120-2023-99583US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-99583US\nIsmi/Имя: ABDULAZIZOV NAZIRJON ABDUQODIROVICH\nmodel: DAMAS-2\nnavbat/очередь: 10480`)
    }

    if (text === '1-120-2023-99586US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-99586US\nIsmi/Имя: KOMILOV XASANBOY FAZLIDDIN O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 28329`)
    }

    if (text === '1-120-2023-84933US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84933US\nIsmi/Имя: ABBOSOV ULUG‘BEK AVAZXON O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 28006`)
    }

    if (text === '1-120-2023-61093US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-61093US\nIsmi/Имя: RAXMATJONOV SHAYXYOR ZOXIDJON O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 58013`)
    }

    if (text === '1-120-2023-74085US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74085US\nIsmi/Имя: MUMINOV NAVRUZBEK ABDUSOBIROVICH\nmodel: DAMAS-2\nnavbat/очередь: 13309`)
    }

    if (text === '1-120-2023-95964US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95964US\nIsmi/Имя: SOTIMOV ERMAMAT NORMAMATOVICH\nmodel: COBALT\nnavbat/очередь: 406`)
    }

    if (text === '1-120-2023-83063US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-83063US\nIsmi/Имя: KAMBAROV SAYDILLA KAXAROVICH\nmodel: COBALT\nnavbat/очередь: 28525`)
    }

    if (text === '1-120-2023-84221US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84221US\nIsmi/Имя: NIZAMIDDINOV SHAVKATJON XOSHIMJON O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 28479`)
    }

    if (text === '1-120-2023-63207US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-63207US\nIsmi/Имя: QO'CHQAROV ZAFARJON QAYUMJON O'G'LI\nmodel: DAMAS-2\nnavbat/очередь: 486`)
    }

    if (text === '1-120-2023-98799US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-98799US\nIsmi/Имя: MARUPOV MUHAMMADJON MANSUR O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 46997`)
    }

    if (text === '1-120-2023-94032US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-94032US\nIsmi/Имя: ALIJONOV ZOKIRJON VOXIDJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 11552`)
    }

    if (text === '1-120-2023-63568US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-63568US\nIsmi/Имя: ANVARJONOV OZODBEK AVAZXON O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 35120`)
    }

    if (text === '1-120-2023-83885US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-83885US\nIsmi/Имя: Холмирзаева Дилфуза Иномадиновна\nmodel: COBALT\nnavbat/очередь: 35697`)
    }

    if (text === '1-120-2023-75439US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-75439US\nIsmi/Имя: SALOXIDDINOVA ZULFIYAJON ZAYLIDDINOVNA\nmodel: COBALT\nnavbat/очередь: 31610`)
    }

    if (text === '1-120-2023-60316US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-60316US\nIsmi/Имя: NAZARALIYEV NOSIRJON ODILJON O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 30211`)
    }

    if (text === '1-120-2023-94105US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-94105US\nIsmi/Имя: SHAHZOD BOHODIROV BAHROMOVICH\nmodel: DAMAS-2\nnavbat/очередь: 10917`)
    }

    if (text === '1-120-2023-74964US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74964US\nIsmi/Имя: Sodiqjonov Javoxir Akmaljon O‘G‘Li\nmodel: COBALT\nnavbat/очередь: 33998`)
    }

    if (text === '1-120-2023-84785US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84785US\nIsmi/Имя: XALILOV MIRZOXID XOSHIMOVICH\nmodel: DAMAS-2\nnavbat/очередь: 340`)
    }

    if (text === '1-120-2023-63510US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-63510US\nIsmi/Имя: XOLIKOVA ORZIXON ABDUQODIROVNA\nmodel: DAMAS-2\nnavbat/очередь: 10586`)
    }

    if (text === '1-120-2023-83245US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-83245US\nIsmi/Имя: TILLABAYEV RAXIM VAXABOVICH\nmodel: COBALT\nnavbat/очередь: 33466`)
    }

    if (text === '1-120-2023-77893US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-77893US\nIsmi/Имя: SAMIJONOV DILSHOD MUZAFFAR  O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 34637`)
    }

    if (text === '1-120-2023-83496US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-83496US\nIsmi/Имя: IBRAGIMOVA MUXABAT MIRAIMOVNA\nmodel: COBALT\nnavbat/очередь: 35086`)
    }

    if (text === '1-120-2023-71382US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-71382US\nIsmi/Имя: PARPIYEV SANJARBEK PO‘LAT O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 10775`)
    }

    if (text === '1-120-2023-84217US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84217US\nIsmi/Имя: MUHAMMADJONOVA MUSLIMA MUZAFFARJON QIZI\nmodel: COBALT\nnavbat/очередь: 36569`)
    }

    if (text === '1-120-2023-89391US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-89391US\nIsmi/Имя: YUSUPOV AXADJON ABDUSAMAT O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 10883`)
    }

    if (text === '1-120-2023-75217US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-75217US\nIsmi/Имя: POZILOV BAHODIR MIRZAVALIYEVICH\nmodel: COBALT\nnavbat/очередь: 36906`)
    }

    if (text === '1-120-2023-85568US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-85568US\nIsmi/Имя: XALILOV MUHAMMADSODIQ ABDUJALIL O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 33555`)
    }

    if (text === '1-120-2023-83805US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-83805US\nIsmi/Имя: HUSANOVA MADINAXON ABDUVALI QIZI\nmodel: COBALT\nnavbat/очередь: 36226`)
    }

    if (text === '1-120-2023-69763US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-69763US\nIsmi/Имя: XUDOYBERDIYEVA GULOYIMXON QURBONOVNA\nmodel: COBALT\nnavbat/очередь: 33100`)
    }

    if (text === '1-120-2023-86936US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-86936US\nIsmi/Имя: VALIYEVA FERUZA MASHRABBOYEVNA\nmodel: COBALT\nnavbat/очередь: 33130`)
    }

    if (text === '1-120-2023-98477US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-98477US\nIsmi/Имя: NEMATILLAYEV MANSUR MAMAYUNUSOVICH\nmodel: COBALT\nnavbat/очередь: 38253`)
    }

    if (text === '1-120-2023-77938US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-77938US\nIsmi/Имя: MAMADJONOVA GULNORA BAROTALI QIZI\nmodel: DAMAS-2\nnavbat/очередь: 10974`)
    }

    if (text === '1-120-2023-64381US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-64381US\nIsmi/Имя: AXMADALIYEVA MOHICHEHRA SULAYMON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 10640`)
    }

    if (text === '1-120-2023-77258US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-77258US\nIsmi/Имя: Болтабаев Мамадали Уматалиевич\nmodel: COBALT\nnavbat/очередь: 38818`)
    }

    if (text === '1-120-2023-68641US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-68641US\nIsmi/Имя: OTABOYEVA XABIBA MAXAMMADINOVNA\nmodel: COBALT\nnavbat/очередь: 31487`)
    }

    if (text === '1-120-2023-96517US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-96517US\nIsmi/Имя: MAXMUDOV ISOQJON IBRAGIMOVICH\nmodel: DAMAS-2\nnavbat/очередь: 31`)
    }

    if (text === '1-120-2023-75336US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-75336US\nIsmi/Имя: ХОШИМОВ БЕХЗОД ХОЛМАТЖОН-УГЛИ\nmodel: DAMAS-2\nnavbat/очередь: 10930`)
    }

    if (text === '1-120-2023-90122US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-90122US\nIsmi/Имя: TURG‘UNOV BILOLSHO UMAR O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 29976`)
    }

    if (text === '1-120-2023-95838US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95838US\nIsmi/Имя: RAJABOV XATAMJON YULDOSHBOYEVICH\nmodel: COBALT\nnavbat/очередь: 37639`)
    }

    if (text === '1-120-2023-78840US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-78840US\nIsmi/Имя: ABDUKAXOROVA KOMILA DOVIDOVNA\nmodel: COBALT\nnavbat/очередь: 38409`)
    }

    if (text === '1-120-2023-69342US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-69342US\nIsmi/Имя: AHMEDOVA MAXBUBAXON BOQIJANOVNA\nmodel: COBALT\nnavbat/очередь: 32485`)
    }

    if (text === '1-120-2023-73521US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-73521US\nIsmi/Имя: USMONOVA AZIZA TURSUNBOY QIZI\nmodel: COBALT\nnavbat/очередь: 38040`)
    }

    if (text === '1-120-2023-74658US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74658US\nIsmi/Имя: USMONOVA DILDORA SHARIFJON QIZI\nmodel: COBALT\nnavbat/очередь: 35251`)
    }

    if (text === '1-120-2023-61160US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-61160US\nIsmi/Имя: MIRZAJONOV BAXROM XUSANOVICH\nmodel: COBALT\nnavbat/очередь: 39074`)
    }

    if (text === '1-120-2023-71149US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-71149US\nIsmi/Имя: XALILOV MUXAMMADJON ABDIQODIR O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 10993`)
    }

    if (text === '1-120-2023-98527US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-98527US\nIsmi/Имя: DOLIMOVA YONDASHBI XOLDOROVNA\nmodel: DAMAS-2\nnavbat/очередь: 11015`)
    }

    if (text === '1-120-2023-83553US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-83553US\nIsmi/Имя: SIDIKOV FARXOD ABDUKARIMOVICH\nmodel: COBALT\nnavbat/очередь: 39578`)
    }

    if (text === '1-120-2023-80686US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-80686US\nIsmi/Имя: TUROPOVA MALIKAJON AYIBOVNA\nmodel: COBALT\nnavbat/очередь: 36812`)
    }

    if (text === '1-120-2023-62077US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-62077US\nIsmi/Имя: MIRZANAZAROV JAXONGIR SHUKURJONOVICH\nmodel: COBALT\nnavbat/очередь: 31656`)
    }

    if (text === '1-120-2023-89003US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-89003US\nIsmi/Имя: DILMURODOV ABDULLO ILYOSJON O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 31217`)
    }

    if (text === '1-120-2023-60005US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-60005US\nIsmi/Имя: XOSHIMOVA UMIDA ABDUMALIKOVNA\nmodel: DAMAS-2\nnavbat/очередь: 11094`)
    }

    if (text === '1-120-2023-76788US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-76788US\nIsmi/Имя: NURMATOV AXMADALI ABDULXAYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 10711`)
    }

    if (text === '1-120-2023-89144US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-89144US\nIsmi/Имя: MALLABOYEV SHAVKAT BOTIROVICH\nmodel: COBALT\nnavbat/очередь: 31229`)
    }

    if (text === '1-120-2023-64562US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-64562US\nIsmi/Имя: XALIMOV ISLOMJON MURODJON O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 37662`)
    }

    if (text === '1-120-2023-67755US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-67755US\nIsmi/Имя: MUMINOV SHUXRATJON ULMASBOYEVICH\nmodel: COBALT\nnavbat/очередь: 37025`)
    }

    if (text === '1-120-2023-99422US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-99422US\nIsmi/Имя: MIRZAXALOVA MUBORAK MAMADALIYEVNA\nmodel: COBALT\nnavbat/очередь: 39650`)
    }

    if (text === '1-120-2023-81249US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-81249US\nIsmi/Имя: MUXTOROV SHOYATBEK ZAFARJON O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 36025`)
    }

    if (text === '1-120-2023-64537US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-64537US\nIsmi/Имя: MUKSINOV NIZOMJON TURDALIYEVICH\nmodel: COBALT\nnavbat/очередь: 40128`)
    }

    if (text === '1-120-2023-78371US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-78371US\nIsmi/Имя: SHAXOBIDDINOV BOBUR VAXOBJON-O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 43276`)
    }

    if (text === '1-120-2023-89767US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-89767US\nIsmi/Имя: RUSTAMOVA FERUZA ADILOVNA\nmodel: COBALT\nnavbat/очередь: 32178`)
    }

    if (text === '1-120-2023-74295US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74295US\nIsmi/Имя: HAKIMOV OYBEK XOSHIMJON O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 43032`)
    }

    if (text === '1-120-2023-99381US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-99381US\nIsmi/Имя: DJALILOVA MUBORAK ZOITOVNA\nmodel: COBALT\nnavbat/очередь: 35397`)
    }

    if (text === '1-120-2023-95794US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95794US\nIsmi/Имя: TEMIROVA GULSHAN XAYDARJON QIZI\nmodel: COBALT\nnavbat/очередь: 37452`)
    }

    if (text === '1-120-2023-63616US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-63616US\nIsmi/Имя: KENJAYEV IQBOLJON QOBULJON O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 31194`)
    }

    if (text === '1-120-2023-62998US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-62998US\nIsmi/Имя: XALILOV MAMADJON MANSURJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 11633`)
    }

    if (text === '1-120-2023-95286US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95286US\nIsmi/Имя: RAXIMOVA MANFURAT XXX\nmodel: COBALT\nnavbat/очередь: 41679`)
    }

    if (text === '1-120-2023-85180US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-85180US\nIsmi/Имя: TURSUNOV ULMAS OMONDJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 11484`)
    }

    if (text === '1-120-2023-61330US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-61330US\nIsmi/Имя: NURMATOV ELYORBEK SULTONBEKOVICH\nmodel: DAMAS-2\nnavbat/очередь: 11318`)
    }

    if (text === '1-120-2023-97341US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-97341US\nIsmi/Имя: DJANANBEKOVA YULDUZ AYDERBEKOVNA\nmodel: DAMAS-2\nnavbat/очередь: 11519`)
    }

    if (text === '1-120-2023-69685US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-69685US\nIsmi/Имя: BURXANJONOVA SHIRINBI NUGMANOVNA\nmodel: COBALT\nnavbat/очередь: 42318`)
    }

    if (text === '1-120-2023-85453US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-85453US\nIsmi/Имя: SULTONOV JALOLIDDIN TOXIRJONOVICH\nmodel: COBALT\nnavbat/очередь: 44566`)
    }

    if (text === '1-120-2023-80361US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-80361US\nIsmi/Имя: UMAROV ERKINJON KAXORJON O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 44656`)
    }

    if (text === '1-120-2023-80180US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-80180US\nIsmi/Имя: SALOXIDDINOV HABIBULLO ADHAMJON O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 2984`)
    }

    if (text === '1-120-2023-61439US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-61439US\nIsmi/Имя: TURSUNBOYEV FARXODJON MAXMUDJONOVICH\nmodel: COBALT\nnavbat/очередь: 36928`)
    }

    if (text === '1-120-2023-97213US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-97213US\nIsmi/Имя: KARIMOV ERGASH SALIMOVICH\nmodel: DAMAS-2\nnavbat/очередь: 10972`)
    }

    if (text === '1-120-2023-60916US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-60916US\nIsmi/Имя: XODJAYEV NEMATULLA VALIYEVICH\nmodel: COBALT\nnavbat/очередь: 43587`)
    }

    if (text === '1-120-2023-69431US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-69431US\nIsmi/Имя: XOLMATOVA SAVRI FAZLIDINOVNA\nmodel: DAMAS-2\nnavbat/очередь: 11439`)
    }

    if (text === '1-120-2023-69741US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-69741US\nIsmi/Имя: VALIYEVA DILAFRUZ AZIMOVNA\nmodel: COBALT\nnavbat/очередь: 33872`)
    }

    if (text === '1-120-2023-84168US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84168US\nIsmi/Имя: Toshboyev Marufjon Abduraxmanovich\nmodel: COBALT\nnavbat/очередь: 40029`)
    }

    if (text === '1-120-2023-74070US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74070US\nIsmi/Имя: MIRALIYEV XABIBULLO XASANOVICH\nmodel: COBALT\nnavbat/очередь: 40154`)
    }

    if (text === '1-120-2023-83277US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-83277US\nIsmi/Имя: ZAKIROV ZOIDJON XAMIDOVICH\nmodel: COBALT\nnavbat/очередь: 41382`)
    }

    if (text === '1-120-2023-87946US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-87946US\nIsmi/Имя: MUMINOVA MARXABO KURBONOVNA\nmodel: COBALT\nnavbat/очередь: 38857`)
    }

    if (text === '1-120-2023-68681US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-68681US\nIsmi/Имя: NABIYEV AKRAMJON G‘ANIJON O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 39493`)
    }

    if (text === '1-120-2023-72326US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-72326US\nIsmi/Имя: MIRZAVALIYEVA MUYASSAR MANSUROVNA\nmodel: COBALT\nnavbat/очередь: 40086`)
    }

    if (text === '1-120-2023-85898US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-85898US\nIsmi/Имя: ORIPXUJAYEV AYIBXON MAMASOLIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 10908`)
    }

    if (text === '1-120-2023-98179US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-98179US\nIsmi/Имя: XASANOV OYBEK SHERMATJONOVICH\nmodel: COBALT\nnavbat/очередь: 37904`)
    }

    if (text === '1-120-2023-94391US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-94391US\nIsmi/Имя: ASHURMATOVA NARGIZA SOLIJONOVNA\nmodel: DAMAS-2\nnavbat/очередь: 11152`)
    }

    if (text === '1-120-2023-80918US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-80918US\nIsmi/Имя: IMOMALIYEV XUSANMIRZA ABDULLO O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 47119`)
    }

    if (text === '1-120-2023-66318US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-66318US\nIsmi/Имя: MAMUDOV AKMAL SAYFULLAYEVICH\nmodel: COBALT\nnavbat/очередь: 42633`)
    }

    if (text === '1-120-2023-81394US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-81394US\nIsmi/Имя: HOJIMATOV MUHRIDDIN ADHAMJON O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 31852`)
    }

    if (text === '1-120-2023-95725US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95725US\nIsmi/Имя: ABBOSOVA SEVARA IBROHIM QIZI\nmodel: COBALT\nnavbat/очередь: 44006`)
    }

    if (text === '1-120-2023-71169US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-71169US\nIsmi/Имя: XASANOV SHUXRAT BOTIROVICH\nmodel: COBALT\nnavbat/очередь: 35639`)
    }

    if (text === '1-120-2023-69422US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-69422US\nIsmi/Имя: MAKSUDOV BAXODIR MAKSUMOVICH\nmodel: COBALT\nnavbat/очередь: 1051`)
    }

    if (text === '1-120-2023-70260US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-70260US\nIsmi/Имя: XAKIMJONOV SIROJIDDIN MUZAFFAR O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 32649`)
    }

    if (text === '1-120-2023-91344US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-91344US\nIsmi/Имя: KARIMOV G‘AYBULOJON AXMADALIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 11603`)
    }

    if (text === '1-120-2023-89737US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-89737US\nIsmi/Имя: BABADJONOV ERKIN MUXAMADRAUFOVICH\nmodel: COBALT\nnavbat/очередь: 36161`)
    }

    if (text === '1-120-2023-92447US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-92447US\nIsmi/Имя: NURIDDINOV IZATULLOXON MUNAVARXON O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 35532`)
    }

    if (text === '1-120-2023-95708US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95708US\nIsmi/Имя: TOSHMATOVA NAZIRA ILXOMJONOVNA\nmodel: DAMAS-2\nnavbat/очередь: 10926`)
    }

    if (text === '1-120-2023-60216US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-60216US\nIsmi/Имя: YUSUFBEKOV BEKZODJON KUMARBEK O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 11652`)
    }

    if (text === '1-120-2023-88781US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-88781US\nIsmi/Имя: AHMATJONOV ABDUMUMIN MAMATOVICH\nmodel: COBALT\nnavbat/очередь: 43580`)
    }

    if (text === '1-120-2023-98838US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-98838US\nIsmi/Имя: SULTANOV MUXAMMADJON MAXMUDOVICH\nmodel: COBALT\nnavbat/очередь: 40257`)
    }

    if (text === '1-120-2023-84035US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84035US\nIsmi/Имя: MAXMUDOV DILMUROD SODIQJON O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 41922`)
    }

    if (text === '1-120-2023-73295US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-73295US\nIsmi/Имя: ERKINOV AFZAL BAHROMJON O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 34135`)
    }

    if (text === '1-120-2023-71245US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-71245US\nIsmi/Имя: MAXKAMOVA MUKADDAM XUDOYBERDIYEVNA\nmodel: COBALT\nnavbat/очередь: 31998`)
    }

    if (text === '1-120-2023-88496US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-88496US\nIsmi/Имя: ABDURAXIMOV SULAYMON ABDUVOXID O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 10923`)
    }

    if (text === '1-120-2023-80258US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-80258US\nIsmi/Имя: MAMATQULOV BAHOVUDDIN BAHODIR O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 32389`)
    }

    if (text === '1-120-2023-75271US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-75271US\nIsmi/Имя: BOYPULOTOVA VASILA NOSIRJONOVNA\nmodel: DAMAS-2\nnavbat/очередь: 11842`)
    }

    if (text === '1-120-2023-76207US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-76207US\nIsmi/Имя: MIRZAYEV ABDUGAPPAR XOLDAROVICH\nmodel: DAMAS-2\nnavbat/очередь: 11214`)
    }

    if (text === '1-120-2023-90831US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-90831US\nIsmi/Имя: HUSENOV OXUNJON ABDUSATTOR O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 10980`)
    }

    if (text === '1-120-2023-91256US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-91256US\nIsmi/Имя: ABDULLAYEVA NARGIZA ORIFJONOVNA\nmodel: COBALT\nnavbat/очередь: 38652`)
    }

    if (text === '1-120-2023-66330US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-66330US\nIsmi/Имя: NURMATOV ANVAR AXMADALIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 10787`)
    }

    if (text === '1-120-2023-72274US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-72274US\nIsmi/Имя: XOSHIMOV ATXAM AXMEDOVICH\nmodel: COBALT\nnavbat/очередь: 46310`)
    }

    if (text === '1-120-2023-77097US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-77097US\nIsmi/Имя: USMONOVA KIBRIYOBONU MIRZOHID QIZI\nmodel: COBALT\nnavbat/очередь: 2790`)
    }

    if (text === '1-120-2023-97462US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-97462US\nIsmi/Имя: YO‘LDOSHEV TOLIBJON OLIMJON O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 46815`)
    }

    if (text === '1-120-2023-67062US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-67062US\nIsmi/Имя: RAXMATULLAYEV ISLOMXON SHUXRAT O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 46838`)
    }

    if (text === '1-120-2023-84343US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84343US\nIsmi/Имя: KAMOLOVA NAZIRA GANIYEVNA\nmodel: COBALT\nnavbat/очередь: 32062`)
    }

    if (text === '1-120-2023-72009US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-72009US\nIsmi/Имя: SHOMAKSUDOVA MUXABBAT ABDURAIMOVNA\nmodel: COBALT\nnavbat/очередь: 47019`)
    }

    if (text === '1-120-2023-83295US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-83295US\nIsmi/Имя: ABDULLAYEV XABIBULLO ABDUMAJITOVICH\nmodel: DAMAS-2\nnavbat/очередь: 11085`)
    }

    if (text === '1-120-2023-85519US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-85519US\nIsmi/Имя: XASANOV NU’MONJON KAMOLJONOVICH\nmodel: COBALT\nnavbat/очередь: 51211`)
    }

    if (text === '1-120-2023-80938US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-80938US\nIsmi/Имя: BOZORBAYEVA MADINA SAYFITDINOVNA\nmodel: DAMAS-2\nnavbat/очередь: 11423`)
    }

    if (text === '1-120-2023-76830US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-76830US\nIsmi/Имя: RAXIMOV SOATALI AZAMOVICH\nmodel: COBALT\nnavbat/очередь: 34630`)
    }

    if (text === '1-120-2023-74349US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74349US\nIsmi/Имя: MAQSUDOVA GULNORA ISMONXONOVNA\nmodel: COBALT\nnavbat/очередь: 36846`)
    }

    if (text === '1-120-2023-82897US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-82897US\nIsmi/Имя: ISAYEV SOBIRJON MUROTALIYEVICH\nmodel: COBALT\nnavbat/очередь: 36901`)
    }

    if (text === '1-120-2023-88965US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-88965US\nIsmi/Имя: KOMILOV AZIZ TULKUNOVICH\nmodel: DAMAS-2\nnavbat/очередь: 11279`)
    }

    if (text === '1-120-2023-98920US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-98920US\nIsmi/Имя: BARATOV AZIMJON ABDUG‘AFFOR O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 2104`)
    }

    if (text === '1-120-2023-95280US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95280US\nIsmi/Имя: SHOG‘OFIROV AXRORBEK DILSHOD O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 11414`)
    }

    if (text === '1-120-2023-94278US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-94278US\nIsmi/Имя: XOLDAROV ABDULXAKIM ABDURASILOVICH\nmodel: COBALT\nnavbat/очередь: 41197`)
    }

    if (text === '1-120-2023-94141US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-94141US\nIsmi/Имя: RIZAYEV G‘OFIRJON G‘ULOMJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 11938`)
    }

    if (text === '1-120-2023-98745US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-98745US\nIsmi/Имя: TURAYEV XAYRIDDINXON KUTBIDINOVICH\nmodel: DAMAS-2\nnavbat/очередь: 12382`)
    }

    if (text === '1-120-2023-90104US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-90104US\nIsmi/Имя: YUSUBOV MIRJALOL MUMINJON O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 46338`)
    }

    if (text === '1-120-2023-68709US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-68709US\nIsmi/Имя: Abdulxayev Baxodir Muxammadsodiq o'g'li\nmodel: COBALT\nnavbat/очередь: 46951`)
    }

    if (text === '1-120-2023-85084US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-85084US\nIsmi/Имя: TOJIBAYEV SOHIBJON MAMASODIQOVICH\nmodel: COBALT\nnavbat/очередь: 42304`)
    }

    if (text === '1-120-2023-81565US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-81565US\nIsmi/Имя: XOLDOROV SHAVKAT G‘ANIJONOVICH\nmodel: COBALT\nnavbat/очередь: 50236`)
    }

    if (text === '1-120-2023-85442US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-85442US\nIsmi/Имя: NURMATOVA ZEBONISA AYUBOVNA\nmodel: COBALT\nnavbat/очередь: 50730`)
    }

    if (text === '1-120-2023-66702US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-66702US\nIsmi/Имя: KAMOLIDINOV IKROMALI ISOMADINOVICH\nmodel: COBALT\nnavbat/очередь: 43118`)
    }

    if (text === '1-120-2023-89030US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-89030US\nIsmi/Имя: SALOXIDINOV JAXONGIR AMONIDINOVICH\nmodel: COBALT\nnavbat/очередь: 54885`)
    }

    if (text === '1-120-2023-62180US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-62180US\nIsmi/Имя: KASIMOVA XURSANBI XXX\nmodel: COBALT\nnavbat/очередь: 56521`)
    }

    if (text === '1-120-2023-60832US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-60832US\nIsmi/Имя: ERGASHEVA GULCHIROY SAYFULLAJON QIZI\nmodel: COBALT\nnavbat/очередь: 42447`)
    }

    if (text === '1-120-2023-76342US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-76342US\nIsmi/Имя: NASIRDINOVA DILFUZA RUSTAMALIYEVNA\nmodel: COBALT\nnavbat/очередь: 55090`)
    }

    if (text === '1-120-2023-68362US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-68362US\nIsmi/Имя: IMOMATOVA SOJIDA IKRAMOVNA\nmodel: COBALT\nnavbat/очередь: 55359`)
    }

    if (text === '1-120-2023-85104US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-85104US\nIsmi/Имя: PARPIYEV SARDORBEK PO‘LOTJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 11034`)
    }

    if (text === '1-120-2023-98663US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-98663US\nIsmi/Имя: MUXAMMADJONOVA SANAMBI SOATALIYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 11740`)
    }

    if (text === '1-120-2023-68497US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-68497US\nIsmi/Имя: HABIBOV MUHAMMADJON RUSTAMOVICH\nmodel: DAMAS-2\nnavbat/очередь: 12493`)
    }

    if (text === '1-120-2023-91948US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-91948US\nIsmi/Имя: UMARXANOV ANVAR TULANDJANOVICH\nmodel: COBALT\nnavbat/очередь: 49805`)
    }

    if (text === '1-120-2023-87055US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-87055US\nIsmi/Имя: TASHBOYEVA IJABAT ATAMIRZAYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 12349`)
    }

    if (text === '1-120-2023-82800US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-82800US\nIsmi/Имя: ABDULXAYEV ODILJON MAXAMADSODIKOVICH\nmodel: COBALT\nnavbat/очередь: 53109`)
    }

    if (text === '1-120-2023-68971US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-68971US\nIsmi/Имя: NEMADOV MUHAMMADYUSUF HIKMATILLO O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 44497`)
    }

    if (text === '1-120-2023-79188US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-79188US\nIsmi/Имя: OLIMOVA SAFIYAJON QAYIMOVNA\nmodel: COBALT\nnavbat/очередь: 56433`)
    }

    if (text === '1-120-2023-82243US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-82243US\nIsmi/Имя: HOJIMATOVA MAFTUNA G‘ULOMJON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 12481`)
    }

    if (text === '1-120-2023-70651US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-70651US\nIsmi/Имя: SAITQULOV SARDOR ZAYLIDDINOVICH\nmodel: DAMAS-2\nnavbat/очередь: 11178`)
    }

    if (text === '1-120-2023-65963US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-65963US\nIsmi/Имя: SAIDOV RAVSHAN VALIJONOVICH\nmodel: COBALT\nnavbat/очередь: 42430`)
    }

    if (text === '1-120-2023-65533US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-65533US\nIsmi/Имя: TURG‘UNOV XAYRULLO SOLIJON O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 56762`)
    }

    if (text === '1-120-2023-92477US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-92477US\nIsmi/Имя: DJALILOV FAZLIDIN XAMITJONOVICH\nmodel: COBALT\nnavbat/очередь: 41347`)
    }

    if (text === '1-120-2023-60299US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-60299US\nIsmi/Имя: NURMATOV SULTONBEK QURBONBEKOVICH\nmodel: DAMAS-2\nnavbat/очередь: 11030`)
    }

    if (text === '1-120-2023-63862US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-63862US\nIsmi/Имя: SHUKURJONOV MARUF IKROMJONOVICH\nmodel: COBALT\nnavbat/очередь: 39998`)
    }

    if (text === '1-120-2023-93204US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-93204US\nIsmi/Имя: TOJIBOYEV HIDOYATXOJI AHATJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 11756`)
    }

    if (text === '1-120-2023-64871US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-64871US\nIsmi/Имя: HUSENOVA SHAXNOZA ABDUSATTOROVNA\nmodel: DAMAS-2\nnavbat/очередь: 11441`)
    }

    if (text === '1-120-2023-82477US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-82477US\nIsmi/Имя: PIRIMQULOV RUSTAMJON YULDASHALIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 11463`)
    }
    
    if (text === '1-120-2023-76618US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-76618US\nIsmi/Имя: ALIBAYEVA MUYASSAR NURILLO QIZI\nmodel: DAMAS-2\nnavbat/очередь: 12295`)
    }

    if (text === '1-120-2023-62825US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-62825US\nIsmi/Имя: Ширинова Муясаржон Жураевна\nmodel: COBALT\nnavbat/очередь: 46296`)
    }
    
    if (text === '1-120-2023-65830US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-65830US\nIsmi/Имя: KOMILOVA NARGIZA MADAMINJON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 12562`)
    }

    if (text === '1-120-2023-78280US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-78280US\nIsmi/Имя: YUSUPOVA SHAHNOZA AKBARALI QIZI\nmodel: DAMAS-2\nnavbat/очередь: 12593`)
    }

    if (text === '1-120-2023-90295US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-90295US\nIsmi/Имя: XABIBULLAYEV SHERZOD BAXROMJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 14376`)
    }

    if (text === '1-120-2023-97857US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-97857US\nIsmi/Имя: KARIMOV OLIMJON ODILJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 12782`)
    }
    
    if (text === '1-120-2023-73805US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-73805US\nIsmi/Имя: EGEMBERDIYEV XABIBULLA ASQARALIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 13402`)
    }

    if (text === '1-120-2023-80068US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-80068US\nIsmi/Имя: QURBONOV SHOHRUH SHUHRAT O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 51057`)
    }
    
    if (text === '1-120-2023-67157US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-67157US\nIsmi/Имя: ABDULLAYEVA SEVARA G‘O‘LOMJONOVNA\nmodel: DAMAS-2\nnavbat/очередь: 12330`)
    }

    if (text === '1-120-2023-65225US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-65225US\nIsmi/Имя: MAMADJONOV ALISHER XAKIMOVICH\nmodel: COBALT\nnavbat/очередь: 50237`)
    }

    if (text === '1-120-2023-90447US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-90447US\nIsmi/Имя: AKBAROV ALISHER NORMATJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 602`)
    }

    if (text === '1-120-2023-74368US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74368US\nIsmi/Имя: JO‘RAYEV OXUNJON SOBITJON O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 51515`)
    }
    
    if (text === '1-120-2023-85436US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-85436US\nIsmi/Имя: Эралиев Музаффар Сотволдиевич\nmodel: COBALT\nnavbat/очередь: 55167`)
    }

    if (text === '1-120-2023-69561US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-69561US\nIsmi/Имя: DEDAMIRZAYEVA NOZIMA BAXTIYOR QIZI\nmodel: COBALT\nnavbat/очередь: 58047`)
    }
    
    if (text === '1-120-2023-84070US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84070US\nIsmi/Имя: KAHOROVA GULCHEXRA OBIDJON-QIZI\nmodel: COBALT\nnavbat/очередь: 49674`)
    }

    if (text === '1-120-2023-95649US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95649US\nIsmi/Имя: DJURAYEV IKROM IBRAGIMOVICH\nmodel: COBALT\nnavbat/очередь: 54892`)
    }

    if (text === '1-120-2023-90598US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-90598US\nIsmi/Имя: NISHONOV XUSAN MEXMONALIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 12862`)
    }

    if (text === '1-120-2023-76059US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-76059US\nIsmi/Имя: DJO‘RAYEVA FARIDA DJUNAYDILLOYEVNA\nmodel: COBALT\nnavbat/очередь: 37243`)
    }
    
    if (text === '1-120-2023-91197US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-91197US\nIsmi/Имя: HAYITBOYEV MAHMUDJON ZOKIRJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 11455`)
    }

    if (text === '1-120-2023-83913US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-83913US\nIsmi/Имя: MAXKAMOVA DILNORA XOLMATJONOVNA\nmodel: DAMAS-2\nnavbat/очередь: 12937`)
    }
    
    if (text === '1-120-2023-93446US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-93446US\nIsmi/Имя: BABAYEV ZAFAR MANSUROVICH\nmodel: COBALT\nnavbat/очередь: 51755`)
    }

    if (text === '1-120-2023-84104US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84104US\nIsmi/Имя: MIRZAJONOV DONIYOR MANSUROVICH\nmodel: DAMAS-2\nnavbat/очередь: 12881`)
    }

    if (text === '1-120-2023-92071US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-92071US\nIsmi/Имя: FAXRIDDINOVA SHAXNOZA FAXRIDDIN QIZI\nmodel: DAMAS-2\nnavbat/очередь: 11121`)
    }

    if (text === '1-120-2023-75574US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-75574US\nIsmi/Имя: ISAQOV QODIRALI MAHMUDJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 11959`)
    }
    
    if (text === '1-120-2023-65066US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-65066US\nIsmi/Имя: KAMOLOV MAMURJON VALIJANOVICH\nmodel: DAMAS-2\nnavbat/очередь: 11486`)
    }

    if (text === '1-120-2023-90934US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-90934US\nIsmi/Имя: BOTIROV ABRORJON UMARJON-O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 53933`)
    }
    
    if (text === '1-120-2023-65898US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-65898US\nIsmi/Имя: IMAMOV AVAZ KODIRALIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 416`)
    }

    if (text === '1-120-2023-98173US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-98173US\nIsmi/Имя: Polotov Abduraxmon Ortuqovich\nmodel: COBALT\nnavbat/очередь: 37612`)
    }

    if (text === '1-120-2023-88702US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-88702US\nIsmi/Имя: NURITDINOV NURBEK DAVLATALIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 11317`)
    }

    if (text === '1-120-2023-76688US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-76688US\nIsmi/Имя: MAMAJONOV MURODJON SOBIR O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 41703`)
    }
    
    if (text === '1-120-2023-63902US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-63902US\nIsmi/Имя: Umirzakov Toxir G‘aniboyevich\nmodel: DAMAS-2\nnavbat/очередь: 11502`)
    }

    if (text === '1-120-2023-95999US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95999US\nIsmi/Имя: ENAZAROVA SAODAT MADAMINOVNA\nmodel: COBALT\nnavbat/очередь: 55887`)
    }
    
    if (text === '1-120-2023-72062US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-72062US\nIsmi/Имя: BOKIYEV OBIDJON MUMINOVICH\nmodel: DAMAS-2\nnavbat/очередь: 11363`)
    }

    if (text === '1-120-2023-86089US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-86089US\nIsmi/Имя: YO‘LDASHALIYEV SAMANDAR HASANBOY O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 41367`)
    }

    if (text === '1-120-2023-78089US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-78089US\nIsmi/Имя: PARPIYEVA DILFUZA MAMADJANOVNA\nmodel: COBALT\nnavbat/очередь: 56184`)
    }

    if (text === '1-120-2023-83495US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-83495US\nIsmi/Имя: SHUKURJONOVA MUKARRAM ISLOMOVNA\nmodel: COBALT\nnavbat/очередь: 46090`)
    }
    
    if (text === '1-120-2023-83910US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-83910US\nIsmi/Имя: QUVVATALIYEVA MOXIRA BAHODIR QIZI\nmodel: COBALT\nnavbat/очередь: 53847`)
    }

    if (text === '1-120-2023-64263US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-64263US\nIsmi/Имя: QULDASHEV AYUBJON XAMIDJONOVICH\nmodel: COBALT\nnavbat/очередь: 57272`)
    }
    
    if (text === '1-120-2023-61689US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-61689US\nIsmi/Имя: XASANOVA MADINAXON KARIMULLAYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 13407`)
    }

    if (text === '1-120-2023-70386US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-70386US\nIsmi/Имя: RO‘ZMATOV MIRZAXAMDAM YAKUBJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 13266`)
    }

    if (text === '1-120-2023-86673US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-86673US\nIsmi/Имя: MAMADJONOV MARUF MAXMUDOVICH\nmodel: DAMAS-2\nnavbat/очередь: 13457`)
    }

    if (text === '1-120-2023-80110US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-80110US\nIsmi/Имя: NURMATOV DILMUROD SOLIJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 14103`)
    }
    
    if (text === '1-120-2023-77384US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-77384US\nIsmi/Имя: NORMATOVA MUNISXON ABDURAXIMOVNA\nmodel: DAMAS-2\nnavbat/очередь: 14369`)
    }

    if (text === '1-120-2023-71004US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-71004US\nIsmi/Имя: ISMOILOV ILYOR KOMILJONOVICH\nmodel: COBALT\nnavbat/очередь: 46483`)
    }
    
    if (text === '1-120-2023-64449US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-64449US\nIsmi/Имя: ABDUSALOMOV ABDULXAY ABDUXALIM O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 40869`)
    }

    if (text === '1-120-2023-78115US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-78115US\nIsmi/Имя: ABDULLAJONOV FIRDAVSIY ZOKIRJON O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 3380`)
    }

    if (text === '1-120-2023-83861US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-83861US\nIsmi/Имя: ZARIPOVA RANO QOBILOVNA\nmodel: COBALT\nnavbat/очередь: 41709`)
    }

    if (text === '1-120-2023-61646US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-61646US\nIsmi/Имя: KORABAYEV SHAFIJON DJURAYEVICH\nmodel: COBALT\nnavbat/очередь: 42200`)
    }
    
    if (text === '1-120-2023-77513US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-77513US\nIsmi/Имя: XAKIMOVA MAVLYUDA XAMIDOVNA\nmodel: DAMAS-2\nnavbat/очередь: 11379`)
    }

    if (text === '1-120-2023-65767US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-65767US\nIsmi/Имя: TURSUNOV SHAXZOD MAHMUDJON O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 2676`)
    }
    
    if (text === '1-120-2023-86205US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-86205US\nIsmi/Имя: SODIKOVA GULCHEXRA OBIDJANOVNA\nmodel: COBALT\nnavbat/очередь: 51120`)
    }

    if (text === '1-120-2023-75125US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-75125US\nIsmi/Имя: XAMIDXANOV SAMADXON SAYIDXONOVICH\nmodel: COBALT\nnavbat/очередь: 52416`)
    }

    if (text === '1-120-2023-87674US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-87674US\nIsmi/Имя: MAMADALIYEV NASIRDIN MAXAMASODIQOVICH\nmodel: COBALT\nnavbat/очередь: 40229`)
    }

    if (text === '1-120-2023-96105US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-96105US\nIsmi/Имя: SHOMAHMUDOV SHOKAMOL SHOMUXTOR O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 50991`)
    }
    
    if (text === '1-120-2023-78476US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-78476US\nIsmi/Имя: VALIYEVA MARG‘UBA FURKAT QIZI\nmodel: COBALT\nnavbat/очередь: 37113`)
    }

    if (text === '1-120-2023-72630US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-72630US\nIsmi/Имя: SHERMIRZAYEVA MAFTUNA BAHROM QIZI\nmodel: COBALT\nnavbat/очередь: 46635`)
    }
    
    if (text === '1-120-2023-63835US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-63835US\nIsmi/Имя: KAMOLOVA FERUZA RAXMONALI-QIZI\nmodel: COBALT\nnavbat/очередь: 51740`)
    }

    if (text === '1-120-2023-78751US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-78751US\nIsmi/Имя: XAKIMOV SOBIRJON RUSTAMOVICH\nmodel: DAMAS-2\nnavbat/очередь: 15478`)
    }

    if (text === '1-120-2023-74619US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74619US\nIsmi/Имя: KABIROV AZIMJON MALLAYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 1211`)
    }

    if (text === '1-120-2023-63204US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-63204US\nIsmi/Имя: AZIMOV TAMXIDJON SHOKIRJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 661`)
    }
    
    if (text === '1-120-2023-94185US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-94185US\nIsmi/Имя: VOXIDJANOVA ZULXUMOR AXADXON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 13602`)
    }

    if (text === '1-120-2023-70839US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-70839US\nIsmi/Имя: QODIROVA AROFAT IZZATILLAYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 14484`)
    }
    
    if (text === '1-120-2023-67666US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-67666US\nIsmi/Имя: AMINOVA RISLIQJON AMINOVNA\nmodel: COBALT\nnavbat/очередь: 52123`)
    }

    if (text === '1-120-2023-79193US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-79193US\nIsmi/Имя: TURG‘UNOV ALIMARDON AXMADJON O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 50124`)
    }

    if (text === '1-120-2023-93005US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-93005US\nIsmi/Имя: QUVVATALIYEV MIRABBOS MIRZOXID O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 41845`)
    }

    if (text === '1-120-2023-96894US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-96894US\nIsmi/Имя: ALIBOYEVA SALOMAT ABDUJABBOROVNA\nmodel: DAMAS-2\nnavbat/очередь: 13480`)
    }
    
    if (text === '1-120-2023-88731US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-88731US\nIsmi/Имя: HALIMOV IBROHIM MURODJON O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 50098`)
    }

    if (text === '1-120-2023-95031US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95031US\nIsmi/Имя: MAHMUDXONOV FATHULLOXON NASRILLAXON O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 49934`)
    }
    
    if (text === '1-120-2023-76863US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-76863US\nIsmi/Имя: TADJIBAYEV ELBEK URUNBAYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 14364`)
    }

    if (text === '1-120-2023-93787US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-93787US\nIsmi/Имя: ABDULXAMIDOVA MUSLIMAXON TOSHTEMIROVNA\nmodel: DAMAS-2\nnavbat/очередь: 15227`)
    }

    if (text === '1-120-2023-64011US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-64011US\nIsmi/Имя: AXMEDOV BOTIRJON ARIFOVICH\nmodel: DAMAS-2\nnavbat/очередь: 14983`)
    }

    if (text === '1-120-2023-81238US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-81238US\nIsmi/Имя: YULDASHEVA XOLIDA AMINJONOVNA\nmodel: DAMAS-2\nnavbat/очередь: 14225`)
    }
    
    if (text === '1-120-2023-99894US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-99894US\nIsmi/Имя: RAYMALIYEV JAMSHID ALIJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 16776`)
    }

    if (text === '1-120-2023-95877US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95877US\nIsmi/Имя: DJO‘RAYEVA ZUBAYDA VALIYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 16825`)
    }
    
    if (text === '1-120-2023-80711US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-80711US\nIsmi/Имя: ODILJANOV AZIZBEK ZOKIRJON O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 41919`)
    }

    if (text === '1-120-2023-65244US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-65244US\nIsmi/Имя: ALIYEVA MUQADDAM ADHAMJON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 14377`)
    }

    if (text === '1-120-2023-88168US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-88168US\nIsmi/Имя: TURSINOVA MUXARAM ULKANOVNA\nmodel: DAMAS-2\nnavbat/очередь: 15394`)
    }

    if (text === '1-120-2023-65101US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-65101US\nIsmi/Имя: AXMADJANOV ASROR ASATILLAYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 16474`)
    }
    
    if (text === '1-120-2023-74788US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74788US\nIsmi/Имя: Эргашов Анваржон Шовкатович\nmodel: DAMAS-2\nnavbat/очередь: 15888`)
    }

    if (text === '1-120-2023-89350US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-89350US\nIsmi/Имя: MAXSUDOV MUMIN ORIFJONOVICH\nmodel: COBALT\nnavbat/очередь: 2792`)
    }
    
    if (text === '1-120-2023-71878US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-71878US\nIsmi/Имя: IBROHIMOV FAHRIDDIN FAYZULLO O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 52555`)
    }

    if (text === '1-120-2023-80560US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-80560US\nIsmi/Имя: KOMILOVA RISQINISSA SHUKUROVNA\nmodel: COBALT\nnavbat/очередь: 41168`)
    }

    if (text === '1-120-2023-96211US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-96211US\nIsmi/Имя: ORTIQOV XURSHIDJON UMAROVICH\nmodel: COBALT\nnavbat/очередь: 56836`)
    }

    if (text === '1-120-2023-73371US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-73371US\nIsmi/Имя: G‘AFUROV MAXMUDJON RAXMONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 12917`)
    }
    
    if (text === '1-120-2023-60406US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-60406US\nIsmi/Имя: VALIYEVA MAXBUBA GANIYEVNA\nmodel: COBALT\nnavbat/очередь: 41720`)
    }

    if (text === '1-120-2023-68918US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-68918US\nIsmi/Имя: ERGASHEV DAVRONBEK XALIMOVICH\nmodel: DAMAS-2\nnavbat/очередь: 11508`)
    }
    
    if (text === '1-120-2023-73297US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-73297US\nIsmi/Имя: ZIYOVADINOV G‘IYOSJON AKBARALI O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 42001`)
    }

    if (text === '1-120-2023-73074US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-73074US\nIsmi/Имя: CHINBERDIYEV AZIZBEK JAMOLDINOVICH\nmodel: DAMAS-2\nnavbat/очередь: 755`)
    }

    if (text === '1-120-2023-66165US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-66165US\nIsmi/Имя: SALOXIDDINOV JAMSHID ODILJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 14263`)
    }

    if (text === '1-120-2023-61261US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-61261US\nIsmi/Имя: SAMSOQOV SOTIVOLDI IBRAGIMOVICH\nmodel: DAMAS-2\nnavbat/очередь: 15970`)
    }
    
    if (text === '1-120-2023-85283US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-85283US\nIsmi/Имя: SADIKOVA MAMURAXON ERKINBOYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 16055`)
    }

    if (text === '1-120-2023-61922US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-61922US\nIsmi/Имя: BOYMATOV NOSIRALI TURDIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 17218`)
    }
    
    if (text === '1-120-2023-96229US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-96229US\nIsmi/Имя: AYUBOV ASADBEK ANVARJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 17487`)
    }

    if (text === '1-120-2023-73016US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-73016US\nIsmi/Имя: ALIJONOV JAVOHIR ANVARJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 17514`)
    }

    if (text === '1-120-2023-99281US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-99281US\nIsmi/Имя: SOHIBOV RAFTORJON INOMJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 14149`)
    }

    if (text === '1-120-2023-73591US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-73591US\nIsmi/Имя: RUZIMATOV JAMOLDIN ABDURAXMONOVICH\nmodel: COBALT\nnavbat/очередь: 56101`)
    }
    
    if (text === '1-120-2023-74794US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74794US\nIsmi/Имя: ABBOSOV BAXROMJON ANVAR O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 41073`)
    }

    if (text === '1-120-2023-99581US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-99581US\nIsmi/Имя: SAMATOV ULUG‘BEK XAYDARJONOVICH\nmodel: COBALT\nnavbat/очередь: 57135`)
    }
    
    if (text === '1-120-2023-60081US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-60081US\nIsmi/Имя: BOQIJANOV AHADJON MURODJON O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 54890`)
    }

    if (text === '1-120-2023-63622US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-63622US\nIsmi/Имя: MAMUDOV XUDOYBERDI SAYFULLO O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 57746`)
    }

    if (text === '1-120-2023-74049US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74049US\nIsmi/Имя: NEMATJONOVA DILSHODA ODILJON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 13875`)
    }

    if (text === '1-120-2023-62134US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-62134US\nIsmi/Имя: MULLABAYEV GANIJON GAFFAROVICH\nmodel: DAMAS-2\nnavbat/очередь: 17056`)
    }
    
    if (text === '1-120-2023-86689US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-86689US\nIsmi/Имя: TURDALIYEV ABDUQAXXOR ABDUGOFFOROVICH\nmodel: DAMAS-2\nnavbat/очередь: 18051`)
    }

    if (text === '1-120-2023-98610US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-98610US\nIsmi/Имя: ABDULLAYEVA ROZIYA JALILOVNA\nmodel: COBALT\nnavbat/очередь: 50994`)
    }
    
    if (text === '1-120-2023-94178US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-94178US\nIsmi/Имя: OLIMOV SALOXIDDIN SHAMSHIDINOVICH\nmodel: DAMAS-2\nnavbat/очередь: 18361`)
    }

    if (text === '1-120-2023-94030US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-94030US\nIsmi/Имя: ABDIRAXIMOV ABDUVOXID ABDISAMATOVICH\nmodel: DAMAS-2\nnavbat/очередь: 12755`)
    }

    if (text === '1-120-2023-68841US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-68841US\nIsmi/Имя: SAYIDKARIMOVA XIDOYATXON SAYDOMATXONOVNA\nmodel: DAMAS-2\nnavbat/очередь: 12756`)
    }

    if (text === '1-120-2023-65920US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-65920US\nIsmi/Имя: ISMOILOV O‘TKIRJON UMAR O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 52677`)
    }
    
    if (text === '1-120-2023-87007US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-87007US\nIsmi/Имя: SALMONOVA ZILOLA SODIQ-QIZI\nmodel: COBALT\nnavbat/очередь: 50952`)
    }

    if (text === '1-120-2023-81679US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-81679US\nIsmi/Имя: BOZOROV FARXODJON ABDUSAMAT O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 12581`)
    }
    
    if (text === '1-120-2023-68571US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-68571US\nIsmi/Имя: MO‘XSINOV NODIRBEK ILXOMOVICH\nmodel: COBALT\nnavbat/очередь: 51955`)
    }

    if (text === '1-120-2023-80812US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-80812US\nIsmi/Имя: OLIMJONOVA FERUZA RAVSHANJON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 13060`)
    }

    if (text === '1-120-2023-91672US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-91672US\nIsmi/Имя: ERGASHEV ALISHER ORIF O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 15698`)
    }

    if (text === '1-120-2023-88258US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-88258US\nIsmi/Имя: IBROXIMOVA SAIDA OLIMJONOVNA\nmodel: DAMAS-2\nnavbat/очередь: 12348`)
    }
    
    if (text === '1-120-2023-90193US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-90193US\nIsmi/Имя: RAZIKOV MUZAFFAR MAMURJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 13681`)
    }

    if (text === '1-120-2023-95146US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95146US\nIsmi/Имя: NURIDDINOV DONIYOR BAHROM O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 13493`)
    }
    
    if (text === '1-120-2023-60956US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-60956US\nIsmi/Имя: TURAYEV RAXMATILLA ABDUVALIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 17171`)
    }

    if (text === '1-120-2023-65053US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-65053US\nIsmi/Имя: ABDUSHOXIDOVA UMINISO QAXAROVNA\nmodel: COBALT\nnavbat/очередь: 52360`)
    }

    if (text === '1-120-2023-63685US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-63685US\nIsmi/Имя: MAMASOBITOVA MAHLIYO MAMARASULOVNA\nmodel: COBALT\nnavbat/очередь: 3180`)
    }

    if (text === '1-120-2023-86280US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-86280US\nIsmi/Имя: BAZAROVA XULKAR KAMILJONOVNA\nmodel: DAMAS-2\nnavbat/очередь: 14166`)
    }
    
    if (text === '1-120-2023-78118US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-78118US\nIsmi/Имя: XOLIQOVA NAZOKAT SOTIMBOYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 17551`)
    }

    if (text === '1-120-2023-68417US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-68417US\nIsmi/Имя: SOBIROV AZIZBEK NODIRJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 17578`)
    }
    
    if (text === '1-120-2023-67996US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-67996US\nIsmi/Имя: FAZLIDINOV MASHRAB YUSUBJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 14604`)
    }

    if (text === '1-120-2023-95284US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95284US\nIsmi/Имя: YULDASHEV MAMADALI ASHURALIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 18097`)
    }

    if (text === '1-120-2023-90697US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-90697US\nIsmi/Имя: SODIKOV SOXIBJON ERKINBOYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 18201`)
    }

    if (text === '1-120-2023-70964US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-70964US\nIsmi/Имя: AHMADALIYEV ISLOMJON SHOVKATJON-O'G'LI\nmodel: DAMAS-2\nnavbat/очередь: 17627`)
    }
    
    if (text === '1-120-2023-90318US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-90318US\nIsmi/Имя: ABDURAUFOV ABDURAHMON ABDUVANNOB O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 17796`)
    }

    if (text === '1-120-2023-89548US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-89548US\nIsmi/Имя: ТУХТАБОЕВ МУРОДЖОН РУСТАМЖОНОВИЧ\nmodel: DAMAS-2\nnavbat/очередь: 16634`)
    }
    
    if (text === '1-120-2023-87464US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-87464US\nIsmi/Имя: ESHONDADAXONOV ABDULLAXON AXMADOVICH\nmodel: DAMAS-2\nnavbat/очередь: 18549`)
    }

    if (text === '1-120-2023-82411US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-82411US\nIsmi/Имя: NIYAZOV XAYDAR RASULJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 12551`)
    }

    if (text === '1-120-2023-64325US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-64325US\nIsmi/Имя: SULTONOVA MAVJUDAXON JABARALIYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 12799`)
    }

    if (text === '1-120-2023-66521US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-66521US\nIsmi/Имя: SIDIQOVA MARXABOXON XUDOYBERDIYEVNA\nmodel: COBALT\nnavbat/очередь: 53769`)
    }
    
    if (text === '1-120-2023-92758US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-92758US\nIsmi/Имя: MIRFAYZIYEV SHOXRUXBEK PULATJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 15864`)
    }

    if (text === '1-120-2023-84363US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84363US\nIsmi/Имя: MA’RUPOV MA’RUFJON BAXTIYOR O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 17435`)
    }
    
    if (text === '1-120-2023-69951US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-69951US\nIsmi/Имя: RAXIMOV ILXAMJON IBRAGIMOVICH\nmodel: COBALT\nnavbat/очередь: 56628`)
    }

    if (text === '1-120-2023-65283US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-65283US\nIsmi/Имя: ALIMOV BAXODIR MAXAMADOVICH\nmodel: COBALT\nnavbat/очередь: 53707`)
    }

    if (text === '1-120-2023-84234US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84234US\nIsmi/Имя: MAMATQULOV ABROR ASQARALIYEVICH\nmodel: COBALT\nnavbat/очередь: 51461`)
    }

    if (text === '1-120-2023-64488US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-64488US\nIsmi/Имя: XAKIMOVA RISKINISA MIRZAKARIMOVNA\nmodel: COBALT\nnavbat/очередь: 51948`)
    }
    
    if (text === '1-120-2023-63040US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-63040US\nIsmi/Имя: AXMADJONOV SHUXRATJON MULLOABDULLOYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 14203`)
    }

    if (text === '1-120-2023-96987US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-96987US\nIsmi/Имя: NEMATJONOVA ROZIYABI XXX\nmodel: DAMAS-2\nnavbat/очередь: 17934`)
    }
    
    if (text === '1-120-2023-86452US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-86452US\nIsmi/Имя: ERKINOVA MALOHAT TOLIBJON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 16383`)
    }

    if (text === '1-120-2023-64615US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-64615US\nIsmi/Имя: POLATOVA MAVLYUDA XXX\nmodel: COBALT\nnavbat/очередь: 52389`)
    }

    if (text === '1-120-2023-72359US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-72359US\nIsmi/Имя: XASANOV SHAVKATJON MELIXOJAYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 15742`)
    }

    if (text === '1-120-2023-77143US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-77143US\nIsmi/Имя: TURSUNOVA SHAXLO RUSTAMOVNA\nmodel: DAMAS-2\nnavbat/очередь: 16479`)
    }
    
    if (text === '1-120-2023-60043US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-60043US\nIsmi/Имя: DARVISHALIYEV AZIZBEK ZOXID O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 18519`)
    }

    if (text === '1-120-2023-72347US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-72347US\nIsmi/Имя: QURBONOV MUXAMMADALI ABDUSATTOROVICH\nmodel: DAMAS-2\nnavbat/очередь: 17884`)
    }
    
    if (text === '1-120-2023-94528US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-94528US\nIsmi/Имя: BAXRAMOV MAXSUTALI ERGASHBOYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 15329`)
    }

    if (text === '1-120-2023-63762US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-63762US\nIsmi/Имя: MUXTAROV AKBARJON OMANOVICH\nmodel: DAMAS-2\nnavbat/очередь: 17630`)
    }

    if (text === '1-120-2023-94450US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-94450US\nIsmi/Имя: NISHONOV DILSHODJON MADAMINOVICH\nmodel: DAMAS-2\nnavbat/очередь: 16115`)
    }

    if (text === '1-120-2023-82994US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-82994US\nIsmi/Имя: AMINJONOV SARDORBEK ASHURALI O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 52387`)
    }
    
    if (text === '1-120-2023-84898US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84898US\nIsmi/Имя: Тошпулатов Улугбек Собиржон угли\nmodel: DAMAS-2\nnavbat/очередь: 18047`)
    }

    if (text === '1-120-2023-67935US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-67935US\nIsmi/Имя: SAXIYEV ABDULLA OMONALI O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 19377`)
    }
    
    if (text === '1-120-2023-72004US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-72004US\nIsmi/Имя: NASIRDINOV SALOHIDDIN SADIRDIN O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 12710`)
    }

    if (text === '1-120-2023-93235US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-93235US\nIsmi/Имя: NORMATOV JOXONGIR MURODILLAYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 13934`)
    }

    if (text === '1-120-2023-69808US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-69808US\nIsmi/Имя: SHERBAYEV AXMADALI VALIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 18123`)
    }

    if (text === '1-120-2023-83003US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-83003US\nIsmi/Имя: KARIMOVA MAVJUDA ERGASHEVNA\nmodel: DAMAS-2\nnavbat/очередь: 18214`)
    }
    
    if (text === '1-120-2023-99601US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-99601US\nIsmi/Имя: MUMINOV ABDUBOSIT GANIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 18193`)
    }

    if (text === '1-120-2023-85809US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-85809US\nIsmi/Имя: DOVLATOV ORTIKNAZAR ABDULLAYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 19339`)
    }
    
    if (text === '1-120-2023-91653US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-91653US\nIsmi/Имя: UMAROV AZIZ MUXAMADJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 19372`)
    }

    if (text === '1-120-2023-66503US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-66503US\nIsmi/Имя: MAMADJONOVA SHAXRI ALISHEVNA\nmodel: DAMAS-2\nnavbat/очередь: 19376`)
    }

    if (text === '1-120-2023-61389US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-61389US\nIsmi/Имя: MIRZAYEVA QORIYAJON ISROILOVNA\nmodel: DAMAS-2\nnavbat/очередь: 19396`)
    }

    if (text === '1-120-2023-89646US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-89646US\nIsmi/Имя: MAXMUDOVA MAMLAKAT NEMATOVNA\nmodel: COBALT\nnavbat/очередь: 56093`)
    }
    
    if (text === '1-120-2023-65118US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-65118US\nIsmi/Имя: QIRGIZOV ISLOMJON NE’MATULLO O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 13066`)
    }

    if (text === '1-120-2023-88403US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-88403US\nIsmi/Имя: Axmedova Shaxnoza Anvarovna\nmodel: DAMAS-2\nnavbat/очередь: 13110`)
    }
    
    if (text === '1-120-2023-90049US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-90049US\nIsmi/Имя: YUSUFJANOVA MUBORAK XAMIDULLO QIZI\nmodel: COBALT\nnavbat/очередь: 55866`)
    }

    if (text === '1-120-2023-67838US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-67838US\nIsmi/Имя: ABDULLAYEVA MOHIDIL SHUHRAT QIZI\nmodel: COBALT\nnavbat/очередь: 51546`)
    }

    if (text === '1-120-2023-86399US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-86399US\nIsmi/Имя: TURDIALIYEV BURXONJON ABDURASUL O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 12762`)
    }

    if (text === '1-120-2023-88973US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-88973US\nIsmi/Имя: TASHMATOVA MAXSUDA UKTAMOVNA\nmodel: DAMAS-2\nnavbat/очередь: 13874`)
    }
    
    if (text === '1-120-2023-87386US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-87386US\nIsmi/Имя: XOKIMJONOVA BISORA XATAMJONOVNA\nmodel: DAMAS-2\nnavbat/очередь: 13220`)
    }

    if (text === '1-120-2023-89388US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-89388US\nIsmi/Имя: DADAJONOV ZOKIRJON MAKSUDJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 17707`)
    }
    
    if (text === '1-120-2023-91536US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-91536US\nIsmi/Имя: GAYIBNAZAROVA NAZIRA RUSTAMOVNA\nmodel: DAMAS-2\nnavbat/очередь: 17723`)
    }

    if (text === '1-120-2023-72246US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-72246US\nIsmi/Имя: FERUZA BAXRIDINOVA FATXIDIN QIZI\nmodel: DAMAS-2\nnavbat/очередь: 19355`)
    }

    if (text === '1-120-2023-85265US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-85265US\nIsmi/Имя: TURSUNBAYEV KOSIMXON AZIM O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 19656`)
    }

    if (text === '1-120-2023-97936US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-97936US\nIsmi/Имя: XABIBULLAYEV ABRORJON ODILJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 18261`)
    }
    
    if (text === '1-120-2023-83870US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-83870US\nIsmi/Имя: ISHANOV ISMOIL ODILOVICH\nmodel: COBALT\nnavbat/очередь: 54048`)
    }

    if (text === '1-120-2023-92893US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-92893US\nIsmi/Имя: ERGASHEV SIROJIDDIN RUSTAMJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 18155`)
    }
    
    if (text === '1-120-2023-63918US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-63918US\nIsmi/Имя: MIRSAIDOV YUSUBJON FAZILOVICH\nmodel: DAMAS-2\nnavbat/очередь: 12752`)
    }

    if (text === '1-120-2023-93042US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-93042US\nIsmi/Имя: VALIYEV AZAMAT FURKATOVICH\nmodel: COBALT\nnavbat/очередь: 56673`)
    }

    if (text === '1-120-2023-97231US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-97231US\nIsmi/Имя: KARIMOVA SHOHIDA ZAFARIDINOVNA\nmodel: DAMAS-2\nnavbat/очередь: 13177`)
    }

    if (text === '1-120-2023-95044US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95044US\nIsmi/Имя: MAMADJONOV DJAFFARBEK VALIDJONOVICH\nmodel: COBALT\nnavbat/очередь: 58199`)
    }
    
    if (text === '1-120-2023-86321US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-86321US\nIsmi/Имя: AXMADALIYEV RAXIMJON MARUFOVICH\nmodel: DAMAS-2\nnavbat/очередь: 19482`)
    }

    if (text === '1-120-2023-65198US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-65198US\nIsmi/Имя: ERGASHEVA SOJIDAXON MUKSINOVNA\nmodel: DAMAS-2\nnavbat/очередь: 14177`)
    }
    
    if (text === '1-120-2023-93682US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-93682US\nIsmi/Имя: DJAVXAROV TOIR ERGASHEVICH\nmodel: DAMAS-2\nnavbat/очередь: 15432`)
    }

    if (text === '1-120-2023-98178US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-98178US\nIsmi/Имя: OLIMOV SHOKIRJON ABDIXAKIMOVICH\nmodel: DAMAS-2\nnavbat/очередь: 14775`)
    }

    if (text === '1-120-2023-60535US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-60535US\nIsmi/Имя: DADABAYEVA GULNORAXON ISAKJANOVNA\nmodel: DAMAS-2\nnavbat/очередь: 15530`)
    }

    if (text === '1-120-2023-97525US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-97525US\nIsmi/Имя: MIRMAHMUDOV RASHIDJON MAMURJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 19270`)
    }
    
    if (text === '1-120-2023-62185US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-62185US\nIsmi/Имя: ORIFOV DOVUDXON OTABEK-O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 19344`)
    }

    if (text === '1-120-2023-82164US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-82164US\nIsmi/Имя: YULDASHOVA GAVXAR TURSUNOVNA\nmodel: COBALT\nnavbat/очередь: 52690`)
    }
    
    if (text === '1-120-2023-98150US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-98150US\nIsmi/Имя: ORTIQOV RAHMONJON XOLMATJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 16116`)
    }

    if (text === '1-120-2023-87723US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-87723US\nIsmi/Имя: KARIMOVA BISOLIHA SAMIJONOVNA\nmodel: DAMAS-2\nnavbat/очередь: 962`)
    }

    if (text === '1-120-2023-70916US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-70916US\nIsmi/Имя: TURDALIYEV AZIZBEK A’ZAMJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 15632`)
    }

    if (text === '1-120-2023-62488US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-62488US\nIsmi/Имя: RAXMANOV AKRAMJON USMANJANOVICH\nmodel: DAMAS-2\nnavbat/очередь: 16708`)
    }
    
    if (text === '1-120-2023-97868US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-97868US\nIsmi/Имя: RUSTAMOVA ULMASOY DJAMALIDINOVNA\nmodel: DAMAS-2\nnavbat/очередь: 19318`)
    }

    if (text === '1-120-2023-84756US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84756US\nIsmi/Имя: ABDULXAFIZOVA SAFIYABU XXX\nmodel: DAMAS-2\nnavbat/очередь: 17914`)
    }
    
    if (text === '1-120-2023-74851US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74851US\nIsmi/Имя: ХАКИМОВ НЕМАТЖОН МАШРАБОВИЧ\nmodel: DAMAS-2\nnavbat/очередь: 19194`)
    }

    if (text === '1-120-2023-68530US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-68530US\nIsmi/Имя: YUSUBJONOVA DILNOZA MAHMUDJON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 20041`)
    }

    if (text === '1-120-2023-76501US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-76501US\nIsmi/Имя: ASQARALIYEV XAFIZILLO XABIBULLO O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 18121`)
    }

    if (text === '1-120-2023-61220US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-61220US\nIsmi/Имя: RAXIMOVA MAXBUBA MAXMUDOVNA\nmodel: DAMAS-2\nnavbat/очередь: 18780`)
    }
    
    if (text === '1-120-2023-81755US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-81755US\nIsmi/Имя: XASANOV NAVODIR MAMATXUJA O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 20048`)
    }

    if (text === '1-120-2023-96460US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-96460US\nIsmi/Имя: RAXMANOV ADXAM AKBARALIYEVICH\nmodel: COBALT\nnavbat/очередь: 56333`)
    }
    
    if (text === '1-120-2023-79312US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-79312US\nIsmi/Имя: FAZILOV ZOKIRJON XAMIDOVICH\nmodel: DAMAS-2\nnavbat/очередь: 16451`)
    }

    if (text === '1-120-2023-92280US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-92280US\nIsmi/Имя: TO‘YCHIYEV SHAHZODBEK BEGMUROD O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 948`)
    }

    if (text === '1-120-2023-94650US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-94650US\nIsmi/Имя: XUSANOV ABDURAUFXON SAYIDAXMATXON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 609`)
    }

    if (text === '1-120-2023-93800US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-93800US\nIsmi/Имя: MIRZABAYEVA RANOXON XOSHIMBOY QIZI\nmodel: DAMAS-2\nnavbat/очередь: 13131`)
    }
    
    if (text === '1-120-2023-64672US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-64672US\nIsmi/Имя: DEXKONOV ILXOM TURSUNOVICH\nmodel: DAMAS-2\nnavbat/очередь: 12768`)
    }

    if (text === '1-120-2023-68924US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-68924US\nIsmi/Имя: RAHIMOV DILSHOD BAXTIYOR O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 16516`)
    }
    
    if (text === '1-120-2023-66444US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-66444US\nIsmi/Имя: TALABOVA SAIDA ERKINOVNA\nmodel: DAMAS-2\nnavbat/очередь: 14390`)
    }

    if (text === '1-120-2023-62610US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-62610US\nIsmi/Имя: SULAYMANOV AVAZXON OLIMJONOVICH\nmodel: COBALT\nnavbat/очередь: 55477`)
    }

    if (text === '1-120-2023-66749US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-66749US\nIsmi/Имя: SOLIYEV RAFIKJON MIRJAMOLOVICH\nmodel: DAMAS-2\nnavbat/очередь: 659`)
    }

    if (text === '1-120-2023-89393US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-89393US\nIsmi/Имя: QODIROVA ZUHRA ABDULLAYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 19079`)
    }
    
    if (text === '1-120-2023-65587US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-65587US\nIsmi/Имя: POLVONOV ALIMIRZO QUTBIDDIN O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 19193`)
    }

    if (text === '1-120-2023-73134US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-73134US\nIsmi/Имя: JURABAYEVA MINAVVAR MIRZAMAXMUDOVNA\nmodel: COBALT\nnavbat/очередь: 3399`)
    }
    
    if (text === '1-120-2023-77588US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-77588US\nIsmi/Имя: MAMUDOV SAYFULLO XXX\nmodel: DAMAS-2\nnavbat/очередь: 14065`)
    }

    if (text === '1-120-2023-78931US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-78931US\nIsmi/Имя: SHARIPOV ULUG‘BEK QAHRAMON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 12793`)
    }

    if (text === '1-120-2023-73069US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-73069US\nIsmi/Имя: TO‘XTABOYEVA GULNOZA RUSTAMJONOVNA\nmodel: DAMAS-2\nnavbat/очередь: 17120`)
    }

    if (text === '1-120-2023-78208US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-78208US\nIsmi/Имя: MAMADJONOV YUSUBJON TOXIRJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 17201`)
    }
    
    if (text === '1-120-2023-95581US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95581US\nIsmi/Имя: DEXKONOV SOXIBJON ALIJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 13039`)
    }

    if (text === '1-120-2023-68541US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-68541US\nIsmi/Имя: RAHMONOVA DILNOZA NEMAT QIZI\nmodel: DAMAS-2\nnavbat/очередь: 17436`)
    }
    
    if (text === '1-120-2023-74650US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74650US\nIsmi/Имя: AZIMOV IBROHIMJON SOYIBJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 17522`)
    }

    if (text === '1-120-2023-60350US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-60350US\nIsmi/Имя: SOLIYEV ULUG‘BEK NABIJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 18199`)
    }

    if (text === '1-120-2023-92281US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-92281US\nIsmi/Имя: XOLMATOVA RUXSATOY SALIMOVNA\nmodel: COBALT\nnavbat/очередь: 56165`)
    }

    if (text === '1-120-2023-60883US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-60883US\nIsmi/Имя: ATAXONOV ABDUSALOM ABDUMALIKOVICH\nmodel: DAMAS-2\nnavbat/очередь: 12989`)
    }
    
    if (text === '1-120-2023-88464US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-88464US\nIsmi/Имя: XO‘JAMIRADOV JO‘RAMIRZA ISAQOVICH\nmodel: DAMAS-2\nnavbat/очередь: 14229`)
    }

    if (text === '1-120-2023-62337US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-62337US\nIsmi/Имя: MAXMUDOV ISROIL IBRAGIMOVICH\nmodel: DAMAS-2\nnavbat/очередь: 74`)
    }
    
    if (text === '1-120-2023-68970US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-68970US\nIsmi/Имя: ZAKIROVA MUXAYYO ABDUGAPPAROVNA\nmodel: DAMAS-2\nnavbat/очередь: 17406`)
    }

    if (text === '1-120-2023-83049US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-83049US\nIsmi/Имя: TURSUNBOYEV SHERZOD SULAYMANJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 458`)
    }

    if (text === '1-120-2023-99216US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-99216US\nIsmi/Имя: ISMAILOV XAYRULLA NEMATJONOVICH\nmodel: COBALT\nnavbat/очередь: 57197`)
    }

    if (text === '1-120-2023-67101US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-67101US\nIsmi/Имя: BOYMATOV DAVLAT ASHURBOYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 87`)
    }
    
    if (text === '1-120-2023-90547US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-90547US\nIsmi/Имя: XASANOV FARXOD YUSUBJONOVICH\nmodel: COBALT\nnavbat/очередь: 56042`)
    }

    if (text === '1-120-2023-62593US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-62593US\nIsmi/Имя: NEMATOVA FARIDA ISRAILXONOVNA\nmodel: COBALT\nnavbat/очередь: 56065`)
    }
    
    if (text === '1-120-2023-83476US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-83476US\nIsmi/Имя: MAMADJONOV RAXMATILLO XAYRULLOJON O'G'LI\nmodel: DAMAS-2\nnavbat/очередь: 13073`)
    }

    if (text === '1-120-2023-97776US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-97776US\nIsmi/Имя: ABDUVALIYEV ZOKIRJON XUSANBOY O‘G‘LI\nmodel: COBALT\nnavbat/очередь: 56627`)
    }

    if (text === '1-120-2023-99177US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-99177US\nIsmi/Имя: MILIYEV AZIMJON SAYDULLAYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 626`)
    }

    if (text === '1-120-2023-95432US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95432US\nIsmi/Имя: KARIMOV MAXMUD SALIMOVICH\nmodel: DAMAS-2\nnavbat/очередь: 19252`)
    }
    
    if (text === '1-120-2023-82722US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-82722US\nIsmi/Имя: YUSUBJONOV JONIBEK FARXOD O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 762`)
    }

    if (text === '1-120-2023-71375US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-71375US\nIsmi/Имя: ABDURAXMONOV AZAMAT KOMILJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 17520`)
    }
    
    if (text === '1-120-2023-79466US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-79466US\nIsmi/Имя: AXMEDOV ISLOMJON ABROR O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 14464`)
    }

    if (text === '1-120-2023-82059US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-82059US\nIsmi/Имя: ERKINBOYEVA MADINA AZAMJON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 16528`)
    }

    if (text === '1-120-2023-99582US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-99582US\nIsmi/Имя: TILLYABAYEV BAXROM FAXRITDINOVICH\nmodel: DAMAS-2\nnavbat/очередь: 18648`)
    }

    if (text === '1-120-2023-80733US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-80733US\nIsmi/Имя: SARIMSAKOV YUSUPJON AKBAROVICH\nmodel: DAMAS-2\nnavbat/очередь: 871`)
    }
    
    if (text === '1-120-2023-77090US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-77090US\nIsmi/Имя: TURDIMATOVA TADJIXON XAMIDOVNA\nmodel: DAMAS-2\nnavbat/очередь: 19609`)
    }

    if (text === '1-120-2023-78083US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-78083US\nIsmi/Имя: XOLDAROV BAXROMJON XABIBULLAYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 17924`)
    }
    
    if (text === '1-120-2023-66006US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-66006US\nIsmi/Имя: MURZOYEV HAKIMJON TURDALIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 18358`)
    }

    if (text === '1-120-2023-89731US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-89731US\nIsmi/Имя: Xayitov Otabek Tillaboyevich\nmodel: DAMAS-2\nnavbat/очередь: 19722`)
    }

    if (text === '1-120-2023-63494US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-63494US\nIsmi/Имя: KATTABEKOV JUMANAZAR SOTIBOLDIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 14217`)
    }

    if (text === '1-120-2023-89554US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-89554US\nIsmi/Имя: ERGASHEV ULUG‘BEK MAXMUD O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 14970`)
    }
    
    if (text === '1-120-2023-72337US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-72337US\nIsmi/Имя: YUSUPOV ELYORJON EGAMBERDIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 17809`)
    }

    if (text === '1-120-2023-97330US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-97330US\nIsmi/Имя: ERGASHALIYEV MUZAFFAR SHUKURJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 13174`)
    }
    
    if (text === '1-120-2023-93927US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-93927US\nIsmi/Имя: SHOKIRXONOV BAXROM BOTIROVICH\nmodel: DAMAS-2\nnavbat/очередь: 13179`)
    }

    if (text === '1-120-2023-61617US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-61617US\nIsmi/Имя: AXMEDOV BAXTIYOR MARUFOVICH\nmodel: DAMAS-2\nnavbat/очередь: 16827`)
    }

    if (text === '1-120-2023-84090US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84090US\nIsmi/Имя: INOMOV KOMOLIDDIN JAMOLIDDIN OGLI\nmodel: DAMAS-2\nnavbat/очередь: 17376`)
    }

    if (text === '1-120-2023-95552US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95552US\nIsmi/Имя: KARIMOV BAXRAMJON G‘AFFORJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 832`)
    }
    
    if (text === '1-120-2023-69108US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-69108US\nIsmi/Имя: ABDURAXIMOV BAXTIYOR SOIBOVICH\nmodel: DAMAS-2\nnavbat/очередь: 18608`)
    }

    if (text === '1-120-2023-76322US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-76322US\nIsmi/Имя: MAKSUDOVA MA’MURA XODIYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 17974`)
    }
    
    if (text === '1-120-2023-77179US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-77179US\nIsmi/Имя: YULDASHEVA SHARAPATJON USVALIYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 18385`)
    }

    if (text === '1-120-2023-90460US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-90460US\nIsmi/Имя: JALOLDINOV NIZOMJON ABDUSATTOR O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 18156`)
    }

    if (text === '1-120-2023-82258US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-82258US\nIsmi/Имя: XOMIDOV XOFIZULLOXON OSIMOVICH\nmodel: DAMAS-2\nnavbat/очередь: 17268`)
    }

    if (text === '1-120-2023-82155US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-82155US\nIsmi/Имя: MIRZAYEV JAMSHID XATAMJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 19078`)
    }
    
    if (text === '1-120-2023-73190US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-73190US\nIsmi/Имя: IMOMOVA MA’MURA SROJIDDIN QIZI\nmodel: DAMAS-2\nnavbat/очередь: 19084`)
    }

    if (text === '1-120-2023-85959US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-85959US\nIsmi/Имя: YO‘LDASHOVA MAXBUBAXON MAMADJANOVNA\nmodel: DAMAS-2\nnavbat/очередь: 19327`)
    }
    
    if (text === '1-120-2023-89156US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-89156US\nIsmi/Имя: MILIYEV AZIZJON SAYDULLAYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 19374`)
    }

    if (text === '1-120-2023-95810US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95810US\nIsmi/Имя: NIYOZMATOVA NILUFAR A’LOXANOVNA\nmodel: DAMAS-2\nnavbat/очередь: 13108`)
    }

    if (text === '1-120-2023-69669US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-69669US\nIsmi/Имя: IBRAGIMOV ABDULAZIZ MUXAMMADAMIN O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 15388`)
    }

    if (text === '1-120-2023-68094US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-68094US\nIsmi/Имя: PIRMATOV ELYORJON ERGASHOVICH\nmodel: DAMAS-2\nnavbat/очередь: 15507`)
    }
    
    if (text === '1-120-2023-79576US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-79576US\nIsmi/Имя: KASIMOV SHERZOD SAYFULLAYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 770`)
    }

    if (text === '1-120-2023-74561US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74561US\nIsmi/Имя: DADAJONOV KOMIL OLIMOVICH\nmodel: DAMAS-2\nnavbat/очередь: 16470`)
    }
    
    if (text === '1-120-2023-67596US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-67596US\nIsmi/Имя: HAKIMJONOV FAXRIDDIN FAYYOZJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 14636`)
    }

    if (text === '1-120-2023-85804US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-85804US\nIsmi/Имя: JALOLOV BAXROMJON MUHAMADJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 584`)
    }

    if (text === '1-120-2023-60844US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-60844US\nIsmi/Имя: TURDALIYEVA GAVHAR NORMATJON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 19745`)
    }

    if (text === '1-120-2023-78225US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-78225US\nIsmi/Имя: SAYFIYEVA MUXABAT MAHKAMOVNA\nmodel: DAMAS-2\nnavbat/очередь: 17333`)
    }
    
    if (text === '1-120-2023-92348US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-92348US\nIsmi/Имя: XASANOVA OYLORJON UROLOVNA\nmodel: DAMAS-2\nnavbat/очередь: 17397`)
    }

    if (text === '1-120-2023-65917US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-65917US\nIsmi/Имя: SHERMIRZAYEV SHOHRUHMIRZO ULUG‘BEK O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 19725`)
    }
    
    if (text === '1-120-2023-64971US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-64971US\nIsmi/Имя: MAXMUDOV BAXODIR GOLIBOVICH\nmodel: DAMAS-2\nnavbat/очередь: 17330`)
    }

    if (text === '1-120-2023-70552US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-70552US\nIsmi/Имя: ISMATULLAYEV ALISHER ISAQOVICH\nmodel: DAMAS-2\nnavbat/очередь: 21837`)
    }

    if (text === '1-120-2023-67570US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-67570US\nIsmi/Имя: ERGASHEV DILSHOD QO‘CHQORVOY O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 20832`)
    }

    if (text === '1-120-2023-95164US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95164US\nIsmi/Имя: NIZOMIDDINOVA DILFUZA XOSHIMJON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 21000`)
    }
    
    if (text === '1-120-2023-78286US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-78286US\nIsmi/Имя: KAMALOV JAMSHIDBEK JAMOLXON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 22082`)
    }

    if (text === '1-120-2023-82126US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-82126US\nIsmi/Имя: TUYCHALIYEV AMINJON ORTIKOVICH\nmodel: DAMAS-2\nnavbat/очередь: 22061`)
    }
    
    if (text === '1-120-2023-80397US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-80397US\nIsmi/Имя: XOMIDOVA MORIYAXON RAXMANOVNA\nmodel: DAMAS-2\nnavbat/очередь: 22078`)
    }

    if (text === '1-120-2023-68049US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-68049US\nIsmi/Имя: ABDULLAYEV AKMALJON ABDULLAYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 21902`)
    }

    if (text === '1-120-2023-63559US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-63559US\nIsmi/Имя: RAXIMOV FAXRIDDIN RUVOJIDINOVICH\nmodel: DAMAS-2\nnavbat/очередь: 22141`)
    }

    if (text === '1-120-2023-76923US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-76923US\nIsmi/Имя: ERGASHEV QUDRATBEK ILXOMJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 22145`)
    }
    
    if (text === '1-120-2023-69939US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-69939US\nIsmi/Имя: RAXMANOVA SEVARA ANVARJON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 21428`)
    }

    if (text === '1-120-2023-91698US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-91698US\nIsmi/Имя: Рахимова Махбуба Райимжоновна\nmodel: DAMAS-2\nnavbat/очередь: 21551`)
    }
    
    if (text === '1-120-2023-90421US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-90421US\nIsmi/Имя: VALIYEV RAVSHANBEK YO‘LCHIVOY O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 20300`)
    }

    if (text === '1-120-2023-77931US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-77931US\nIsmi/Имя: JURAYEVA SAODAT YULDASHEVNA\nmodel: DAMAS-2\nnavbat/очередь: 21436`)
    }

    if (text === '1-120-2023-74241US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74241US\nIsmi/Имя: MUYDINOV FIRDAVS SOBITJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 20391`)
    }

    if (text === '1-120-2023-63090US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-63090US\nIsmi/Имя: XUDAYBERGANOV AKMAL XUSANBOYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 21240`)
    }
    
    if (text === '1-120-2023-64965US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-64965US\nIsmi/Имя: QAMBAROV A’LOXON URAYIMJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 22598`)
    }

    if (text === '1-120-2023-64339US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-64339US\nIsmi/Имя: ISROILOV ELDOR BADIRDIN O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 21043`)
    }
    
    if (text === '1-120-2023-78060US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-78060US\nIsmi/Имя: KAMALOV FARXOD PAXRIDDINOVICH\nmodel: DAMAS-2\nnavbat/очередь: 20222`)
    }

    if (text === '1-120-2023-92570US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-92570US\nIsmi/Имя: YUNUSOV MIRZABEK JAMSHID O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 22326`)
    }

    if (text === '1-120-2023-66436US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-66436US\nIsmi/Имя: IZZATULLAYEV ULUG‘BEK MAMADALIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 20277`)
    }

    if (text === '1-120-2023-84795US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84795US\nIsmi/Имя: INAMOV ABDURASUL MAMURJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 20213`)
    }
    
    if (text === '1-120-2023-74436US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74436US\nIsmi/Имя: XUSAYNOV SOXIBBOY TURSINOVICH\nmodel: DAMAS-2\nnavbat/очередь: 21141`)
    }

    if (text === '1-120-2023-96866US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-96866US\nIsmi/Имя: JUMAYEVA XURSHIDA ABDUQAXXOROVNA\nmodel: DAMAS-2\nnavbat/очередь: 22287`)
    }
    
    if (text === '1-120-2023-91828US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-91828US\nIsmi/Имя: MUSAXONOVA MUNISXON SHUKUROVNA\nmodel: DAMAS-2\nnavbat/очередь: 1816`)
    }

    if (text === '1-120-2023-88961US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-88961US\nIsmi/Имя: MAXMUDOV AKBARJON JO‘RA O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 21897`)
    }

    if (text === '1-120-2023-85935US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-85935US\nIsmi/Имя: AXROROV ISROIL TAVAKALOVICH\nmodel: DAMAS-2\nnavbat/очередь: 21898`)
    }

    if (text === '1-120-2023-67967US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-67967US\nIsmi/Имя: RAIMJONOV MIRJALOL KURVONBOY O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 22313`)
    }
    
    if (text === '1-120-2023-64815US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-64815US\nIsmi/Имя: NISHANOV XURSHIDJON MADAMINOVICH\nmodel: DAMAS-2\nnavbat/очередь: 22314`)
    }

    if (text === '1-120-2023-87977US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-87977US\nIsmi/Имя: Sadikov Abdugafur Axmatxanovich\nmodel: DAMAS-2\nnavbat/очередь: 22349`)
    }
    
    if (text === '1-120-2023-71247US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-71247US\nIsmi/Имя: XOLMURODOV SARDORBEK OYBEKOVICH\nmodel: DAMAS-2\nnavbat/очередь: 22377`)
    }

    if (text === '1-120-2023-80723US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-80723US\nIsmi/Имя: ABDURAXMANOV DONIYOR BAXROM O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 21825`)
    }

    if (text === '1-120-2023-68379US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-68379US\nIsmi/Имя: AHMADJONOVA MUXLISA ISMOILJON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 21877`)
    }

    if (text === '1-120-2023-78178US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-78178US\nIsmi/Имя: BOTIROV AZIZBEK ABDUSAMAT O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 22000`)
    }
    
    if (text === '1-120-2023-79446US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-79446US\nIsmi/Имя: NEZOMIDDINOV UMIDJON JAMOLDIN O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 20506`)
    }

    if (text === '1-120-2023-90455US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-90455US\nIsmi/Имя: SOLIYEVA GULNORA MUXAMAD-QIZI\nmodel: DAMAS-2\nnavbat/очередь: 21480`)
    }
    
    if (text === '1-120-2023-73169US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-73169US\nIsmi/Имя: ZIYODOV SHERZODXON NEMAT O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 21981`)
    }

    if (text === '1-120-2023-90228US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-90228US\nIsmi/Имя: PULATOV XAYRULLO OBIDJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 1309`)
    }

    if (text === '1-120-2023-70173US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-70173US\nIsmi/Имя: PAZLIDDINOV AZIMJON FAHRIDDIN O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 21230`)
    }

    if (text === '1-120-2023-84004US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84004US\nIsmi/Имя: NO‘’MONJONOVA SURAYO MA’MURJON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 21414`)
    }
    
    if (text === '1-120-2023-72311US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-72311US\nIsmi/Имя: UMAROVA MAMLAKAT XAMITOVNA\nmodel: DAMAS-2\nnavbat/очередь: 21258`)
    }

    if (text === '1-120-2023-82380US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-82380US\nIsmi/Имя: Тошматов Обид Шарифович\nmodel: DAMAS-2\nnavbat/очередь: 22221`)
    }
    
    if (text === '1-120-2023-98109US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-98109US\nIsmi/Имя: MAHMUDOVA MASHHURA HASAN QIZI\nmodel: DAMAS-2\nnavbat/очередь: 21398`)
    }

    if (text === '1-120-2023-95668US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95668US\nIsmi/Имя: ЯТТ Абдуллаев Музаффар Юсубжон угли\nmodel: DAMAS-2\nnavbat/очередь: 22268`)
    }

    if (text === '1-120-2023-66611US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-66611US\nIsmi/Имя: AXMEDOV NOSIR SOBIRDJANOVICH\nmodel: DAMAS-2\nnavbat/очередь: 21031`)
    }

    if (text === '1-120-2023-71248US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-71248US\nIsmi/Имя: XOJANAZAROVA MAVLUDA SAMIJON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 20540`)
    }
    
    if (text === '1-120-2023-92489US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-92489US\nIsmi/Имя: SODIQOV ZUXRIDDIN BURXONIDDINOVICH\nmodel: DAMAS-2\nnavbat/очередь: 20719`)
    }

    if (text === '1-120-2023-74524US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74524US\nIsmi/Имя: SOLIJONOV JAVOHIR BAHROMJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 1709`)
    }
    
    if (text === '1-120-2023-81372US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-81372US\nIsmi/Имя: TURGUNBAYEV DILSHODBEK BOXODIR O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 20270`)
    }

    if (text === '1-120-2023-66051US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-66051US\nIsmi/Имя: ABDULLAYEV DAVRON QAXXOR O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 22735`)
    }

    if (text === '1-120-2023-90311US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-90311US\nIsmi/Имя: PARPIYEV ELDORBEK PULAT O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 23829`)
    }

    if (text === '1-120-2023-74020US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74020US\nIsmi/Имя: BEKMIRZAEV DAVRON RUSTAMJANOVICH\nmodel: DAMAS-2\nnavbat/очередь: 23501`)
    }
    
    if (text === '1-120-2023-92336US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-92336US\nIsmi/Имя: G‘OZIYEVA MAXLIYO NORMAT QIZI\nmodel: DAMAS-2\nnavbat/очередь: 23647`)
    }

    if (text === '1-120-2023-71003US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-71003US\nIsmi/Имя: KULDASHEV AKMALJON XAMIDJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 22854`)
    }
    
    if (text === '1-120-2023-76431US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-76431US\nIsmi/Имя: HAKIMOVA DILDORAJON ABDILBEKOVNA\nmodel: DAMAS-2\nnavbat/очередь: 23476`)
    }

    if (text === '1-120-2023-64278US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-64278US\nIsmi/Имя: SOLIYEV ABDUQAHHOR KARIM O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 23629`)
    }

    if (text === '1-120-2023-88452US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-88452US\nIsmi/Имя: DOLIMBAEVA SHOKHISTA AXADXANOVNA\nmodel: DAMAS-2\nnavbat/очередь: 23005`)
    }

    if (text === '1-120-2023-92842US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-92842US\nIsmi/Имя: AXMADALIYEV IKROMJON QURBONALIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 23026`)
    }
    
    if (text === '1-120-2023-61391US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-61391US\nIsmi/Имя: ISMOILOV ABDULXAMID ABDURAXIMOVICH\nmodel: DAMAS-2\nnavbat/очередь: 1197`)
    }

    if (text === '1-120-2023-66581US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-66581US\nIsmi/Имя: MUYDINOV SHOKIRJON SOYIBNAZAROVICH\nmodel: DAMAS-2\nnavbat/очередь: 22906`)
    }
    
    if (text === '1-120-2023-96128US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-96128US\nIsmi/Имя: NARIMOV ABDUSATTOR JO‘RAYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 1130`)
    }

    if (text === '1-120-2023-91722US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-91722US\nIsmi/Имя: QO‘CHQOROV BAXROMJON SAMIJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 23162`)
    }

    if (text === '1-120-2023-66293US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-66293US\nIsmi/Имя: SHERALIYEV KAMOLIDDIN AYUBJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 1471`)
    }

    if (text === '1-120-2023-60652US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-60652US\nIsmi/Имя: HASANOV MUHRIDDIN HAKIMJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 24054`)
    }
    
    if (text === '1-120-2023-74649US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74649US\nIsmi/Имя: ZOXIDOV SARDORBEK ZOKIRJON-O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 1482`)
    }

    if (text === '1-120-2023-84356US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84356US\nIsmi/Имя: XOLIQOV INOMIDDIN ABDUSALOMOVICH\nmodel: DAMAS-2\nnavbat/очередь: 24324`)
    }
    
    if (text === '1-120-2023-94035US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-94035US\nIsmi/Имя: NOZIMJONOVA GAVXARXON NAZIRJON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 23135`)
    }

    if (text === '1-120-2023-88213US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-88213US\nIsmi/Имя: ALIYEV DILMUROD SULTONBOYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 23450`)
    }

    if (text === '1-120-2023-91768US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-91768US\nIsmi/Имя: IBROXIMOV ISLOMJON IBROXIMOVICH\nmodel: DAMAS-2\nnavbat/очередь: 24297`)
    }

    if (text === '1-120-2023-81468US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-81468US\nIsmi/Имя: RAXMANALIYEVA TUXTAJON AXMADALIYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 1152`)
    }
    
    if (text === '1-120-2023-77240US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-77240US\nIsmi/Имя: MUYDINOVA RUSHANA SOBITJON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 24333`)
    }

    if (text === '1-120-2023-67338US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-67338US\nIsmi/Имя: SHODMONOVA MANZURA NIZOMIDDINOVNA\nmodel: DAMAS-2\nnavbat/очередь: 24226`)
    }
    
    if (text === '1-120-2023-89525US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-89525US\nIsmi/Имя: MAMAJANOVA INOBATXON ISMAILOVNA\nmodel: DAMAS-2\nnavbat/очередь: 24362`)
    }

    if (text === '1-120-2023-79353US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-79353US\nIsmi/Имя: MADAMINOVA MAXBUBA ERGASHALIYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 23552`)
    }

    if (text === '1-120-2023-73119US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-73119US\nIsmi/Имя: DJURAYEV ZUXRIDDIN PAZLITDINOVICH\nmodel: DAMAS-2\nnavbat/очередь: 24370`)
    }

    if (text === '1-120-2023-82848US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-82848US\nIsmi/Имя: Ахмедов Хасан Махмудович\nmodel: DAMAS-2\nnavbat/очередь: 23571`)
    }
    
    if (text === '1-120-2023-71671US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-71671US\nIsmi/Имя: YUSUPOVA MOXIRA YAKUBDJONOVNA\nmodel: DAMAS-2\nnavbat/очередь: 24265`)
    }

    if (text === '1-120-2023-95561US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95561US\nIsmi/Имя: OLIMOVA HILOLA ANORBOYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 24282`)
    }
    
    if (text === '1-120-2023-84592US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84592US\nIsmi/Имя: NABIJONOVA ZULXUMOR UMARJONOVNA\nmodel: DAMAS-2\nnavbat/очередь: 1427`)
    }

    if (text === '1-120-2023-96087US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-96087US\nIsmi/Имя: UMIDA BAYXANBAYEVA GULAMOVNA\nmodel: DAMAS-2\nnavbat/очередь: 23018`)
    }

    if (text === '1-120-2023-90211US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-90211US\nIsmi/Имя: XABIBULLAYEV MUXAMMADJON XAMIDULLO O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 23701`)
    }

    if (text === '1-120-2023-97448US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-97448US\nIsmi/Имя: MAXMUDOV AZIMJON MARUFJON-O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 22877`)
    }
    
    if (text === '1-120-2023-93867US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-93867US\nIsmi/Имя: TURDIYEV ERGASH KARABAYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 23777`)
    }

    if (text === '1-120-2023-90887US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-90887US\nIsmi/Имя: JURAYEVA KAMOLA MAMURJONOVNA\nmodel: DAMAS-2\nnavbat/очередь: 1171`)
    }
    
    if (text === '1-120-2023-93833US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-93833US\nIsmi/Имя: BOLTABAYEVA DILFUZA JURABAYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 23198`)
    }

    if (text === '1-120-2023-63598US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-63598US\nIsmi/Имя: USMONOV DILSHODJON ODILJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 24023`)
    }

    if (text === '1-120-2023-86960US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-86960US\nIsmi/Имя: DADAJONOV ZIKIRILLO MAXSUDJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 22813`)
    }

    if (text === '1-120-2023-76482US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-76482US\nIsmi/Имя: DADAJONOV UMIDJON AZIMJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 22860`)
    }
    
    if (text === '1-120-2023-84843US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84843US\nIsmi/Имя: ABDULLOYEV TO‘XTANAZAR NIMATJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 23977`)
    }

    if (text === '1-120-2023-73279US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-73279US\nIsmi/Имя: ABDUGAFFAROVA NURINISSO ABDUSATTAROVNA\nmodel: DAMAS-2\nnavbat/очередь: 22942`)
    }
    
    if (text === '1-120-2023-76841US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-76841US\nIsmi/Имя: SALMONJONOV AKMAL SOLIJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 22983`)
    }

    if (text === '1-120-2023-85424US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-85424US\nIsmi/Имя: FAZLIDDINOV MANSURJON FAHRIDDIN O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 23034`)
    }

    if (text === '1-120-2023-98853US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-98853US\nIsmi/Имя: YULDASHEVA MAXBUBA UMAROVNA\nmodel: DAMAS-2\nnavbat/очередь: 1271`)
    }

    if (text === '1-120-2023-84185US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84185US\nIsmi/Имя: XOJIYEV MUHAMMADALI MAXMUDOVICH\nmodel: DAMAS-2\nnavbat/очередь: 25693`)
    }
    
    if (text === '1-120-2023-95067US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95067US\nIsmi/Имя: TOSHPULATOV SAMIJON SOLIJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 25259`)
    }

    if (text === '1-120-2023-92531US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-92531US\nIsmi/Имя: XABIBULLAYEV ORIFXON ADXAM O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 25215`)
    }
    
    if (text === '1-120-2023-92165US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-92165US\nIsmi/Имя: Собирова Мунаввар Вахабовна\nmodel: DAMAS-2\nnavbat/очередь: 25576`)
    }

    if (text === '1-120-2023-68177US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-68177US\nIsmi/Имя: NURBEKOV XURSHIDBEK XUSNIDDIN O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 25598`)
    }

    if (text === '1-120-2023-66985US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-66985US\nIsmi/Имя: ROXMANOV BAXODIR QODIROVICH\nmodel: DAMAS-2\nnavbat/очередь: 25716`)
    }

    if (text === '1-120-2023-85349US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-85349US\nIsmi/Имя: XAYITOVA GULNORA ABDURAXMONOVNA\nmodel: DAMAS-2\nnavbat/очередь: 25697`)
    }
    
    if (text === '1-120-2023-68979US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-68979US\nIsmi/Имя: RAXMATOVA PAZILATXON NASIRJANOVNA\nmodel: DAMAS-2\nnavbat/очередь: 26039`)
    }

    if (text === '1-120-2023-86538US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-86538US\nIsmi/Имя: NORBOYEVA SAYYORA XAKIMJON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 25922`)
    }
    
    if (text === '1-120-2023-71900US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-71900US\nIsmi/Имя: AXROROV ERALI TUXTAMURODOVICH\nmodel: DAMAS-2\nnavbat/очередь: 24916`)
    }

    if (text === '1-120-2023-85725US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-85725US\nIsmi/Имя: MADMURODOV SALOYDIN XOLBOJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 1244`)
    }

    if (text === '1-120-2023-73540US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-73540US\nIsmi/Имя: ALIMOVA SHAXNOZA SOIBJON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 25003`)
    }

    if (text === '1-120-2023-81590US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-81590US\nIsmi/Имя: AKBAROV FAYOZBEK FAYZULLO O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 2098`)
    }
    
    if (text === '1-120-2023-98500US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-98500US\nIsmi/Имя: OHUNOV DONIYOR YUSUFJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 25925`)
    }

    if (text === '1-120-2023-62331US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-62331US\nIsmi/Имя: TURSINOV TUYCHIBOY TURGINOVICH\nmodel: DAMAS-2\nnavbat/очередь: 25128`)
    }
    
    if (text === '1-120-2023-76191US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-76191US\nIsmi/Имя: RASULOVA MALIKA SHARIFJONOVNA\nmodel: DAMAS-2\nnavbat/очередь: 26175`)
    }

    if (text === '1-120-2023-90430US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-90430US\nIsmi/Имя: ORIFJONOV AZAMATJON BAHODIRJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 24554`)
    }

    if (text === '1-120-2023-86451US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-86451US\nIsmi/Имя: XATAMJONOV ULUG‘BEK ILHOMJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 2015`)
    }

    if (text === '1-120-2023-81831US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-81831US\nIsmi/Имя: ALIYEVA SHAHRIZODA SHAVKAT QIZI\nmodel: DAMAS-2\nnavbat/очередь: 26174`)
    }
    
    if (text === '1-120-2023-86151US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-86151US\nIsmi/Имя: NORMIRZAYEVA FERUZA ABDUSALOM QIZI\nmodel: DAMAS-2\nnavbat/очередь: 25097`)
    }

    if (text === '1-120-2023-97531US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-97531US\nIsmi/Имя: G‘OFURJONOV G‘ULOMJON OLIMJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 24820`)
    }
    
    if (text === '1-120-2023-67605US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-67605US\nIsmi/Имя: ALISHER DADAXANOV XAPISOVICH\nmodel: DAMAS-2\nnavbat/очередь: 25107`)
    }

    if (text === '1-120-2023-84157US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84157US\nIsmi/Имя: AYIBJONOV SHAHZOD KAMOLJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 25150`)
    }

    if (text === '1-120-2023-76236US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-76236US\nIsmi/Имя: MAMASOLIYEVA MOHINURA DIYORJON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 1224`)
    }

    if (text === '1-120-2023-87919US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-87919US\nIsmi/Имя: NEGMATOV MAXAMADJON NURULLAYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 26041`)
    }
    
    if (text === '1-120-2023-65909US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-65909US\nIsmi/Имя: KASIMOVA SAODAT ABDULLAYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 25171`)
    }

    if (text === '1-120-2023-96451US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-96451US\nIsmi/Имя: SALAXITDINOV ODILJON SAMSIDINOVICH\nmodel: DAMAS-2\nnavbat/очередь: 24992`)
    }
    
    if (text === '1-120-2023-94171US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-94171US\nIsmi/Имя: MIRSAIDOV YOQUBJON URINBAYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 1277`)
    }

    if (text === '1-120-2023-91109US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-91109US\nIsmi/Имя: TILLABOYEV SARDORBEK ABDURASUL O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 25363`)
    }

    if (text === '1-120-2023-87179US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-87179US\nIsmi/Имя: SOIBOVA SURAYYO KARIMOVNA\nmodel: DAMAS-2\nnavbat/очередь: 24875`)
    }

    if (text === '1-120-2023-93142US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-93142US\nIsmi/Имя: AXMADJONOVA DILRABO ANVARJON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 25470`)
    }
    
    if (text === '1-120-2023-71886US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-71886US\nIsmi/Имя: UMAROVA MUXABBAT YADGAROVNA\nmodel: DAMAS-2\nnavbat/очередь: 24914`)
    }

    if (text === '1-120-2023-62417US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-62417US\nIsmi/Имя: XAYDAROVA SHOXIDA RAMONOVNA\nmodel: DAMAS-2\nnavbat/очередь: 25565`)
    }
    
    if (text === '1-120-2023-94036US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-94036US\nIsmi/Имя: OLIMJONOVA SHOXISTA RAXMONJONOVNA\nmodel: DAMAS-2\nnavbat/очередь: 24513`)
    }

    if (text === '1-120-2023-96797US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-96797US\nIsmi/Имя: MAXMUDOVA ROXATOY UMAROVNA\nmodel: DAMAS-2\nnavbat/очередь: 24625`)
    }

    if (text === '1-120-2023-67767US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-67767US\nIsmi/Имя: XOMIDOV HOMIDXON XAFIZULLOXON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 25617`)
    }

    if (text === '1-120-2023-99090US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-99090US\nIsmi/Имя: QO‘LDASHOV BEKZOD BAHODIR O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 24877`)
    }
    
    if (text === '1-120-2023-75881US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-75881US\nIsmi/Имя: TOSHMATOV ABDURAUF SOTTIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 25642`)
    }

    if (text === '1-120-2023-78898US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-78898US\nIsmi/Имя: AKBARALIYEVA O‘LMASOY RASULJON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 25648`)
    }
    
    if (text === '1-120-2023-92632US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-92632US\nIsmi/Имя: ASHMEDOV MAXSUTALI UMATALIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 24926`)
    }

    if (text === '1-120-2023-80971US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-80971US\nIsmi/Имя: OLIMJANOV ABBOSXON AVAZXON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 24949`)
    }

    if (text === '1-120-2023-80324US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-80324US\nIsmi/Имя: ABDURAXIMOVA AZIMA KOMILOVNA\nmodel: DAMAS-2\nnavbat/очередь: 24991`)
    }

    if (text === '1-120-2023-66133US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-66133US\nIsmi/Имя: ALIYEV ILYOSJON ILXOMJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 25007`)
    }
    
    if (text === '1-120-2023-76187US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-76187US\nIsmi/Имя: ABDUMALIKOV G‘OLIBJON TOLIBJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 25791`)
    }

    if (text === '1-120-2023-73053US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-73053US\nIsmi/Имя: Каххорова Отика Ваккосовна\nmodel: DAMAS-2\nnavbat/очередь: 25660`)
    }
    
    if (text === '1-120-2023-66392US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-66392US\nIsmi/Имя: SAIDOVA SAVRINISO KARIMOVNA\nmodel: DAMAS-2\nnavbat/очередь: 24611`)
    }

    if (text === '1-120-2023-66262US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-66262US\nIsmi/Имя: POLVONOVA MOHINUR ABDUXALIL QIZI\nmodel: DAMAS-2\nnavbat/очередь: 24518`)
    }

    if (text === '1-120-2023-96010US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-96010US\nIsmi/Имя: Аслонбоев Бобуржон Амондинович\nmodel: DAMAS-2\nnavbat/очередь: 1247`)
    }

    if (text === '1-120-2023-67881US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-67881US\nIsmi/Имя: G‘ANIYEV AZAMJON MADRAXIM O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 25772`)
    }
    
    if (text === '1-120-2023-76120US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-76120US\nIsmi/Имя: ABDULLAXATOV RUSTAMJON IKROM O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 1542`)
    }

    if (text === '1-120-2023-86125US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-86125US\nIsmi/Имя: ORTIQOV MUXIDDIN SOXIJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 1382`)
    }
    
    if (text === '1-120-2023-75417US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-75417US\nIsmi/Имя: RIZAYEV DILMUROD MUXIDINJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 26938`)
    }

    if (text === '1-120-2023-89180US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-89180US\nIsmi/Имя: KURBONOV MUXAMMADALI AXMADALI O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 26821`)
    }

    if (text === '1-120-2023-86266US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-86266US\nIsmi/Имя: GULAMOV KOMILJON XXX\nmodel: DAMAS-2\nnavbat/очередь: 27402`)
    }

    if (text === '1-120-2023-80203US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-80203US\nIsmi/Имя: IMOMBERDIYEV JAVLON G‘IYOSIDDINOVICH\nmodel: DAMAS-2\nnavbat/очередь: 28171`)
    }
    
    if (text === '1-120-2023-75049US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-75049US\nIsmi/Имя: ABDUVOXIDOV MUHRIDDIN JURA O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 26648`)
    }

    if (text === '1-120-2023-95643US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95643US\nIsmi/Имя: MAMATOV IKRAM AZAMATOVICH\nmodel: DAMAS-2\nnavbat/очередь: 27302`)
    }
    
    if (text === '1-120-2023-92891US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-92891US\nIsmi/Имя: XUSANOVA XANIFA RUZIQULOVNA\nmodel: DAMAS-2\nnavbat/очередь: 27482`)
    }

    if (text === '1-120-2023-70174US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-70174US\nIsmi/Имя: NIZOMOV HAYOTTILLO ELYORJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 27684`)
    }

    if (text === '1-120-2023-92673US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-92673US\nIsmi/Имя: SHAMIROV ABDISATTOR YULCHIBAYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 26510`)
    }

    if (text === '1-120-2023-64809US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-64809US\nIsmi/Имя: ИКРОМОВ АКБАР АКРАМЖОНОВИЧ\nmodel: DAMAS-2\nnavbat/очередь: 26395`)
    }
    
    if (text === '1-120-2023-63126US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-63126US\nIsmi/Имя: SOLIYEVA SAYYORA XAYDARALIYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 26764`)
    }

    if (text === '1-120-2023-75984US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-75984US\nIsmi/Имя: TASHXODJAYEV ADXAM XABIBULLAYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 28084`)
    }
    
    if (text === '1-120-2023-94089US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-94089US\nIsmi/Имя: TOSHPULATOV O‘TKIR TURSUNOVICH\nmodel: DAMAS-2\nnavbat/очередь: 28066`)
    }

    if (text === '1-120-2023-62896US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-62896US\nIsmi/Имя: MIRFAYZULLAYEV ULUG‘BEK USUBJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 27794`)
    }

    if (text === '1-120-2023-86386US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-86386US\nIsmi/Имя: SHARIPOV JOBIR SOBIRDJANOVICH\nmodel: DAMAS-2\nnavbat/очередь: 26376`)
    }

    if (text === '1-120-2023-87696US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-87696US\nIsmi/Имя: MIRZALIYEVA MUXABBAT MIRZOKARIMOVNA\nmodel: DAMAS-2\nnavbat/очередь: 1386`)
    }
    
    if (text === '1-120-2023-65859US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-65859US\nIsmi/Имя: NURIDDINOVA SURAYYO DAVRONJON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 27839`)
    }

    if (text === '1-120-2023-96784US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-96784US\nIsmi/Имя: MIRZAKARIMOVA DILBAR MUXIDDINOVNA\nmodel: DAMAS-2\nnavbat/очередь: 27617`)
    }
    
    if (text === '1-120-2023-90192US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-90192US\nIsmi/Имя: SOATOV RASUL FOZILJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 27046`)
    }

    if (text === '1-120-2023-91017US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-91017US\nIsmi/Имя: XUSHNAZAROVA DILFUZA XOSHIMJANOVNA\nmodel: DAMAS-2\nnavbat/очередь: 26345`)
    }

    if (text === '1-120-2023-75037US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-75037US\nIsmi/Имя: Соаталиев Сардор Собиралиевич\nmodel: DAMAS-2\nnavbat/очередь: 26663`)
    }

    if (text === '1-120-2023-65284US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-65284US\nIsmi/Имя: QAYUMOV AZAMAT A’ZAMJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 27145`)
    }
    
    if (text === '1-120-2023-94779US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-94779US\nIsmi/Имя: SOBIRXANOV RUSTAMXON RAXIMXONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 1402`)
    }

    if (text === '1-120-2023-78603US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-78603US\nIsmi/Имя: ASQARALIYEV HUSNIDDIN HABIBULLO O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 26489`)
    }
    
    if (text === '1-120-2023-80722US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-80722US\nIsmi/Имя: XOLYIGITOVA ODINAXON RAXIMOVNA\nmodel: DAMAS-2\nnavbat/очередь: 1692`)
    }

    if (text === '1-120-2023-65366US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-65366US\nIsmi/Имя: Xaydarova Nodiraxon Sharifjanovna\nmodel: DAMAS-2\nnavbat/очередь: 27303`)
    }

    if (text === '1-120-2023-71836US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-71836US\nIsmi/Имя: TOSHKANBAYEVA MUAZZAMXON QO‘QONBOY QIZI\nmodel: DAMAS-2\nnavbat/очередь: 26618`)
    }

    if (text === '1-120-2023-74401US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74401US\nIsmi/Имя: SHERMIRZAYEVA FERUZA ULUG‘BEK QIZI\nmodel: DAMAS-2\nnavbat/очередь: 27189`)
    }
    
    if (text === '1-120-2023-69246US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-69246US\nIsmi/Имя: AMINJANOVA FOTIMA XAKIMBOYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 27556`)
    }

    if (text === '1-120-2023-70450US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-70450US\nIsmi/Имя: Шодиев Шавкат Раимович\nmodel: DAMAS-2\nnavbat/очередь: 26662`)
    }
    
    if (text === '1-120-2023-68809US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-68809US\nIsmi/Имя: HAFIZOV SHAHRIYOR NURILLO O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 27491`)
    }

    if (text === '1-120-2023-67171US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-67171US\nIsmi/Имя: MUXAMMADJONOVA MAXLIYO DILMUROD QIZI\nmodel: DAMAS-2\nnavbat/очередь: 26692`)
    }

    if (text === '1-120-2023-95897US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95897US\nIsmi/Имя: ABDUVOXIDOVA MAMLAKATXON KOYVASHALIYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 26725`)
    }

    if (text === '1-120-2023-69964US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-69964US\nIsmi/Имя: SADIKOV AXMATXON XXX\nmodel: DAMAS-2\nnavbat/очередь: 29088`)
    }
    
    if (text === '1-120-2023-76632US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-76632US\nIsmi/Имя: ABDIRASILOV ORIPJON YAKIBOVICH\nmodel: DAMAS-2\nnavbat/очередь: 30119`)
    }

    if (text === '1-120-2023-99250US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-99250US\nIsmi/Имя: ABDUSALOMOV BOBURMIRZO BOSIT O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 1529`)
    }
    
    if (text === '1-120-2023-65714US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-65714US\nIsmi/Имя: YO‘LDOSHEV TURSINALI ABDULXAMID O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 29380`)
    }

    if (text === '1-120-2023-92736US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-92736US\nIsmi/Имя: XAYDARJONOV OYBEK ULUGBEK O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 28385`)
    }

    if (text === '1-120-2023-74284US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74284US\nIsmi/Имя: UMAROV MURODILLOXON MAKSUDXONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 29983`)
    }

    if (text === '1-120-2023-86798US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-86798US\nIsmi/Имя: NIYOZOVA BUSOLIMA BEKNAZAROVNA\nmodel: DAMAS-2\nnavbat/очередь: 30194`)
    }
    
    if (text === '1-120-2023-76960US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-76960US\nIsmi/Имя: QORABOYEVA UMIDAXON ISMATILLAYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 28564`)
    }

    if (text === '1-120-2023-67421US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-67421US\nIsmi/Имя: TURSUNOVA MALIKA NEMATULLO QIZI\nmodel: DAMAS-2\nnavbat/очередь: 29051`)
    }
    
    if (text === '1-120-2023-99963US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-99963US\nIsmi/Имя: RIZAYEV NEMAT OBIDOVICH\nmodel: DAMAS-2\nnavbat/очередь: 28578`)
    }

    if (text === '1-120-2023-79310US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-79310US\nIsmi/Имя: Маруфалиев Толибжон Умаржон угли\nmodel: DAMAS-2\nnavbat/очередь: 28422`)
    }

    if (text === '1-120-2023-84382US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84382US\nIsmi/Имя: IBRAGIMOVA NAZOKAT ISMOILJONOVNA\nmodel: DAMAS-2\nnavbat/очередь: 28807`)
    }

    if (text === '1-120-2023-83598US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-83598US\nIsmi/Имя: MAVLANOVA SHAXLOHON BAXTIYOR QIZI\nmodel: DAMAS-2\nnavbat/очередь: 29826`)
    }
    
    if (text === '1-120-2023-95020US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95020US\nIsmi/Имя: TURSUNOV AKMALJON XAMIDJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 30036`)
    }

    if (text === '1-120-2023-82746US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-82746US\nIsmi/Имя: MAMASIDDIQOVA MARG‘UBA RAXIMJON-QIZI\nmodel: DAMAS-2\nnavbat/очередь: 28554`)
    }
    
    if (text === '1-120-2023-64368US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-64368US\nIsmi/Имя: XOLMURODOVA ZULAYHO NURILLO QIZI\nmodel: DAMAS-2\nnavbat/очередь: 30514`)
    }

    if (text === '1-120-2023-91973US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-91973US\nIsmi/Имя: MADALIYEVA DILOROM UMAROVNA\nmodel: DAMAS-2\nnavbat/очередь: 30563`)
    }

    if (text === '1-120-2023-70650US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-70650US\nIsmi/Имя: SOBITALIYEV SHAHZOD SHOKIRJON-O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 29884`)
    }

    if (text === '1-120-2023-91082US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-91082US\nIsmi/Имя: VALIYEVA MOXIRA ABDULLAJON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 28206`)
    }
    
    if (text === '1-120-2023-67219US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-67219US\nIsmi/Имя: MAG‘ZUMOV ULUG‘BEK SAYDULLO-O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 1509`)
    }

    if (text === '1-120-2023-93750US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-93750US\nIsmi/Имя: TURSUNBAYEV JONIBEK ILXOM O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 28768`)
    }
    
    if (text === '1-120-2023-86994US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-86994US\nIsmi/Имя: QAYUMOVA DILFUZA TURSUNALIYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 29197`)
    }

    if (text === '1-120-2023-90179US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-90179US\nIsmi/Имя: NURMATOV BAXODIR G‘AFFAROVICH\nmodel: DAMAS-2\nnavbat/очередь: 30491`)
    }

    if (text === '1-120-2023-79114US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-79114US\nIsmi/Имя: POLVONOV ALISHER KUTBIDINOVICH\nmodel: DAMAS-2\nnavbat/очередь: 30074`)
    }

    if (text === '1-120-2023-96006US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-96006US\nIsmi/Имя: ERKINOV IBROXIM ABDULVOHID O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 29466`)
    }
    
    if (text === '1-120-2023-69363US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-69363US\nIsmi/Имя: OLIMJON KOMILJONOV KOMILJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 30205`)
    }

    if (text === '1-120-2023-65504US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-65504US\nIsmi/Имя: KARIMOVA AZIZA XAKIMJONOVNA\nmodel: DAMAS-2\nnavbat/очередь: 2373`)
    }
    
    if (text === '1-120-2023-69670US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-69670US\nIsmi/Имя: RAXMONNAZAROV ILXOMIDIN KAMARDINOVICH\nmodel: DAMAS-2\nnavbat/очередь: 1594`)
    }

    if (text === '1-120-2023-64076US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-64076US\nIsmi/Имя: MIRZAYEV DONIYORBEK ISMOILOVICH\nmodel: DAMAS-2\nnavbat/очередь: 29860`)
    }

    if (text === '1-120-2023-68246US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-68246US\nIsmi/Имя: MANIYAZOVA GULTOJI JAMOLOVNA\nmodel: DAMAS-2\nnavbat/очередь: 29931`)
    }

    if (text === '1-120-2023-78550US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-78550US\nIsmi/Имя: ABDUQAXAROVA MUTABAR ABDUXALIMOVNA\nmodel: DAMAS-2\nnavbat/очередь: 29839`)
    }
    
    if (text === '1-120-2023-97986US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-97986US\nIsmi/Имя: RASULOV ZOITJON SOTVOLDIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 28787`)
    }

    if (text === '1-120-2023-68043US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-68043US\nIsmi/Имя: MASHRAPOVA GULSORA ORTIKMAT QIZI\nmodel: DAMAS-2\nnavbat/очередь: 28745`)
    }
    
    if (text === '1-120-2023-77138US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-77138US\nIsmi/Имя: BOBOXONOV MURODXON ALISHER O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 341`)
    }

    if (text === '1-120-2023-69537US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-69537US\nIsmi/Имя: MEXMANOV SHERZOD AXMADALIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 28808`)
    }

    if (text === '1-120-2023-71355US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-71355US\nIsmi/Имя: ALIJONOV DILSHODJON ASADJON O'G'LI\nmodel: DAMAS-2\nnavbat/очередь: 28891`)
    }

    if (text === '1-120-2023-94616US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-94616US\nIsmi/Имя: AZAMOVA DILAFRUZ ASADJON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 28447`)
    }
    
    if (text === '1-120-2023-76015US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-76015US\nIsmi/Имя: AXMEDOVA MAXLIYO ERKINBOYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 30219`)
    }

    if (text === '1-120-2023-74278US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74278US\nIsmi/Имя: MULLOBOYEV IQBOLJON IKROMJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 29020`)
    }
    
    if (text === '1-120-2023-90801US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-90801US\nIsmi/Имя: Хасанов Эргашхон Сайдаматхонович\nmodel: DAMAS-2\nnavbat/очередь: 30141`)
    }

    if (text === '1-120-2023-87457US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-87457US\nIsmi/Имя: AXMATALIYEV SHERZOD DAVLATALIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 28734`)
    }

    if (text === '1-120-2023-83207US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-83207US\nIsmi/Имя: KULDASHEV YUNUSXON BAXODIROVICH\nmodel: DAMAS-2\nnavbat/очередь: 29319`)
    }

    if (text === '1-120-2023-92795US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-92795US\nIsmi/Имя: ERGASHXONOV JASURXON FAZLIDDINXON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 2357`)
    }
    
    if (text === '1-120-2023-73301US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-73301US\nIsmi/Имя: SAYDULLOYEVA SHAXNOZA SOBITXON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 29450`)
    }

    if (text === '1-120-2023-66726US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-66726US\nIsmi/Имя: DADAJONOV KAMBARALI NISHONBAYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 30352`)
    }
    
    if (text === '1-120-2023-70856US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-70856US\nIsmi/Имя: NEGMATOVA GULNOZA MUXAMADJONOVNA\nmodel: DAMAS-2\nnavbat/очередь: 31275`)
    }

    if (text === '1-120-2023-74139US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74139US\nIsmi/Имя: BOXONOV OTABEK SAYDIMAXMUDOVICH\nmodel: DAMAS-2\nnavbat/очередь: 31786`)
    }

    if (text === '1-120-2023-69038US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-69038US\nIsmi/Имя: TOJIBOYEV AHADJON AKRAMJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 32087`)
    }

    if (text === '1-120-2023-97725US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-97725US\nIsmi/Имя: ABDUMALIKOVA O‘LMASOY NOZIMJON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 32182`)
    }
    
    if (text === '1-120-2023-79120US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-79120US\nIsmi/Имя: TOJIOBOYEVA SHOXISTA TOSHMATJON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 31555`)
    }

    if (text === '1-120-2023-63150US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-63150US\nIsmi/Имя: FAYZULLAYEV XUSNIDDIN ZAYLIDINOVICH\nmodel: DAMAS-2\nnavbat/очередь: 31031`)
    }
    
    if (text === '1-120-2023-96005US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-96005US\nIsmi/Имя: MALIKOV MURODULLA TURGUNBAYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 31587`)
    }

    if (text === '1-120-2023-89469US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-89469US\nIsmi/Имя: SULAYMONOV NOZIMXON MUXITDIN-O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 31745`)
    }

    if (text === '1-120-2023-90258US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-90258US\nIsmi/Имя: QALANDAROV SHOAXROR SHORAXIM O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 32044`)
    }

    if (text === '1-120-2023-83517US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-83517US\nIsmi/Имя: JABBOROVA JAMILA JAKBAROVNA\nmodel: DAMAS-2\nnavbat/очередь: 32400`)
    }
    
    if (text === '1-120-2023-90906US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-90906US\nIsmi/Имя: DEXKANOV TUXTAMUROD ZIYODOVICH\nmodel: DAMAS-2\nnavbat/очередь: 1976`)
    }

    if (text === '1-120-2023-84808US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84808US\nIsmi/Имя: ASQARALIYEV IBROHIMJON HABIBULLO O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 30991`)
    }
    
    if (text === '1-120-2023-98399US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-98399US\nIsmi/Имя: KARIMJONOVA LAYLO ABDUMALIK QIZI\nmodel: DAMAS-2\nnavbat/очередь: 30607`)
    }

    if (text === '1-120-2023-84797US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84797US\nIsmi/Имя: MUSLIMA NURMUXAMEDOVA BAXTIYOR QIZI\nmodel: DAMAS-2\nnavbat/очередь: 1643`)
    }

    if (text === '1-120-2023-60996US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-60996US\nIsmi/Имя: JURAYEVA TUXTABI BOTIROVNA\nmodel: DAMAS-2\nnavbat/очередь: 32653`)
    }

    if (text === '1-120-2023-68634US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-68634US\nIsmi/Имя: ABDULXAMIDOV NAIMJON XASANJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 30952`)
    }
    
    if (text === '1-120-2023-85895US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-85895US\nIsmi/Имя: SULAYMONOV UMID OBIDJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 32516`)
    }

    if (text === '1-120-2023-77173US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-77173US\nIsmi/Имя: SHAMSIDDINOV SHOKIRJON SHAXOBIDDIN O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 30915`)
    }
    
    if (text === '1-120-2023-85485US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-85485US\nIsmi/Имя: KARIMOV UMARJON MARUFOVICH\nmodel: DAMAS-2\nnavbat/очередь: 31216`)
    }

    if (text === '1-120-2023-78150US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-78150US\nIsmi/Имя: QO‘CHQOROVA BUZULAYXO RAXIMOVNA\nmodel: DAMAS-2\nnavbat/очередь: 30874`)
    }

    if (text === '1-120-2023-70626US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-70626US\nIsmi/Имя: MUYDINOVA XALIMA MAMADALIYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 31610`)
    }

    if (text === '1-120-2023-95612US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95612US\nIsmi/Имя: TOSHPO‘LATOV ABDUSAMAT ABDUSOLOMOVICH\nmodel: DAMAS-2\nnavbat/очередь: 30865`)
    }
    
    if (text === '1-120-2023-78177US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-78177US\nIsmi/Имя: RASULOV ABDUNOSIR XABIBULLAYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 31703`)
    }

    if (text === '1-120-2023-81625US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-81625US\nIsmi/Имя: RAHIMNAZAROV RAUFBEK RAHIMJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 30780`)
    }
    
    if (text === '1-120-2023-96423US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-96423US\nIsmi/Имя: FOZILJONOV XASAN OQIL O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 32255`)
    }

    if (text === '1-120-2023-92843US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-92843US\nIsmi/Имя: MADIBROXIMOV FURQAT ABDURAXIM O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 1626`)
    }

    if (text === '1-120-2023-99011US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-99011US\nIsmi/Имя: PULATOVA ZARIFAXON TOSHKENBOYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 31053`)
    }

    if (text === '1-120-2023-93608US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-93608US\nIsmi/Имя: AKMALXONOV AZIZBEK AYUBXON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 32367`)
    }
    
    if (text === '1-120-2023-95206US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95206US\nIsmi/Имя: HUSNIDDIN RAXIMOV SOATALIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 1640`)
    }

    if (text === '1-120-2023-82740US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-82740US\nIsmi/Имя: XOLMIRZAYEVA GUZAL ERGASHALIYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 32376`)
    }
    
    if (text === '1-120-2023-82863US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-82863US\nIsmi/Имя: ASHURBOYEV BAHROM BAXTIYOROVICH\nmodel: DAMAS-2\nnavbat/очередь: 32430`)
    }

    if (text === '1-120-2023-70364US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-70364US\nIsmi/Имя: DJOBBOROV MAXAMMADJON XOJIAKBAROVICH\nmodel: DAMAS-2\nnavbat/очередь: 31578`)
    }

    if (text === '1-120-2023-67700US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-67700US\nIsmi/Имя: ERALIYEV XAYDARJON XAMIDOVICH\nmodel: DAMAS-2\nnavbat/очередь: 32055`)
    }

    if (text === '1-120-2023-66529US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-66529US\nIsmi/Имя: MADISMONOV SHAXZOD ANVARJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 32458`)
    }
    
    if (text === '1-120-2023-60187US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-60187US\nIsmi/Имя: JURINOV FARXOD ABDUVAXOBOVICH\nmodel: DAMAS-2\nnavbat/очередь: 31001`)
    }

    if (text === '1-120-2023-91213US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-91213US\nIsmi/Имя: XAMDAMOV DILSHOD ABDULLAJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 32475`)
    }
    
    if (text === '1-120-2023-83915US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-83915US\nIsmi/Имя: XONBOYEV OTABEK ABDUMALIKOVICH\nmodel: DAMAS-2\nnavbat/очередь: 32482`)
    }

    if (text === '1-120-2023-92048US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-92048US\nIsmi/Имя: QURBONOVA NASIBA AHMADALI QIZI\nmodel: DAMAS-2\nnavbat/очередь: 32165`)
    }

    if (text === '1-120-2023-71940US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-71940US\nIsmi/Имя: AKBAROV NASIM NAZARALIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 33569`)
    }

    if (text === '1-120-2023-67805US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-67805US\nIsmi/Имя: QAYIMOVA DILSHODA ABDALI QIZI\nmodel: DAMAS-2\nnavbat/очередь: 33605`)
    }
    
    if (text === '1-120-2023-69249US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-69249US\nIsmi/Имя: TURGUNOV DILMUROD ABDULLO O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 1790`)
    }

    if (text === '1-120-2023-78905US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-78905US\nIsmi/Имя: XOLDAROV NIZOMIDDIN ABDULXAKIMOVICH\nmodel: DAMAS-2\nnavbat/очередь: 33421`)
    }
    
    if (text === '1-120-2023-79224US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-79224US\nIsmi/Имя: XALDOROV MADAMINJON MAXSITALIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 33533`)
    }

    if (text === '1-120-2023-64923US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-64923US\nIsmi/Имя: ASLONOVA DILBAR TUYAKOVNA\nmodel: DAMAS-2\nnavbat/очередь: 33737`)
    }

    if (text === '1-120-2023-64781US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-64781US\nIsmi/Имя: IMOMBERDIYEVA DAVLATJON NEMATILLAYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 33672`)
    }

    if (text === '1-120-2023-60819US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-60819US\nIsmi/Имя: NASRULLAYEVA UMIDA BAXROM QIZI\nmodel: DAMAS-2\nnavbat/очередь: 33743`)
    }
    
    if (text === '1-120-2023-85522US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-85522US\nIsmi/Имя: ROZIQOV OYBEK JURABOYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 33752`)
    }

    if (text === '1-120-2023-69066US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-69066US\nIsmi/Имя: SHARIPOVA YULDUZOY MEXAYDINOVNA\nmodel: DAMAS-2\nnavbat/очередь: 33632`)
    }
    
    if (text === '1-120-2023-66906US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-66906US\nIsmi/Имя: AKBARALIYEV ASADBEK G‘OLIBJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 33865`)
    }

    if (text === '1-120-2023-96774US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-96774US\nIsmi/Имя: KARIMOV SHOKIRJON NABIJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 1853`)
    }

    if (text === '1-120-2023-74176US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74176US\nIsmi/Имя: TOSHMATOVA DURDONA ABDUFOZIL QIZI\nmodel: DAMAS-2\nnavbat/очередь: 34002`)
    }

    if (text === '1-120-2023-93035US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-93035US\nIsmi/Имя: G‘ULOMOV MURODJON TUROBJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 33913`)
    }
    
    if (text === '1-120-2023-99373US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-99373US\nIsmi/Имя: GANIYEVA DILAFRUZ KAMARIDDINOVNA\nmodel: DAMAS-2\nnavbat/очередь: 33938`)
    }

    if (text === '1-120-2023-73660US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-73660US\nIsmi/Имя: NISHONOV MUXAMAD TURG‘UNBOYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 1846`)
    }
    
    if (text === '1-120-2023-62943US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-62943US\nIsmi/Имя: AXMADXONOV AVAZBEK AXADJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 34101`)
    }

    if (text === '1-120-2023-70170US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-70170US\nIsmi/Имя: MADALIYEVA UMIDA ALIJONOVNA\nmodel: DAMAS-2\nnavbat/очередь: 34081`)
    }

    if (text === '1-120-2023-86228US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-86228US\nIsmi/Имя: TO‘YCHIYEVA GULBAHOR RAHMATJON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 34404`)
    }

    if (text === '1-120-2023-89007US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-89007US\nIsmi/Имя: HAKIMOV ELYOR YO‘LDOSH O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 32960`)
    }
    
    if (text === '1-120-2023-91417US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-91417US\nIsmi/Имя: IMOMALIYEV SODIK SOTIBOLDIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 33089`)
    }

    if (text === '1-120-2023-72601US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-72601US\nIsmi/Имя: NURMUHAMMEDOV SHAHBOZBEK ORIFJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 34251`)
    }
    
    if (text === '1-120-2023-76602US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-76602US\nIsmi/Имя: BOZOROVA GULNORA RASULVOYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 1879`)
    }

    if (text === '1-120-2023-64594US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-64594US\nIsmi/Имя: SATTAROV MAXMUD XALILOVICH\nmodel: DAMAS-2\nnavbat/очередь: 34062`)
    }

    if (text === '1-120-2023-87658US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-87658US\nIsmi/Имя: MIRZAMATOVA MAFTUNA PULATJON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 33099`)
    }

    if (text === '1-120-2023-80995US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-80995US\nIsmi/Имя: TOJIBAYEV SHOXZODJON BAXODIR O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 32938`)
    }
    
    if (text === '1-120-2023-92468US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-92468US\nIsmi/Имя: JALALOV MOYDINJON SHAXOBOVICH\nmodel: DAMAS-2\nnavbat/очередь: 34274`)
    }

    if (text === '1-120-2023-64944US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-64944US\nIsmi/Имя: RAIMJONOV PAHLAVON SHAVKATJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 1835`)
    }
    
    if (text === '1-120-2023-78650US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-78650US\nIsmi/Имя: RASHIDOVA DILDORA NAJMIDDIN QIZI\nmodel: DAMAS-2\nnavbat/очередь: 32954`)
    }

    if (text === '1-120-2023-92524US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-92524US\nIsmi/Имя: LUTFILLAYEV FAYZULLOXON ABDULLAYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 34383`)
    }

    if (text === '1-120-2023-61042US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-61042US\nIsmi/Имя: MAHMUDOVA SHOIRA TO‘LQINJON QIZI\nmodel: DAMAS-2\nnavbat/очередь: 33614`)
    }

    if (text === '1-120-2023-87829US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-87829US\nIsmi/Имя: IBRAGIMOV ALI PATILLAYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 33797`)
    }
    
    if (text === '1-120-2023-63136US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-63136US\nIsmi/Имя: XAMRAXUJAYEV ALISHER NE’MATXUJAYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 33251`)
    }

    if (text === '1-120-2023-69016US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-69016US\nIsmi/Имя: SAYDULLAYEV A’ZAMJON AZIZJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 32778`)
    }
    
    if (text === '1-120-2023-64872US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-64872US\nIsmi/Имя: Таджибаева Шахноза Баходировна\nmodel: DAMAS-2\nnavbat/очередь: 33043`)
    }

    if (text === '1-120-2023-76355US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-76355US\nIsmi/Имя: SAIDUMAROV AXMADJON RASULOVICH\nmodel: DAMAS-2\nnavbat/очередь: 32865`)
    }

    if (text === '1-120-2023-72672US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-72672US\nIsmi/Имя: JUMONOV XAYDARALI NAZIRALIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 32832`)
    }

    if (text === '1-120-2023-82735US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-82735US\nIsmi/Имя: YULDOSHEV MARUFJON MUROTALIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 1777`)
    }
    
    if (text === '1-120-2023-68254US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-68254US\nIsmi/Имя: G‘AFFOROV SOBITXON SHAVKAT O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 33000`)
    }

    if (text === '1-120-2023-64760US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-64760US\nIsmi/Имя: ALIYEV ULKONAZAR SULTONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 32771`)
    }
    
    if (text === '1-120-2023-76755US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-76755US\nIsmi/Имя: ALIYEV BOBIRJON QAXOR O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 33105`)
    }

    if (text === '1-120-2023-74567US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74567US\nIsmi/Имя: MAHMUDJONOV AVAZBEK MURODJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 33102`)
    }

    if (text === '1-120-2023-77324US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-77324US\nIsmi/Имя: ABDUVOXIDOV ABDUMALIK ABDUVALIYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 32681`)
    }

    if (text === '1-120-2023-60561US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-60561US\nIsmi/Имя: ERKINOV FARRUX INOMJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 33151`)
    }
    
    if (text === '1-120-2023-92902US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-92902US\nIsmi/Имя: SHARIPOV XASANJON AYUBJON-UG‘LI\nmodel: DAMAS-2\nnavbat/очередь: 33052`)
    }

    if (text === '1-120-2023-77618US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-77618US\nIsmi/Имя: SHARIPOVA ZULFINISO MASHRABOVNA\nmodel: DAMAS-2\nnavbat/очередь: 33095`)
    }
    
    if (text === '1-120-2023-80882US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-80882US\nIsmi/Имя: ABDUHAKIMOV MUHAMMADTOXIR MUHAMMADSOBIR O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 33642`)
    }

    if (text === '1-120-2023-90340US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-90340US\nIsmi/Имя: AXMADJANOV NURALI ABDUG‘ANI O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 2848`)
    }

    if (text === '1-120-2023-66015US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-66015US\nIsmi/Имя: ERGASHEV BAHODIRXON FAZLIDDINXON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 42076`)
    }

    if (text === '1-120-2023-85754US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-85754US\nIsmi/Имя: MAXKAMOVA ZARINGIZ KAYUMOVNA\nmodel: DAMAS-2\nnavbat/очередь: 39483`)
    }
    
    if (text === '1-120-2023-84970US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-84970US\nIsmi/Имя: Кенжаев Элдор Иброгимович\nmodel: DAMAS-2\nnavbat/очередь: 41161`)
    }

    if (text === '1-120-2023-76572US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-76572US\nIsmi/Имя: MAXKAMOV KAXRAMON SHUKURJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 2437`)
    }
    
    if (text === '1-120-2023-83385US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-83385US\nIsmi/Имя: ZOKIROVA UMIDA MAXAMATDJONOVNA\nmodel: DAMAS-2\nnavbat/очередь: 43753`)
    }

    if (text === '1-120-2023-63916US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-63916US\nIsmi/Имя: ASHUROVA MA’LUDA BAXODIRJONOVNA\nmodel: DAMAS-2\nnavbat/очередь: 39969`)
    }

    if (text === '1-120-2023-92624US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-92624US\nIsmi/Имя: MADVALIYEVA YULDUZ G‘O‘LAMOVNA\nmodel: DAMAS-2\nnavbat/очередь: 40206`)
    }

    if (text === '1-120-2023-68438US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-68438US\nIsmi/Имя: BADALOV AKMALJON AXADJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 42454`)
    }
    
    if (text === '1-120-2023-78549US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-78549US\nIsmi/Имя: YULDASHEV ABROR ABDULXAYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 4334`)
    }

    if (text === '1-120-2023-74601US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-74601US\nIsmi/Имя: BURXANJANOV FARXOD NUGMANOVICH\nmodel: DAMAS-2\nnavbat/очередь: 42707`)
    }
    
    if (text === '1-120-2023-73542US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-73542US\nIsmi/Имя: КАЙИМОВ АСКАРАЛИ\nmodel: DAMAS-2\nnavbat/очередь: 35419`)
    }

    if (text === '1-120-2023-94193US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-94193US\nIsmi/Имя: SHAROPOV JAXONGIR RAXMONJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 41041`)
    }

    if (text === '1-120-2023-81046US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-81046US\nIsmi/Имя: KARIMBERDIYEV SHOIMARDON ALIMARDON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 37219`)
    }

    if (text === '1-120-2023-92155US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-92155US\nIsmi/Имя: ABDUVALIYEV SOBIT SOXIBOVICH\nmodel: DAMAS-2\nnavbat/очередь: 44706`)
    }
    
    if (text === '1-120-2023-88070US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-88070US\nIsmi/Имя: BAZAROVA O‘KTAM USMANOVNA\nmodel: DAMAS-2\nnavbat/очередь: 37778`)
    }

    if (text === '1-120-2023-77940US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-77940US\nIsmi/Имя: ERGASHEV ELYOR AZIMJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 34797`)
    }
    
    if (text === '1-120-2023-95403US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95403US\nIsmi/Имя: Madraximov Mirkomil Odil o'g'li\nmodel: DAMAS-2\nnavbat/очередь: 35087`)
    }

    if (text === '1-120-2023-77817US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-77817US\nIsmi/Имя: Низомов Абдумалик Абдулхаевич\nmodel: DAMAS-2\nnavbat/очередь: 35151`)
    }

    if (text === '1-120-2023-80163US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-80163US\nIsmi/Имя: SULTONOV DAVRONJON ABDURAUFOVICH\nmodel: DAMAS-2\nnavbat/очередь: 35602`)
    }

    if (text === '1-120-2023-78643US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-78643US\nIsmi/Имя: DAVLATOV OYBEK RO‘ZIMOVICH\nmodel: DAMAS-2\nnavbat/очередь: 35006`)
    }
    
    if (text === '1-120-2023-88322US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-88322US\nIsmi/Имя: ABDURAXMONOV BAXROM RUSTAMOVICH\nmodel: DAMAS-2\nnavbat/очередь: 1949`)
    }

    if (text === '1-120-2023-95453US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-95453US\nIsmi/Имя: XAYITOV MURODJON MUXAMADJONOVICH\nmodel: DAMAS-2\nnavbat/очередь: 35953`)
    }
    
    if (text === '1-120-2023-77082US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-77082US\nIsmi/Имя: NASIROV MUSOXON MUXAMMADOVICH\nmodel: DAMAS-2\nnavbat/очередь: 2920`)
    }

    if (text === '1-120-2023-79121US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-79121US\nIsmi/Имя: AMINOVA SAIDA MAMASOLIYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 2939`)
    }

    if (text === '1-120-2023-69543US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-69543US\nIsmi/Имя: MARAXIMOVA MAMLAKAT MARUFOVNA\nmodel: DAMAS-2\nnavbat/очередь: 2462`)
    }

    if (text === '1-120-2023-83487US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-83487US\nIsmi/Имя: XAYRULLAYEVA MUKARRAM SAYFULLAYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 2972`)
    }
    
    if (text === '1-120-2023-80460US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-80460US\nIsmi/Имя: SAYDULLAYEV ABRORJON AZIZJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 38876`)
    }

    if (text === '1-120-2023-87856US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-87856US\nIsmi/Имя: POLVONOV ALINODIR MUXIDDINOVICH\nmodel: DAMAS-2\nnavbat/очередь: 3125`)
    }
    
    if (text === '1-120-2023-96816US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-96816US\nIsmi/Имя: JO‘RABOYEVA ZULXUMOR ABDURAXIMOVNA\nmodel: DAMAS-2\nnavbat/очередь: 38112`)
    }

    if (text === '1-120-2023-96189US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-96189US\nIsmi/Имя: XANIFA TASHBAYEVA MAMADALIYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 2378`)
    }

    if (text === '1-120-2023-88361US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-88361US\nIsmi/Имя: XALDAROVA FATIMA XXX\nmodel: DAMAS-2\nnavbat/очередь: 42196`)
    }

    if (text === '1-120-2023-67251US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-67251US\nIsmi/Имя: XOJIMATOV ILXOMJON GULOMJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 38400`)
    }

    if (text === '1-120-2023-86586US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-86586US\nIsmi/Имя: YUNUSOV IXTIYOR ISAKJANOVICH\nmodel: DAMAS-2\nnavbat/очередь: 35831`)
    }

    if (text === '1-120-2023-66900US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-66900US\nIsmi/Имя: QODIROV ZAFARJON BAXTIYOR O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 4298`)
    }

    if (text === '1-120-2023-62906US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-62906US\nIsmi/Имя: OLIMOV TUXTASUN MAXMUDOVICH\nmodel: DAMAS-2\nnavbat/очередь: 2061`)
    }

    if (text === '1-120-2023-69204US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-69204US\nIsmi/Имя: KUZIYEV LUTFULLA ERGASHBOYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 42766`)
    }

    if (text === '1-120-2023-60653US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-60653US\nIsmi/Имя: SHARIPOVA ZIYADABI ORTIKMATOVNA\nmodel: DAMAS-2\nnavbat/очередь: 36928`)
    }

    if (text === '1-120-2023-85328US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-85328US\nIsmi/Имя: JO‘RABAYEV ILYOSBEK ISOKJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 3808`)
    }

    if (text === '1-120-2023-90429US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-90429US\nIsmi/Имя: SHAROPOVA MALIKA EGAMBERDIYEVNA\nmodel: DAMAS-2\nnavbat/очередь: 2565`)
    }

    if (text === '1-120-2023-61426US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-61426US\nIsmi/Имя: ROZIKOV MUZAFFAR MANSURJON O‘G‘LI\nmodel: DAMAS-2\nnavbat/очередь: 3252`)
    }

    if (text === '1-120-2023-86941US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-86941US\nIsmi/Имя: ABDULLAYEVA NODIRA MO‘YDINOVNA\nmodel: DAMAS-2\nnavbat/очередь: 2286`)
    }

    if (text === '1-120-2023-96123US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-96123US\nIsmi/Имя: AZIZOV RAVSHANXON LUTFILLAYEVICH\nmodel: DAMAS-2\nnavbat/очередь: 39711`)
    }

    if (text === '1-120-2023-64377US'){
        return bot.sendMessage(chatId, `kod: 1-120-2023-64377US\nIsmi/Имя: TADJIYEV A’ZAM AKRAMOVICH\nmodel: DAMAS-2\nnavbat/очередь: 4020`)
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




