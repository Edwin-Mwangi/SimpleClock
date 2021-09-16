//setting up a digital clock
const clock =document.querySelector('.clock');

const tick = () =>{
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now .getSeconds();

    //console.log(hours, minutes, seconds);
    //html to inject
    const html = `
    <span>${hours}<span> :
    <span>${minutes}</span> :
    <span>${seconds}</span>  
    
    `
    clock.innerHTML = html;
};

setInterval(tick, 1000); //creating a new date every second

