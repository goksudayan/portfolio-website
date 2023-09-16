document.addEventListener('DOMContentLoaded', () => {

    // For secondary case study cards, get img height: 
    
    const tidbitsImg = document.getElementById('tidbits-img');
    let tidbitsImgHeight = 0;

    tidbitsImg.addEventListener('load', () => {
        tidbitsImgHeight = tidbitsImg.scrollHeight;
        console.log(tidbitsImgHeight);
        
    
    const tidbitsStyle = document.createElement('style');
    tidbitsStyle.textContent = `
        #tidbits:hover img {
            transform: translateY(calc(-${tidbitsImgHeight}px + 40vh));
        }
    `;
    document.head.appendChild(tidbitsStyle);
    });




    // Navigation hover interaction and hide/show when scrolled

    let lastScrollPosition = 0;

    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        const scrollY = window.scrollY;
        const scrollThreshold = 100;

        if (scrollY > lastScrollPosition) {
            if (scrollY > scrollThreshold) {
                navbar.classList.add('hidden');
            }}
        else {
            navbar.classList.remove('hidden');
            }
        lastScrollPosition = scrollY;
    });

    // Hover interactions

    const accentColor = '#f2a60d';
    const primaryColor = '#e6e6e6'; 
    const navItems = document.querySelectorAll('.nav-item');

    navItems.forEach(function(navItem) {
       navItem.addEventListener('mouseenter', function() {
        this.style.color = accentColor;
        this.style.letterSpacing = "0.2em";
       });

       navItem.addEventListener('mouseleave', function() {
        this.style.color = primaryColor;
        this.style.letterSpacing = "0.025em";
        this.style.transform = 'none';
       });


    });


    
    // Background

    const hero = document.getElementById('hero-section');
    const katch = document.getElementById('katch');
    const sismo = document.getElementById('sismo');
    const tomo = document.getElementById('tomo');
    const focusmate = document.getElementById('focusmate');
    const tidbits = document.getElementById('tidbits');

    const sections = [hero, katch, sismo, tomo, focusmate, tidbits];

    const triangle = '0,60 0,60 0,60 0,60 30,0 30,0 30,0 30,0 30,0 60,60 60,60 60,60 60,60'; // Hero section - 4
    const square = '0,0 0,0 0,0 0,0 0,60 0,60 0,60 0,60 60,60 60,60 60,60 60,60'; // Katch - 4
    const cross = '0,0 0,0 30,30 30,30 60,60 60,60 30,30 30,30 60,0 30,30 30,30 0,60 0,60'; // Tidbits - 7/8
    const plus = '10,0 50,0 50,10 60,10 60,50 50,50 50,60 10,60 10,50 0,50 0,10 10,10'; // Focusmate - 12

    const shapes = [triangle, square, cross, plus];

    const bgInside = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    bgInside.setAttribute("width", "60");
    bgInside.setAttribute("height", "60");

    let currentShape = shapes[3];
    let currentPolygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    currentPolygon.setAttribute("fill", "#1a1a1a");
    currentPolygon.setAttribute("stroke", "#f2a60d");
    currentPolygon.setAttribute("stroke-opacity", "0.9");
    currentPolygon.setAttribute("stroke-width", ".5");

    bgInside.appendChild(currentPolygon);
    const bgdiv = document.getElementById('moving-bg-inside');

    bgdiv.style.backgroundRepeat = "repeat";
    bgdiv.style.backgroundSize = "auto";
    function changeBg(shape) {
        currentPolygon.setAttribute("points", shape);

        const svgData = new XMLSerializer().serializeToString(bgInside);
        const dataURL = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgData)}`;
        bgdiv.style.backgroundImage = `url(${dataURL})`;
    }
  
    let activeDiv = "";
    let currentNumber = 4;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                activeDiv = entry.target.id;

                let newNumber;
                do {
                    newNumber = Math.floor(Math.random() * shapes.length);
                } while (newNumber == currentNumber);
                currentNumber = newNumber;
                changeBg(shapes[currentNumber]);
            }
        });
    });

    sections.forEach((div) => {
        observer.observe(div);
    });
});