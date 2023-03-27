console.log("******* Ejercicio 1 Parte 1 *******")

    let people=["Sofía","David","Juan"]
    /* people.sort(); */
    console.log(people);

console.log("******* Ejercicio 1 Parte 2 *******")
    people.push("Sara","Agustín");
    people.shift();
    console.log(people);

console.log("******* Ejercicio 1 Parte 3 *******")
    people.splice(1,0,"Renata");
    people.push("Elena");
    console.log(people);

console.log("******* Ejercicio 2 *******")
    let star = "*"
    

console.log("******* Ejercicio 3 parte 1 *******")
    let valor=100;    
    do {
    console.log(valor);
    valor-=.5;
    } while (valor>0);
    console.log(valor);

console.log("******* Ejercicio 3 parte 2 *******")
    let numero=100
    for (let impar = 0; impar <=numero; impar++ ){
        if((impar%2)!==0){
            console.log (impar);
        }
    }


console.log("******* Ejercicio 3 parte 3 *******")
    let n=10;

     do {
        if (n!==0) {
            console.log ("["+n+"]");
            (n--);
        }
    } while (n>=0);

console.log("******* Ejercicio 3 parte 4 *******")
    no=19;
    let sum=0;

    while (no!==0) {
        sum+=no;
        (no--);
    }
    console.log(sum)