$(document).ready(function () {
    $.get('http://localhost:3000/users', data => {
        data.forEach(u => {

            $('tbody').append(`
            <tr>
                <td>${u.name.replace(/ñ/g, 'nn')}</td>
                <td>${u.lastname.replace(/ñ/g, 'nn')}</td>
                <td>${u.email}</td>
            </tr>
            `)
        })
    })
});

$('form').submit(function (e) {
    e.preventDefault()
    newUser()
})

function newUser() {
    const name = document.querySelector('#new_name').value
    const lastname = document.querySelector('#new_lastname').value
    const email = document.querySelector('#new_email').value
    const password = document.querySelector('#new_passord').value

    const data = {
        name,
        lastname,
        password,
        email
    }
    $.post('http://localhost:3000/users', data, (resp, status) => {
        console.log(resp + status)
        window.location.href = '/'
    })
}