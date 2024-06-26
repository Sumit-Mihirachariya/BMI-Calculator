function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert cm to meters

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById('result').textContent = "Please enter valid weight and height.";
        return;
    }

    const bmi = weight / (height * height);
    let bmiCategory = '';

    if (bmi < 18.5) {
        bmiCategory = 'Underweight';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        bmiCategory = 'Normal weight';
    } else if (bmi >= 25 && bmi < 29.9) {
        bmiCategory = 'Overweight';
    } else {
        bmiCategory = 'Obesity';
    }

    document.getElementById('result').textContent = `Your BMI is ${bmi.toFixed(2)} (${bmiCategory})`;
}
