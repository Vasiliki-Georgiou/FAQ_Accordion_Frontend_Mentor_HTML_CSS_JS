let accordionButtons = document.querySelectorAll('.question svg');

accordionButtons.forEach((item) => {
  item.addEventListener('click', (event) => {
    const question = event.target.closest('.question');
    const answer = question.nextElementSibling;
    const plusIcon = question.querySelector('.plus-svg');
    const minusIcon = question.querySelector('.minus-svg');

    // Toggle the current answer
    answer.classList.toggle('show');

    // Toggle the icons
    if (answer.classList.contains('show')) {
      plusIcon.style.display = 'none';
      minusIcon.style.display = 'block';
    } else {
      plusIcon.style.display = 'block';
      minusIcon.style.display = 'none';
    }
  });
});
