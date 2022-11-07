blinkingColors = () => {
    const colorClasses = ['text-danger', 'text-warning', 'text-success', 'text-primary'];
    const nameInstances = document.querySelectorAll('.name');
    nameInstances.forEach((nameInstance) => {
        nameInstance.removeAttribute('class');
        const randomColorClass = colorClasses[Math.floor(Math.random() * colorClasses.length)];
        nameInstance.classList.toggle(randomColorClass);
    });
}

setInterval(blinkingColors, 1000);

goTo = (keyword) => {
    const identifier = '#' + keyword;
    const portfolio = document.querySelector(identifier);
    portfolio.scrollIntoView({behavior: 'smooth'});
}

scrollFunction = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("header").style.fontSize = "16px";
    } else {
        document.getElementById("header").style.fontSize = "40px";
    }
};

window.onscroll = scrollFunction;