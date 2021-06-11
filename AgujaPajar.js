/*
SOLUCIÓN 1 CON FOR
var Rdo=[];

function findNeedle(haystack){
    for (let i=0;i<= haystack.length;i++) {
        const element = haystack[i];
        if (element === 'needle'){
            Rdo+= element
            return i;
        };
    };
};
*/
var haystack_1= ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false];
var haystack_2= ['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle','something somebody lost a while ago'];
var haystack_3= [1,2,3,4,5,6,7,8,8,7,5,4,3,4,5,6,67,5,5,3,3,4,2,34,234,23,4,234,324,324,'needle',1,2,3,4,5,5,6,5,4,32,3,45,54];
/*
console.log(haystack_1.length);
console.log(findNeedle(haystack_1));
console.log(Rdo);

console.log(haystack_2.length);
console.log(findNeedle(haystack_2));
console.log(Rdo);

console.log(haystack_3.length);
console.log(findNeedle(haystack_3));
console.log(Rdo);

*/

/*
SOLUCIÓN 2 CON INCLUEDES

function findNeedle(arr, obj) {
    if(arr.includes(obj)) {
        return obj
    } else {
        return false
    };
};
console.log(findNeedle(haystack_1, 'needle'));
*/