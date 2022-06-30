document.addEventListener('DOMContentLoaded', () => {
    var swiper = new Swiper(".swiper", {
        slidesPerView: 'auto',
        spaceBetween: 50,
        navigation: {
            nextEl: '.right_button .next',
            prevEl: '.right_button .prev',
        },
        pagination: {
            el : '.swiper-pagination',
            clickable: true, 
            renderBullet: function(index, className) {
                return '<span class="' + `dot ${className}` + '">'+'</span>';
            }
        }
    });
})