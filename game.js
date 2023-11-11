
document.getElementById("tap").addEventListener("click", function () { //game start action

    document.querySelector(".insideroad").style.zIndex = '1';
    const bgm = new Audio("assets/bgmusic.m4a");  //game start music
    bgm.play();
    bgm.loop = true;

    document.getElementById("tap").style.display = 'none'
    document.querySelector(".insideroad").style.animation = 'road infinite 20s linear' //road animation starts

    setInterval(() => {
        num = Math.floor(Math.random() * (360 - 330 + 1) + 330) //max and min positions applied for car1
        document.getElementById("car1").style.left =`${num}px`     
    }, 10000)
    setInterval(() => {
        num = Math.floor(Math.random() * (470 - 430 + 1) + 430) //max and min positions applied for car2
        document.getElementById("car2").style.left =`${num}px`
    }, 18000)
    setInterval(() => {
        num = Math.floor(Math.random() * (570 - 535 + 1) + 535) //max and min positions applied for car3
        document.getElementById("car3").style.left =`${num}px`
    }, 12000)
    setInterval(() => {
        num = Math.floor(Math.random() * (710 - 725 + 1) + 710) //max and min positions applied for car4
        document.getElementById("car4").style.left =`${num}px`
    }, 15500)
    setInterval(() => {
        num = Math.floor(Math.random() * (830 - 800 + 1) + 800) //max and min positions applied for car5
        document.getElementById("car5").style.left =`${num}px`
    }, 6500)
    setInterval(() => {
        num = Math.floor(Math.random() * (930 - 900 + 1) + 900) //max and min positions applied for car6
        document.getElementById("car6").style.left =`${num}px`
    }, 8300)
       // animation starts for all enemy cars
    document.getElementById("car1").style.animation = 'car1 infinite linear 10s'
    document.getElementById("car2").style.animation = 'car2 infinite linear 18s'
    document.getElementById("car3").style.animation = 'car3 infinite linear 12s'
    document.getElementById("car4").style.animation = 'car4 infinite linear 15.5s'
    document.getElementById("car5").style.animation = 'car5 infinite linear 6.5s'
    document.getElementById("car6").style.animation = 'car6 infinite linear 8.3s'
    document.getElementById("medical").style.animation = 'medical infinite linear 10s'
    document.getElementById("police").style.animation = 'police infinite linear 15s'

     // movements for usercar
        let A = 5.5
        let l = 34.5
        let carsound = new Audio("assets/carsound1.mp3");

        window.addEventListener("keydown", function (x) {

            if (x.keyCode == 38) {         //uparrow for forward
                A = A + 0.8
                carsound.pause();
                carsound.currentTime = 0;
                carsound.play(); //car moving sound

            }
            if (x.keyCode == 37) {        //left arrow for left move
                l = l - 1
                carsound.pause();
                carsound.currentTime = 0;
                carsound.play();
            }
            if (x.keyCode == 40) {          //downarrow for backward
                A = A - 1
                carsound.pause();
                carsound.currentTime = 0;
                carsound.play();
            }
            if (x.keyCode == 39) {         //right arrow for right move
                l = l + 1
                carsound.pause();
                carsound.currentTime = 0;
                carsound.play();
            }
            document.querySelector(".usercar").style.bottom = `${A}vh`
            document.querySelector(".usercar").style.left = `${l}vw`

        })

        let n = 0
        setInterval(() => {

            document.getElementById("scores").innerText = `SCORE:${n}`
            n = n + 1  //score adding

        //saving boundries of each sides of cars  

            var car1_left = Math.abs(document.getElementById("car1").getBoundingClientRect().left);
            var car1_right = Math.abs(document.getElementById("car1").getBoundingClientRect().right);
            var car1_top = Math.abs(document.getElementById("car1").getBoundingClientRect().top);
            var car1_bottom = Math.abs(document.getElementById("car1").getBoundingClientRect().bottom);

            var car2_left = Math.abs(document.getElementById("car2").getBoundingClientRect().left);
            var car2_right = Math.abs(document.getElementById("car2").getBoundingClientRect().right);
            var car2_top = Math.abs(document.getElementById("car2").getBoundingClientRect().top);
            var car2_bottom = Math.abs(document.getElementById("car2").getBoundingClientRect().bottom);

            var car3_left = Math.abs(document.getElementById("car3").getBoundingClientRect().left);
            var car3_right = Math.abs(document.getElementById("car3").getBoundingClientRect().right);
            var car3_top = Math.abs(document.getElementById("car3").getBoundingClientRect().top);
            var car3_bottom = Math.abs(document.getElementById("car3").getBoundingClientRect().bottom);

            var car4_left = Math.abs(document.getElementById("car4").getBoundingClientRect().left);
            var car4_right = Math.abs(document.getElementById("car4").getBoundingClientRect().right);
            var car4_top = Math.abs(document.getElementById("car4").getBoundingClientRect().top);
            var car4_bottom = Math.abs(document.getElementById("car4").getBoundingClientRect().bottom);

            var car5_left = Math.abs(document.getElementById("car5").getBoundingClientRect().left);
            var car5_right = Math.abs(document.getElementById("car5").getBoundingClientRect().right);
            var car5_top = Math.abs(document.getElementById("car5").getBoundingClientRect().top);
            var car5_bottom = Math.abs(document.getElementById("car5").getBoundingClientRect().bottom);

            var car6_left = Math.abs(document.getElementById("car6").getBoundingClientRect().left);
            var car6_right = Math.abs(document.getElementById("car6").getBoundingClientRect().right);
            var car6_top = Math.abs(document.getElementById("car6").getBoundingClientRect().top);
            var car6_bottom = Math.abs(document.getElementById("car6").getBoundingClientRect().bottom);

            var medical_left = Math.abs(document.getElementById("medical").getBoundingClientRect().left);
            var medical_right = Math.abs(document.getElementById("medical").getBoundingClientRect().right);
            var medical_top = Math.abs(document.getElementById("medical").getBoundingClientRect().top);
            var medical_bottom = Math.abs(document.getElementById("medical").getBoundingClientRect().bottom);

            var police_left = Math.abs(document.getElementById("police").getBoundingClientRect().left);
            var police_right = Math.abs(document.getElementById("police").getBoundingClientRect().right);
            var police_top = Math.abs(document.getElementById("police").getBoundingClientRect().top);
            var police_bottom = Math.abs(document.getElementById("police").getBoundingClientRect().bottom);

            var usercar_left = Math.abs(document.querySelector(".usercar").getBoundingClientRect().left);
            var usercar_right = Math.abs(document.querySelector(".usercar").getBoundingClientRect().right);
            var usercar_top = Math.abs(document.querySelector(".usercar").getBoundingClientRect().top);
            var usercar_bottom = Math.abs(document.querySelector(".usercar").getBoundingClientRect().bottom); 

        // collision detection between cars and road boundries
            if (usercar_left < 310 || usercar_right > 1010 || usercar_top < 10 || usercar_bottom > 650) {
                setTimeout(() => {
                    location.href="gameover.html"
                })
                
            }

            if (((car1_left < usercar_left && usercar_left < car1_right) || (car1_left < usercar_right && usercar_right < car1_right)) && ((car1_top < usercar_top && usercar_top < car1_bottom) || (car1_top < usercar_bottom && usercar_bottom < car1_bottom))) {

                setTimeout(() => {
                    location.href="gameover.html"
                })
                

            }
            if (((car2_left < usercar_left && usercar_left < car2_right) || (car2_left < usercar_right && usercar_right < car2_right)) && ((car2_top < usercar_top && usercar_top < car2_bottom) || (car2_top < usercar_bottom && usercar_bottom < car2_bottom))) {

                setTimeout(() => {
                    location.href="gameover.html"
                })
                
            }
            if (((car3_left < usercar_left && usercar_left < car3_right) || (car3_left < usercar_right && usercar_right < car3_right)) && ((car3_top < usercar_top && usercar_top < car3_bottom) || (car3_top < usercar_bottom && usercar_bottom < car3_bottom))) {

                setTimeout(() => {
                    location.href="gameover.html"
                })
                

            }
            if (((car4_left < usercar_left && usercar_left < car4_right) || (car4_left < usercar_right && usercar_right < car4_right)) && ((car4_top < usercar_top && usercar_top < car4_bottom) || (car4_top < usercar_bottom && usercar_bottom < car4_bottom))) {

                setTimeout(() => {
                    location.href="gameover.html"
                })
                

            }
            if (((car5_left < usercar_left && usercar_left < car5_right) || (car5_left < usercar_right && usercar_right < car5_right)) && ((car5_top < usercar_top && usercar_top < car5_bottom) || (car5_top < usercar_bottom && usercar_bottom < car5_bottom))) {

                setTimeout(() => {
                    location.href="gameover.html"
                })
                

            }
            if (((car6_left < usercar_left && usercar_left < car6_right) || (car6_left < usercar_right && usercar_right < car6_right)) && ((car6_top < usercar_top && usercar_top < car6_bottom) || (car6_top < usercar_bottom && usercar_bottom < car6_bottom))) {

                setTimeout(() => {
                    location.href="gameover.html"
                })
                

            }
            if (((medical_left < usercar_left && usercar_left < medical_right) || (medical_left < usercar_right && usercar_right < medical_right)) && ((medical_top < usercar_top && usercar_top < medical_bottom) || (medical_top < usercar_bottom && usercar_bottom < medical_bottom))) {

                setTimeout(() => {
                    location.href="gameover.html"
                })
                

            }
            if (((police_left < usercar_left && usercar_left < police_right) || (police_left < usercar_right && usercar_right < police_right)) && ((police_top < usercar_top && usercar_top < police_bottom) || (police_top < usercar_bottom && usercar_bottom < police_bottom))) {

                setTimeout(() => {
                    location.href="gameover.html"
                })
            }
            sessionStorage.setItem('nValue', n); //saving score
        },100)
})
// Function to media query matches
function handleMatchMediaChange(mq) {
    if (mq.matches) {
        console.log("Screen");
        
    }
}
const mediaQuery = window.matchMedia('(max-width: 768px)');
handleMatchMediaChange(mediaQuery);
mediaQuery.addListener(handleMatchMediaChange);
