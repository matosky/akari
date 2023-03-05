const section = document.querySelector('#about');


window.addEventListener('load', async function () {
  let heroText = document.querySelector('#herotext');
    heroText.classList.add('animate');
     let contact = document.querySelectorAll('.small-flex');
    contact.forEach(item => {
        item.classList.add("animate2")
    })
});


const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      section.classList.add('animate3');
      console.log(section);
  } else {
    section.classList.remove('animate3');
  }
});

observer.observe(section);

