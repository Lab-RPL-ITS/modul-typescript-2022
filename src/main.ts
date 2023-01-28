const form = document.querySelector('form');

const input = document.querySelectorAll('.myInput');

form?.addEventListener('submit', e => {
    e.preventDefault();

    input.forEach(item => {
        console.log(item)
    })
})

// let addressInput = document.getElementById('address') as HTMLInputElement;
