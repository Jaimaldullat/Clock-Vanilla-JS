(function() {
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const hourHand = document.querySelector('.hour-hand');
    const tickSound = document.querySelector(".tick");

    function setDate() {
        const now = new Date();
        const seconds = now.getSeconds();
        const secondsDegree = ((seconds / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondsDegree}deg)`;

        const minutes = now.getMinutes();
        const minutesDegree = ((minutes / 60) * 360) + 90;
        minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

        const hours = now.getHours();
        const hoursDegree = ((hours / 24) * 360) + 90;
        hourHand.style.transform = `rotate(${hoursDegree}deg)`;
        tickSound.play();
    }

    setInterval(setDate, 1000);
}());