document.addEventListener('DOMContentLoaded', () => {
    const values = document.querySelectorAll('.num');
    const speed = 2000;
    
    // Función para iniciar el contador cuando el elemento sea visible
    function startCounterWhenVisible(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const num = entry.target;
                let startValue = 0;
                const endValue = parseInt(num.getAttribute('target'));
                const duration = (speed / endValue);
                
                const counter = setInterval(() => {
                    startValue += 1;
                    num.textContent = startValue;
                    if (startValue == endValue) {
                        clearInterval(counter);
                    }
                }, duration);

                // Una vez que comienza el contador, ya no necesitamos observar el elemento
                observer.unobserve(num);
            }
        });
    }

    // Configuramos el IntersectionObserver
    const observer = new IntersectionObserver(startCounterWhenVisible, {
        root: null,
        rootMargin: '0px',
        threshold: 0.8 // Cuando al menos el 50% del elemento sea visible
    });

    // Observamos cada elemento .num
    values.forEach(value => {
        observer.observe(value);
    });
});
