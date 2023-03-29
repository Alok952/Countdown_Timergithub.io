


const newYears="1 jan 2024";

const daysEl= document.getElementById('days');
const hoursEl= document.getElementById('hours');
const minsEl= document.getElementById('mins');
const secondsEl=document.getElementById('seconds');


function countdown(){
    const newYearsDate= new Date(newYears);
    const currentDate= new Date();
    console.log(newYearsDate-currentDate);
    const TotalSeconds=(newYearsDate-currentDate)/1000;
    const days=Math.floor(TotalSeconds/3600/24);
    const hours=Math.floor(TotalSeconds/3600) % 24;
    const mins=Math.floor(TotalSeconds/60) % 60;
const seconds= Math.floor(TotalSeconds % 60);
    if(daysEl){
    daysEl.innerHTML= days;}
    else{
        console.log('element not found')
    }
    hoursEl.innerHTML= hours;
    minsEl.innerHTML= mins;
    secondsEl.innerHTML= seconds;
    

}

countdown();
setInterval(countdown,1000);