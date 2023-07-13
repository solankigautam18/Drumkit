// Detecting Button Press:
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<numberOfDrumButtons;i++){

    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML;

        makeSound(buttonInnerHTML);

        // buttonInnerHTML(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML)
        
    } );
}

// Detecting Keyboard Press:
document.addEventListener("keypress", function(event){

   makeSound(event.key);
 
//    buttonInnerHTML(event.key);
      buttonAnimation(event.key)

});

function makeSound (key) {
 
    switch (key) {
        case "w":
            var drum1 = new Audio ("sounds/drum1.wav");
            drum1.play();
            break;

            case "a":
            var drum2 = new Audio ("sounds/drum2.wav");
            drum2.play();
            break;

            case "s":
            var drum3 = new Audio ("sounds/drum3.wav");
            drum3.play();
            break;

            case "d":
            var drum4 = new Audio ("sounds/drum4.wav");
            drum4.play();
            break;

            case "j":
            var drum5 = new Audio ("sounds/drum5.wav");
            drum5.play();
            break;

            case "k":
            var drum6 = new Audio ("sounds/drum6.wav");
            drum6.play();
            break;

            case "l":
            var drum7 = new Audio ("sounds/drum7.wav");
            drum7.play();
            break;
    
        default:

        // console.log(buttonInnerHTML);
            
    }

}

function buttonAnimation(currentKey){
   var activeButton = document.querySelector("."+ currentKey);

   activeButton.classList.add("pressed");

   setTimeout(function(){
    activeButton.classList.remove("pressed");
   }, 100);
   
}











