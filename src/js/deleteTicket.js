export default function deleteTicket(evt) {
  const ticket = evt.target.closest('.task');
  const ticketId = ticket.dataset.id;
  const xhr = new XMLHttpRequest();
  const params = new URLSearchParams();
  params.append('process', 'deleteTicket');
  params.append('id', ticketId);
  xhr.open('POST', 'http://localhost:7070');
  xhr.send(params);
  xhr.addEventListener('loadend', (event) => {
    const id = event.target.response;
    document.querySelector(`[data-id="${id}"]`).remove();
  });
}
