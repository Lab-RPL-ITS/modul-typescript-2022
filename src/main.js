var form = document.querySelector('form');
var input = document.querySelectorAll('.myInput');
form === null || form === void 0 ? void 0 : form.addEventListener('submit', function (e) {
    e.preventDefault();
    input.forEach(function (item) {
        console.log(item);
    });
});
// let addressInput = document.getElementById('address') as HTMLInputElement;
