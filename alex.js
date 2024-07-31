document.getElementById('main-page').addEventListener('click', function() {
    this.style.transform = 'scale(0)';
    this.style.opacity = '0';

    setTimeout(() => {
        document.getElementById('container').style.display = 'block';
        for (let i = 0; i < 5; i++) {
            let smallPage = document.createElement('div');
            smallPage.className = 'small-page';
            smallPage.innerText = 'Text ' + (i + 1);

            // Random position for demonstration
            let x = Math.random() * (window.innerWidth - 100);
            let y = Math.random() * (window.innerHeight - 100);

            smallPage.style.transform = `translate(${x}px, ${y}px)`;

            document.getElementById('container').appendChild(smallPage);

            setTimeout(() => {
                smallPage.style.opacity = '1';
            }, 100);
        }
    }, 500);
});
