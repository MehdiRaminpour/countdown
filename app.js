const countdown = () => {
    const countDate = new Date("February 7 , 2022 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = countDate - now;

    const seconds = 1000;
    const minutes = seconds * 60;
    const hours = minutes * 60;
    const days = hours * 24;

    //how to calculate
    let textDays = Math.floor(gap / days);
    let textHours = Math.floor((gap % days) / hours);
    let textMinutes = Math.floor((gap % hours) / minutes);
    let textSeconds = Math.floor((gap % minutes) / seconds);

    textDays = textDays < 10 ? "0" + textDays : textDays;
    textHours = textHours < 10 ? "0" + textHours : textHours;
    textMinutes = textMinutes < 10 ? "0" + textMinutes : textMinutes;
    textSeconds = textSeconds < 10 ? "0" + textSeconds : textSeconds;

    document.querySelector(".days").innerText = textDays;
    document.querySelector(".hours").innerText = textHours;
    document.querySelector(".minutes").innerText = textMinutes;
    document.querySelector(".seconds").innerText = textSeconds;

}

setInterval(countdown, 1000);