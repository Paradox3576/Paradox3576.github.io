function createPromotion(i, image, price, title, description) {
  appendCard(image, price, title, ["promotions"]);
  const cards = document.querySelector('.promotions').querySelectorAll(".card");
  console.log(cards);
  cards[i].addEventListener('click', () => {
    showModal(cards[i], description);
  });
}