function light_on() {
    const btn = document.getElementById('light-button');
    const audio = document.getElementById("song");
    audio.play();
    document.body.style.backgroundColor = "pink";
    document.body.style.color = "black";
    btn.textContent = "Decorate place ✨";
    btn.onclick = decoration;
}

function decoration() {
    const balloonImages = ['imgs/b1.png', 'imgs/b2.png', 'imgs/b3.png', 'imgs/b4.png', 'imgs/b5.png', 'imgs/b6.png', 'imgs/b7.png'];
    for (let i = 0; i < 80; i++) {
        const container = document.createElement('div');
        container.style.position = 'absolute';
        container.style.bottom = '0';
        container.style.left = Math.random() * 100 + 'vw';
        container.style.animation = `floatUp 5s ease-out forwards`;
        container.style.animationDelay = Math.random() * 2 + 's';

        const img = document.createElement('img');
        img.src = balloonImages[Math.floor(Math.random() * balloonImages.length)];
        img.classList.add('balloon');
        img.style.width = 40 + Math.random() * 40 + 'px';

        container.addEventListener('animationend', () => {
        img.classList.add('sway');
        });

        container.appendChild(img);
        document.body.appendChild(container);
    }

    const decor = document.createElement('img');
    decor.src = 'imgs/decoration.png';
    decor.className = 'decoration';
    document.body.appendChild(decor);

    const btn = document.getElementById('light-button');
    btn.textContent = "Invite guests 😼";
    btn.onclick = gifs;
}

function gifs() {
    const catsDiv = document.getElementById("cats");

    const gifData = [
        { src: "gifs/4.gif", width: 250 },
        { src: "gifs/2.gif", width: 250 },
        { src: "gifs/5.gif", width: 400 },
        { src: "gifs/7.gif", width: 250 },
        { src: "gifs/8.gif", width: 250 },
        { src: "gifs/10.gif", width: 250 }
    ];

    catsDiv.innerHTML = "";

    gifData.forEach(gif => {
        const img = document.createElement("img");
        img.src = gif.src;
        img.style.width = gif.width + "px";
        
        catsDiv.appendChild(img);
    });

    const btn = document.getElementById('light-button');
    btn.textContent = "Cut Cake 🔪";
    btn.onclick = cake;
}

function cake() {
    const message = `<b>Happy Birthday Adithya!!</b><br>
    21 already?? Damn, aunty vibes ahhh 😭<br>
    The best part is you can drink 🍻 in Tamil Nadu legally now 😈<br> 
    When are you giving me a treat, gal?? (This one's separate, hackathon treat is a whole other thing okay va 🔪)<br>
    Hope you have an amazing year ahead, less than 6 months left before you disappear and forget all 😤 it's fine, I’ll survive.<br>
    Enjoy your special day to the fullest! 🥳🎉<br>`;
    document.getElementById("popup-message").innerHTML = message;
    document.getElementById("overlay").style.display = "block";
    document.getElementById("popup").style.display = "block";

    document.body.style.pointerEvents = "none"; 
    document.getElementById("popup").style.pointerEvents = "auto";
    document.getElementById("overlay").style.pointerEvents = "auto";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
    document.getElementById("overlay").style.display = "none";

    document.body.style.pointerEvents = "auto";
}