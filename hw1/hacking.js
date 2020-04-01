var panel = document.getElementById("panel_text");
var isDisplayingText = false;
function displayText(classname, container, text, speed){
  isDisplayingText = true;
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
    else{
      isDisplayingText = false;
    }
  })();

  
}

function onKeyPress(pressedKey){
  if(isDisplayingText) return;
  if(pressedKey.key == 'y'){
    console.log("Display Dog");
  }
  else{
    console.log("WHAT! WHY NOT!");
  }
}

var intro_text = "Hi! \n \
  This is a dummy website created by Jooseung You! \n \
  Would you like to see a dog? \n \
  (y/n)";

displayText("test", panel, intro_text, 50);
document.addEventListener("keydown", onKeyPress);