import insertTicketsOnPage from './insertTicketsOnPage';

function getAllTickets(evt) {
  const { status } = evt.target;
  if (status >= 200 && status < 300) {
    const tickets = JSON.parse(evt.target.response);
    insertTicketsOnPage(tickets);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost:7070/?process=allTickets');
  xhr.send();
  xhr.addEventListener('loadend', (evt) => {
    getAllTickets(evt);
  });
});
