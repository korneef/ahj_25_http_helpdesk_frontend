export default function editTicketFormIsVisible(evt) {
    const ticket = evt.target.closest('.task');
    const id = ticket.dataset.id;
    const xhr = new XMLHttpRequest
    xhr.open('GET', `http://localhost:7070/?process=ticketById&id=${id}`);
    xhr.send();

    xhr.addEventListener('loadend', (evt) => {
        const ticket = JSON.parse(evt.target.response);
        const formBackground = document.getElementsByClassName('background-for-form-task form-task-editor')[0];
        const form = formBackground.querySelector('.form');
        const ticketNameTextArea = form.querySelector('.work-with-task__input-task-name');
        ticketNameTextArea.value = ticket.name;

        const ticketDescriptionTextArea = form.querySelector('.work-with-task__input-task-description');
        ticketDescriptionTextArea.value = ticket.description;
        form.dataset.ticketId = ticket.id;
        formBackground.classList.toggle('form-task_invisible');
    })
}


