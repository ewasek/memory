var elementsNumber = 16;
var wrapper = document.querySelector('.wrapper');
var element = document.createElement('div');
var allDivs = document.querySelectorAll('div.box');

// Tworzenie pojedynczego diva
function createElement() {
    element = document.createElement('div');
    element.classList.add('box');
    wrapper.appendChild(element);
}

//dodanie x kart memory
function addElements() {
    for (let i = 0; i < elementsNumber; i++) {
        createElement();
    }
}

addElements();

// Sortowanie zdjęć

var images = [
    {
        src: '/img/1.jpg',
        id: 1
    },
    {
        src: '/img/2.jpg',
        id: 2
    },
    {
        src: '/img/3.jpg',
        id: 3
    },
    {
        src: '/img/4.jpg',
        id: 4
    },
    {
        src: '/img/5.jpg',
        id: 5
    },
    {
        src: '/img/6.jpg',
        id: 6
    },
    {
        src: '/img/7.jpg',
        id: 7
    },
    {
        src: '/img/8.jpg',
        id: 8
    },
    {
        src: '/img/9.jpg',
        id: 1
    },
    {
        src: '/img/10.jpg',
        id: 8
    },
    {
        src: '/img/11.jpg',
        id: 2
    },
    {
        src: '/img/12.jpg',
        id: 3
    },
    {
        src: '/img/13.jpg',
        id: 4
    },
    {
        src: '/img/14.jpg',
        id: 5
    },
    {
        src: '/img/15.jpg',
        id: 6
    },
    {
        src: '/img/16.jpg',
        id: 7
    }];

function shuffle(images) {
    var currentIndex = images.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = images[currentIndex];
        images[currentIndex] = images[randomIndex];
        images[randomIndex] = temporaryValue;
    }

    return images;
}
shuffle(images);

// Wyświetlanie/dodawanie zdjęć

function displayImages() {

    allDivs = document.querySelectorAll('div.box');
    for (let i = 0; i < images.length; i++) {
        var img = document.createElement('img');
        img.setAttribute('src', images[i].src);
        allDivs[i].appendChild(img);
    }
}
displayImages();


//sprawdzanie elementów

// pokaż img
let clickCounter = 0;
var clickedImgObjects = [];
var clickedImg = [];

function checkIfPair(divBox, clickedImg) {

    console.log(clickedImg)
    if (clickedImgObjects[0].id != clickedImgObjects[1].id) {
        setTimeout(function () {
            clickedImg[0].classList.remove("show");
            clickedImg[1].classList.remove("show");
        }, 1000)
        clickCounter = 0;

    } else {
        return
    }

    if (clickedImgObjects.length == 2) {
        clickedImgObjects = [];
    }
}



for (let i = 0; i < allDivs.length; i++) {
    allDivs[i].addEventListener('click', onClick.bind(this, i))
}

function onClick(i, e) {
    clickedImgObjects.push(images[i]);
    clickCounter++;
    if (clickCounter <= 2) {
        var divBox = e.target;
        var image = divBox.firstChild;
        image.classList.toggle('show');
        console.log(clickedImgObjects);
        clickedImg.push(image);
        if (clickedImgObjects.length == 2) {

            checkIfPair(divBox, clickedImg);
        }
    } else {
        return;
    }
}









