// 


const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MySQLAdapter = require('@bot-whatsapp/database/mysql')

/**
 * Declaramos las conexiones de MySQL
 */
const MYSQL_DB_HOST = 'srv366.hstgr.io'
const MYSQL_DB_USER = 'u690371019_gp'
const MYSQL_DB_PASSWORD = '@m?02Db3'
const MYSQL_DB_NAME = 'u690371019_gp'
//const MYSQL_DB_PORT = '3306'

/**
 * Aqui declaramos los flujos hijos, los flujos se declaran de atras para adelante, es decir que si tienes un flujo de este tipo:
 *
 *          Menu Principal
 *           - SubMenu 1
 *             - Submenu 1.1
 *           - Submenu 2
 *             - Submenu 2.1
 *
 * Primero declaras los submenus 1.1 y 2.1, luego el 1 y 2 y al final el principal.
 */

const flowSecundario = addKeyword(['a','b','c','d','e','f','g','h','i','j','k']).addAnswer(['📄 Aquí tenemos el flujo secundario'])

const flowSecundarioKinder = addKeyword(['kinder','Citlaltzintli','Adolfo Christlieb Ibarola','Gorgonio Cortes Carrasco','Jose Luis Figueroa','Francisco Ruiz Sánchez']).addAnswer(['Espere por favor, consultando Kinder...'])
const flowSecundarioPrimaria = addKeyword(['24 de octubre', 'Amado Nervo']).addAnswer(['Espere por favor. consultando Primaria...'])
const flowSecundarioSecundaria = addKeyword(['José Antonio Torres', 'Carlos González Peña','Jesús Reyes Heroles','']).addAnswer(['Espere por favor. consultando Secundaria...'])

// const flowDocs = addKeyword(['doc', 'documentacion', 'documentación']).addAnswer(
//     [
//         '📄 Aquí encontras las documentación recuerda que puedes mejorarla',
//         'https://bot-whatsapp.netlify.app/',
//         '\n*2* Para siguiente paso.',
//     ],
//     null,
//     null,
//     [flowSecundario]
// )

// const flowTuto = addKeyword(['tutorial', 'tuto']).addAnswer(
//     [
//         '🙌 Aquí encontras un ejemplo rapido',
//         'https://bot-whatsapp.netlify.app/docs/example/',
//         '\n*2* Para siguiente paso.',
//     ],
//     null,
//     null,
//     [flowSecundario]
// )

// const flowGracias = addKeyword(['gracias', 'grac']).addAnswer(
//     [
//         '🚀 Puedes aportar tu granito de arena a este proyecto',
//         '[*opencollective*] https://opencollective.com/bot-whatsapp',
//         '[*buymeacoffee*] https://www.buymeacoffee.com/leifermendez',
//         '[*patreon*] https://www.patreon.com/leifermendez',
//         '\n*2* Para siguiente paso.',
//     ],
//     null,
//     null,
//     [flowSecundario]
// )

// const flowDiscord = addKeyword(['discord']).addAnswer(
//     ['🤪 Únete al discord', 'https://link.codigoencasa.com/DISCORD', '\n*2* Para siguiente paso.'],
//     null,
//     null,
//     [flowSecundario]
// )

const flowSecundaria = addKeyword(['3']).addAnswer(
    ['Por favor escribe el nombre o numero de tu Secundaria'],
    null,
    null,
    [flowSecundarioSecundaria]
)

const flowPrimaria = addKeyword(['2']).addAnswer(
    ['Por favor escribe el nombre o numero de tu Primaria'],
    null,
    null,
    [flowSecundarioPrimaria]
)

const flowKinder = addKeyword(['1']).addAnswer(
    ['Por favor escribe el nombre o numero de tu Kinder'],
    null,
    null,
    [flowSecundarioKinder]
)

const flowPrincipal = addKeyword(['hola', 'Buenos dias'])
    .addAnswer('Bienvenid@ a *Uniformes De Luna*')
    .addAnswer(
        [
            'Por favor escribe el numero de tu escuela:',
            '👉 *1* - Kinder',
            '👉 *2* - Primaria',
            '👉 *3* - Secundaria',
        ],
        null,
        null,
        [flowSecundaria, flowPrimaria, flowKinder]
    )

const main = async () => {
    const adapterDB = new MySQLAdapter({
        host: MYSQL_DB_HOST,
        user: MYSQL_DB_USER,
        database: MYSQL_DB_NAME,
        password: MYSQL_DB_PASSWORD
        //port: MYSQL_DB_PORT,
    })
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)
    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })
    QRPortalWeb()
}

main()