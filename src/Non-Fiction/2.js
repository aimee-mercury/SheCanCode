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
    window.location.href = 'https://lifeclub.org/books/the-boys-in-the-boat-daniel-james-brown-review-summary'; 

    // Optional: Clear the form after submission
    document.getElementById('rentForm').reset();
}
