const carouselContainer = document.getElementById('carouselContainer')
const nextButton = document.getElementById('nextBtn')
const prevButton = document.getElementById('prevBtn')
const review = document.querySelector('.reviews_section_block')
const reviews = document.querySelectorAll('.reviews_section_block');
const totalReviews = reviews.length;

let currentReviewIndex = 0;

function updateCarousel() {
    const offset = -currentReviewIndex * 320;
    carouselContainer.style.transform = `translateX(${offset}px)`;
}

prevButton.addEventListener('click', () => {
    if (currentReviewIndex > 0) {
        currentReviewIndex--;
    } else {
        currentReviewIndex = totalReviews - 1;
    }
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    if (currentReviewIndex < totalReviews - 1) {
        currentReviewIndex++;
    } else {
        currentReviewIndex = 0;
    }
    updateCarousel();
});