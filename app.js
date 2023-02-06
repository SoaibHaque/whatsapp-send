(function () {

    function formSubmit(e) {
        e.preventDefault(); // prevent from send the request by own

        // opening whatsapp api link
        let url = this.action;
        url += this.countryCode.value + this.phoneNumber.value;
        window.open(url, '_blank');
    }

    function validNumber() {
        if (this.value.length == 10) {
            this.parentElement.classList.remove('invalid');
            this.parentElement.classList.add('valid');
        } else {
            this.parentElement.classList.remove('valid');
            this.parentElement.classList.add('invalid');
        }
    }

    function stopKeypress(e) {
        if (this.value.length >= 10 && e.which != 13) e.preventDefault(); // stop from typing number more than 10
    }

    const [form] = document.forms; // get the zeroth index form
    form.phoneNumber.focus(); // take the focus to the phone number ihput
    form.addEventListener('submit', formSubmit); // run when form submit
    form.phoneNumber.addEventListener('input', validNumber); // check the number is value or not
    form.phoneNumber.addEventListener('keypress', stopKeypress); // check the number is value or not

})(); // immediately invok function