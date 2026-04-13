function fun1(){
document.getElementById("demo1").innerHTML = document.getElementById("d").innerHTML;
document.getElementById("demo2").innerHTML = document.getElementById("d").firstChild.nodeValue;
document.getElementById("demo3").innerHTML = document.getElementById("d").childNodes[0].nodeValue;
}