const ticketAddButton = document.getElementsByClassName('header-button_button')[0];

ticketAddButton.addEventListener('click', () => {
  const formBackground = document.getElementsByClassName('background-for-form-task form-task-creator')[0];
  formBackground.classList.toggle('form-task_invisible');
});
