let a=[]

for(let i=0; i<100; i++){
    a[i]=Math.floor(Math.random()*100+1)
}
let i=0
while(i<a.length){
    if(a[i]%2==0){
        a.splice(i,1)
    }
    else
     i++;
}
    


console.log(a)



