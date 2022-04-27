// Librerías necesarias
const fsLibrary = require('fs');
// const moment = require('../node_modules/moment');
const chalk = require('../node_modules/chalk');

// Formatos de fecha
const formato_fecha_corto = 'DD/MM/YYYY';
const formato_fecha_largo = 'DD/MM/YYYY HH:mm:ss'; // 'DD/MM/YYYY HH:mm:ss:SSS'

// Ruta del fichero de log con los casos registrados en las pruebas
const path_log_pruebas = '../logs/registro_pruebas.log';
const path_json_pruebas = '../logs/registro_pruebas.json';

// Caracter que representa el símbolo de información
const infoSymbol = String.fromCharCode('9432');

var helper = {
    /**
     * Función que actualiza en el fichero de json de los casos, el caso que le pasamos como parámetro
     * @param {objeto} [caso] El objeto con el caso actual y sus datos actualizados
     */
    actualizarCasoEnFicheroJSON: function (caso) {
        // console.log('helper - actualizarCasoEnFicheroJSON --> caso: ' + this.JSONStringify(caso));

        // Leemos el contenido del fichero json
        const casos = this.leerFicheroJson();

        let index;

        // Buscamos el caso que hemos recibido como parámetro dentro del fichero
        let caso_json = this.buscarCasoEnFicheroJSON(caso.numero, (elemento, indice) => {
            index = indice;

            return elemento.numero + '' == caso.numero + '';
        });

        // Ponemos la fecha de actualización
        caso.fecha_ultima_modificacion = this.recuperaFechaActual();

        // Si existía el caso en el fichero
        if (caso_json) {
            // Actualizamos el caso en el array
            casos[index] = caso;

            helper.logWarn('Actualizamos el caso, posición fichero: "' + index + '"');
        } else {
            helper.logWarn('Añadimos el caso');

            caso.historico = ['Caso generado'];

            // Añadimos el caso al array
            casos.push(caso);
        }

        // console.log('CASOS : ' + this.JSONStringify(casos));

        // Escribimos de nuevo el fichero con el caso ya actualizado
        // convirtiendo el array a una cadena
        fsLibrary.writeFile(
            path_json_pruebas,
            JSON.stringify(casos),
            'utf8',
            // callback function
            function (err) {
                if (err) throw err;

                // Si no hay error
                // console.log('helper - actualizarCasoEnFicheroJSON - Fichero JSON actualizado correctamente');
                // console.log('helper - actualizarCasoEnFicheroJSON --> casos: ' + this.JSONStringify(casos));
            }
        );
    },

    /**
     * Función que recupera del fichero de json de los casos, el caso correspondiente al filtro que le pasamos como parámetro
     * @param {string} [numero_caso] El nº de caso que estamos usando
     * @param {objeto} [filtro] El objeto con el filtro que queremos usar para recuperar un caso
     */
    buscarCasoEnFicheroJSON(numero_caso, filtro) {
        // console.log('helper - buscarCasoEnFicheroJSON --> numero_caso: ' + numero_caso);

        // Leemos el contenido del fichero json
        const casos = this.leerFicheroJson();

        // Buscamos dentro del array el elemento que coincida con el fltro que recibimos
        const caso = casos.find((caso, index) => {
            return filtro(caso, index);
        });

        // Si hemos recuperado el caso
        // if (caso) {
        //   this.logWarn('buscarCasoEnFicheroJSON - CASO ENCONTRADO EN EL JSON: ' + caso.numero);
        // } else {
        //   this.logError('buscarCasoEnFicheroJSON - NO SE HA ENCONTRADO CASO EN EL JSON PARA EL CASO: "' + numero_caso + '"');
        // }

        return caso;
    },

    /**
     * Función que escribe en el fichero de los los datos que le pasamos como parámetro
     * @param {string} datos La cadena que queremos escribir en el fichero
     */
    escribirEnFicheroLog: function (datos) {
        // console.log('helper - escribirEnFicheroLog --> datos: ' + datos);

        datos = this.recuperaFechaActual() + ' - ' + datos + ' -\n';

        // Write data in path_log_pruebas
        fsLibrary.appendFile(
            path_log_pruebas,
            datos,
            'utf8',
            // callback function
            function (err) {
                if (err) throw err;

                // if no error
                // console.log('Data is appended to file successfully.');
            }
        );
    },

    /**
     * Función que genera una fecha aleatoria comprendida entre las dos fechas que le pasamos como parámetro
     * @param {string} [date1] La fecha inicial del rango (si no le pasamos nada será el 01/01/1970)
     * @param {string} [date2] La fecha final del rango (si no le pasamos nada será la fecha actual)
     * @param {string} [formato] El formato de la fecha (si no le pasamos nada será 'DD.MM.YYYY')
     * @returns {string} La fecha aletoria comprendida entre las dos fechas que le pasamos como parámetro
     */
    generarFechaAletoria: function randomDate(date1, date2, formato) {
        date1 = date1 || new Date(1972, 01, 01);
        date2 = date2 || new Date();

        const diff = date2.getTime() - date1.getTime();
        const new_diff = diff * Math.random();

        let fecha = new Date(date1.getTime() + new_diff);

        // console.log('FECHA: ' + fecha);
        // console.log('FECHA M: ' + moment(fecha).format('DD.MM.YYYY'));

        formato = formato || 'DD.MM.YYYY';
        fecha = moment(fecha).format(formato);

        // console.log('helper - generarFechaAleatoria --> fecha: ' + fecha);

        return fecha;
    },

    /**
     * Función que genera un NIF aleatoriamente
     * @returns {string} el NIF generado aleatoriamente
     */
    generarNIFAleatorio: function () {
        let dni = '';

        for (var i = 1; i < 9; i++) {
            dni += Math.floor(Math.random() * 10);
        }

        const juegoCaracteres = 'TRWAGMYFPDXBNJZSQVHLCKET';
        const posicion = dni % 23;
        const letra = juegoCaracteres.charAt(posicion);

        // console.log('helper - generarNIFAleatorio --> NIF: ' + dni + letra);

        return dni + letra;
    },

    /**
     * Función que recupera un número aleatorio entre 0 y el número que recibimos como parámetro
     * @param {number} [numero] El nº máximo del rango en el que se genera el nº aleatorio
     * @returns {string} el nº generado aleatoriamente
     */
    generarNumeroAleatorio: function (numero) {
        // console.log('helper - generarNumeroAleatorio --> número: ' + numero);

        const posicion = Math.floor(Math.random() * (numero + 1));

        return posicion;
    },

    /**
     * Returns a random integer between min (inclusive) and max (inclusive).
     * The value is no lower than min (or the next integer greater than min
     * if min isn't an integer) and no greater than max (or the next integer
     * lower than max if max isn't an integer).
     * Using Math.round() will give you a non-uniform distribution!
     */
    generarNumeroAleatorioRango(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);

        const valor = Math.floor(Math.random() * (max - min + 1)) + min;

        // console.log('helper - generarNumeroAleatorioRango --> número: ' + valor);

        return valor;
    },

    /**
     * Función que genera un teléfono aleatoriamente
     * @returns {string} el nº generado aleatoriamente
     */
    generarTelefonoAleatorio: function () {
        let telefono = '666';

        for (let i = 1; i < 7; i++) {
            telefono += Math.floor(Math.random() * 10);
        }

        // console.log('helper - generarTelefonoAleatorio --> telefono: ' + telefono);

        return telefono;
    },

    /**
     * Fxn that returns a JSON stringified version of an object.
     * This fxn uses a custom replacer function to handle circular references
     * see http://stackoverflow.com/a/11616993/3043369
     * @param {object} object El objeto a "stringify"
     * @returns {string} JSON stringified version of object
     */
    JSONStringify: function (object) {
        var cache = [];
        var str = JSON.stringify(
            object,
            // custom replacer fxn - gets around "TypeError: Converting circular structure to JSON"
            function (key, value) {
                if (typeof value === 'object' && value !== null) {
                    if (cache.indexOf(value) !== -1) {
                        // Circular reference found, discard key
                        return;
                    }
                    // Store value in our collection
                    cache.push(value);
                }

                return value;
            },
            4
        );
        cache = null; // enable garbage collectioning

        return str;
    },

    /**
     * Función que lee el contenido del fichero
     * @param {array} [dato] El dato que buscamos leer del fichero (suele corresponder al estado del caso que buscamos)
     * @returns {string} el primer caso recuperado para el estado que recibimos como parámetro
     */
    leerDelFicheroLog: function (dato) {
        let contenido_fichero;

        // Leemos el fichero
        try {
            contenido_fichero = fsLibrary.readFileSync(path_log_pruebas, 'utf8');
        } catch (error) {
            // console.log('ERROR ' + error);

            this.logError(
                'No existe el fichero de log para los casos, la ruta esperada es: "' +
                    path_log_pruebas +
                    '"'
            );

            return;
        }

        // console.log(chalk.green.bold(infoSymbol) + '  ' + 'Contenido del fichero "' + contenido_fichero + '"');

        const posicionInicial = contenido_fichero.indexOf(dato);
        const posicionFinal =
            posicionInicial +
            dato.length +
            contenido_fichero.substring(posicionInicial + dato.length).indexOf('-');

        // Recuperamos el id. de caso que buscamos en el fichero
        const contenido = contenido_fichero.substring(posicionInicial + dato.length, posicionFinal);

        // console.log('leerDelFicheroLog : "' + contenido + '", datos buscado: "' + dato + '"');

        return contenido.trim();
    },

    /**
     * Función que lee el contenido del fichero json de log de casos
     * @param {string} [path_file] Si queremos que busque el fichero en una ruta concreta
     * @returns {object} El objeto con los datos del fichero en formato JSON
     */
    leerFicheroJson: function (path_file) {
        let contenido_fichero;

        const path_fichero = path_file || path_json_pruebas;

        // Leemos el fichero
        try {
            contenido_fichero = fsLibrary.readFileSync(path_fichero, 'utf8');
        } catch (error) {
            // console.log('ERROR ' + error);

            this.logError('No existe el fichero, la ruta esperada es: "' + path_fichero + '"');

            return;
        }

        // console.log('FICHERO ' + contenido_fichero);

        // Convertimos el texto a objeto/array
        const casos = JSON.parse(contenido_fichero);

        // Si hemos recuperado el caso
        // if (casos) {
        //   console.log('leerDelFicheroJson - CASOS : ' + this.JSONStringify(casos));
        // } else {
        //   this.logError('leerDelFicheroJson - NO SE HA ENCONTRADO CASOS EN EL JSON');
        // }

        return casos;
    },

    /**
     * Función que saca por consola un mensaje de log en color amarillo
     * @param {string} [mensaje] El mensaje que queremos sacar por consola
     * @param {[]} [objetos] Array de objetos a mostrar por consola
     */
    log: function (mensaje, objetos) {
        if (objetos) {
            console.log(chalk.white.bold(mensaje), objetos);
        } else {
            console.log(chalk.white.bold(mensaje));
        }
    },

    /**
     * Función que saca por consola un mensaje de log en color azul
     * @param {string} [mensaje] El mensaje que queremos sacar por consola
     * @param {[]} [objetos] Array de objetos a mostrar por consola
     */
    logBlue: function (mensaje, objetos) {
        if (objetos) {
            console.log(chalk.blue.bold(mensaje), objetos);
        } else {
            console.log(chalk.blue.bold(mensaje));
        }
    },

    /**
     * Función que saca por consola un mensaje de log en color cyan
     * @param {string} [mensaje] El mensaje que queremos sacar por consola
     * @param {[]} [objetos] Array de objetos a mostrar por consola
     */
    logCyan: function (mensaje, objetos) {
        if (objetos) {
            console.log(chalk.cyan.bold(mensaje), objetos);
        } else {
            console.log(chalk.cyan.bold(mensaje));
        }
    },

    /**
     * Función que saca por consola un mensaje de log (con símbolo y color rojo)
     * @param {string} [mensaje] El mensaje que queremos sacar por consola
     * @param {[]} [objetos] Array de objetos a mostrar por consola
     */

    logError: function (mensaje, objetos) {
        if (objetos) {
            console.log(chalk.red.bold(infoSymbol) + '  ' + mensaje, objetos);
        } else {
            console.log(chalk.red.bold(infoSymbol) + '  ' + mensaje);
        }
    },

    /**
     * Función que saca por consola un mensaje de log en color verde
     * @param {string} [mensaje] El mensaje que queremos sacar por consola
     * @param {[]} [objetos] Array de objetos a mostrar por consola
     */
    logGreen: function (mensaje, objetos) {
        if (objetos) {
            console.log(chalk.green.bold(mensaje), objetos);
        } else {
            console.log(chalk.green.bold(mensaje));
        }
    },

    /**
     * Función que saca por consola un mensaje de log en color magenta
     * @param {string} [mensaje] El mensaje que queremos sacar por consola
     * @param {[]} [objetos] Array de objetos a mostrar por consola
     */
    logMagenta: function (mensaje, objetos) {
        if (objetos) {
            console.log(chalk.magenta.bold(mensaje), objetos);
        } else {
            console.log(chalk.magenta.bold(mensaje));
        }
    },

    /**
     * Función que saca por consola un mensaje de log en color rojo
     * @param {string} [mensaje] El mensaje que queremos sacar por consola
     * @param {[]} [objetos] Array de objetos a mostrar por consola
     */
    logRed: function (mensaje, objetos) {
        if (objetos) {
            console.log(chalk.red.bold(mensaje), objetos);
        } else {
            console.log(chalk.red.bold(mensaje));
        }
    },

    /**
     * Función que saca por consola un mensaje de log en color
     * @param {string} [mensaje] El mensaje que queremos sacar por consola
     */
    logResult: function (mensaje1, mensaje2) {
        console.log(chalk.yellow.bold(mensaje1) + ' ' + chalk.red.bold(mensaje2));
    },

    /**
     * Función que saca por consola un mensaje de log (con símbolo y color amarillo)
     * @param {string} [mensaje] El mensaje que queremos sacar por consola
     * @param {[]} [objetos] Array de objetos a mostrar por consola
     */

    logWarn: function (mensaje, objetos) {
        if (objetos) {
            console.log(chalk.orange.bold(infoSymbol) + '  ' + mensaje, objetos);
        } else {
            console.log(chalk.orange.bold(infoSymbol) + '  ' + mensaje);
        }
    },

    /**
     * Función que saca por consola un mensaje de log en color amarillo
     * @param {string} [mensaje] El mensaje que queremos sacar por consola
     * @param {[]} [objetos] Array de objetos a mostrar por consola
     */
    logYellow: function (mensaje, objetos) {
        if (objetos) {
            console.log(chalk.yellow.bold(mensaje), objetos);
        } else {
            console.log(chalk.yellow.bold(mensaje));
        }
    },

    /**
     * Función que devuelve los números de casos registrados en el fichero json
     * @returns {array} Los números de casos registrados en el fichero json
     */
    recuperaCasosFicheroJson: function () {
        // Recuperamos los datos del fichero json
        let logData = helper.leerFicheroJson();
        let casos;

        // Si no encuentra ninguno en el fichero de log (.\logs\registro_casos.log), devolvemos un array vacío
        if (!logData) {
            return [];
        } else {
            // Recuperamos sólo los números de caso
            casos = logData.map((caso) => {
                return caso.numero;
            });
        }

        // console.log('helper - recuperaCasosFicheroJson --> ' + helper.JSONStringify(casos));

        return casos;
    },

    /**
     * Función que devuelve el valor de la fecha actual
     * @param {string} [formato] El formato en el que queremos recuperar la fecha actual
     *                         (si no se lo pasamos le ponemos la fecha larga por defecto)
     * @returns {string} El valor de la fecha actual
     */
    recuperaFechaActual: function (formato) {
        // Si no recibimos el formato, le ponemos el largo directamente
        if (!formato) {
            formato = formato_fecha_largo;
        }

        // Devolvemos la fecha actual
        const fecha_actual = moment().format(formato);

        // console.log('helper - recuperarFechaActual --> fechaActual);

        return fecha_actual;
    },

    /**
     * Función que valor aleatorio de la lista que recibimos como parámetro en el globals.js
     * @param {array} [datos] El array del que queremos recuperar un elemento de forma aleatoria
     * @returns {string} el valor aleatorio que hemos recuperado del array
     */
    recuperaValorAleatorio: function (datos) {
        // console.log('helper - recuperaValorAleatorio --> datos: ' + datos);

        const posicion = this.generarNumeroAleatorio(datos.length - 1);
        const valor = datos[posicion];

        // console.log('helper - recuperaValorAleatorio --> posicion: ' + posicion + ', valor: ' + valor);

        return valor;
    },

    /**
     * Función que actualiza los datos del caso en el fichero de log
     * @param {string} [caso] Identificador del caso
     * @param {string} [estadoAnterior] Identificador del estado que tenía el caso antes de hacer el proceso
     * @param {string} [estadoActual] Identificador del estado en el que queremos dejar el caso después de completar el proceso
     * @param {string} [estadoFuturo] Identificador del estado en el que queremos dejar el caso después de completar el proceso
     */
    reemplazarEnFichero: function (caso, estadoAnterior, estadoActual, estadoFuturo) {
        // console.log('helper - reemplazarEnFichero --> caso: ' + caso + 'estadoAnterior :' + estadoAnterior + ' estado futuro: ' + estadoFuturo);

        // Si hay que grabar en el log
        if (!noHayCasoDeLog) {
            datos = estadoAnterior + caso + ' -';

            // Leemos el fichero
            let contenido_fichero = fsLibrary.readFileSync(path_log_pruebas, 'utf8');

            // Recuperamos la posición dentro de la cadena del primer dato que buscamos
            const posicionInicial = contenido_fichero.indexOf(datos);

            // Recuperamos el contenido
            const contenidoAnterior = contenido_fichero.substring(
                posicionInicial,
                posicionInicial + datos.length
            );

            const textoActualizado = estadoActual + caso + ' -';
            const textoNuevo = this.recuperaFechaActual() + ' - ' + estadoFuturo + caso + ' -\n';
            // Recuperamos la posición dentro de la cadena del primer dato que buscamos
            const posicionPlus = contenido_fichero.indexOf(contenidoAnterior);

            // console.log('Contenido Posicion inicial: "' + posicionInicial + '" datos: ' + datos);
            // console.log('Contenido ANTERIOR: "' + contenidoAnterior + '" posicion Plus: ' + posicionPlus);
            // console.log('texto Actualizado: "' + textoActualizado + '"');
            // console.log('texto Nuevo: "' + textoNuevo + '"');

            contenido_fichero = contenido_fichero.replace(contenidoAnterior, textoActualizado);

            // console.log('Contenido FICHERO: \n' + contenido_fichero);

            datos = contenido_fichero + textoNuevo;

            // Write data in path_log_pruebas
            fsLibrary.writeFile(
                path_log_pruebas,
                datos,
                'utf8',
                // callback function
                function (err) {
                    if (err) throw err;

                    // if no error
                    // console.log('Data is appended to file successfully.');
                }
            );

            return true;
            // console.log('COMPLETO');
        }
    }
};

module.exports.helper = helper;
