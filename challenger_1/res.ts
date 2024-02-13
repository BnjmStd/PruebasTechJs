function findFirstRepeated( gifts:number[] ) {

    const giftsId: Set<number> = new Set<number>();

    for (var i:number = 0; i < gifts.length; i++) {
        if(giftsId.has(gifts[i])){
            return gifts[i];
        } 
        giftsId.add(gifts[i]);
    }
    return -1;

}

/* prueba */
const gifts: number[] = [1, 2, 2, 5, 10];
const res = findFirstRepeated(gifts);

if (res !== -1) {
    console.log(`The number repeats is: ${res}`);
} else {
    console.log(`${res}`);
}
