// Initialize Scrollama
const scroller = scrollama();

// Handle when sections enter the viewport
scroller
    .setup({
        step: 'section',
        offset: 0.5,
        debug: true
    })
    .onStepEnter(response => {
        const { element } = response;
        const bgImage = element.getAttribute('data-bg');
        document.body.style.backgroundImage = `url(${bgImage})`;
    });

// Resize event
window.addEventListener('resize', scroller.resize);
