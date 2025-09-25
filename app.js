document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll('.save-btn');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const qName = button.dataset.question;
      console.log(`Ответ для ${qName} сохранён`);
      // здесь можно будет добавить сохранение в localStorage
    });
  });
});
