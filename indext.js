let a;
let b;
let c;

document.getElementById("submit").onclick = function(){
    a = document.getElementById("first").value;
    a = Number(a);
  
    b = document.getElementById("second").value;
    b = Number(b);
  
  
  c = a+b;
  
  document.getElementById("label").innerHTML = "Answer=" + c;
}

document.getElementById("submit2").onclick = function(){
    a = document.getElementById("first").value;
    a = Number(a);
  
    b = document.getElementById("second").value;
    b = Number(b);
  
  c = a-b;
  
  document.getElementById("label").innerHTML = "Answer=" + c;
}

document.getElementById("submit3").onclick = function(){
    a = document.getElementById("first").value;
    a = Number(a);
  
    b = document.getElementById("second").value;
    b = Number(b);
  
  
  c = a*b;
  
  document.getElementById("label").innerHTML = "Answer=" + c;
}

document.getElementById("submit4").onclick = function(){
  a = document.getElementById("first").value;
  a = Number(a);

  b = document.getElementById("second").value;
  b = Number(b);


c = a/b;

document.getElementById("label").innerHTML = "Answer=" + c;
}