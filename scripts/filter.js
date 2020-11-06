(function(){
    const elem = document.querySelector('.products_list');
    const iso = new Isotope( elem, {
        // options
        itemSelector: '.product__item',
        filter: '.popular'
    });




    const controls = document.querySelectorAll('.filter__link');
    const activeClass = 'filter__item--active';
    controls.forEach(function(control) {
        console.log('click');
        control.addEventListener('click', (e) => {
            e.preventDefault();
            const filterName = control.getAttribute("data-filter")
            controls.forEach((cont) => {
                cont.closest('.filter__item').classList.remove(activeClass);
            })
            control.closest('.filter__item').classList.add(activeClass);
            iso.arrange({
                filter: `.${filterName}`
            })
        })
    })
}())