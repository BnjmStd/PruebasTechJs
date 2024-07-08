function findFirstRepeated( gifts:number[] ) {

    const giftsId: Set<number> = new Set<number>();

    for (const x of gifts) {
        if(giftsId.has(x)){
            return x;
        } 
        giftsId.add(x);
    }
    return -1;

}

/* prueba */
const gifts: number[] = [1, 2, 5, 10];
const res = findFirstRepeated(gifts);

if (res !== -1) {
    console.log(`The number repeats is: ${res}`);
} else {
    console.log(`${res}`);
}
