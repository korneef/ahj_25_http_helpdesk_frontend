function editTicket(evt) {
  evt.preventDefault();
  const xhr = new XMLHttpRequest();
  const params = new URLSearchParams();
  const form = evt.target.closest('.form');
  const id = form.dataset.ticketId;
  Array.from(form.elements)
    .filter(({ name }) => name)
    .forEach(({ name, value }) => params.append(name, value));
  params.append('process', 'editTicket');
  params.append('id', id);
  xhr.open('POST', 'http://localhost:7070');
  xhr.send(params);
  const closeButton = evt.target.closest('.form').querySelector('.work-with-task__close-button');
  closeButton.click();
  xhr.addEventListener('loadend', (event) => {
    if (event.target.status === 200) {
      const ticket = JSON.parse(event.target.response);
      const ticketOnPage = document.querySelector(`[data-id="${ticket.id}"]`);
      const ticketName = ticketOnPage.querySelector('.task__name');
      ticketName.textContent = ticket.name;
      const ticketDescription = ticketOnPage.querySelector('.task__description');
      if (!ticketDescription.classList.contains('task__description_invisible')) {
        ticketDescription.textContent = `${ticket.description}`;
      }
    }
  });
}

const formBackground = document.getElementsByClassName('background-for-form-task form-task-editor')[0];
const createTicketForm = formBackground.querySelector('.form');
createTicketForm.addEventListener('submit', (evt) => {
  editTicket(evt);
});
