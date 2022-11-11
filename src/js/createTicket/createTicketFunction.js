import insertTicketsOnPage from "../insertTicketsOnPage"

function createTicket(evt) {
    evt.preventDefault()
    const xhr = new XMLHttpRequest
    const params = new URLSearchParams
    const form = evt.target.closest('.form')
    Array.from(form.elements)
        .filter(({ name }) => name)
        .forEach(({ name, value }) => params.append(name, value));
    params.append('process', 'createTicket')
    xhr.open('POST', 'http://localhost:7070')
    xhr.send(params);
    const closeButton = evt.target.closest('.form').querySelector('.work-with-task__close-button');
    closeButton.click();
    xhr.addEventListener('loadend', (evt) => {
        if (evt.target.status === 200) {
            const ticket = JSON.parse(evt.target.response);
            insertTicketsOnPage(ticket)
        }
    })
}

const formBackground = document.getElementsByClassName('background-for-form-task form-task-creator')[0];
const createTicketForm = formBackground.querySelector('.form');
createTicketForm.addEventListener('submit', (evt) => {
    createTicket(evt);
})