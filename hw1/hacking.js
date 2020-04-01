var input_text = "Hello World!";
var panel = document.getElementById("panel_text");

var container = document.getElementById("container");

function displayText(classname, container, text, speed){
  var div = document.createElement('div');
  div.className = classname;
  container.appendChild(div);

  var i = 0;
  (function display(){
    if(i < text.length){
      div.innerHTML += text[i].replace('\n', '<br />');
      ++i;
      setTimeout(display, speed);
    }
  })();
}

displayText("test", container, "Hello", 10);