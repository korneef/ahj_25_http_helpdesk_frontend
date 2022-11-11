import getTicketDate from './getTicketDate';
import editTicketFormIsVisible from './editTicket/editTicketFormIsVisible';
import deleteTicket from './deleteTicket';
import editChekbox from './editTicket/editTicketCheckbox';
import getDescriptionTicket from './getDescriptionTicket';

export default function insertTicketsOnPage(obj) {
  const task = document.getElementsByClassName('task')[0];
  const taskBoard = task.closest('.tasks-board');
  let tickets;
  if (!Array.isArray(obj)) {
    tickets = [];
    tickets.push(obj);
  } else {
    tickets = obj;
  }

  for (let i = 0; i < tickets.length; i += 1) {
    const newTask = task.cloneNode(true);
    newTask.classList.remove('form-task_invisible');

    newTask.addEventListener('click', (evt) => {
      getDescriptionTicket(evt);
    });

    const taskName = newTask.querySelector('.task__name');
    const taskDate = newTask.querySelector('.task__task-create-date');
    const date = getTicketDate(tickets[i].date);
    const editTicketButton = newTask.querySelector('.task-button__button-edit');

    const ticketCheckbox = newTask.querySelector('.task__form-checkbox');
    ticketCheckbox.checked = tickets[i].status;
    ticketCheckbox.addEventListener('change', (evt) => {
      editChekbox(evt);
    });

    editTicketButton.addEventListener('click', (evt) => {
      editTicketFormIsVisible(evt);
    });

    const deleteTicketButton = newTask.querySelector('.task-button__button-delete');
    deleteTicketButton.addEventListener('click', (evt) => {
      deleteTicket(evt);
    });
    newTask.dataset.id = tickets[i].id;
    taskName.textContent = tickets[i].name;
    taskDate.textContent = date;
    taskBoard.insertAdjacentElement('beforeend', newTask);
  }
}
