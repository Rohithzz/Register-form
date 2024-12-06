document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const lastName = document.getElementById('lastName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const gender = document.getElementById('gender').value;
    const message = document.getElementById('message').value;

    const data = `Full Name: ${fullName}\nLast Name: ${lastName}\nPhone Number: ${phoneNumber}\nGender: ${gender}\nAdditional Message: ${message}`;

    const element = document.createElement('a');
    const file = new Blob([data], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = 'registration_data.txt';
    document.body.appendChild(element);
    element.click();
});