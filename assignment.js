function buggedClick() {
    let firstNumber = 1;
    let secondNumber = "2";
    let label = document.getElementById(lblBugged);

    let combine = firstNumber + secondNumber;
    label.innerHTML = combine;
}