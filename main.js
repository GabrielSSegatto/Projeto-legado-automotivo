const galerias = document.querySelectorAll('.galeria-wrapper');

galerias.forEach(galeria => {
    const container = galeria.querySelector('.galeria-container');
    const prevBtn = galeria.querySelector('.btn-prev');
    const nextBtn = galeria.querySelector('.btn-next');

    const scrollNext = () => {
        const itemWidth = container.querySelector('.galeria-item').offsetWidth;

        container.scrollBy({ left: itemWidth, behavior: 'smooth' });
    }
    const scrollPrev = () => {
        const itemWidth = container.querySelector('.galeria-item').offsetWidth;

        container.scrollBy({ left: -itemWidth, behavior: 'smooth' });

    }

    nextBtn.addEventListener('click', scrollNext)
    prevBtn.addEventListener('click', scrollPrev)


});