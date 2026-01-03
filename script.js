function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}

function toggleLetter() {
  document.querySelector('.envelope').classList.toggle('open');
}

function revealPromise() {
  document.getElementById("promiseText").classList.add("show");
}
