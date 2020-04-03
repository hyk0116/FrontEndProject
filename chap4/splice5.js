let a=[4,1,2,2,1]

for(let i=0; i<a.length; i++){
if(a[i]%2==0)
a.splice(i-1,1)
}
console.log(a)