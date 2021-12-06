// Action like
const likeE = document.querySelector('.product-item__like');
likeE.addEventListener('click', function () {
    if (this.classList.contains("product-item__like--liked")) {
        this.classList.remove("product-item__like--liked");
    }
    else {
        this.classList.add("product-item__like--liked");
    }
})

// Action rating
const ratingStars = [...document.getElementsByClassName("rating__star")];

function executeRating(stars) {
    const starClassActive = "rating__star fas fa-star";
    const starClassInactive = "rating__star far fa-star";
    const starsLength = stars.length;
    let i;
    stars.map((star) => {
        star.onclick = () => {
            i = stars.indexOf(star);

            if (star.className === starClassInactive) {
                for (i; i >= 0; --i) stars[i].className = starClassActive;
            } else {
                for (i; i < starsLength; ++i) stars[i].className = starClassInactive;
            }
        };
    });
}
executeRating(ratingStars);

// Done 06/12/2021