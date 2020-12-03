// var no=prompt("Type some input");
// alert("your input is"+no);
function switcher(exp)
{
  switch (exp) {
    case "w":
      var aud1 = new Audio("sounds/crash.mp3"); //storing the audio file onto the object
      aud1.play();

    case "a":
      var aud2 = new Audio("sounds/kick-bass.mp3"); //storing the audio file onto the object
      aud2.play();

    case "s":
      var aud3 = new Audio("sounds/snare.mp3"); //storing the audio file onto the object
      aud3.play();

    case "d":
      var aud4 = new Audio("sounds/tom-1.mp3"); //storing the audio file onto the object
      aud4.play();

    case "j":
      var aud5 = new Audio("sounds/tom-2.mp3"); //storing the audio file onto the object
      aud5.play();

    case "k":
      var aud6 = new Audio("sounds/tom-3.mp3"); //storing the audio file onto the object
      aud6.play();

    case "l":
      var aud7 = new Audio("sounds/tom-4.mp3"); //storing the audio file onto the object
      aud7.play();

    default:
      console.log("exp");
  }
}
function addAnimation(inp2)
{
  var activeButton=document.querySelector("."+inp2);
  // the html element to which we going to add class on

  activeButton.classList.add("pressed");
  
  setTimeout(function()
  {
    activeButton.classList.remove("pressed");
  },100);

}
//mouse click clicked
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function() {

    // this.style.color="white";
    var inp = this.innerHTML;
    switcher(inp);
    addAnimation(inp);
  });
}
// keyboard key pressed
document.addEventListener('keypress',function(event)
{
  switcher(event.key);
  addAnimation(event.key);
});

// var aud=new Audio("sounds/tom-1.mp3");//storing the audio file onto the object
//  aud.play();
