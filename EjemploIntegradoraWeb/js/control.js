document.addEventListener('DOMContentLoaded', (event) => {
    const element = document.getElementById('movable');
    let left = 0;
    let top = 0;
    const step = 10; // Define the step size

    document.addEventListener('keydown', (event) => {
        switch (event.key) {
            case 'ArrowUp':
                top -= step;
                break;
            case 'ArrowDown':
                top += step;
                break;
            case 'ArrowLeft':
                left -= step;
                break;
            case 'ArrowRight':
                left += step;
                break;
        }
        element.style.transform = `translate(${left}px, ${top}px)`;
    });
});