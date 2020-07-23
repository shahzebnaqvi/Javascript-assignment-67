// Name : Shahzeb

// question 1
const power = (a,b) => Math.pow(a,b)
console.log(power(8,2))

//question 2
const checkleap = (year) =>{
    if(year%4===0){
        console.log(`${year} is leap year`)
    }
    else{
        console.log(`${year } is not leap year`)
    }
}
checkleap(2017)

//question 3
const s = (x,y,z) => (x+y+z)/2
const Area = (a,b,c) => {
    sa = s(a,b,c)
    return Math.sqrt(sa*(sa-a)*(sa-b)*(sa-c))
}
console.log(Area(3,4,5))


//question 4
const avrg = (a,b,c) => (a+b+c)/3

const percentage = (a,b,c) => (((a+b+c)*100)/300)
const main = (a,b,c) =>{
    console.log(`Your averga marks are ${avrg(a,b,c)} 
Your Percentage is ${percentage(a,b,c)}%`)
}
main(70,80,90)



//question 5
const findindexof = (str,letter) =>{
    count=0
    for(i=1;i<=str.length;i++){
       if(letter===str.slice(i-1,i)){
           return i
       }
    }
    return `letter not in the string`
}

str="abcdef"
console.log(findindexof(str,"a"))


//question 6
str ="vowels"
//console.log(str.replace("c",""))
const replacevowel = (str) =>{
    if(str.length>25){
        console.log(`Sorry string length length is greater then 25`)
    }
    for (i of str){
        if(i==="a" || i==="e" || i==="i" || i==="o" || i==="u"){
            str=str.replace(i,"")
        }
    }
    console.log(str)
}
replacevowel(str)

//question 7
const occurence = (str) =>{
    document.write(str+"<br>")
    document.write("Such occurrence are ")
    for(i=0;i<str.length-1;i++){
        x=str.slice(i,i+2)
        if(x==="aa" || x==="ae" || x==="ai" || x==="ao" || x==="au" || x==="ea" || x==="ee" || x==="ei" || x==="eo" || x==="eu" || x==="ia" || x==="ie" || x==="ii" || x==="io" || x==="iu" || x==="oa" || x==="oe" || x==="oi" || x==="oo" || x==="ou" || x==="ua" || x==="ue" || x==="ui" || x==="uo" || x==="uu"){
            document.write(x+" ,")
        }
    }
}
occurence("Pleases read this application and give me gratuity")

//question 8
km = prompt("Please enter the distance in km")
 const m = (km) => km*1000
 const feet = (km) => km*3280.84
 const inch = (km) => km*39370.1
 const cm = (km) => km*100000
 document.write(m(km)+"<br>")
 document.write(feet(km)+"<br>")
 document.write(inch(km)+"<br>")
 document.write(cm(km)+"<br>")
 
//question 
amount=prompt("Enter amount to withdraw")
const cashier = (amount) =>{
    a=amount%100
    hndr=amount-a
    hndr=hndr/100
    ten=a%50
    fifty=a-ten
    fifty=fifty/50
    ten=ten/10
    document.write(`you will have ${hndr} hundred notes ${fifty} fifty notes ${ten} Ten notes`)
}
cashier(amount)


//chapter no 43 - 48

//question 1
const alertbox1 = () =>{
    alert("Happy Coding")
}
//question 2
const alertbox2 = () =>{
    alert("Thanks for purchasing a phone from us")
}
//question 3
function SomeDeleteRowFunction() {
      var td = event.target.parentNode; 
      var tr = td.parentNode; 
      tr.parentNode.removeChild(tr);
}

//question 5
min = document.getElementById("decrement")
add = document.getElementById("increment")
int = document.getElementById("number")
integer = 0
const inc = () =>{
    integer+=1
    return int.innerHTML = integer
}
const dec = () =>{
    integer-=1
    return int.innerHTML = integer
}




 //chapter 49 to 52 //
//Question 1
var show = document.getElementById("ptag")
const sub = () =>{
    val = document.getElementById("inpu").value 
    va = document.getElementById("pswrd").value 
    alert(val)
    show.innerHTML = `Your name is ${val} and your password is ${va}`
}

//Question 2
a = document.getElementById("para")
const read = () => a.innerHTML = "abcdefghijklmnopqrstuvwxyz"


//question 3
var table = document.getElementById("table") 
 function addtodo(){
     var todoitem = document.getElementById("todo-item");
     var td = document.createElement('td')
     var tdtext = document.createTextNode(todoitem.value)
     td.appendChild(tdtext)
     var delbtn = document.createElement("button")
     var deltext = document.createTextNode("DELETE")
     delbtn.setAttribute("class","btn")
     delbtn.setAttribute("onclick","deleteitem(this)")
     delbtn.appendChild(deltext)
     var editbtn = document.createElement("button")
     var edititext = document.createTextNode("EDIT")
     editbtn.append(edititext)
     editbtn.setAttribute("onclick","edititem(this)")


     td.appendChild(delbtn)
     td.appendChild(editbtn)
     table.appendChild(td) 
     todoitem.value = ""
 } 
 function deleteitem(e){
     e.parentNode.remove()
 }
 function deleteall(){
     table.innerHTML=""
 }
 function edititem(e){
     var val = e.parentNode.firstChild.nodeValue
     var editValue = prompt("Enter edit STUDENT name",val)
     e.parentNode.firstChild.nodeValue=editValue
 } 
 

 //question 1.1
 var ele = document.getElementById("main-content")

 //question 1.2
 var x= ele.childElementCount;
 //console.log(x)
 x=x*2
 for(var i=0;i<x;i++){

         console.log(ele.childNodes[i])
}



//question 1.3
for (var i=0;i<5;i++){
 var list = document.getElementById("main-content").childNodes;
 var nname = list[i].textContent
 
var h1 = document.createElement('h1');
var h1text = document.createTextNode(nname)
h1.appendChild(h1text)
document.body.appendChild(h1);
}

//question 1.4
var inp = document.getElementById("first-name")
inp.value="Syed Muhammad"

//question 1.5
var inp = document.getElementById("last-name")
inp.value="Shahzeb"
var inp = document.getElementById("email")
inp.value="Shahzeb@gmail.com"



//question 2.1
var first = document.getElementById("form-content");
var nytpe = first.nodeType;
var h1 = document.createElement('h1');
var h1text = document.createTextNode(nytpe)
h1.appendChild(h1text)
document.body.appendChild(h1);


//question 2.2
var f = document.getElementById("lastName");
var nytpe = f.nodeType;
var h1 = document.createElement('h1');
var h1text = document.createTextNode(nytpe)
h1.appendChild(h1text)
document.body.appendChild(h1);


//question 2.3
var f = document.getElementById("lastName");
f.textContent="Update Content"



//question 2.4
var a = document.getElementById("main-content")
ab = a.firstChild.textContent
var h1 = document.createElement('h1');
var h1text = document.createTextNode(ab)
h1.appendChild(h1text)
document.body.appendChild(h1);

yz = a.lastChild.textContent
var h1 = document.createElement('h1');
var h1text = document.createTextNode(yz)
h1.appendChild(h1text)
document.body.appendChild(h1);


//question 2.6
var e = document.getElementById("email")
var ntype = e.parentNode.nodeType
var h1 = document.createElement('h1');
var h1text = document.createTextNode(ntype)
h1.appendChild(h1text)
document.body.appendChild(h1);



