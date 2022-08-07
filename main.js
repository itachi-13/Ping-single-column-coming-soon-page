let form = document.getElementById('form');
let input = document.querySelector('input');
let error = document.querySelector('.error');

form.addEventListener('submit', e => {
    const email = form['email'].value;

    if(!isValid(email)) {
        e.preventDefault();
        input.style.border = '1px solid hsl(0, 93%, 68%)';
        input.style.outline = 'none';
        error.style.display = 'block';
    }
})

function isValid(email) {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
};