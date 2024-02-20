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




