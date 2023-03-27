/* Exercise #1 */

let names=["Sofia","David","Juan"];
names.push("Sara");
names.push("Augustin");
names.shift();


function addRenata(names) {
    index=names.indexOf("David");
    var nameF=names.slice(index,names.length);
    var namesadd = names.slice(0,index);
    namesadd.push("Renata");
    var  newNames= namesadd.concat(nameF);
    return newNames;

}

let newNames= addRenata(names);
newNames.push("Elena");
console.log(newNames);

/* for (let index = 0; index < newNames.length; index++) {
    console.log(newNames[index]);
    
} */

/* Exercise #2 */

for (let i = 0; i <= 5; i++) {
    
    for (let j = 1; j <= i; j++) {
       
        console.log("*");
        
    }
     console.log(" ")
}
/* Pendiente al revisar */

/* Exercise #3 */
/* – Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
as long as xValue remains positive. */
/* - Print all the odd numbers between 1 - 100. */
/* - Write a method with a while loop to print 1 through n in square brackets. 
For example, if n = 6 print [1] [2] [3] [4] [5] [6] */
/* - Write a method with a while loop that computes the sum of first n positive integers: 
sum = 1 + 2 + 3 + … + n
Examples:
n = 5 sum = 15
n = 19 sum = 190 */