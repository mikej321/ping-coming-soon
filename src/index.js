import './styles/style.sass';

const emailInput = document.querySelector('input[type="email"]');
const errorMsg = document.querySelector('.errorMsg');
const notifyBtn = document.querySelector('.notifyBtn');
const emailRegex = /^\w+@\w+\.(?:com|ru|net|jp|ca)/;

window.onload = clearInput();

function clearInput() {
    emailInput.value = '';
}

emailInput.addEventListener('input', () => {
    if (!emailRegex.test(emailInput.value)) {
        if (notifyBtn.hasAttribute('open')) {
            notifyBtn.removeAttribute('open');
            notifyBtn.setAttribute('closed', '');
        }
        emailInput.setAttribute('error', '');
        errorMsg.setAttribute('error', '');
    } else if (emailRegex.test(emailInput.value)) {
        emailInput.removeAttribute('error');
        errorMsg.removeAttribute('error');
        notifyBtn.removeAttribute('closed');
        notifyBtn.setAttribute('open', '');
    }
})