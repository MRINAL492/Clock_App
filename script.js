let hour = document.querySelector('#hour');
let minute = document.querySelector('#minute');
let second = document.querySelector('#second');



setInterval(()=>{
    let day = new Date();

    hh = day.getHours();
    mm = day.getMinutes();
    ss = day.getSeconds();

    hrotation = 30*hh + mm/2;
    mrotation = 6*mm;
    srotation = 6*ss;

    hour.style.transform = `rotateZ(${hrotation}deg)`;
    minute.style.transform = `rotateZ(${mrotation}deg)`;
    second.style.transform = `rotateZ(${srotation}deg)`;

},1000);








