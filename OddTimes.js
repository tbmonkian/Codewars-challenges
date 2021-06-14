
const a= [20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5];

/*
const b= [1,1,2,-2,5,2,4,4,-1,-2,5];
const c= [20,1,1,2,2,3,3,5,5,4,20,4,5];
const d= [10];
const e= [1,1,1,1,1,1,10,1,1,1,1];
const f= [5,4,3,2,1,5,4,3,2,10,10];

console.log(a);
console.log(typeof a);
*/
const g= a.toString(10).split(',');
console.log(g);
console.log(typeof g);
console.log(typeof g[2]);
console.log(g.length);

function findOdd (arr) {
    let count= {};
    arr.forEach((i) => {
        if (count[i]) count[i]++;
        else count[i]= 1;
//con forEach(i) agarra i, en este caso el 20
//si ese 20 ya estaba en count 'if (count[i])' le suma una unidad, sino le pone 1.
        console.log(count);
    });
//hasta acá ya tengo un dict u object con cada i y su nro de repeticiones
//ahora sólo resta seleccionar los q aparecen en nro impar:
    let result=[];
    for (let i in count) {
        if (count[i]%2)
            result.push(+i);//como es string, lo paso a number con el unary +
             //como es object, lo paso a number con Number()
    };
    Number(result);
    return result.join();
};

console.log(findOdd(g));
console.log(typeof(g));
console.log(typeof(result));