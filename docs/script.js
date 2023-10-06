
      // Temukan elemen <dotlottie-player> berdasarkan ID
      const lottiePlayer = document.getElementById('lottie-player');
    
      // Tambahkan event click ke elemen <dotlottie-player>
      lottiePlayer.addEventListener('click', () => {
       
        window.location.href = 'mailto:aufar.idzan@gmail.com';
      });
    
 
    function Menu(e){
      let list = document.querySelector('ul');
      e.name === 'menu' ? (e.name = "close",list.classList.add('top-[80px]') , list.classList.add('opacity-100')) :( e.name = "menu" ,list.classList.remove('top-[80px]'),list.classList.remove('opacity-100'))
    }
  
    
        const typedTextSpan = document.querySelector(".typed-text");
        const cursorSpan = document.querySelector(".cursor");

        const textArray = ["Flutter Developer", "Web Developer", "Ilustrator", "Animation"];
        const typingDelay = 200;
        const erasingDelay = 100;
        const newTextDelay = 2000; 
        let textArrayIndex = 0;
        let charIndex = 0;

        function type() {
            if (charIndex < textArray[textArrayIndex].length) {
                if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, typingDelay);
            } else {
                cursorSpan.classList.remove("typing");
                setTimeout(erase, newTextDelay);
            }
        }

        function erase() {
            if (charIndex > 0) {
                if (!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
                typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
                charIndex--;
                setTimeout(erase, erasingDelay);
            } else {
                cursorSpan.classList.remove("typing");
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) textArrayIndex = 0;
                setTimeout(type, typingDelay + 1100);
            }
        }

        document.addEventListener("DOMContentLoaded", function () {
            
            if (textArray.length) setTimeout(type, newTextDelay + 250);
        });
  
        // Mendapatkan lebar layar
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

// Mendefinisikan viewBox default dan viewBox untuk ukuran layar kecil
var defaultViewBox = '15 10 200 40';
var smallScreenViewBox = '0 10 100 40';

// Mengubah viewBox sesuai dengan ukuran layar
var svg = document.getElementById('my-svg');
if (screenWidth < 768) {
  svg.setAttribute('viewBox', smallScreenViewBox);
} else {
  svg.setAttribute('viewBox', defaultViewBox);
}

// Proyek pertama
const sliderImages1 = document.querySelectorAll("#mobile-slider-1 .slider-image");
let currentIndex1 = 0;
let autoSlideInterval1; // Variabel untuk menyimpan interval slider otomatis

function showImage1(index) {
    currentIndex1 = index;
    const translateValue = -currentIndex1 * 100;
    sliderImages1.forEach((image) => {
        image.style.transform = `translateX(${translateValue}%)`;
    });
}

function startAutoSlide1() {
    autoSlideInterval1 = setInterval(() => {
        currentIndex1 = (currentIndex1 + 1) % sliderImages1.length;
        showImage1(currentIndex1);
    }, 5000); 
}

function stopAutoSlide1() {
    clearInterval(autoSlideInterval1);
}

// Tombol prev dan next
document.querySelector("#prev-button-1").addEventListener("click", () => {
    currentIndex1 = (currentIndex1 - 1 + sliderImages1.length) % sliderImages1.length;
    showImage1(currentIndex1);
    stopAutoSlide1(); // Hentikan slider otomatis saat tombol prev ditekan
    startAutoSlide1(); // Mulai ulang slider otomatis setelah pembaruan slide manual
});

document.querySelector("#next-button-1").addEventListener("click", () => {
    currentIndex1 = (currentIndex1 + 1) % sliderImages1.length;
    showImage1(currentIndex1);
    stopAutoSlide1(); // Hentikan slider otomatis saat tombol next ditekan
    startAutoSlide1(); // Mulai ulang slider otomatis setelah pembaruan slide manual
});

// Memulai otomatis slider pertama
startAutoSlide1();

// Menambahkan event listener untuk berhenti otomatis slider saat mouse masuk ke proyek
document.querySelector("#mobile-slider-1").addEventListener("mouseenter", stopAutoSlide1);
document.querySelector("#mobile-slider-1").addEventListener("mouseleave", startAutoSlide1);


// Proyek kedua
const sliderImages2 = document.querySelectorAll("#mobile-slider-2 .slider-image");
let currentIndex2 = 0;
let autoSlideInterval2;

function showImage2(index) {
    currentIndex2 = index;
    const translateValue = -currentIndex2 * 100;
    sliderImages2.forEach((image) => {
        image.style.transform = `translateX(${translateValue}%)`;
    });
}

function startAutoSlide2() {
    autoSlideInterval2 = setInterval(() => {
        currentIndex2 = (currentIndex2 + 1) % sliderImages2.length;
        showImage2(currentIndex2);
    }, 5000);
}

function stopAutoSlide2() {
    clearInterval(autoSlideInterval2);
}

document.querySelector("#prev-button-2").addEventListener("click", () => {
    currentIndex2 = (currentIndex2 - 1 + sliderImages2.length) % sliderImages2.length;
    showImage2(currentIndex2);
    stopAutoSlide2();
    startAutoSlide2();
});

document.querySelector("#next-button-2").addEventListener("click", () => {
    currentIndex2 = (currentIndex2 + 1) % sliderImages2.length;
    showImage2(currentIndex2);
    stopAutoSlide2();
    startAutoSlide2();
});

startAutoSlide2();

document.querySelector("#mobile-slider-2").addEventListener("mouseenter", stopAutoSlide2);
document.querySelector("#mobile-slider-2").addEventListener("mouseleave", startAutoSlide2);

// Proyek ketiga
const sliderImages3 = document.querySelectorAll("#mobile-slider-3 .slider-image");
let currentIndex3 = 0;
let autoSlideInterval3;

function showImage3(index) {
    currentIndex3 = index;
    const translateValue = -currentIndex3 * 100;
    sliderImages3.forEach((image) => {
        image.style.transform = `translateX(${translateValue}%)`;
    });
}

function startAutoSlide3() {
    autoSlideInterval3 = setInterval(() => {
        currentIndex3 = (currentIndex3 + 1) % sliderImages3.length;
        showImage3(currentIndex3);
    }, 5000);
}

function stopAutoSlide3() {
    clearInterval(autoSlideInterval3);
}

document.querySelector("#prev-button-3").addEventListener("click", () => {
    currentIndex3 = (currentIndex3 - 1 + sliderImages3.length) % sliderImages3.length;
    showImage3(currentIndex3);
    stopAutoSlide3();
    startAutoSlide3();
});

document.querySelector("#next-button-3").addEventListener("click", () => {
    currentIndex3 = (currentIndex3 + 1) % sliderImages3.length;
    showImage3(currentIndex3);
    stopAutoSlide3();
    startAutoSlide3();
});

startAutoSlide3();

document.querySelector("#mobile-slider-3").addEventListener("mouseenter", stopAutoSlide3);
document.querySelector("#mobile-slider-3").addEventListener("mouseleave", startAutoSlide3);

// Proyek keempat
const sliderImages4 = document.querySelectorAll("#mobile-slider-4 .slider-image");
let currentIndex4 = 0;
let autoSlideInterval4;

function showImage4(index) {
    currentIndex4 = index;
    const translateValue = -currentIndex4 * 100;
    sliderImages4.forEach((image) => {
        image.style.transform = `translateX(${translateValue}%)`;
    });
}

function startAutoSlide4() {
    autoSlideInterval4 = setInterval(() => {
        currentIndex4 = (currentIndex4 + 1) % sliderImages4.length;
        showImage4(currentIndex4);
    }, 5000);
}

function stopAutoSlide4() {
    clearInterval(autoSlideInterval4);
}

document.querySelector("#prev-button-4").addEventListener("click", () => {
    currentIndex4 = (currentIndex4 - 1 + sliderImages4.length) % sliderImages4.length;
    showImage4(currentIndex4);
    stopAutoSlide4();
    startAutoSlide4();
});

document.querySelector("#next-button-4").addEventListener("click", () => {
    currentIndex4 = (currentIndex4 + 1) % sliderImages4.length;
    showImage4(currentIndex4);
    stopAutoSlide4();
    startAutoSlide4();
});

startAutoSlide4();

document.querySelector("#mobile-slider-4").addEventListener("mouseenter", stopAutoSlide4);
document.querySelector("#mobile-slider-4").addEventListener("mouseleave", startAutoSlide4);

document.addEventListener("DOMContentLoaded", function () {
    var preloader = document.querySelector(".preloader");
    var video = document.querySelector("video");
    video.addEventListener("loadeddata", function () {
        setTimeout(function () {
            preloader.style.display = "none";
        }, 1200);
    });
});
