var colors = ["red", "pink", "yellow", "orange",
  "grey", "black", "white", "blue", "purple", "brown", "Lightblue"];
var obj=[];
var bg = [];
var level = document.createElement('div');
var c = 0;
var person = prompt("Please enter your name", "Emanuel");
var name1 = document.createElement('div');
name1.innerText = `Hello ${person}!!!`;
name1.id = "alo";
name1.addEventListener("click", function () {
  person = prompt("Please enter your name", "Emanuel");
  name1.innerText = `Hello ${person}!!!`;

})
document.body.appendChild(name1);

var ran1;
var btn = document.getElementById('my_first_button');
btn.addEventListener("click", function () {
for (var i = 0;i <bg.length; i++){
    check(bg[i],i,btn);
  }
  c++;

  ran1 = Math.floor(Math.random() * 10);
  bg.push(ran1);
  // console.log(bg);
  document.body.style.backgroundColor = colors[ran1];

  

  // console.log("ran1"+"  "+ran1);
  //  console.log(c+"c");
  level.innerHTML = "LEVEL" + "  " + c;
  level.id = "le";
  document.body.appendChild(level);


  var div = document.getElementById('a');
  var num = Math.floor(Math.random() * 10);
  // console.log(num);
  div.innerText = num;
  div.style.fontSize = "250px";
  div.style.textAlign = "center";

  var ran2 = Math.floor(Math.random() * 10)
  while (ran2 === ran1) {
    ran2 = Math.floor(Math.random() * 10)
  }
  div.style.color = colors[ran2];
  document.body.appendChild(div);

obj.push(new mis(ran1,num,ran2));
console.log(obj);
})


function check(ran1,i,button) {
  if (c >= 1) {
    var val = +prompt(`color b-g level ${i + 1}?\n red - 0 \npink - 1\nyellow - 2\norange - 3 \ngrey - 4 \nblack - 5\nwhite - 6 \nblue - 7\n purple - 8\n brown - 9\n Lightblue - 10`, "Press number 0-10");
    console.log(val);
    console.log(ran1);

    if (val === ran1) {
      alert("Goooooooooood!!!!");
    }
    else {
      alert(`I'm sorry - you lost!!!!
      your Grade:${i*10}`);
      button.disabled = true;

    }
  }
}

function mis(colBg,numDiv,colNum){
  this.colBg = colBg;
  this.numDiv = numDiv;
  this.colNum = colNum;  
}