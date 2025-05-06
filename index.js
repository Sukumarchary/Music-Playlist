var sound = document.querySelectorAll(".pspk").length;
var audio = null;


for(var i=0; i<sound; i++){
    document.querySelectorAll(".pspk")[i].addEventListener("click" ,function (){
        var buttoninnerhtml = this.innerHTML;

        if (audio){
            audio.pause();
            audio.currentTime = 0;
        }
        switch (buttoninnerhtml) {
            case "DekhoDekho":
                 audio = new Audio("music/dekho-dekho.mp3");
                 audio.play();
            
                break;
                case "Dilse":
                     audio = new Audio("music/Dilse.mp3");
                    audio.play();
                    break;
                    case "AmmayaSannaga":
                     audio = new Audio("music/Ammaye-Sannaga.mp3");
                    audio.play();
                    break;
                    case "Bapu-gari-bommo":
                    audio = new Audio("music/Bapu-Gari-Bommo.mp3");
                    audio.play();
                    break;
                    case "ninu-chudagane":
                    audio = new Audio("music/Ninnu.mp3");
                    audio.play();
                    break;


        
            default:
                break;
        }
    } );
}