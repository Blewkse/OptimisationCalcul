



const Array = [];
const goal = 10000000;

for(let i = 0; i < goal; i++){
    Array.push(i);
}

console.time("find")
console.log("find");
Array.find((el) => el === goal)
console.timeEnd("find");


console.time('map');
console.log("map")
Array.map((el)=>{
    if(el === goal){
        return el;
    }
})
console.timeEnd("map");


console.time('classic for')
console.log("classic for")
for(let i = 0; i < Array.length; i++){
    if(Array[i] === goal) {
        break
    }
}
console.timeEnd("classic for");