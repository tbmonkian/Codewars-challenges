/* Corrigiendo los errores del software de reconocimiento de caracteres.
Los programas de reconocimiento de caracteres son muy utilizados para digitalizar textos impresos.
De esta forma, los textos pueden ser editados, buscados y guardados en una computadora.
Cuando los documentos (especialmente los más antigüos escritos en máquina de escribir) son
digitalizados, el software de reconocimiento suele hacer errores.
Nuestro trabajo es corregir los errores en el texto digitalizado. Solo tendremos que manejar los
siguientes errores:
-S es interpretado como 5,
-O es interpretado como 0,
-I es interpretado como 1.
*/

var str1= ['L0ND0N', 'DUBL1N', 'SINGAP0RE', 'PAR15'];

/* SOLUCIÓN 1:
Con replace, pero artesanal, es decir, de a una palabra, si fueran 200 no alcanza esta solución.

console.log(str1);
console.log('');

var lon = str1[0];
console.log('lon: ', str1[0]);
console.log('lon: ', typeof(lon));

var largo= lon.length;
console.log('lon.length: ', largo);
console.log('');

var cero= lon.search(0);
var cero2= lon.lastIndexOf(0);
console.log('Primer 0: ', cero);
console.log('Segundo 0: ', cero2);

var lalon= lon.replace('0', 'O');
console.log(lalon);

var lalan= lalon.replace('0', 'O');
console.log(lalan);
*/

/*SOLUCIÓN 2:
Con bucle for, alcanza para cualquier palabra, pero ineficiente, hay formas más eficientes

console.log(str1);
console.log('');

var lon = str1[0];
console.log('lon: ', str1[0]);
console.log('lon: ', typeof(lon));

var largo= lon.length;
console.log('lon.length: ', largo);
console.log('');

function correct(data) {
    const array= data.split('');
    for (let i=0;i<=array.length;i++){
        let element= array[i];
            if (element=='5'){
                array[i] = 'S';
            } else if (element=='1'){
                array[i] = 'I';
            } else if (element=='0'){
                array[i] = 'O';
            };
    };
    const newString = array.join('');
    return newString;
};

console.log(correct('L0ND0N'));
console.log(correct('DUBL1N'));
console.log(correct('SINGAP0RE'));
console.log(correct('PAR15'));
console.log(correct('IF-RUDYARD KIPLING'));
*/

/* SOLUCIÓN 3:
Con replace y utilizando a fondo los secretos de este método y otros
MEJOR SOLUCIÓN EN CODEWARS, EN 1 SOLA LÍNEA!!:
var lon = str1[0];
console.log('lon: ', str1[0]);
console.log('lon: ', typeof(lon));

correct = s => s.replace(/0/g,'O').replace(/5/g,'S').replace(/1/g,'I');

console.log(correct(lon));
*/

/* SOLUCIÓN 4:
Con un dict, 2DA MEJOR SOLUCIÓN DE CODEWARS:

const corrections= {
    '5':'S',
    '0':'O',
    '1':'I',
}

const correct= string => (
    string.replace(/[501]/g, character => corrections[character])
);
console.log(correct('L0ND0N'));
*/






/*
let multilineaIncorrecta= 'tey, la brillante manzena vered toy cuelga en una rama del arbol vered';

multilineaIncorrecta=multilineaIncorrecta.replace(/^t/gi, 'h');
console.log(1, multilineaIncorrecta);
multilineaIncorrecta=multilineaIncorrecta.replace(/\bt/gi, 'h');
console.log(2, multilineaIncorrecta);
multilineaIncorrecta=multilineaIncorrecta.replace(/ed$/gim, 'de.');
console.log(3, multilineaIncorrecta);
multilineaIncorrecta=multilineaIncorrecta.replace(/ed\b/, 'de');
console.log(4, multilineaIncorrecta);
multilineaIncorrecta=multilineaIncorrecta.replace(/\ba/, 'á');
console.log(5, multilineaIncorrecta);
multilineaIncorrecta=multilineaIncorrecta.replace(/\Ben/, 'an');
console.log(6, multilineaIncorrecta);

console.log(typeof(str1));

var lon = str1[0];
console.log('lon: ', str1[0]);
console.log('lon: ', typeof(lon));

lon=lon.replace(/\B0N/,'ON');
lon=lon.replace(/0N$/,'ON');
console.log(lon);
*/

var cero= [1,2,3,4];
var uno= [5,6,7,8,9];
var dos=cero+uno;
console.log(typeof(dos))
