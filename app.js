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



        const kinder1_1_1 = addKeyword(['1']).
        addAnswer(['⌛⌛⌛ Consultando lista de precios para el *"Kinder Citlaltzintli"*...'])
        .addAnswer('Lista de precios 1', {
            media: 'https://res.cloudinary.com/ddcszcshl/image/upload/v1690960848/De%20Luna/Citlaltzintli/Citlaltzintli_xi0ecv.jpg',
        })
        .addAnswer('Lista de precios 2', {
            media: 'https://res.cloudinary.com/ddcszcshl/image/upload/v1690960848/De%20Luna/Citlaltzintli/Citlaltzintli_2_nvfeg8.jpg',
        })
        const kinder1_1_2 = addKeyword(['2'])
        .addAnswer(
            ['Fecha y hora de venta para *Kinder Citlaltzintli*'],
            { capture: false},
            async (ctx, { flowDynamic, endFlow }) => {               
                nombre = ctx.body
                console.log("Valor capturado");
                console.log(nombre);

                    let horarios = [];
                    let horarios_a = [];
                    let horas_ind = {};
                    var idescuela = 1;
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
                        .where('idescuela ='+idescuela);
                    console.log('Consulta SQL:', consulta_horario.toString());
                    conexion.query(consulta_horario.toString(), function(error, registros_horarios, campos){
                        if (error) {
                            throw error;
                        }  
                        registros_horarios.forEach(function(registro_horario, indice, arreglo){
                            console.log("Registro horario");
                            console.log(registro_horario);
                            horas_ind.fecha = registro_horario.fecha;
                            horas_ind.hora1 = registro_horario.hora1;
                            horas_ind.hora2 = registro_horario.hora2;
                            horas_ind.detalle = registro_horario.detalle;
                            horarios.push(horas_ind);
                        });
                        var valor;
                        for (let index = 0; index < horarios.length; index++) {                      
                                valor = "Fecha: *"+horarios[index].fecha+"*\nHorario: *"+horarios[index].hora1+" - "+horarios[index].hora2+"*\n\nNota: *"+horarios[index].detalle+"*";
                                horarios_a.push(valor);                            
                        }
                        conexion.end();
                        console.log("Array de horarios");
                        console.log(horarios_a);
                        return flowDynamic(`${horarios_a}\n\n\n¿Puedo ayudarte con algo más?\n\nEscribe *Menu* para regresar al Menú principal`)
                    }) 
            }
        )

        const kinder1_1_3 = addKeyword(['3'])
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
        const kinder2_1_2 = addKeyword(['2'])
        // addAnswer(['⌛⌛⌛ Consultando Fechas y horarios de venta para el *Kinder "Adolfo Christlieb Ibarola” (Kínder Urbi T/M)*...'])
        .addAnswer(
            ['Fecha y hora de venta para *Kinder "Adolfo Christlieb Ibarola” (Kínder Urbi T/M)*'],
            { capture: false},
            async (ctx, { flowDynamic, endFlow }) => {               
                nombre = ctx.body
                console.log("Valor capturado");
                console.log(nombre);

                    let horarios = [];
                    let horarios_a = [];
                    let horas_ind = {};
                    var idescuela = 2;
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
                        .where('idescuela ='+idescuela);
                    console.log('Consulta SQL:', consulta_horario.toString());
                    conexion.query(consulta_horario.toString(), function(error, registros_horarios, campos){
                        if (error) {
                            throw error;
                        }  
                        registros_horarios.forEach(function(registro_horario, indice, arreglo){
                            console.log("Registro horario");
                            console.log(registro_horario);
                            horas_ind.fecha = registro_horario.fecha;
                            horas_ind.hora1 = registro_horario.hora1;
                            horas_ind.hora2 = registro_horario.hora2;
                            horas_ind.detalle = registro_horario.detalle;
                            horarios.push(horas_ind);
                        });
                        var valor;
                        for (let index = 0; index < horarios.length; index++) {                      
                                valor = "Fecha: *"+horarios[index].fecha+"*\nHorario: *"+horarios[index].hora1+" - "+horarios[index].hora2+"*\n\nNota: *"+horarios[index].detalle+"*";
                                horarios_a.push(valor);                            
                        }
                        conexion.end();
                        console.log("Array de horarios");
                        console.log(horarios_a);
                        return flowDynamic(`${horarios_a}\n\n\n¿Puedo ayudarte con algo más?\n\nEscribe *Menu* para regresar al Menú principal`)
                    }) 
            }
        )
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
        const kinder3_1_2 = addKeyword(['2'])
        // addAnswer(['⌛⌛⌛ Consultando Fechas y horarios de venta para el *"Kínder “Gorgonio Cortes Carrasco” (Kínder Urbi T/V)"*...'])
        .addAnswer(
            ['Fecha y hora de venta para *Kínder “Gorgonio Cortes Carrasco” (Kínder Urbi T/V)*'],
            { capture: false},
            async (ctx, { flowDynamic, endFlow }) => {               
                nombre = ctx.body
                console.log("Valor capturado");
                console.log(nombre);

                    let horarios = [];
                    let horarios_a = [];
                    let horas_ind = {};
                    var idescuela = 3;
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
                        .where('idescuela ='+idescuela);
                    console.log('Consulta SQL:', consulta_horario.toString());
                    conexion.query(consulta_horario.toString(), function(error, registros_horarios, campos){
                        if (error) {
                            throw error;
                        }  
                        registros_horarios.forEach(function(registro_horario, indice, arreglo){
                            console.log("Registro horario");
                            console.log(registro_horario);
                            horas_ind.fecha = registro_horario.fecha;
                            horas_ind.hora1 = registro_horario.hora1;
                            horas_ind.hora2 = registro_horario.hora2;
                            horas_ind.detalle = registro_horario.detalle;
                            horarios.push(horas_ind);
                        });
                        var valor;
                        for (let index = 0; index < horarios.length; index++) {                      
                                valor = "Fecha: *"+horarios[index].fecha+"*\nHorario: *"+horarios[index].hora1+" - "+horarios[index].hora2+"*\n\nNota: *"+horarios[index].detalle+"*";
                                horarios_a.push(valor);                            
                        }
                        conexion.end();
                        console.log("Array de horarios");
                        console.log(horarios_a);
                        return flowDynamic(`${horarios_a}\n\n\n¿Puedo ayudarte con algo más?\n\nEscribe *Menu* para regresar al Menú principal`)
                    }) 
            }
        )
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
        const kinder4_1_2 = addKeyword(['2'])
        // addAnswer(['⌛⌛⌛ Consultando Fechas y horarios de venta para el *"Kínder “José Luis Figueroa” (Kínder Chulavista T/M)"*...'])
        .addAnswer(
            ['Fecha y hora de venta para *Kínder “José Luis Figueroa” (Kínder Chulavista T/M)*'],
            { capture: false},
            async (ctx, { flowDynamic, endFlow }) => {               
                nombre = ctx.body
                console.log("Valor capturado");
                console.log(nombre);

                    let horarios = [];
                    let horarios_a = [];
                    let horas_ind = {};
                    var idescuela = 4;
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
                        .where('idescuela ='+idescuela);
                    console.log('Consulta SQL:', consulta_horario.toString());
                    conexion.query(consulta_horario.toString(), function(error, registros_horarios, campos){
                        if (error) {
                            throw error;
                        }  
                        registros_horarios.forEach(function(registro_horario, indice, arreglo){
                            console.log("Registro horario");
                            console.log(registro_horario);
                            horas_ind.fecha = registro_horario.fecha;
                            horas_ind.hora1 = registro_horario.hora1;
                            horas_ind.hora2 = registro_horario.hora2;
                            horas_ind.detalle = registro_horario.detalle;
                            horarios.push(horas_ind);
                        });
                        var valor;
                        for (let index = 0; index < horarios.length; index++) {                      
                                valor = "Fecha: *"+horarios[index].fecha+"*\nHorario: *"+horarios[index].hora1+" - "+horarios[index].hora2+"*\n\nNota: *"+horarios[index].detalle+"*";
                                horarios_a.push(valor);                            
                        }
                        conexion.end();
                        console.log("Array de horarios");
                        console.log(horarios_a);
                        return flowDynamic(`${horarios_a}\n\n\n¿Puedo ayudarte con algo más?\n\nEscribe *Menu* para regresar al Menú principal`)
                    }) 
            }
        )
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
        const kinder5_1_2 = addKeyword(['2'])
        // addAnswer(['⌛⌛⌛ Consultando Fechas y horarios de venta para el *"Kínder “Francisco Ruiz Sánchez” (Kínder Chulavista T/V)"*...'])
        .addAnswer(
            ['Fecha y hora de venta para *Kínder “Francisco Ruiz Sánchez” (Kínder Chulavista T/V)*'],
            { capture: false},
            async (ctx, { flowDynamic, endFlow }) => {               
                nombre = ctx.body
                console.log("Valor capturado");
                console.log(nombre);

                    let horarios = [];
                    let horarios_a = [];
                    let horas_ind = {};
                    var idescuela = 5;
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
                        .where('idescuela ='+idescuela);
                    console.log('Consulta SQL:', consulta_horario.toString());
                    conexion.query(consulta_horario.toString(), function(error, registros_horarios, campos){
                        if (error) {
                            throw error;
                        }  
                        registros_horarios.forEach(function(registro_horario, indice, arreglo){
                            console.log("Registro horario");
                            console.log(registro_horario);
                            horas_ind.fecha = registro_horario.fecha;
                            horas_ind.hora1 = registro_horario.hora1;
                            horas_ind.hora2 = registro_horario.hora2;
                            horas_ind.detalle = registro_horario.detalle;
                            horarios.push(horas_ind);
                        });
                        var valor;
                        for (let index = 0; index < horarios.length; index++) {                      
                                valor = "Fecha: *"+horarios[index].fecha+"*\nHorario: *"+horarios[index].hora1+" - "+horarios[index].hora2+"*\n\nNota: *"+horarios[index].detalle+"*";
                                horarios_a.push(valor);                            
                        }
                        conexion.end();
                        console.log("Array de horarios");
                        console.log(horarios_a);
                        return flowDynamic(`${horarios_a}\n\n\n¿Puedo ayudarte con algo más?\n\nEscribe *Menu* para regresar al Menú principal`)
                    }) 
            }
        )
        const kinder5_1_3 = addKeyword(['3']).
        addAnswer(['⌛⌛⌛ Por favor ingrese el *folio* que se encuentra en su ticket'])
        const kinder5_1_4 = addKeyword(['4']).
        addAnswer(['⌛⌛⌛ A la brevedad un asesor se comunicará con usted'])




        const Primaria1_1_1 = addKeyword(['1']).
        addAnswer(['⌛⌛⌛ Consultando lista de precios para  *Primaria "24 de octubre"*...'])
        .addAnswer('Lista de precios 1', {
            media: 'https://res.cloudinary.com/ddcszcshl/image/upload/v1690962050/De%20Luna/Prim%2024%20de%20octubre/Primaria_Onu_onoem2.jpg',
        })
        const Primaria1_1_2 = addKeyword(['2'])
        // addAnswer(['⌛⌛⌛ Consultando Fechas y horarios de venta para *Primaria "24 de octubre"*...'])
        .addAnswer(
            ['Fecha y hora de venta para *Primaria "24 de octubre"*'],
            { capture: false},
            async (ctx, { flowDynamic, endFlow }) => {               
                nombre = ctx.body
                console.log("Valor capturado");
                console.log(nombre);

                    let horarios = [];
                    let horarios_a = [];
                    let horas_ind = {};
                    var idescuela = 6;
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
                        .where('idescuela ='+idescuela);
                    console.log('Consulta SQL:', consulta_horario.toString());
                    conexion.query(consulta_horario.toString(), function(error, registros_horarios, campos){
                        if (error) {
                            throw error;
                        }  
                        registros_horarios.forEach(function(registro_horario, indice, arreglo){
                            console.log("Registro horario");
                            console.log(registro_horario);
                            horas_ind.fecha = registro_horario.fecha;
                            horas_ind.hora1 = registro_horario.hora1;
                            horas_ind.hora2 = registro_horario.hora2;
                            horas_ind.detalle = registro_horario.detalle;
                            horarios.push(horas_ind);
                        });
                        var valor;
                        for (let index = 0; index < horarios.length; index++) {                      
                                valor = "Fecha: *"+horarios[index].fecha+"*\nHorario: *"+horarios[index].hora1+" - "+horarios[index].hora2+"*\n\nNota: *"+horarios[index].detalle+"*";
                                horarios_a.push(valor);                            
                        }
                        conexion.end();
                        console.log("Array de horarios");
                        console.log(horarios_a);
                        return flowDynamic(`${horarios_a}\n\n\n¿Puedo ayudarte con algo más?\n\nEscribe *Menu* para regresar al Menú principal`)
                    }) 
            }
        )
        const Primaria1_1_3 = addKeyword(['3']).
        addAnswer(['⌛⌛⌛ Por favor ingrese el *folio* que se encuentra en su ticket'])
        const Primaria1_1_4 = addKeyword(['4']).
        addAnswer(['⌛⌛⌛ A la brevedad un asesor se comunicará con usted'])
        const Primaria1_1_5 = addKeyword(['5']).
        addAnswer(['Gracias por comunicarte a *Uniformes De Luna*'])




        const Primaria2_1_1 = addKeyword(['1']).
        addAnswer(['⌛⌛⌛ Consultando lista de precios para *Primaria "Amado Nervo"*...'])
        const Primaria2_1_2 = addKeyword(['2'])
        // addAnswer(['⌛⌛⌛ Consultando Fechas y horarios de venta para *Primaria "Amado Nervo"*...'])
        .addAnswer(
            ['Fecha y hora de venta para *Primaria "Amado Nervo"*'],
            { capture: false},
            async (ctx, { flowDynamic, endFlow }) => {               
                nombre = ctx.body
                console.log("Valor capturado");
                console.log(nombre);

                    let horarios = [];
                    let horarios_a = [];
                    let horas_ind = {};
                    var idescuela = 7;
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
                        .where('idescuela ='+idescuela);
                    console.log('Consulta SQL:', consulta_horario.toString());
                    conexion.query(consulta_horario.toString(), function(error, registros_horarios, campos){
                        if (error) {
                            throw error;
                        }  
                        registros_horarios.forEach(function(registro_horario, indice, arreglo){
                            console.log("Registro horario");
                            console.log(registro_horario);
                            horas_ind.fecha = registro_horario.fecha;
                            horas_ind.hora1 = registro_horario.hora1;
                            horas_ind.hora2 = registro_horario.hora2;
                            horas_ind.detalle = registro_horario.detalle;
                            horarios.push(horas_ind);
                        });
                        var valor;
                        for (let index = 0; index < horarios.length; index++) {                      
                                valor = "Fecha: *"+horarios[index].fecha+"*\nHorario: *"+horarios[index].hora1+" - "+horarios[index].hora2+"*\n\nNota: *"+horarios[index].detalle+"*";
                                horarios_a.push(valor);                            
                        }
                        conexion.end();
                        console.log("Array de horarios");
                        console.log(horarios_a);
                        return flowDynamic(`${horarios_a}\n\n\n¿Puedo ayudarte con algo más?\n\nEscribe *Menu* para regresar al Menú principal`)
                    }) 
            }
        )
        const Primaria2_1_3 = addKeyword(['3']).
        addAnswer(['⌛⌛⌛ Por favor ingrese el *folio* que se encuentra en su ticket'])
        const Primaria2_1_4 = addKeyword(['4']).
        addAnswer(['⌛⌛⌛ A la brevedad un asesor se comunicará con usted'])





        const Secundaria1_1_1 = addKeyword(['1']).
        addAnswer(['⌛⌛⌛ Consultando lista de precios para  *Escuela Secundaria General #17 "Jose Antonio Torres"*...'])
        .addAnswer('Lista de precios 1', {
            media: 'https://res.cloudinary.com/ddcszcshl/image/upload/v1692927374/WhatsApp_Image_2023-08-24_at_12.26.21_ydzrtn.jpg',
        })
        const Secundaria1_1_2 = addKeyword(['2'])
        // addAnswer(['⌛⌛⌛ Consultando Fechas y horarios de venta para *Escuela Secundaria General #17 "Jose Antonio Torres"*...'])
        .addAnswer(
            ['Fecha y hora de venta para *Escuela Secundaria General #17 "Jose Antonio Torres"*'],
            { capture: false},
            async (ctx, { flowDynamic, endFlow }) => {               
                nombre = ctx.body
                console.log("Valor capturado");
                console.log(nombre);

                    let horarios = [];
                    let horarios_a = [];
                    let horas_ind = {};
                    var idescuela = 8;
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
                        .where('idescuela ='+idescuela);
                    console.log('Consulta SQL:', consulta_horario.toString());
                    conexion.query(consulta_horario.toString(), function(error, registros_horarios, campos){
                        if (error) {
                            throw error;
                        }  
                        registros_horarios.forEach(function(registro_horario, indice, arreglo){
                            console.log("Registro horario");
                            console.log(registro_horario);
                            horas_ind.fecha = registro_horario.fecha;
                            horas_ind.hora1 = registro_horario.hora1;
                            horas_ind.hora2 = registro_horario.hora2;
                            horas_ind.detalle = registro_horario.detalle;
                            horarios.push(horas_ind);
                        });
                        var valor;
                        for (let index = 0; index < horarios.length; index++) {                      
                                valor = "Fecha: *"+horarios[index].fecha+"*\nHorario: *"+horarios[index].hora1+" - "+horarios[index].hora2+"*\n\nNota: *"+horarios[index].detalle+"*";
                                horarios_a.push(valor);                            
                        }
                        conexion.end();
                        console.log("Array de horarios");
                        console.log(horarios_a);
                        return flowDynamic(`${horarios_a}\n\n\n¿Puedo ayudarte con algo más?\n\nEscribe *Menu* para regresar al Menú principal`)
                    }) 
            }
        )
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
        const Secundaria2_1_2 = addKeyword(['2'])
        // addAnswer(['⌛⌛⌛ Consultando Fechas y horarios de venta para *Escuela Secundaria General #132 “Carlos González Peña"*...'])
        .addAnswer(
            ['Fecha y hora de venta para *Escuela Secundaria General #132 “Carlos González Peña"*'],
            { capture: false},
            async (ctx, { flowDynamic, endFlow }) => {               
                nombre = ctx.body
                console.log("Valor capturado");
                console.log(nombre);

                    let horarios = [];
                    let horarios_a = [];
                    let horas_ind = {};
                    var idescuela = 9;
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
                        .where('idescuela ='+idescuela);
                    console.log('Consulta SQL:', consulta_horario.toString());
                    conexion.query(consulta_horario.toString(), function(error, registros_horarios, campos){
                        if (error) {
                            throw error;
                        }  
                        registros_horarios.forEach(function(registro_horario, indice, arreglo){
                            console.log("Registro horario");
                            console.log(registro_horario);
                            horas_ind.fecha = registro_horario.fecha;
                            horas_ind.hora1 = registro_horario.hora1;
                            horas_ind.hora2 = registro_horario.hora2;
                            horas_ind.detalle = registro_horario.detalle;
                            horarios.push(horas_ind);
                        });
                        var valor;
                        for (let index = 0; index < horarios.length; index++) {                      
                                valor = "Fecha: *"+horarios[index].fecha+"*\nHorario: *"+horarios[index].hora1+" - "+horarios[index].hora2+"*\n\nNota: *"+horarios[index].detalle+"*";
                                horarios_a.push(valor);                            
                        }
                        conexion.end();
                        console.log("Array de horarios");
                        console.log(horarios_a);
                        return flowDynamic(`${horarios_a}\n\n\n¿Puedo ayudarte con algo más?\n\nEscribe *Menu* para regresar al Menú principal`)
                    }) 
            }
        )
        const Secundaria2_1_3 = addKeyword(['3']).
        addAnswer(['⌛⌛⌛ Por favor ingrese el *folio* que se encuentra en su ticket'])
        const Secundaria2_1_4 = addKeyword(['4']).
        addAnswer(['⌛⌛⌛ A la brevedad un asesor se comunicará con usted'])




        const Secundaria3_1_1 = addKeyword(['1']).
        addAnswer(['⌛⌛⌛ Consultando lista de precios para *Escuela Secundaria General #64 “Jesús Reyes Heroles”*...'])
        .addAnswer('Lista de precios 1', {
            media: 'https://res.cloudinary.com/ddcszcshl/image/upload/v1690962461/De%20Luna/Sec%20Gen%2064/Sec._Gral._64_y6iglv.jpg',
        })
        const Secundaria3_1_2 = addKeyword(['2'])
        // addAnswer(['⌛⌛⌛ Consultando Fechas y horarios de venta para *Escuela Secundaria General #64 “Jesús Reyes Heroles”*...'])
        .addAnswer(
            ['Fecha y hora de venta para *Escuela Secundaria General #64 “Jesús Reyes Heroles”*'],
            { capture: false},
            async (ctx, { flowDynamic, endFlow }) => {               
                nombre = ctx.body
                console.log("Valor capturado");
                console.log(nombre);

                    let horarios = [];
                    let horarios_a = [];
                    let horas_ind = {};
                    var idescuela = 10;
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
                        .where('idescuela ='+idescuela);
                    console.log('Consulta SQL:', consulta_horario.toString());
                    conexion.query(consulta_horario.toString(), function(error, registros_horarios, campos){
                        if (error) {
                            throw error;
                        }  
                        registros_horarios.forEach(function(registro_horario, indice, arreglo){
                            console.log("Registro horario");
                            console.log(registro_horario);
                            horas_ind.fecha = registro_horario.fecha;
                            horas_ind.hora1 = registro_horario.hora1;
                            horas_ind.hora2 = registro_horario.hora2;
                            horas_ind.detalle = registro_horario.detalle;
                            horarios.push(horas_ind);
                        });
                        var valor;
                        for (let index = 0; index < horarios.length; index++) {                      
                                valor = "Fecha: *"+horarios[index].fecha+"*\nHorario: *"+horarios[index].hora1+" - "+horarios[index].hora2+"*\n\nNota: *"+horarios[index].detalle+"*";
                                horarios_a.push(valor);                            
                        }
                        conexion.end();
                        console.log("Array de horarios");
                        console.log(horarios_a);
                        return flowDynamic(`${horarios_a}\n\n\n¿Puedo ayudarte con algo más?\n\nEscribe *Menu* para regresar al Menú principal`)
                    }) 
            }
        )
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
        const Secundaria4_1_2 = addKeyword(['2'])
        // addAnswer(['⌛⌛⌛ Consultando Fechas y horarios de venta para *Escuela Secundaria Mixta “Foránea #10”*...'])
        .addAnswer(
            ['Fecha y hora de venta para *Escuela Secundaria Mixta “Foránea #10”*'],
            { capture: false},
            async (ctx, { flowDynamic, endFlow }) => {               
                nombre = ctx.body
                console.log("Valor capturado");
                console.log(nombre);

                    let horarios = [];
                    let horarios_a = [];
                    let horas_ind = {};
                    var idescuela = 11;
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
                        .where('idescuela ='+idescuela);
                    console.log('Consulta SQL:', consulta_horario.toString());
                    conexion.query(consulta_horario.toString(), function(error, registros_horarios, campos){
                        if (error) {
                            throw error;
                        }  
                        registros_horarios.forEach(function(registro_horario, indice, arreglo){
                            console.log("Registro horario");
                            console.log(registro_horario);
                            horas_ind.fecha = registro_horario.fecha;
                            horas_ind.hora1 = registro_horario.hora1;
                            horas_ind.hora2 = registro_horario.hora2;
                            horas_ind.detalle = registro_horario.detalle;
                            horarios.push(horas_ind);
                        });
                        var valor;
                        for (let index = 0; index < horarios.length; index++) {                      
                                valor = "Fecha: *"+horarios[index].fecha+"*\nHorario: *"+horarios[index].hora1+" - "+horarios[index].hora2+"*\n\nNota: *"+horarios[index].detalle+"*";
                                horarios_a.push(valor);                            
                        }
                        conexion.end();
                        console.log("Array de horarios");
                        console.log(horarios_a);
                        return flowDynamic(`${horarios_a}\n\n\n¿Puedo ayudarte con algo más?\n\nEscribe *Menu* para regresar al Menú principal`)
                    }) 
            }
        )
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
            'Foranea 10',
            'Mixta 10'
            ])
        .addAnswer(
            ['¿Usted quiso decir *Escuela Secundaria Mixta “Foránea #10”*?','','*1.* Si','*2.* No'],
            null,
            null,
            [Secundaria4_1,Secundaria1_2]
        )













        const Kinder = addKeyword(['1'])
        .addAnswer('Has seleccionado *Kínder*, por favor ingresa el nombre de la escuela...',{capture:true},(ctx, {fallBack}) => {
        console.log(ctx.body);
        let arr_nombre = [];
        let nombre = {};
        let conexion = mysql.createConnection({
            host: 'srv366.hstgr.io',
            user: 'u690371019_deluna',
            password: '4ZaZ>]qkFOn#',
            database: 'u690371019_deluna'
        });
        conexion.connect;
        let consulta_nombre = squel.select()
            .field('idcapture')
            .field('opcion')
            .field('nom_esc')
            .from('detalle_escuelas_nom')
            .where('opcion ='+"'"+ctx.body+"'");
        console.log('Consulta SQL:', consulta_nombre.toString());
        conexion.query(consulta_nombre.toString(), function(error, respuesta_nombre, campos){
            if (error) {
                
                throw error;
            }  
            respuesta_nombre.forEach(function(respuesta, indice, arreglo){
                nombre.nom_esc = respuesta.nom_esc;
                arr_nombre.push(nombre);
            });
            //var valor = arr_nombre[0];
            console.log("Valor encontrado");
            console.log(nombre.nom_esc);
            
            conexion.end();
            // var data = JSON.parse(valor);
            // console.log("Valor consultado");
            // console.log(data.nom_esc);

            // if (data.nom_esc=='Kinder Citlaltzintli') {
            //     console.log("Entra positivo");
            // }else{
            //     return fallBack()
            // }
            
        })  

        
                  
            
                
                
                
                //console.log('Mensaje entrante: ',ctx.body)
        })
        //.addAnswer(['Kinder encontrado'])
        // .addAnswer(
        //     ['Has seleccionado *Kínder*, por favor ingresa el nombre de la escuela...'],
        //     null,
        //     null,
        //     [kinder1,kinder2,kinder3,kinder4,kinder5]
        // )





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
