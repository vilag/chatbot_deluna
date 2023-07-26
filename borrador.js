const kinder1_1_1 = addKeyword(['1']).
addAnswer(['⌛⌛⌛ Consultando lista de precios para el *"Kinder Citlaltzintli"*...',
    '*Si lo prefiere seleccione otra opción:*',
    '1. Precios',
    '2. Fechas y horarios de venta',
    '3. Seguimiento de un pedido',
    '4. Necesito hacer otra consulta no disponible en el menú',
    '5. Terminar conversación',
    '6. Volver al menu principal'
],null,null,[kinder1_1_1,kinder1_1_2,kinder1_1_3,kinder1_1_4,kinder1_1_5,flowPrincipal])
const kinder1_1_2 = addKeyword(['2']).
addAnswer(['⌛⌛⌛ Consultando *Fechas y horarios de venta*...'])
const kinder1_1_3 = addKeyword(['3']).
addAnswer(['⌛⌛⌛ Por favor ingrese el *folio* que se encuentra en su ticket'])
const kinder1_1_4 = addKeyword(['4']).
addAnswer(['⌛⌛⌛ A la brevedad un asesor se comunicará con usted'])
const kinder1_1_5 = addKeyword(['5']).
addAnswer(['Gracias por comunicarte a *Uniformes De Luna*'])


const kinder1_1 = addKeyword(['1']).addAnswer(
    ['¿Que información desea consultar?',
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

const kinder1 = addKeyword([
    'Citlaltzintli'
]).addAnswer(
    ['¿Usted quiso decir “Kinder Citlaltzintli”?','1. SI','2. NO'],
    null,
    null,
    [kinder1_1]
)

const Kinder = addKeyword(['1']).addAnswer(
    ['Has seleccionado Kínder, por favor ingresa el nombre de la escuela'],
    null,
    null,
    [kinder1]
)

const flowPrincipal = addKeyword(['6','hola', 'Hola', 'buenos dias', 'Buenos dias', 'Buenas noches', 'buenas noches', 'Buenas tardes','buenas tardes'])
    .addAnswer('Hola!!! Gracias por comunicarte a *Uniformes De Luna*. Te recordamos que nuestro horario de atención es de lunes a viernes de 9:00am a 5:00pm.')
    .addAnswer(
        [
            'Por favor escribe el numero de la opción deseada:',
            '1. - Kinder',
            '2. - Primaria',
            '3. - Secundaria',
        ],
        null,
        null,
        [Kinder]
    )