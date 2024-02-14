function submitBuyForm() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const bookTitle = document.getElementById('bookTitle').value;
    const paymentDetails = document.getElementById('paymentDetails').value;

    if (!fullName || !email || !bookTitle || !paymentDetails) {
        alert('Please fill in all fields.');
        return;
    }


    console.log('Buy Form submitted:');
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Book Title:', bookTitle);
    console.log('Payment Details:', paymentDetails);

   //direction
      window.location.href = 'https://ccyd.co.uk/wp-content/uploads/2021/02/I-Know-Why-the-Caged-Bird-Sings-PDFDrive-.pdf'; 

      //reset the form
    document.getElementById('buyForm').reset();
}
