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
const kinder1_1_1 = addKeyword(['1']).
addAnswer(['⌛⌛⌛ Consultando lista de precios para el *"Kinder Citlaltzintli"*...'])
const kinder1_1_2 = addKeyword(['2']).
addAnswer(['⌛⌛⌛ Consultando Fechas y horarios de venta para el *"Kinder Citlaltzintli"*...'])
const kinder1_1_3 = addKeyword(['3']).
addAnswer(['⌛⌛⌛ Por favor ingrese el *folio* que se encuentra en su ticket'])
const kinder1_1_4 = addKeyword(['4']).
addAnswer(['⌛⌛⌛ A la brevedad un asesor se comunicará con usted'])
const kinder1_1_5 = addKeyword(['5']).
addAnswer(['Gracias por comunicarte a *Uniformes De Luna*'])

const kinder2_1_1 = addKeyword(['1']).
addAnswer(['⌛⌛⌛ Consultando lista de precios para el *Kinder "Adolfo Christlieb Ibarola” (Kínder Urbi T/M)"*...'])
const kinder2_1_2 = addKeyword(['2']).
addAnswer(['⌛⌛⌛ Consultando Fechas y horarios de venta para el *"Kinder Adolfo Christlieb Ibarola” (Kínder Urbi T/M)"*...'])
const kinder2_1_3 = addKeyword(['3']).
addAnswer(['⌛⌛⌛ Por favor ingrese el *folio* que se encuentra en su ticket'])
const kinder2_1_4 = addKeyword(['4']).
addAnswer(['⌛⌛⌛ A la brevedad un asesor se comunicará con usted'])

const kinder3_1_1 = addKeyword(['1']).
addAnswer(['⌛⌛⌛ Consultando lista de precios para el *"Kínder “Gorgonio Cortes Carrasco” (Kínder Urbi T/V)"*...'])
const kinder3_1_2 = addKeyword(['2']).
addAnswer(['⌛⌛⌛ Consultando Fechas y horarios de venta para el *"Kínder “Gorgonio Cortes Carrasco” (Kínder Urbi T/V)"*...'])
const kinder3_1_3 = addKeyword(['3']).
addAnswer(['⌛⌛⌛ Por favor ingrese el *folio* que se encuentra en su ticket'])
const kinder3_1_4 = addKeyword(['4']).
addAnswer(['⌛⌛⌛ A la brevedad un asesor se comunicará con usted'])

const kinder4_1_1 = addKeyword(['1']).
addAnswer(['⌛⌛⌛ Consultando lista de precios para el *"Kínder “José Luis Figueroa” (Kínder Chulavista T/M)"*...'])
const kinder4_1_2 = addKeyword(['2']).
addAnswer(['⌛⌛⌛ Consultando Fechas y horarios de venta para el *"Kínder “José Luis Figueroa” (Kínder Chulavista T/M)"*...'])
const kinder4_1_3 = addKeyword(['3']).
addAnswer(['⌛⌛⌛ Por favor ingrese el *folio* que se encuentra en su ticket'])
const kinder4_1_4 = addKeyword(['4']).
addAnswer(['⌛⌛⌛ A la brevedad un asesor se comunicará con usted'])

const kinder5_1_1 = addKeyword(['1']).
addAnswer(['⌛⌛⌛ Consultando lista de precios para el *"Kínder “Francisco Ruiz Sánchez” (Kínder Chulavista T/V)"*...'])
const kinder5_1_2 = addKeyword(['2']).
addAnswer(['⌛⌛⌛ Consultando Fechas y horarios de venta para el *"Kínder “Francisco Ruiz Sánchez” (Kínder Chulavista T/V)"*...'])
const kinder5_1_3 = addKeyword(['3']).
addAnswer(['⌛⌛⌛ Por favor ingrese el *folio* que se encuentra en su ticket'])
const kinder5_1_4 = addKeyword(['4']).
addAnswer(['⌛⌛⌛ A la brevedad un asesor se comunicará con usted'])

const Primaria1_1_1 = addKeyword(['1']).
addAnswer(['⌛⌛⌛ Consultando lista de precios para  *Primaria "24 de octubre"*...'])
const Primaria1_1_2 = addKeyword(['2']).
addAnswer(['⌛⌛⌛ Consultando Fechas y horarios de venta para *Primaria "24 de octubre"*...'])
const Primaria1_1_3 = addKeyword(['3']).
addAnswer(['⌛⌛⌛ Por favor ingrese el *folio* que se encuentra en su ticket'])
const Primaria1_1_4 = addKeyword(['4']).
addAnswer(['⌛⌛⌛ A la brevedad un asesor se comunicará con usted'])
const Primaria1_1_5 = addKeyword(['5']).
addAnswer(['Gracias por comunicarte a *Uniformes De Luna*'])

const Primaria2_1_1 = addKeyword(['1']).
addAnswer(['⌛⌛⌛ Consultando lista de precios para *Primaria "Amado Nervo"*...'])
const Primaria2_1_2 = addKeyword(['2']).
addAnswer(['⌛⌛⌛ Consultando Fechas y horarios de venta para *Primaria "Amado Nervo"*...'])
const Primaria2_1_3 = addKeyword(['3']).
addAnswer(['⌛⌛⌛ Por favor ingrese el *folio* que se encuentra en su ticket'])
const Primaria2_1_4 = addKeyword(['4']).
addAnswer(['⌛⌛⌛ A la brevedad un asesor se comunicará con usted'])

const Secundaria1_1_1 = addKeyword(['1']).
addAnswer(['⌛⌛⌛ Consultando lista de precios para  *Escuela Secundaria General #17 "Jose Antonio Torres"*...'])
const Secundaria1_1_2 = addKeyword(['2']).
addAnswer(['⌛⌛⌛ Consultando Fechas y horarios de venta para *Escuela Secundaria General #17 "Jose Antonio Torres"*...'])
const Secundaria1_1_3 = addKeyword(['3']).
addAnswer(['⌛⌛⌛ Por favor ingrese el *folio* que se encuentra en su ticket'])
const Secundaria1_1_4 = addKeyword(['4']).
addAnswer(['⌛⌛⌛ A la brevedad un asesor se comunicará con usted'])
const Secundaria1_1_5 = addKeyword(['5']).
addAnswer(['Gracias por comunicarte a *Uniformes De Luna*'])

const Secundaria2_1_1 = addKeyword(['1']).
addAnswer(['⌛⌛⌛ Consultando lista de precios para *Escuela Secundaria General #132 “Carlos González Peña"*...'])
const Secundaria2_1_2 = addKeyword(['2']).
addAnswer(['⌛⌛⌛ Consultando Fechas y horarios de venta para *Escuela Secundaria General #132 “Carlos González Peña"*...'])
const Secundaria2_1_3 = addKeyword(['3']).
addAnswer(['⌛⌛⌛ Por favor ingrese el *folio* que se encuentra en su ticket'])
const Secundaria2_1_4 = addKeyword(['4']).
addAnswer(['⌛⌛⌛ A la brevedad un asesor se comunicará con usted'])

const Secundaria3_1_1 = addKeyword(['1']).
addAnswer(['⌛⌛⌛ Consultando lista de precios para *Escuela Secundaria General #64 “Jesús Reyes Heroles”*...'])
const Secundaria3_1_2 = addKeyword(['2']).
addAnswer(['⌛⌛⌛ Consultando Fechas y horarios de venta para *Escuela Secundaria General #64 “Jesús Reyes Heroles”*...'])
const Secundaria3_1_3 = addKeyword(['3']).
addAnswer(['⌛⌛⌛ Por favor ingrese el *folio* que se encuentra en su ticket'])
const Secundaria3_1_4 = addKeyword(['4']).
addAnswer(['⌛⌛⌛ A la brevedad un asesor se comunicará con usted'])

const Secundaria4_1_1 = addKeyword(['1']).
addAnswer(['⌛⌛⌛ Consultando lista de precios para *Escuela Secundaria Mixta “Foránea #10”*...'])
const Secundaria4_1_2 = addKeyword(['2']).
addAnswer(['⌛⌛⌛ Consultando Fechas y horarios de venta para *Escuela Secundaria Mixta “Foránea #10”*...'])
const Secundaria4_1_3 = addKeyword(['3']).
addAnswer(['⌛⌛⌛ Por favor ingrese el *folio* que se encuentra en su ticket'])
const Secundaria4_1_4 = addKeyword(['4']).
addAnswer(['⌛⌛⌛ A la brevedad un asesor se comunicará con usted'])








const kinder1_1 = addKeyword(['1'])
.addAnswer(
    ['*“Kinder Citlaltzintli”*','¿Que información desea consultar?','',
    '1. Precios',
    '2. Fechas y horarios de venta',
    '3. Seguimiento de un pedido',
    '4. Necesito hacer otra consulta no disponible en el menú',
    '5. Terminar conversación'
    ],
    null,
    null,
    [kinder1_1_1,kinder1_1_2,kinder1_1_3,kinder1_1_4,kinder1_1_5]
)
const kinder1_2 = addKeyword(['2']).
addAnswer(['Gracias por comunicarte a *Uniformes De Luna*'])

const kinder2_1 = addKeyword(['1'])
.addAnswer(
    ['*Kínder “Adolfo Christlieb Ibarola” (Kínder Urbi T/M)*','¿Que información desea consultar?','',
    '1. Precios',
    '2. Fechas y horarios de venta',
    '3. Seguimiento de un pedido',
    '4. Necesito hacer otra consulta no disponible en el menú',
    '5. Terminar conversación'
    ],
    null,
    null,
    [kinder2_1_1,kinder2_1_2,kinder2_1_3,kinder2_1_4,kinder1_1_5]
)
// const kinder2_2 = addKeyword(['2']).
// addAnswer(['Gracias por comunicarte a *Uniformes De Luna*'])

const kinder3_1 = addKeyword(['1'])
.addAnswer(
    ['*Kínder “Gorgonio Cortes Carrasco” (Kínder Urbi T/V)*','¿Que información desea consultar?','',
    '1. Precios',
    '2. Fechas y horarios de venta',
    '3. Seguimiento de un pedido',
    '4. Necesito hacer otra consulta no disponible en el menú',
    '5. Terminar conversación'
    ],
    null,
    null,
    [kinder3_1_1,kinder3_1_2,kinder3_1_3,kinder3_1_4,kinder1_1_5]
)
// const kinder3_2 = addKeyword(['2']).
// addAnswer(['Gracias por comunicarte a *Uniformes De Luna*'])

const kinder4_1 = addKeyword(['1'])
.addAnswer(
    ['*Kínder “José Luis Figueroa” (Kínder Chulavista T/M)*','¿Que información desea consultar?','',
    '1. Precios',
    '2. Fechas y horarios de venta',
    '3. Seguimiento de un pedido',
    '4. Necesito hacer otra consulta no disponible en el menú',
    '5. Terminar conversación'
    ],
    null,
    null,
    [kinder4_1_1,kinder4_1_2,kinder4_1_3,kinder4_1_4,kinder1_1_5]
)

const kinder5_1 = addKeyword(['1'])
.addAnswer(
    ['*Kínder “Francisco Ruiz Sánchez” (Kínder Chulavista T/V)*','¿Que información desea consultar?','',
    '1. Precios',
    '2. Fechas y horarios de venta',
    '3. Seguimiento de un pedido',
    '4. Necesito hacer otra consulta no disponible en el menú',
    '5. Terminar conversación'
    ],
    null,
    null,
    [kinder5_1_1,kinder5_1_2,kinder5_1_3,kinder5_1_4,kinder1_1_5]
)

const Primaria1_1 = addKeyword(['1'])
.addAnswer(
    ['*Primaria “24 de octubre”*','¿Que información desea consultar?','',
    '1. Precios',
    '2. Fechas y horarios de venta',
    '3. Seguimiento de un pedido',
    '4. Necesito hacer otra consulta no disponible en el menú',
    '5. Terminar conversación'
    ],
    null,
    null,
    [Primaria1_1_1,Primaria1_1_2,Primaria1_1_3,Primaria1_1_4,Primaria1_1_5]
)
const Primaria1_2 = addKeyword(['2']).
addAnswer(['Gracias por comunicarte a *Uniformes De Luna*'])

const Primaria2_1 = addKeyword(['1'])
.addAnswer(
    ['*Primaria “Amado Nervo”*','¿Que información desea consultar?','',
    '1. Precios',
    '2. Fechas y horarios de venta',
    '3. Seguimiento de un pedido',
    '4. Necesito hacer otra consulta no disponible en el menú',
    '5. Terminar conversación'
    ],
    null,
    null,
    [Primaria2_1_1,Primaria2_1_2,Primaria2_1_3,Primaria2_1_4,Primaria1_1_5]
)

const Secundaria1_1 = addKeyword(['1'])
.addAnswer(
    ['*Escuela Secundaria General #17 "Jose Antonio Torres"*','¿Que información desea consultar?','',
    '1. Precios',
    '2. Fechas y horarios de venta',
    '3. Seguimiento de un pedido',
    '4. Necesito hacer otra consulta no disponible en el menú',
    '5. Terminar conversación'
    ],
    null,
    null,
    [Secundaria1_1_1,Secundaria1_1_2,Secundaria1_1_3,Secundaria1_1_4,Secundaria1_1_5]
)
const Secundaria1_2 = addKeyword(['2']).
addAnswer(['Gracias por comunicarte a *Uniformes De Luna*'])

const Secundaria2_1 = addKeyword(['1'])
.addAnswer(
    ['*Escuela Secundaria General #132 “Carlos González Peña"*','¿Que información desea consultar?','',
    '1. Precios',
    '2. Fechas y horarios de venta',
    '3. Seguimiento de un pedido',
    '4. Necesito hacer otra consulta no disponible en el menú',
    '5. Terminar conversación'
    ],
    null,
    null,
    [Secundaria2_1_1,Secundaria2_1_2,Secundaria2_1_3,Secundaria2_1_4,Secundaria1_1_5]
)

const Secundaria3_1 = addKeyword(['1'])
.addAnswer(
    ['*Escuela Secundaria General #64 “Jesús Reyes Heroles”*','¿Que información desea consultar?','',
    '1. Precios',
    '2. Fechas y horarios de venta',
    '3. Seguimiento de un pedido',
    '4. Necesito hacer otra consulta no disponible en el menú',
    '5. Terminar conversación'
    ],
    null,
    null,
    [Secundaria3_1_1,Secundaria3_1_2,Secundaria3_1_3,Secundaria3_1_4,Secundaria1_1_5]
)

const Secundaria4_1 = addKeyword(['1'])
.addAnswer(
    ['*Escuela Secundaria Mixta “Foránea #10”*','¿Que información desea consultar?','',
    '1. Precios',
    '2. Fechas y horarios de venta',
    '3. Seguimiento de un pedido',
    '4. Necesito hacer otra consulta no disponible en el menú',
    '5. Terminar conversación'
    ],
    null,
    null,
    [Secundaria4_1_1,Secundaria4_1_2,Secundaria4_1_3,Secundaria4_1_4,Secundaria1_1_5]
)











const kinder1 = addKeyword(['Citlaltzintli'])
.addAnswer(
    ['¿Usted quiso decir “Kinder Citlaltzintli”?','','*1.* Si','*2.* No'],
    null,
    null,
    [kinder1_1,kinder1_2]
)
const kinder2 = addKeyword([
    'Adolfo Christlieb Ibarola',
    'Adolfo Christlieb',
    'Christlieb Ibarola',
    'Christlieb',
    'Ibarola'
    ])
.addAnswer(
    ['¿Usted quiso decir *Kínder “Adolfo Christlieb Ibarola” (Kínder Urbi T/M)*?','','*1.* Si','*2.* No'],
    null,
    null,
    [kinder2_1,kinder1_2]
)
const kinder3 = addKeyword([
    'Gorgonio Cortes Carrasco',
    'Gorgonio Cortés Carrasco',
    'Gorgonio Cortés',
    'Cortés Carrasco',
    'Gorgonio'
    ])
.addAnswer(
    ['¿Usted quiso decir *Kínder “Gorgonio Cortes Carrasco” (Kínder Urbi T/V)*?','','*1.* Si','*2.* No'],
    null,
    null,
    [kinder3_1,kinder1_2]
)

const kinder4 = addKeyword([
    'José Luis Figueroa',
    'Jose Luis Figueroa',
    'jose luis figueroa',
    'Jose Luis',
    'José Luis',
    'Luis Figueroa'
    ])
.addAnswer(
    ['¿Usted quiso decir *Kínder “José Luis Figueroa” (Kínder Chulavista T/M)*?','','*1.* Si','*2.* No'],
    null,
    null,
    [kinder4_1,kinder1_2]
)

const kinder5 = addKeyword([
    'Francisco Ruiz Sánchez',
    'Francisco Ruiz Sanchez',
    'Francisco Ruiz',
    'Ruiz Sanchez',
    'Ruiz Sánchez'
    ])
.addAnswer(
    ['¿Usted quiso decir *Kínder “Francisco Ruiz Sánchez” (Kínder Chulavista T/V)*?','','*1.* Si','*2.* No'],
    null,
    null,
    [kinder5_1,kinder1_2]
)

const Primaria1 = addKeyword([
    '24 de octubre'
    ])
.addAnswer(
    ['¿Usted quiso decir *Primaria “24 de octubre”*?','','*1.* Si','*2.* No'],
    null,
    null,
    [Primaria1_1,Primaria1_2]
)

const Primaria2 = addKeyword([
    'Amado Nervo',
    'Amado nervo',
    'amado nervo',
    'Amado',
    'Nervo'
    ])
.addAnswer(
    ['¿Usted quiso decir *Primaria “Amado Nervo”*?','','*1.* Si','*2.* No'],
    null,
    null,
    [Primaria2_1,Primaria1_2]
)

const Secundaria1 = addKeyword([
    'Escuela Secundaria General #17 "Jose Antonio Torres"',
    'Escuela Secundaria General 17 Jose Antonio Torres',
    'Secundaria General 17 Jose Antonio Torres',
    'General 17 Jose Antonio Torres',
    'General 17',
    'Jose Antonio Torres',
    '17',
    'Jose Antonio'
    ])
.addAnswer(
    ['¿Usted quiso decir *Escuela Secundaria General #17 "Jose Antonio Torres"*?','','*1.* Si','*2.* No'],
    null,
    null,
    [Secundaria1_1,Secundaria1_2]
)

const Secundaria2 = addKeyword([
    'Escuela Secundaria General #132 “Carlos González Peña"',
    'Escuela Secundaria General 132 Carlos González Peña',
    'Secundaria General 132 Carlos González Peña',
    'General 132 Carlos González Peña',
    'General 132',
    'Carlos González Peña',
    'Carlos Gonzalez Peña',
    '132',
    'Carlos González',
    'Carlos Gonzalez'
    ])
.addAnswer(
    ['¿Usted quiso decir *Escuela Secundaria General #132 “Carlos González Peña"*?','','*1.* Si','*2.* No'],
    null,
    null,
    [Secundaria2_1,Secundaria1_2]
)

const Secundaria3 = addKeyword([
    'Escuela Secundaria General #64 “Jesús Reyes Heroles”',
    'Escuela Secundaria General 64 Jesús Reyes Heroles',
    'Secundaria General 64 Jesús Reyes Heroles',
    'Secundaria General 64 Jesus Reyes Heroles',
    'General 64 Jesus Reyes Heroles',
    'General 64 Jesús Reyes Heroles',
    'Jesús Reyes Heroles',
    'Jesus Reyes Heroles',
    'General 64',
    '64'
    ])
.addAnswer(
    ['¿Usted quiso decir *Escuela Secundaria General #64 “Jesús Reyes Heroles”*?','','*1.* Si','*2.* No'],
    null,
    null,
    [Secundaria3_1,Secundaria1_2]
)

const Secundaria4 = addKeyword([
    'Escuela Secundaria Mixta “Foránea #10”',
    'Escuela Secundaria Mixta Foránea 10',
    'Escuela Secundaria Mixta Foranea 10',
    'Secundaria Mixta Foranea 10',
    'Secundaria Mixta Foránea 10',
    'Secundaria Mixta',
    'Foránea 10',
    'Foranea 10'
    ])
.addAnswer(
    ['¿Usted quiso decir *Escuela Secundaria Mixta “Foránea #10”*?','','*1.* Si','*2.* No'],
    null,
    null,
    [Secundaria4_1,Secundaria1_2]
)













const Kinder = addKeyword(['1'])
.addAnswer(
    ['Has seleccionado *Kínder*, por favor ingresa el nombre de la escuela...'],
    null,
    null,
    [kinder1,kinder2,kinder3,kinder4,kinder5]
)

const Primaria = addKeyword(['2'])
.addAnswer(
    ['Has seleccionado *Primaria*, por favor ingresa el nombre de la escuela...'],
    null,
    null,
    [Primaria1,Primaria2]
)

const Secundaria = addKeyword(['3'])
.addAnswer(
    ['Has seleccionado *Secundaria*, por favor ingresa el nombre o numero de la escuela...'],
    null,
    null,
    [Secundaria1,Secundaria2,Secundaria3,Secundaria4]
)










const flowPrincipal = addKeyword(['hola', 'Hola', 'buenos dias', 'Buenos dias', 'Buenas noches', 'buenas noches', 'Buenas tardes','buenas tardes'])
    .addAnswer('Hola!!! Gracias por comunicarte a *Uniformes De Luna*. Te recordamos que nuestro horario de atención es de lunes a viernes de 9:00am a 5:00pm.')
    .addAnswer('Por favor escribe el numero de la opción deseada:',{capture:true},(ctx, {fallBack}) => {
        if (!ctx.body.includes(['@','?','}'])) {
            return fallBack()
        }
        console.log('Mensaje entrante: ',ctx.body)
    })
    .addAnswer(
        [
            'Por favor escribe el numero de la opción deseada:',
            '',
            '*1.* - Kinder',
            '*2.* - Primaria',
            '*3.* - Secundaria'
        ],
        null,
        null,
        [Kinder,Primaria,Secundaria]
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