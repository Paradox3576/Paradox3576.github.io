function showModal(card, descriptions) {
  modalData = {
      title: card.querySelector('.title').innerText,
      price: card.querySelector('.amount').innerText
  };

  document.getElementById('modalTitle').textContent = card.querySelector('.title').innerText;
  document.getElementById('modalImg').src = card.querySelector('img').src;
  document.getElementById('modalPrice').textContent = card.querySelector('.amount').innerText;
  document.getElementById('descriptions').innerHTML = descriptions;

  document.getElementById('bottomModal').style.display = 'block';
}

function closeModal() {
  var modal = document.getElementById('bottomModal');
  modal.style.display = 'none';
}