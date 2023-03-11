 counter = 0;
 const myObj = {
    a : 'one',
    b : 6
 }
 
 const arr = [1,2,13,14,15];
for(let i=0;i<10; i++){
    counter++;
    //console.log(i,counter);
}

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

arr.forEach((val,ind,arrV)=>{
    console.log(val,ind);
})

console.clear();


for(val in arr){
    console.log(val);

}


for(val in myObj){
    console.log(val);
}
 for(val of arr){
    console.log(val);

 }
 console.clear();

 let i = 1;
 while (i<10){
    console.log(i);
    i++;
 }

i = 100;
do {
    console.log(i);
    i++;


}
while(i<10);



const outputs = document.querySelectorAll('.output');
console.log(outputs);
outputs.forEach((ele,ind)=>{
   console.log(ele.textContent);
   ele.textContent = `new ${ind+1}`;
   ele.val = 0;
   ele.onclick = function (){
    ele.val++;
    ele.textContent =  `clicked ${ele.val}`;
   }
});
