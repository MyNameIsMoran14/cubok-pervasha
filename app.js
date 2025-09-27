document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll('.save-btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const qName = button.dataset.question;
      console.log(`Ответ для ${qName} сохранён`);
    });
  });

  // обработка кнопки "Закончить тест"
  const finishBtn = document.getElementById('finish-btn');
  if (finishBtn) {
    finishBtn.addEventListener('click', () => {
      window.location.href = "result.html"; // сюда можно подставить любую страницу
    });
  }
});