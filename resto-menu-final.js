<script>
    const imagesContainer = document.querySelector('.images');
    const imgElements = document.querySelectorAll('.img');
    imagesContainer.append(...Array.from(imgElements).map(img => img.cloneNode(true)));

    imgElements.forEach(img => {
        img.addEventListener('click', function() {
            if (imagesContainer.style.animationPlayState === 'paused') {
                imagesContainer.style.animationPlayState = 'running';
                img.style.transform = '';
                img.style.zIndex = '';
            } else {
                imagesContainer.style.animationPlayState = 'paused';
                img.style.transform = 'scale(1.5)';
                img.style.zIndex = '10';
            }
        });
    });

document.querySelector('.menu-page-header').addEventListener('click', function() {
            this.classList.toggle('clicked');
        });

        // Optional: Close the submenu when clicking outside
        document.addEventListener('click', function(event) {
            var isClickInside = document.querySelector('.menu-page-header').contains(event.target);
            if (!isClickInside) {
                document.querySelector('.menu-page-header').classList.remove('clicked');
            }
        });
</script>
