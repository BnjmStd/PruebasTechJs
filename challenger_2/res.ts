
/* método split 

split = separa el arreglo en carácteres

every = verifica si todos los elementos de un array 
    cumplen una condición

char = este es el parámetro que representa cada carácter individual
    del array generad por split

    
*/

function manufacture(gifts:string[], materials:string) {

    const mymaterials: Set<string> = new Set<string>(materials);
    const gift: Set<string> = new Set<string>(gifts);

    gift.forEach(element => {
        console.log();
        if (element.split('').every(has => mymaterials.has(has)) === true){
            return console.log(`Los regalos fabricados son: ${element}`);
        }
    });


}

const materials:string = 'psli'; 
const gifts:string[] = ['libro', 'ps5'];

console.log(manufacture(gifts, materials));
