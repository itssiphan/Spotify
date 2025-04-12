document.querySelectorAll('.subCategories > section .text a:last-child').forEach(button => {
    button.addEventListener('click', e => {
        e.preventDefault();
        const section = e.target.closest('section');
        const ul = section.querySelector('ul');
        const collapsedHeights = {
            1: '269.88px',
            2: '229.44px',
            3: '269.88px',
            4: '222.9px',
            5: '222.9px',
            6: '222.9px'
        };
        const sectionIndex = Array.from(section.parentNode.children).indexOf(section) + 1;

        if (e.target.textContent === 'Show all')
        {
            ul.style.maxHeight = '100%';
            ul.style.overflowY = 'auto';
            document.querySelector(".songsCard:first-child").style.background = "#121212";
            e.target.textContent = 'Show less';
        } else
        {
            ul.style.maxHeight = collapsedHeights[sectionIndex];
            ul.style.overflowY = 'hidden';
            e.target.textContent = 'Show all';
        }
    });
});

const header = document.querySelector("header");
const closeBtn = document.querySelector(".closeBtn");
const hamburger = document.querySelector(".hamburger");
const linMark = document.querySelector(".signUpAndLogin")
const hamburgerImg = document.querySelector(".hamburger img:last-child");
const closeBtnImg = document.querySelector(".closeBtn img");
const mediaQuery1140 = window.matchMedia("(max-width: 1140px)");

function openMenu() {
    header.style.top = "43px";
    header.style.right = "0";
    header.style.transition = "right 200ms ease-in";

    document.querySelector(".psd li:nth-child(2)>a").textContent = "Help"
    document.querySelector(".downIns a").textContent = "Privacy"
    
    if (document.querySelector(".psd li:last-child").textContent.trim() === "Privacy") {
        document.querySelector(".psd").innerHTML += "<li>Terms</li>"
    }
    
    closeBtn.style.display = "flex";
    closeBtn.style.justifyContent = "end"
    hamburger.style.display = "none";
}

function closeMenu() {
    header.style.right = "-575px";
    hamburger.style.display = "flex";
    closeBtn.style.display = "none";

    document.querySelector(".psd li:nth-child(2)>a").textContent = "Support"
    document.querySelector(".downIns a").textContent = "Install App"
    document.querySelector(".psd li:last-child").style.display = "none"
}

function resetStyles() {
    header.style = "";
    closeBtn.style = "";
    hamburger.style = "";
}

function handleMedia1140(e) {
    if (e.matches)
    {
        hamburgerImg.addEventListener("click", openMenu);
        closeBtnImg.addEventListener("click", closeMenu);
    } else
    {
        hamburgerImg.removeEventListener("click", openMenu);
        closeBtnImg.removeEventListener("click", closeMenu);
        resetStyles();
    }
}

handleMedia1140(mediaQuery1140);
mediaQuery1140.addEventListener("change", handleMedia1140);

const resizer = document.querySelector('.resizer');
const left = document.querySelector('.left');
const resBor = document.querySelector(".resizer p");
const liElements = document.querySelectorAll(".songsCard ul li");
const UlElements = document.querySelectorAll(".songsCard ul");

let isResizing = false;

const minLeftWidth = 280.5;
const maxLeftWidth = 400;

const minLiWidth = 137;
const maxLiWidth = 150;
const minUlgGap = 15;
const maxUlGap = 4;

resizer.addEventListener('mousedown', (e) => {
    isResizing = true;
    document.body.style.cursor = 'grabbing';
    resBor.style.borderRight = "1px solid #ffffff";
});

document.addEventListener('mousemove', (e) => {
    if (!isResizing) return;

    let newWidth = e.clientX;

    if (newWidth < minLeftWidth)
    {
        newWidth = minLeftWidth;
    } else if (newWidth > maxLeftWidth)
    {
        newWidth = maxLeftWidth;
    }

    left.style.width = `${newWidth}px`;

    let scale = (newWidth - minLeftWidth) / (maxLeftWidth - minLeftWidth);

    const liWidth = minLiWidth + scale * (maxLiWidth - minLiWidth);
    const UlGap = minUlgGap + scale * (maxUlGap - minUlgGap);

    liElements.forEach((li) => {
        li.style.width = `${liWidth}px`;
    });
    UlElements.forEach((ul) => {
        ul.style.columnGap = `${UlGap}px`;
    });
});

document.addEventListener('mouseup', () => {
    isResizing = false;
    document.body.style.cursor = 'default';
    resBor.style.borderRight = "1px solid #000000";
});

document.querySelector(".cardContainer").addEventListener("scroll", () => {
    document.querySelector(".library").style.boxShadow = "0 6px 10px #00000099"
})

const footerUl = document.querySelector("main footer ul:nth-child(2)");
const someLinks = document.querySelector(".someLinks");
const mediaQuery575 = window.matchMedia("(max-width: 575px)");

let insertedElement = null;

function handleMedia575(e) {
    if (e.matches)
    {
        if (!insertedElement)
        {
            insertedElement = document.createElement("div");
            insertedElement.setAttribute("class", "lasLinks")
            insertedElement.innerHTML = someLinks.innerHTML;
            footerUl.parentNode.insertBefore(insertedElement, footerUl);
        }
    } else
    {
        if (insertedElement)
        {
            insertedElement.remove();
            insertedElement = null;
        }
    }
}

handleMedia575(mediaQuery575);

mediaQuery575.addEventListener("change", handleMedia575);
