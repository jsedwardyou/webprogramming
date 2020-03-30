var input_text = "Hello World!";
var panel = document.getElementById("panel_text");

var container = document.getElementById("container");
var notes = [
  {scenario: 1, intro: "This is the introduction.", que: "What is the weight of ....?"},
  {scenario: 2, intro: "This is the second scen.", que: "What is the second law of ...?"},
  {scenario: 3, intro: "This is the third thing.", que: "What is the third law of ...?"}
];
function terminal(cl, i) {
  var div = document.createElement('div');
  div.className = cl;
  container.appendChild(div);
  var txt = [notes[0].intro, notes[0].que].join('\n').split('');
  var i = 0;
  (function display() {
    if(i < txt.length) {
      div.innerHTML += txt[i].replace('\n', '<br />');
      ++i;
      setTimeout(display, 100);
    }
  })();
}
terminal('blueTh', 0);