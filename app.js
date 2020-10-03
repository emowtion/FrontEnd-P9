/* typed libraries */

const options = {
    strings: [" ", 'I\'m Emowtion, A FrontEnd Developer :)'],
    typeSpeed: 45,
    loop: true,
    fadeOut: true
};

const typed = new Typed(`#home h2`, options);


/* event for contact form */

const $name = $('#name');
const $email = $('#email');
const $textArea = $('#textarea');
const $submitBtn = $('#submit-btn');
const $form = $('form');
const $alertDiv = $('.alert')
$($alertDiv).hide()

$($submitBtn).on('click submit', (e) => {
    e.preventDefault()
    if ($($name.val() === '' && $($email.val() === ''))) {
        $($alertDiv).show()
    }
});