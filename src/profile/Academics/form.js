function submitForm() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const bookTitle = document.getElementById('bookTitle').value;
    const rentalDuration = document.getElementById('rentalDuration').value;

    // Basic validation, you can add more validation as needed
    if (!fullName || !email || !bookTitle || !rentalDuration) {
        alert('Please fill in all fields.');
        return;
    }

    console.log('Form submitted:');
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Book Title:', bookTitle);
    console.log('Rental Duration:', rentalDuration);

   //direction
    window.location.href = 'https://hservers.org/kobo/%5BIT%5D/The%20Complete%20Beginners%20Guide%20to%20React.pdf'; 

    // Optional: Clear the form after submission
    document.getElementById('rentForm').reset();
}


