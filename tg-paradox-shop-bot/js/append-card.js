function appendCard(imageSrc, amount, title, listOfClasses) {
  var cardHTML = `
            <div class="col-6">
                <div class="card bg-dark rounded-3 mb-4">
                    <img src="${imageSrc}">
                    <div class="card-body text-center px-1 py-2">
                        <h5 class="card-title fs-3 amount">${amount} ₽</h5>
                        <p class="card-text text-secondary title">${title}</p>
                    </div>
                </div>
            </div>
        `;
  let query = "";
  listOfClasses.forEach((className) => {
    query += `.${className}`;
  });
  // Append the card HTML to the gems div
  document.querySelector(query).insertAdjacentHTML('beforeend', cardHTML);
}