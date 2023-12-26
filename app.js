(function () {
  function formSubmit(e) {
    e.preventDefault(); // prevent from send the request by own

    if (
      localStorage.openInApplication &&
      JSON.parse(localStorage.openInApplication)
    ) {
      this.action = "https://api.whatsapp.com/send?phone=";
    } else {
      this.action = "https://web.whatsapp.com/send?phone=";
    }

    // opening whatsapp api link
    let url = this.action;
    url += this.countryCode.value + this.phoneNumber.value;
    window.open(url, "_blank");
  }

  function validNumber() {
    if (this.value.length == 10) {
      this.parentElement.classList.remove("invalid");
      this.parentElement.classList.add("valid");
    } else {
      this.parentElement.classList.remove("valid");
      this.parentElement.classList.add("invalid");
    }
  }

  function stopKeypress(e) {
    if (this.value.length >= 10 && e.which != 13) e.preventDefault(); // stop from typing number more than 10
  }

  function changeOption() {
    localStorage.openInApplication = this.checked;
  }

  const [form] = document.forms; // get the zeroth index form
  form.phoneNumber.focus(); // take the focus to the phone number input
  form.addEventListener("submit", formSubmit); // run when form submit
  form.phoneNumber.addEventListener("input", validNumber); // check the number is value or not
  form.phoneNumber.addEventListener("keypress", stopKeypress); // check the number is value or not
  form.open_application.addEventListener("change", changeOption);
  form.open_application.checked =
    localStorage.openInApplication &&
    JSON.parse(localStorage.openInApplication);
})(); // immediately invoke function
