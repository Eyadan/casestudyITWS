// script.js

document.querySelectorAll('.nav-link').forEach(navLink => {
    navLink.addEventListener('mousemove', (e) => {
        const { offsetX } = e;
        const percent = offsetX / navLink.clientWidth;
        const color = `hsl(${percent * 360}, 100%, 50%)`;
        navLink.style.setProperty('--line-color', color);
    });

    navLink.addEventListener('mouseleave', () => {
        navLink.style.removeProperty('--line-color');
    });
});
