document.getElementById('main-page').addEventListener('click', function() {
    const flipContainer = document.getElementById('main-page');
    const container = document.getElementById('container');

    if (container.style.display === 'block') {
        container.innerHTML = '';
        container.style.display = 'none';
        flipContainer.classList.remove('flip');
    } else {
        flipContainer.classList.add('flip');
        
        setTimeout(() => {
            container.style.display = 'block';
            const texts = [
                "Time flies, thanks to Dan for such an interesting course!",
                "A great team-coordinated game to save New York City from flood!",
                "You will be amazed by the perfect visualization system and graphic design of this game.",
                "If you were the city's AGENCY, would you choose cooperate or betray?",
                "Want more? Contact us, we support paid game development at a reasonable price!<br>Cornell M.S. AUD 24' Game Design Collaborative, Inc."
            ];

            const positions = [
                { x: -950, y: -700 }, // Top-left
                { x: -250, y: -700 },  // Top-right
                { x: -950, y: -350 },  // Bottom-left
                { x: -250, y: -350 },   // Bottom-right
                { x: -605, y: -200 }      // Bottom-center
            ];

            for (let i = 0; i < texts.length; i++) {
                let smallPage = document.createElement('div');
                smallPage.className = 'small-page';
                smallPage.innerHTML = texts[i]; 

                smallPage.style.transform = `translate(${positions[i].x}px, ${positions[i].y}px)`;

                container.appendChild(smallPage);

                setTimeout(() => {
                    smallPage.style.opacity = '1';
                }, 100);
            }
        }, 600);
    }
});
