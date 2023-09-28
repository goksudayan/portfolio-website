document.addEventListener('DOMContentLoaded', () => {

    // Navigation hide/show

    let lastScrollPosition = 0;

    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', function() {
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

    // Navigation hover interactions

    const accentColor = '#e6e6e6';
    const primaryColor = '#8d8d8d'; 
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

    const brandName = document.getElementById('brand-name');

    brandName.addEventListener('mouseenter', () => {
        brandName.style.letterSpacing = "0.2em";
    });

    brandName.addEventListener('mouseleave', () => {
        brandName.style.letterSpacing = "0.025em";
        brandName.style.transform = 'none';
    })

    // Background


    /*
    const hero = document.getElementById('hero-section');
    const work = document.getElementById('work');
    const about = document.getElementById('about');
    const blog = document.getElementById('blog');
    const contact = document.getElementById('contact');
   
    const sections = [hero, about, blog, contact];

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
    */    

    // Custom cursor

    const cursorElements = document.querySelectorAll('.with-cursor');
    const customCursor = document.createElement('div');
    customCursor.classList.add('custom-cursor');
    document.body.appendChild(customCursor);

    let cursorX = 0;
    let cursorY = 0;

    let cursorScaleFactor = 1;

    function updateCursorContent(content) {
        customCursor.textContent = content;
    }

    function updateCursorPosition() {
        customCursor.style.transform = `translate(calc(${cursorX}px - 8px), calc(${cursorY}px - 8px)) scale(${cursorScaleFactor})`;
    }
     
    document.addEventListener('mousemove', (e) => {
       cursorX = e.clientX;
       cursorY = e.clientY;
       requestAnimationFrame(updateCursorPosition);
    });

    cursorElements.forEach((element) => {
        element.addEventListener('mouseenter', () => {
            customCursor.classList.add('hovered');
            cursorScaleFactor = 5;
            if (element.classList.contains('case-study-card') || element.classList.contains('archived-study')) {
                updateCursorContent('View');
            }
            /*
            else if (element.classList.contains('nav-item') && !navbar.classList.contains('hidden')) {
                updateCursorContent('Go');
            }
            */
            else if (element.classList.contains('blog-post')) {
                updateCursorContent('Read');
            }
        });

        element.addEventListener('mouseleave', () => {
            customCursor.classList.remove('hovered');
            cursorScaleFactor = 1;
            updateCursorContent('');
        })

    });

    // to-top container hidden/visible

    const toTopContainer = document.getElementById('to-top-container');

    function toggleToTopVisibility() {
        const scrollY = window.scrollY;
        const scrollThreshold = 140;

        if (scrollY >= scrollThreshold) {
          toTopContainer.style.display = 'block';
        } else {
          toTopContainer.style.display = 'none';
        }
      }
    
      toggleToTopVisibility();
    
      window.addEventListener('scroll', toggleToTopVisibility);

});