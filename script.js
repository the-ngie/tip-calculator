const buttons = document.querySelectorAll('.tip-buttons button');
const billInput = document.getElementById('bill');
const resultElement = document.getElementById('result');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const tipPercent = parseInt(this.innerText);
        calculateTip(tipPercent);
    });
});

function calculateTip(tipPercent) {
    const bill = billInput.value;
    
    if (bill === '' || bill <= 0) {
        resultElement.innerText = 'Please enter a valid bill amount.';
        return;
    }

    const tip = bill * (tipPercent / 100);
    const total = Number(bill) + tip;

    resultElement.innerText = `Tip: ₱${tip.toFixed(3)} | Total: ₱${total.toFixed(2)}`;
}