/* Exercise #1 */

let names=["Sofia","David","Juan"];
console.log(names);
names=names.sort();
console.log(names);
names.push("Sara");
names.push("Augustin");
console.log(names);
names.shift();
console.log(names);

function addRenata(names) {
    index=names.indexOf("David");
    var nameF=names.slice(index,names.length);
    var namesadd = names.slice(0,index);
    namesadd.push("Renata");
    var  newNames= namesadd.concat(nameF);
    return newNames;

}
let newNames= addRenata(names);
console.log(newNames);
newNames.push("Elena");


for (let index = 0; index < newNames.length; index++) {
    console.log(newNames[index]);
    
}

/* Exercise #2 */

for (let i = 0; index < 5; index++) {
    console.log(" ")
    for (let j = i; index < 5 ; index++) {
        console.log("*");
        
    }
    
}