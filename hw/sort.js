let a=[]

for(let i=0 ;i<100; i++){
    a[i]=Math.floor(Math.random()*100+1)
}
a.sort()
for(let i=0; i<a.length; i++){
    console.log(a[i])
}