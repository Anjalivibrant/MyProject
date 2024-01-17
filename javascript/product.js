function submitReview(productId) {
    const textarea = document.querySelector(`.product-${productId} textarea`);
    const reviewContainer = document.querySelector(`.product-${productId} .reviews-container`);
    const reviewText = textarea.value.trim();

    if (reviewText !== "") {
        const reviewElement = document.createElement("div");
        reviewElement.classList.add("review");
        reviewElement.textContent = reviewText;
        reviewContainer.appendChild(reviewElement);
        textarea.value = "";
    }
}