export default function getDescriptionTicket(evt) {
    const task = evt.currentTarget;
    if (evt.target.tagName === 'BUTTON' || evt.target.closest('label') !== null) {
        console.log('RETURN')
        return
    }
    const taskDescription = task.querySelector('.task__description')
    if (!taskDescription.classList.contains('task__description_invisible')) {
        taskDescription.classList.toggle('task__description_invisible')
        taskDescription.textContent = '';
        return
    }

    const taskId = task.dataset.id;
    const params = new URLSearchParams;
    const xhr = new XMLHttpRequest;
    params.append('process', 'ticketById');
    params.append('id', taskId)
    xhr.open('GET', `http://localhost:7070/?${params}`)
    xhr.send()
    xhr.addEventListener('loadend', (evt) => {
        const ticketFull = JSON.parse(evt.target.response);
        const ticketOnPage = document.querySelector(`.task[data-id="${ticketFull.id}"]`);
        const ticketOnPageDescription = ticketOnPage.querySelector('.task__description');
        ticketOnPageDescription.textContent = `${ticketFull.description}`;
        ticketOnPageDescription.classList.toggle('task__description_invisible');
    })
}
