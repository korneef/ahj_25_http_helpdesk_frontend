export default function editChekbox(evt) {
  const ticketId = evt.target.closest('.task').dataset.id;
  const params = new URLSearchParams();
  const xhr = new XMLHttpRequest();
  params.append('id', ticketId);
  params.append('status', `${evt.target.checked}`);
  params.append('process', 'checkboxChange');
  xhr.open('POST', 'http://localhost:7070');
  xhr.send(params);
}
