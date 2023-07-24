//get all variable


let arrWorde=["Hello",
"Red",
"Testing",
"Youtube",
"Linkedin",
"Twitter",
"Color",
"Text",
"Height","Github","Leetcode",
"Internet","Python","Scala",
"Destructuring","Parading","Styling",
"Cascade","Documentation","Coding",
"Working","Dependoncies","Task",
"Runner","Roles","Test","Playing"]; 
var arrWordeCosntrol=arrWorde;
// let arrWorde=["compation","godzella","blackberry","deffinitive","chronologie"]


let ChekLeval= document.getElementById('levle');//mostawa ala3ib
let TimeAffich= document.getElementById('time-user');//wa9t ala3ib
let ButtonStar= document.getElementById('button-star');//zire albad2e 
let ContinarWorde= document.getElementById('upcoming-wordes');//kalimaaat al massfofa
let WordeAfich= document.getElementById('the-worde');//kalimat al2id5al
let InputOfWorde= document.getElementById('input-typing');//makan al id5al

let TimeLeft=document.getElementById('time');
let ScoreUser=document.getElementById('score');

let GamOver=document.getElementById('finish');
let TotalScor=document.getElementById('total');


let leval={
    "hard":2,
    "normal":3,
    "easy":5
}
var defuletleval="easy";
var defuletsocer=0;
        TotalScor.innerHTML=arrWorde.length;
        TimeLeft.innerHTML=leval[defuletleval];
        TimeAffich.innerHTML=leval[defuletleval];
        ChekLeval.innerHTML=defuletleval;
        ScoreUser.innerHTML=defuletsocer;
        
        

        InputOfWorde.onpaste=function(){
            return false;
        }
        
        var i=0;
        let spanMov= setInterval(function(){
            var spanMovElement =document.querySelector('#mv')
            if (i%2==0) {
                spanMovElement.style.transform="scale(2)"
            }else{
                spanMovElement.style.transform="scale(1)"
            }
            i++;
        },1000)
        

    var i=0;
    ButtonStar.onclick=function () {
        this.style.opacity='0';
        // this.style.left='100px';
        this.style.height='0';
        this.style.margin='0';
        this.style.padding='0';
        
        
        setTimeout(function(){
            ButtonStar.remove();
        }, 700);
        document.getElementById('realod').style.display='none';
        clearInterval(spanMov);
            this.style.display="block";
            InputOfWorde.focus();
            
            // generat function
        
            genWords();
            }
            
            
            
            
        
    function genWords() {
        //get random word from array
        randomWord=arrWorde[Math.floor(Math.random()*arrWorde.length)];
        let IndexOfWorde = arrWorde.indexOf(randomWord)
        arrWorde.splice(IndexOfWorde,1)
        WordeAfich.innerHTML=randomWord;
        ContinarWorde.innerHTML='';
        // generat upcoming-words
        for (let index = 0; index < arrWorde.length; index++) {
             var tndSpan=document.createElement('span');
            tndSpan.innerHTML=arrWorde[index];
            ContinarWorde.appendChild(tndSpan);
            
        }
        // call start play function
        startim()

    }
    

    function startim() {
        
        let minaseTimeLeft=setInterval(function(){
            TimeLeft.innerHTML--;
            if (+TimeLeft.innerHTML==0) {
                clearInterval(minaseTimeLeft);
                if(randomWord.toLowerCase()===InputOfWorde.value.toLowerCase()){
                    ScoreUser.innerHTML++;
                    InputOfWorde.value='';
                    TimeLeft.innerHTML=leval[defuletleval];
                    if(ScoreUser.innerHTML===TotalScor.innerHTML){
                        document.getElementById('finish').innerHTML="you Wine!!";
                        document.getElementById('finish').classList.add("good");
                        scrollTo({
                        left:0,
                        top:200,
                        behavior:"smooth",

                    })
                    }else{

                        return genWords();
                    }

                    
                }else{
                    document.getElementById('finish').innerHTML="loser!!";
                    document.getElementById('finish').classList.add("bad");
                    document.getElementById('realod').style.display='block';
                    scrollTo({
                        left:0,
                        top:200,
                        behavior:"smooth",

                    })
                    

                }
            }
        },1000)
        
            
        
    }


    document.getElementById('realod').onclick=function(){
        document.location.reload();
        
    }
    