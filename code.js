let regArray = ["cat","dog","hamster","canary","pig","horse","sheep","cow",
                        "wolf","lion","bear","shark","ant","fly","wasp","spider"];
var stack = [];
var attemptStadck = [];
var onOff = [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true]
var tries = 4;
var colorWheel = ["brown","orange","purple","black"];
var colorIndex =- 0;
// checks for winner function
function stackEnabled(index){
  stack = [];
  for (let x =0; x<16;x++){if(onOff[x]){stack.push(x.toString())}}
  return stack[index];
}
function disableButtons() {
  for(let x =0;x<4;x++){document.getElementById(stackEnabled(x)).disabled = false;document.getElementById(stackEnabled(x)).style.backgroundColor = colorWheel[colorIndex]}
}
let correct = function (){
  if(attemptStadck.includes("cat")&&attemptStadck.includes("dog")&&attemptStadck.includes("hamster")&&attemptStadck.includes("canary")){ return true}
  if(attemptStadck.includes("pig")&&attemptStadck.includes("horse")&&attemptStadck.includes("sheep")&&attemptStadck.includes("cow")){ return true}
  if(attemptStadck.includes("wolf")&&attemptStadck.includes("lion")&&attemptStadck.includes("bear")&&attemptStadck.includes("shark")){ return true}
  if(attemptStadck.includes("ant")&&attemptStadck.includes("fly")&&attemptStadck.includes("wasp")&&attemptStadck.includes("spider")){ return true}
  else {return false}
}
// Clean Button
function clearAll(){
  for (let x =0;x<=16;x++){document.getElementById(x.toString()).style.backgroundColor = "#08052b"}
}
//stack print function
function stackPrint(stack=[]) {
  let stackLinePrint = "";
  for (let x = 0;x<stack.length;x++){stackLinePrint=stackLinePrint+" ,"+stack[x]}
  return stackLinePrint;
}
//stack clean function
function stackClear(stack = []){
   while (stack.length>0){
     stack.pop();
   }
}
var randomStack = function (index){

  while(stack.length<16){
    let num =Math.round(Math.random()*15);
    if(!stack.includes(num)){stack.push(num);}
  }
  return stack[index];
}
  //Start Button Event
document.getElementById("startBtn").onclick = function (){

  for(let x = 0; x<16; x++ ){
    document.getElementById(x.toString()).innerHTML = regArray[randomStack(x)];
  }
}

//Summit Button
document.getElementById("summitBtn").onclick = function () {
  console.log(correct(attemptStadck));
  let message;

  if(correct(attemptStadck)){message="You got one right!!!!"; disableButtons() ;colorIndex++;console.log("you are right!!!") }
  else{ message = "Wrong, try again :( "; stackClear(attemptStadck);clearAll();}
  document.getElementById("message1").innerHTML = message;

  console.log("summit/clear");
}
// Method for Input Set up
function wordButton(id,index){
  item = document.getElementById(id).innerHTML.toString();
  if(onOff[index]) {document.getElementById(id).style.backgroundColor = colorWheel[colorIndex]; console.log("if statement"); onOff[index]=false; attemptStadck.push(item);tries++}
  else{document.getElementById(id).style.backgroundColor = "#08052b"; attemptStadck.pop(); onOff[index]=true; console.log("else statement");tries-- }

}
//16 button set up
/*1*/document.getElementById("0").onclick = function (){ wordButton("0",0)};
/*2*/document.getElementById("1").onclick = function (){ wordButton("1",1)};
/*3*/document.getElementById("2").onclick = function (){ wordButton("2",2)};
/*4*/document.getElementById("3").onclick = function (){ wordButton("3",3)};
/*5*/document.getElementById("4").onclick = function (){ wordButton("4",4)};
/*1*/document.getElementById("5").onclick = function (){ wordButton("5",5)};
/*1*/document.getElementById("6").onclick = function (){ wordButton("6",6)};
/*1*/document.getElementById("7").onclick = function (){ wordButton("7",7)};
/*1*/document.getElementById("8").onclick = function (){ wordButton("8",8)};
/*1*/document.getElementById("9").onclick = function (){ wordButton("9",9)};
/*1*/document.getElementById("10").onclick = function (){ wordButton("10",10)};
/*1*/document.getElementById("11").onclick = function (){ wordButton("11",11)};
/*1*/document.getElementById("12").onclick = function (){ wordButton("12",12)};
/*1*/document.getElementById("13").onclick = function (){ wordButton("13",13)};
/*1*/document.getElementById("14").onclick = function (){ wordButton("14",14)};
/*1*/document.getElementById("15").onclick = function (){ wordButton("15",15)};
/*1*/document.getElementById("16").onclick = function (){ wordButton("16",16)};
