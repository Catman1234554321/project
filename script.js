function emailValidation() {
    let email1 = document.getElementById("userEmail").value;
    let email2 = document.getElementById("confirmEmail").value;

    if(email1 != email2) {
        alert("Email does not match. Please re-enter email address.");
    }
}
