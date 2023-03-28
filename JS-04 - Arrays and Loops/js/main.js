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
let linea;
for (let i = 1; i <= 5; i++) {
    linea="";
    for (let j = 1; j <= i; j++) {
       
       linea+="*";
        
    }
    console.log(linea);
    
}


/* Exercise #3 */

/* – Repeatedly print the value of the variable xValue, decreasing it by 0.5 each time,
as long as xValue remains positive. */
let n=10;
while (n>0) {
    n-=0.5;
    console.log(n);
}


/* - Print all the odd numbers between 1 - 100. */
let n1=1
while (n1<100) {
    n1++;
    if (n1%2==0) {
        console.log(n1);
    }
    
}
/* - Write a method with a while loop to print 1 through n in square brackets. 
For example, if n = 6 print [1] [2] [3] [4] [5] [6] */
let n2=100;
while (n2>=1) {
    
    console.log("["+n2+"]");
    n2--;
}
/* - Write a method with a while loop that computes the sum of first n positive integers: 
sum = 1 + 2 + 3 + … + n
Examples:
n = 5 sum = 15
n = 19 sum = 190 */

let n3=19;
let sum=0;
while (n3>0) {
    
    sum+=n3--;
    
    
}
console.log(sum);
