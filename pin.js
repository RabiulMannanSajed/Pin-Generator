function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {

        return pin;

    }
    else {
        return getPin();
    }
}

function generatePin() {
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
    // const displayPin = document.getElementById('display-pin');
    // const displayPinValue = displayPin.value;
    // displayPinValue = pin;
}

document.getElementById('key-pad').addEventListener('click', function (event) {

    const number = event.target.innerText;
    const pinInput = document.getElementById('typed-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            pinInput.value = '';
        }
    }
    else {
        const previousNumber = pinInput.value;
        const newNumber = previousNumber + number;
        pinInput.value = newNumber;
    }


})
//verifyPin()

function verifyPin() {

    const pin = document.getElementById("display-pin").value;
    const typedNumbers = document.getElementById('typed-numbers').value;
    const notifySuccess = document.getElementById('notify-success');
    const notifyFail = document.getElementById('notify-fail');

    if (pin == typedNumbers) {
        notifyFail.style.display = 'none'; ///none: The element will not be displayed at all.
        notifySuccess.style.display = 'block';  //block: The element displayed as a block-level element (like paragraphs and headers)



    }
    else {
        notifySuccess.style.display = 'none';
        notifyFail.style.display = 'block';

    }
}











