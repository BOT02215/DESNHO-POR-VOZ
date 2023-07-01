x = 0;
y = 0;
screenWidth = 0;
screenHeight = 0;
apple = "";
speakData = "";
drawApple = "";

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function preload() {
  apple = loadImage("apple.png")
}

function start() {
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";
  recognition.start();
}

recognition.onresult = function (event) {
  console.log(event);

  content = event.results[0][0].transcript;
  if (content == "maçã") {
    document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content
    drawApple = "set"
  }
  else{
    document.getElementById("status").innerHTML = "A fala não foi reconhecida"
  }
}

function setup() {
  screenWidth = window.innerWidth;
  screenHeight = window.innerHeight;

  canvas = createCanvas(screenWidth, screenHeight - 150)
  canvas.position(0, 150)
}

function draw() {
  if (drawApple == "set") {
    image(apple, Math.random() * 600, Math.random() * 500, 50, 50)
    speakData = document.getElementById("status").innerHTML = "Maçã desenhada";
    speak()
    drawApple = "";
  }
}

function speak() {
  var synth = window.speechSynthesis;
  var utterThis = new SpeechSynthesisUtterance(speakData);
  synth.speak(utterThis);
  speakData = "";
}
