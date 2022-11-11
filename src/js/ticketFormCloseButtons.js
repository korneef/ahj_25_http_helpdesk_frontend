const canselEditTicketButtons = Array.from(document.getElementsByClassName('work-with-task__close-button'))

for (let i = 0; i < canselEditTicketButtons.length; i += 1) {
    canselEditTicketButtons[i].addEventListener('click', (evt) => {
        const formWrapper = evt.target.closest('.background-for-form-task');        
        formWrapper.classList.toggle('form-task_invisible');
        const form = evt.target.closest('.form');
        if (form !== null) {
            form.reset();
        }
    })
}
