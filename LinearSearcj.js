let find=(arr,key)=>{
for(let elem of arr){
    if(elem===key){
        return true;
    }
}
return false;
}
console.log(find([200,400,600,700],400));
console.log(find([2,4,6,8,10],5));
let elem=document.getElementById("Ls");
elem.innerHTML="Hello";