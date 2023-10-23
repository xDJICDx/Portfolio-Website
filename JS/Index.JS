
/*
------------------------------------------------------------------------------------------------------------------
JavaScript file for My Portfolio Website

Making and assigning values to variables
------------------------------------------------------------------------------------------------------------------
*/

let TextHi = document.getElementsByClassName("TextHi");
let TextName = document.getElementsByClassName("TextName");
let TextSD = document.getElementsByClassName("TextSD");
let buttons = document.getElementsByClassName("MainMenuButtons");
let Slider = document.getElementsByClassName("Slider")
const SliderBackground = document.getElementById("SliderBackground");
let AboutMeImg1 = document.getElementById("AboutmeImg1");
let AboutMeImg2 = document.getElementById("AboutmeImg2");
const MainMenuBody = document.getElementById("MainMenu");
const AboutMeBody = document.getElementById("Aboutme");
let SliderCheck = false;
let SliderOutBool = false;
let SliderInBool = true;
let movementout = 0;
let movementIn = 0;
let switchingImgBool = false;
let ImgCountABoutme = 0;
let AllPictures =[
    
]

/*amount of img used in aboutme -1*/
const MaxImgCount = 1;


/*
------------------------------------------------------------------------------------------------------------------
Items that play on load
------------------------------------------------------------------------------------------------------------------
*/


if(MainMenuBody != undefined){
    setTimeout(function(){
        ElementFadein(buttons, 300);
        ElementMoveIn(buttons, 180 , 1, true);
    } , 3500);
    
    setTimeout(function(){
        ElementFadein(TextHi, 100);
        ElementMoveIn(TextHi, 60 , 1, false);
    } , 500);
    
    
    setTimeout(function(){
        ElementFadein(TextName, 200);
        ElementMoveIn(TextName, 60 , 1, false);
    } , 1500);
    
    setTimeout(function(){
        ElementFadein(TextSD, 300);
        ElementMoveIn(TextSD, 60 , 1, false);
    } , 2500);
}


if(AboutMeBody != undefined){
    ImageSwitchABoutMe()
}






/*
------------------------------------------------------------------------------------------------------------------
Function 1 for fading in / out items
------------------------------------------------------------------------------------------------------------------
*/

function ElementFadein(elements, speed){

    let ColorAlpha = 0;
    let intervalopacity = null;

    clearInterval(intervalopacity);
    intervalopacity = setInterval(frameFadeIn, 2);

    function frameFadeIn(){
        if(ColorAlpha == speed){
            clearInterval(intervalopacity);
        } else {
            ColorAlpha++;
            if(elements.length > 0){
                for(let i = 0; i < elements.length; i++){
                    elements[i].style.opacity = ColorAlpha / speed
                }
            } else {
                elements.style.opacity = ColorAlpha / speed
            }
        }
    }
}

function ElementFadeout(elements, speed){

    let ColorAlpha = 0;
    let intervalopacity = null

    clearInterval(intervalopacity);
    intervalopacity = setInterval(frameFadeIn, 2);

    function frameFadeIn(){
        if(ColorAlpha == speed){
            clearInterval(intervalopacity);
        } else {
            ColorAlpha++;
            if(elements.length > 0){
                for(let i = 0; i < elements.length; i++){
                    elements[i].style.opacity = 1 - (ColorAlpha / speed)
                }
            } else {
                elements.style.opacity = 1 - (ColorAlpha / speed)
            }
        }
    }
}



/*
------------------------------------------------------------------------------------------------------------------
function for moving in elements
------------------------------------------------------------------------------------------------------------------
*/

function ElementMoveIn(elements, MaxMove, movespeed, DirectionUp){

    let movement = MaxMove;
    let intervalMovement = null

    clearInterval(intervalMovement);
    intervalMovement = setInterval(frameMoveIn, 2);

    function frameMoveIn(){
        if(movement < 2){
            clearInterval(intervalMovement);
        } else {
            movement/= (1 + movespeed/100)
            
            if(DirectionUp){
                for(let i = 0; i < elements.length; i++){
                    elements[i].style.marginTop = movement + "px" ;
                }
            } else if(!DirectionUp){
                for(let i = 0; i < elements.length; i++){
                    elements[i].style.marginLeft = movement + "px" ;
                }
            }
        }
    }
}

/*
------------------------------------------------------------------------------------------------------------------
function for sliding the slider out
------------------------------------------------------------------------------------------------------------------
*/

function SliderOut(){ 
    if(!SliderOutBool){
        SliderOutBool = true
        SliderInBool = false
        let intervalSlider = null; 
        movementout = 250 - movementIn;

        SliderBackground.style.display = "block"; 

        clearInterval(intervalSlider);
        intervalSlider = setInterval(frameSliderin, 2);
 
        function frameSliderin(){
            if(movementout < 2 || !SliderOutBool){
                clearInterval(intervalSlider);
            } else {
                movementout/= (1.01)
                for(let i = 0; i < Slider.length; i++){
                    Slider[i].style.marginLeft = (250 - movementout) + "px" ;
                }  
            }
        }
    }
}

/*
------------------------------------------------------------------------------------------------------------------
function for sliding the slider in 
------------------------------------------------------------------------------------------------------------------
*/

function SliderIn(){  
    if(!SliderInBool){
        SliderInBool = true;
        SliderOutBool = false;
        let intervalSlider = null;
        movementIn = 250 - movementout

        SliderBackground.style.display = "none";

        clearInterval(intervalSlider);
        intervalSlider = setInterval(frameSliderin, 2);

        function frameSliderin(){
            if(movementIn < 2 || !SliderInBool){
                clearInterval(intervalSlider);
            } else {
                movementIn/= (1.01)
                for(let i = 0; i < Slider.length; i++){
                    Slider[i].style.marginLeft = movementIn + "px" ;                   
                }  
            }
        }
    }
}

/*
------------------------------------------------------------------------------------------------------------------
Function for loading in a new page
------------------------------------------------------------------------------------------------------------------
*/

function NewPage(Page){
    window.location.href = Page
}

/*
------------------------------------------------------------------------------------------------------------------
Function for Switching Images
------------------------------------------------------------------------------------------------------------------
*/

function ImageSwitchABoutMe(){
    setTimeout(function(){
       
        ImageSwitchABoutMe();
        ElementFadeout(AboutmeImg1, 300)

        setTimeout(function(){
            let Img1 = AboutMeImg1.src
            let Img2 = AboutMeImg2.src

            AboutMeImg2.src = Img1
            AboutMeImg1.src = Img2
            AboutMeImg1.style.opacity = 1;

        }, 1400)
    },4000)
}




