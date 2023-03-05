
window.addEventListener('load', function () {
  let heroText = document.querySelector('#herotext');
    heroText.classList.add('animate');
});

window.addEventListener('load', function () {
    let contact = document.querySelectorAll('.small-flex');
    contact.forEach(item => {
        item.classList.add("animate2")
    })
});
