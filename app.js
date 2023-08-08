// 


const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MySQLAdapter = require('@bot-whatsapp/database/mysql')

/**
 * Declaramos las conexiones de MySQL
 */
const MYSQL_DB_HOST = 'srv366.hstgr.io'
const MYSQL_DB_USER = 'u690371019_deluna'
const MYSQL_DB_PASSWORD = '4ZaZ>]qkFOn#'
const MYSQL_DB_NAME = 'u690371019_deluna'
//const MYSQL_DB_PORT = '3306'


const mysql = require('mysql');
const squel = require('squel');

// let conexion = mysql.createConnection({
//     host: 'srv366.hstgr.io',
//     user: 'u690371019_gp',
//     password: '@m?02Db3',
//     database: 'u690371019_gp'
// });

// let horarios = [];
// let hora_ind = {};

// var fecha1;
// var horario1;
// var detalle1;

// var fecha2;
// var horario2;
// var detalle2;

// var fecha3;
// var horario3;
// var detalle3;

// var fecha4;
// var horario4;
// var detalle4;

// var fecha5;
// var horario5;
// var detalle5;

// var fecha6;
// var horario6;
// var detalle6;

// var fecha7;
// var horario7;
// var detalle7;

// var fecha8;
// var horario8;
// var detalle8;

// var fecha9;
// var horario9;
// var detalle9;

// var fecha10;
// var horario10;
// var detalle10;

// var fecha11;
// var horario11;
// var detalle11;


// conexion.connect;

// let consulta = squel.select()
//     .field('idhorario')
//     .field('idescuela')
//     .field('nom_esc')
//     .field('fecha')
//     .field('horario')
//     .field('detalle')
//     .from('horarios_venta');

// console.log('Consulta SQL:', consulta.toString());

// conexion.query(consulta.toString(), function(error, registros, campos){
//     if (error) {
//         throw error;
//     }

//     registros.forEach(function(registro, indice, arreglo){
//         hora_ind.idhorario = registro.idhorario;
//         hora_ind.idescuela = registro.idescuela;
//         hora_ind.nom_esc = registro.nom_esc;
//         hora_ind.fecha = registro.fecha;
//         hora_ind.horario = registro.horario;
//         hora_ind.detalle = registro.detalle;
//         horarios.push(hora_ind);
//     });

//     console.log("Arreglo de horarios");
//     console.log(horarios);

//     for (let index = 0; index < horarios.length; index++) {
//         if (index==0) {
//             fecha1 = horarios[index].fecha;
//             horario1 = horarios[index].horario;
//             detalle1 = horarios[index].detalle;
//         }
//         if (index==1) {
//             fecha2 = horarios[index].fecha;
//             horario2 = horarios[index].horario;
//             detalle2 = horarios[index].detalle;
//         }
//         if (index==2) {
//             fecha3 = horarios[index].fecha;
//             horario3 = horarios[index].horario;
//             detalle3 = horarios[index].detalle;
//         }
//         if (index==3) {
//             fecha4 = horarios[index].fecha;
//             horario4 = horarios[index].horario;
//             detalle4 = horarios[index].detalle;
//         }
//         if (index==4) {
//             fecha5 = horarios[index].fecha;
//             horario5 = horarios[index].horario;
//             detalle5 = horarios[index].detalle;
//         }
//         if (index==5) {
//             fecha6 = horarios[index].fecha;
//             horario6 = horarios[index].horario;
//             detalle6 = horarios[index].detalle;
//         }
//         if (index==6) {
//             fecha7 = horarios[index].fecha;
//             horario7 = horarios[index].horario;
//             detalle7 = horarios[index].detalle;
//         }
//         if (index==7) {
//             fecha8 = horarios[index].fecha;
//             horario8 = horarios[index].horario;
//             detalle8 = horarios[index].detalle;
//         }
//         if (index==8) {
//             fecha9 = horarios[index].fecha;
//             horario9 = horarios[index].horario;
//             detalle9 = horarios[index].detalle;
//         }
//         if (index==9) {
//             fecha10 = horarios[index].fecha;
//             horario10 = horarios[index].horario;
//             detalle10 = horarios[index].detalle;
//         }
//         if (index==10) {
//             fecha11 = horarios[index].fecha;
//             horario11 = horarios[index].horario;
//             detalle11 = horarios[index].detalle;
//         }

        
//     }



        const kinder1_1_1 = addKeyword(['1']).
        addAnswer(['⌛⌛⌛ Consultando lista de precios para el *"Kinder Citlaltzintli"*...'])
        .addAnswer('Lista de precios 1', {
            media: 'https://res.cloudinary.com/ddcszcshl/image/upload/v1690960848/De%20Luna/Citlaltzintli/Citlaltzintli_xi0ecv.jpg',
        })
        .addAnswer('Lista de precios 2', {
            media: 'https://res.cloudinary.com/ddcszcshl/image/upload/v1690960848/De%20Luna/Citlaltzintli/Citlaltzintli_2_nvfeg8.jpg',
        })
        const kinder1_1_2 = addKeyword(['2'])
        // .addAnswer(['⌛⌛⌛ Consultando Fechas y horarios de venta para el *"Kinder Citlaltzintli"*...'])
        .addAnswer(
            ['⌛⌛⌛ Consultando Fechas y horarios de venta para el *"Kinder Citlaltzintli_"*...'],
            { capture: true},
            async (ctx, { flowDynamic, endFlow }) => {               
                nombre = ctx.body
                console.log("Valor capturado");
                console.log(nombre);
                let horarios = [];
                let horarios_a = [];
                let horas_ind = {};
                let conexion = mysql.createConnection({
                    host: 'srv366.hstgr.io',
                    user: 'u690371019_deluna',
                    password: '4ZaZ>]qkFOn#',
                    database: 'u690371019_deluna'
                });
                conexion.connect;
                let consulta_horario = squel.select()
                        .field('iddetalle')
                        .field('idescuela')
                        .field('fecha')
                        .field('hora1')
                        .field('hora2')
                        .field('detalle')
                        .from('detalle_escuelas')
                        .where('idescuela ='+nombre);
                    console.log('Consulta SQL:', consulta_horario.toString());
                    conexion.query(consulta_horario.toString(), function(error, registros_horarios, campos){
                        if (error) {
                            throw error;
                        }
                        registros_horarios.forEach(function(registro_horario, indice, arreglo){
                            horas_ind.fecha = registro_horario.fecha;
                            horas_ind.hora1 = registro_horario.hora1;
                            horas_ind.hora2 = registro_horario.hora2;
                            horas_ind.detalle = registro_horario.detalle;
                            horarios.push(horas_ind);
                        });
                        var valor;
                        for (let index = 0; index < horarios.length; index++) {                        
                                valor = "Fecha: "+horarios[index].fecha+", Horario: "+horarios[index].hora1+" - "+horarios[index].hora2;
                                horarios_a.push((index+1)+" - ");
                                horarios_a.push(valor);
                                horarios_a.push("\n\n");                            
                        }
                        conexion.end();
                        return flowDynamic('Fecha y hora de venta para *Kinder Citlaltzintli*\n\n'+`${horarios_a}`)
                    }) 
            }
        )
        .addAnswer(['Continuamos...'])
        const kinder1_1_3 = addKeyword(['3'])
        .addAnswer(['⌛⌛⌛ ...'])
        // .addAnswer(
        //     ['Por favor ingrese el *folio* que se encuentra en su ticket'],
        //     { capture: true},
    
        //     async (ctx, { flowDynamic, endFlow }) => {
                
        //         nombre = ctx.body
        //         console.log("Valor capturado");
        //         console.log(nombre);

                

        //         let conexion = mysql.createConnection({
        //             host: 'srv366.hstgr.io',
        //             user: 'u690371019_gp',
        //             password: '@m?02Db3',
        //             database: 'u690371019_gp'
        //         });

                

        //         let folios = [];
        //         let folio_ind = {};

        //         conexion.connect;

        //         let consulta_folio = squel.select()
        //                 .field('idhorario')
        //                 .field('idescuela')
        //                 .field('nom_esc')
        //                 .field('fecha')
        //                 .field('horario')
        //                 .field('detalle')
        //                 .from('horarios_venta')
        //                 .where('idhorario = '+nombre);

        //             console.log('Consulta SQL:', consulta_folio.toString());

        //             conexion.query(consulta_folio.toString(), function(error, registros_folio, campos){
        //                 if (error) {
        //                     throw error;
        //                 }

        //                 registros_folio.forEach(function(registro_folio, indice, arreglo){
        //                     folio_ind.idhorario = registro_folio.idhorario;
        //                     folio_ind.detalle = registro_folio.detalle;
        //                     folios.push(folio_ind);
        //                 });

        //                 console.log("numero de folios");
        //                 console.log(folios.length);

        //                 console.log("Arreglo de folios");
        //                 console.log(folios);


        //                 var valor;
        //                 for (let index = 0; index < folios.length; index++) {
        //                     if (folios[index].idhorario==nombre) {
        //                         valor = folios[index].detalle
        //                     }
        //                 }

        //                 conexion.end();

        //                 return flowDynamic(`Estatus: *${valor}*`)

                        

        //             }) 
        //     }
        // )
        .addAnswer(['⌛⌛⌛ Por favor ingrese el *folio* que se encuentra en su ticket'])
        const kinder1_1_4 = addKeyword(['4']).
        addAnswer(['⌛⌛⌛ A la brevedad un asesor se comunicará con usted'])
        const kinder1_1_5 = addKeyword(['5']).
        addAnswer(['Gracias por comunicarte a *Uniformes De Luna*'])






        const kinder2_1_1 = addKeyword(['1']).
        addAnswer(['⌛⌛⌛ Consultando lista de precios para el *Kinder "Adolfo Christlieb Ibarola” (Kínder Urbi T/M)"*...'])
        .addAnswer('Lista de precios 1', {
            media: 'https://res.cloudinary.com/ddcszcshl/image/upload/v1690961298/De%20Luna/Kinder_urbi/Kinder_Urbi_gsuo4p.jpg',
        })
        .addAnswer('Lista de precios 2', {
            media: 'https://res.cloudinary.com/ddcszcshl/image/upload/v1690961298/De%20Luna/Kinder_urbi/Kinder_Urbi_2_nu4arx.jpg',
        })
        const kinder2_1_2 = addKeyword(['2']).
        addAnswer(['⌛⌛⌛ Consultando Fechas y horarios de venta para el *"Kinder Adolfo Christlieb Ibarola” (Kínder Urbi T/M)"*...'])
        const kinder2_1_3 = addKeyword(['3']).
        addAnswer(['⌛⌛⌛ Por favor ingrese el *folio* que se encuentra en su ticket'])
        const kinder2_1_4 = addKeyword(['4']).
        addAnswer(['⌛⌛⌛ A la brevedad un asesor se comunicará con usted'])



        const kinder3_1_1 = addKeyword(['1']).
        addAnswer(['⌛⌛⌛ Consultando lista de precios para el *"Kínder “Gorgonio Cortes Carrasco” (Kínder Urbi T/V)"*...'])
        .addAnswer('Lista de precios 1', {
            media: 'https://res.cloudinary.com/ddcszcshl/image/upload/v1690961298/De%20Luna/Kinder_urbi/Kinder_Urbi_gsuo4p.jpg',
        })
        .addAnswer('Lista de precios 2', {
            media: 'https://res.cloudinary.com/ddcszcshl/image/upload/v1690961298/De%20Luna/Kinder_urbi/Kinder_Urbi_2_nu4arx.jpg',
        })
        const kinder3_1_2 = addKeyword(['2']).
        addAnswer(['⌛⌛⌛ Consultando Fechas y horarios de venta para el *"Kínder “Gorgonio Cortes Carrasco” (Kínder Urbi T/V)"*...'])
        const kinder3_1_3 = addKeyword(['3']).
        addAnswer(['⌛⌛⌛ Por favor ingrese el *folio* que se encuentra en su ticket'])
        const kinder3_1_4 = addKeyword(['4']).
        addAnswer(['⌛⌛⌛ A la brevedad un asesor se comunicará con usted'])



        const kinder4_1_1 = addKeyword(['1']).
        addAnswer(['⌛⌛⌛ Consultando lista de precios para el *"Kínder “José Luis Figueroa” (Kínder Chulavista T/M)"*...'])
        .addAnswer('Lista de precios 1', {
            media: 'https://res.cloudinary.com/ddcszcshl/image/upload/v1690961707/De%20Luna/Chulavista/Kinder_Chulavista_fw6oxc.jpg',
        })
        .addAnswer('Lista de precios 2', {
            media: 'https://res.cloudinary.com/ddcszcshl/image/upload/v1690961707/De%20Luna/Chulavista/Kinder_Chulavista_2_jsmejl.jpg',
        })
        const kinder4_1_2 = addKeyword(['2']).
        addAnswer(['⌛⌛⌛ Consultando Fechas y horarios de venta para el *"Kínder “José Luis Figueroa” (Kínder Chulavista T/M)"*...'])
        const kinder4_1_3 = addKeyword(['3']).
        addAnswer(['⌛⌛⌛ Por favor ingrese el *folio* que se encuentra en su ticket'])
        const kinder4_1_4 = addKeyword(['4']).
        addAnswer(['⌛⌛⌛ A la brevedad un asesor se comunicará con usted'])




        const kinder5_1_1 = addKeyword(['1']).
        addAnswer(['⌛⌛⌛ Consultando lista de precios para el *"Kínder “Francisco Ruiz Sánchez” (Kínder Chulavista T/V)"*...'])
        .addAnswer('Lista de precios 1', {
            media: 'https://res.cloudinary.com/ddcszcshl/image/upload/v1690961707/De%20Luna/Chulavista/Kinder_Chulavista_fw6oxc.jpg',
        })
        .addAnswer('Lista de precios 2', {
            media: 'https://res.cloudinary.com/ddcszcshl/image/upload/v1690961707/De%20Luna/Chulavista/Kinder_Chulavista_2_jsmejl.jpg',
        })
        const kinder5_1_2 = addKeyword(['2']).
        addAnswer(['⌛⌛⌛ Consultando Fechas y horarios de venta para el *"Kínder “Francisco Ruiz Sánchez” (Kínder Chulavista T/V)"*...'])
        const kinder5_1_3 = addKeyword(['3']).
        addAnswer(['⌛⌛⌛ Por favor ingrese el *folio* que se encuentra en su ticket'])
        const kinder5_1_4 = addKeyword(['4']).
        addAnswer(['⌛⌛⌛ A la brevedad un asesor se comunicará con usted'])




        const Primaria1_1_1 = addKeyword(['1']).
        addAnswer(['⌛⌛⌛ Consultando lista de precios para  *Primaria "24 de octubre"*...'])
        .addAnswer('Lista de precios 1', {
            media: 'https://res.cloudinary.com/ddcszcshl/image/upload/v1690962050/De%20Luna/Prim%2024%20de%20octubre/Primaria_Onu_onoem2.jpg',
        })
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
        .addAnswer('Lista de precios 1', {
            media: 'https://res.cloudinary.com/ddcszcshl/image/upload/v1690962232/De%20Luna/Sec%20General%2017/Sec._Gral._17f_xxutoa.jpg',
        })
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
        .addAnswer('Lista de precios 1', {
            media: 'https://res.cloudinary.com/ddcszcshl/image/upload/v1690962348/De%20Luna/Sec%20Gen%20132/Sec._Urbi_132_baqxj5.jpg',
        })
        .addAnswer('Lista de precios 2', {
            media: 'https://res.cloudinary.com/ddcszcshl/image/upload/v1690962348/De%20Luna/Sec%20Gen%20132/Sec._Urbi_132_2_culglr.jpg',
        })
        const Secundaria2_1_2 = addKeyword(['2']).
        addAnswer(['⌛⌛⌛ Consultando Fechas y horarios de venta para *Escuela Secundaria General #132 “Carlos González Peña"*...'])
        const Secundaria2_1_3 = addKeyword(['3']).
        addAnswer(['⌛⌛⌛ Por favor ingrese el *folio* que se encuentra en su ticket'])
        const Secundaria2_1_4 = addKeyword(['4']).
        addAnswer(['⌛⌛⌛ A la brevedad un asesor se comunicará con usted'])




        const Secundaria3_1_1 = addKeyword(['1']).
        addAnswer(['⌛⌛⌛ Consultando lista de precios para *Escuela Secundaria General #64 “Jesús Reyes Heroles”*...'])
        .addAnswer('Lista de precios 1', {
            media: 'https://res.cloudinary.com/ddcszcshl/image/upload/v1690962461/De%20Luna/Sec%20Gen%2064/Sec._Gral._64_y6iglv.jpg',
        })
        const Secundaria3_1_2 = addKeyword(['2']).
        addAnswer(['⌛⌛⌛ Consultando Fechas y horarios de venta para *Escuela Secundaria General #64 “Jesús Reyes Heroles”*...'])
        const Secundaria3_1_3 = addKeyword(['3']).
        addAnswer(['⌛⌛⌛ Por favor ingrese el *folio* que se encuentra en su ticket'])
        const Secundaria3_1_4 = addKeyword(['4']).
        addAnswer(['⌛⌛⌛ A la brevedad un asesor se comunicará con usted'])




        const Secundaria4_1_1 = addKeyword(['1']).
        addAnswer(['⌛⌛⌛ Consultando lista de precios para *Escuela Secundaria Mixta “Foránea #10”*...'])
        .addAnswer('Lista de precios 1', {
            media: 'https://res.cloudinary.com/ddcszcshl/image/upload/v1690962554/De%20Luna/Sec%20Foranea%2010/Sec._Foranea_10_icv3am.jpg',
        })
        .addAnswer('Lista de precios 2', {
            media: 'https://res.cloudinary.com/ddcszcshl/image/upload/v1690962554/De%20Luna/Sec%20Foranea%2010/Sec._Foranea_10_2_zknvdh.jpg',
        })
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








        const flowPrincipal = addKeyword(['hola', 'Hola', 'buenos dias', 'Buenos dias', 'Buenas noches', 'buenas noches', 'Buenas tardes','buenas tardes', 'Menu', 'Menú','menu','menú'])
            .addAnswer('Hola!!! Gracias por comunicarte a *Uniformes De Luna*. Te recordamos que nuestro horario de atención es de lunes a viernes de 9:00am a 5:00pm.')
            // .addAnswer('Por favor escribe el numero de la opción deseada:',{capture:true},(ctx, {fallBack}) => {
            //     if (!ctx.body.includes('1')) {
            //         if (!ctx.body.includes('2')) {
            //             return fallBack()
            //         } 
            //     }
                
                
            //     console.log('Mensaje entrante: ',ctx.body)
            // })
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
 

//     conexion.end();
// })

 
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
