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
      window.location.href = 'https://maltalibraries.overdrive.com/media/6362276'; 

      //reset the form
    document.getElementById('buyForm').reset();
}
