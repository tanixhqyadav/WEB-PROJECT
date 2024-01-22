// document.getElementById("count").innerText = 5

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count


let countEl=document.getElementById("count-el");// hey html document give the element which is giving me this value 
// document refer html and js commanding it by getE... then we can modify it by .inner text
console.log(countEl)// we are getting the output as     <h2 id="count-el">0</h2> means we are refering to this in html
// .getElementById(argument) it is a function in which we are passing values 
let c=0;
function increment(){
    c=c+1;
    countEl.innerText=c;
}
// THE DOM : Document Object Model "How to use javascript to modify a website"
// alternate for innertext is .textcontent  As well as innertext is a bad practise where as textcontent is good practise
let x=document.getElementById("pr-values")
function save(){
    let soa=c+" - ";
    x.textContent+=soa
    c=0
    countEl.innerText=c;
}

