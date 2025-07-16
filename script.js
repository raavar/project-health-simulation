document.addEventListener('DOMContentLoaded', () => {
    const health_form = document.getElementById('health-form');
    const result_section = document.getElementById('result-section');
    const personal_result_div = document.getElementById('personal-result');

    health_form.addEventListener('submit', function(event) {
        event.preventDefault();

        const health_form_data = new FormData(health_form);

        const input_data = {};
        health_form_data.forEach((value, key) => {
            input_data[key] = value;
        });

        const bmi = calculateBMI(input_data);

        personal_result_div.innerHTML = proccessHealthFormData(input_data, bmi);

        result_section.style.display = 'block';
    });

    function calculateBMI(data) {
        const height_in_meters = data.height / 100;
        return (data.weight / (height_in_meters * height_in_meters)).toFixed(2);
    }

    function proccessHealthFormData(data, bmi) {
        return `
            <p>Name: ${data.name}</p>
            <p>Age: ${data.age}</p>
            <p>Height: ${data.height}</p>
            <p>Weight: ${data.weight}</p>
            <p>BMI: ${bmi}</p>
        `;
    }
});