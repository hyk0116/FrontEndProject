let a=[3,1,6,2,4,8,10,9,5,7,11]

a.sort(comparNumber)

console.log(a)

function comparNumber(i ,j){
    return j-i;
}