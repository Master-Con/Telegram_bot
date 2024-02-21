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




