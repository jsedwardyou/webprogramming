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
    displayDog();
  }
  else{
    displayText("meh", panel, "nah too bad", 10);

    displayDog();
  }
}

function displayDog(){
  var img = document.createElement('img');
  img.src = './cute_dog.jpg';
  img.style.width = '500px';
  img.style.height = '800px';
  panel.appendChild(img);
}

var intro_text = "Hi! \n \
  This is a dummy website created by Jooseung You! \n \
  Would you like to see a dog? \n \
  (y/n)";

displayText("test", panel, intro_text, 10);
document.addEventListener("keydown", onKeyPress);