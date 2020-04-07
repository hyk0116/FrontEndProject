let persons1=[]

//persons1 배열생성
for(let i=0; i<10; i++)    
persons1[i]={name: "홍길동",age: 16+i}

//persons2 배열생성후 persons1 배열값 복사
let persons2=[]
for(let i=0; i<10; i++)
persons2[i]=Object.assign({},persons1[i])

//persons2 배열갑 출력
for(let i=0; i<10; i++)
console.log(persons2[i]) 