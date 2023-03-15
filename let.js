let intro = document.querySelector(".intro");
let play = document.querySelector(".play");
let avoidrock = document.querySelector('.avoidrock');
let controck = document.querySelector('.controck');
let no1 = document.querySelector('.no1');
let no2 = document.querySelector('.no2');
let no3 = document.querySelector('.no3');
let no4 = document.querySelector('.no4');
let tes = document.querySelector('.tes');
let te1 = document.querySelector('.te1');
let te2 = document.querySelector('.te2');
let torolltown = document.querySelector('.torolltown');
let rolltown = document.querySelector('.rolltown');
let inchurch = document.querySelector('.inchurch');
let crown = document.querySelector('.crown');
let banish = document.querySelector('.banish');
let outrolltown = document.querySelector('.outrolltown');
let lead = document.querySelector('.lead');
let years = document.querySelector('.years');
let offer = document.querySelector('.offer');
let accept = document.querySelector('.accept');
let continuerule = document.querySelector('.continuerule');
/*__________________Buttons______________________ */
let playbutton =     document.querySelector(".playbutton");
let left = document.querySelector('.left');
let right = document.querySelector('.right');
let yesroll = document.querySelector('.yesroll');
let noroll = document.querySelector('.noroll');
let noroll1 = document.querySelector('.noroll1');
let noroll2 = document.querySelector('.noroll2');
let noroll3 = document.querySelector('.noroll3');
let norollend = document.querySelector('.norollend');
let comfort = document.querySelector('.comfort');
let rollchurch = document.querySelector('.rollchurch');
let makespeech = document.querySelector('.makespeech');
let takecrown = document.querySelector('.takecrown');
let donttake = document.querySelector('.donttake');
let poweryes = document.querySelector('.poweryes');
let powerno = document.querySelector('.powerno');
let continuerock = document.querySelector('.continuerock');
let continueroll = document.querySelector('.continueroll');
let continuehos = document.querySelector('.continuehos');
let continuecomfort = document.querySelector('.continuecomfort');
let contban = document.querySelector('.contban');
let contout = document.querySelector('.contout');
let contgod = document.querySelector('.contgod');
let contyears = document.querySelector('.contyears');
let contaccept = document.querySelector('.contaccept');
let contrule = document.querySelector('.contrule');
let contrulebtn = document.querySelector('.contrulebtn');
let church = document.querySelector('.church');
/*___________________Ending____________________*/
let badending = document.querySelector('.badending');
let trueending = document.querySelector('.trueending');
let tyrantending = document.querySelector('.tyrantending');
let goodending = document.querySelector('.goodending');
let repeatending = document.querySelector('.repeatending');

playbutton.onclick=function(){
    play.style.display = "block";
    intro.style.display = "none";
}
left.onclick=function(){
    badending.style.display = "block";
    play.style.display = "none";
}
right.onclick=function(){
    avoidrock.style.display = "block";
    play.style.display = "none";
}
continuerock.onclick=function(){
    controck.style.display = "block";
    avoidrock.style.display = "none";
}
yesroll.onclick=function(){
    torolltown.style.display = "block";
    controck.style.display = "none";
}
noroll.onclick=function(){
    no1.style.display = "block";
    controll.style.display = "none";
    
}
noroll1.onclick=function(){
    no2.style.display = "block";
    no1.style.display = "none";
}
noroll2.onclick=function(){
    no3.style.display = "block";
    no2.style.display = "none";
}
noroll3.onclick=function(){
    no4.style.display = "block";
    no3.style.display = "none";
}
norollend.onclick=function(){
    tes.style.display = "block";
    no4.style.display = "none";
}
continuehos.onclick=function(){
    te1.style.display = "block";
    tes.style.display = "none";

}
comfort.onclick=function(){
    te2.style.display = "block";
    te1.style.display = "none";
}
continuecomfort.onclick=function(){
    trueending.style.display = "block";
    te2.style.display = "none";
}
continueroll.onclick=function(){
    rolltown.style.display = "block";
    torolltown.style.display = "none";
}
church.onclick=function(){
    inchurch.style.display = "block";
    rolltown.style.display = "none";
}
rollchurch.onclick=function(){
    crown.style.display = "block";
    inchurch.style.display = "none";
}
makespeech.onclick=function(){
    banish.style.display = "block";
    inchurch.style.display = "none";
}
contban.onclick=function(){
    outrolltown.style.display = "block";
    banish.style.display = "none";
}
contout.onclick=function(){
    repeatending.style.display = "block";
    outrolltown.style.display = "none";
}
takecrown.onclick=function(){
    lead.style.display = "block";
    crown.style.display = "none";
}
donttake.onclick=function(){
    banish.style.display = "block";
    crown.style.display = "none";
}
contgod.onclick=function(){
    years.style.display = "block";
    lead.style.display = "none";
}
contyears.onclick=function(){
    offer.style.display = "block";
    years.style.display = "none";
}
poweryes.onclick=function(){
    accept.style.display = "block";
    offer.style.display = "none";
}
contaccept.onclick=function(){
    continuerule.style.display = "block";
    accept.style.display = "none";
}
contrule.onclick=function(){
    tyrantending.style.display = "block";
    continuerule.style.display = "none";
}
powerno.onclick=function(){
    goodending.style.display = "block";
    offer.style.display = "none";
}