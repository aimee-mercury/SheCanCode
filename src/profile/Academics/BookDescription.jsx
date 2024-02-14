import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../Footer/Footer';
import './style.css';
import './form.css';
const BookDescriptionPage = () => {
  const [showBookInfo, setShowBookInfo] = useState(true);
  const [showRentForm, setShowRentForm] = useState(false);
  const [showBuyForm, setShowBuyForm] = useState(false);

  const openRentForm = () => {
    setShowBookInfo(false);
    setShowRentForm(true);
  };

  const openBuyForm = () => {
    setShowBookInfo(false);
    setShowBuyForm(true);
  };

  const closeForms = () => {
    setShowBookInfo(true);
    setShowRentForm(false);
    setShowBuyForm(false);
  };

  const redirectToBook = () => {
    // Replace the window.location.href with the provided link
    window.location.href =
      'https://manybooks.net/book/151703/read#epubcfi(/6/4[section1]!/4/4/2/2/1:0)';
  };

  const submitRentForm = () => {
    closeForms();
    redirectToBook();
  };

  const submitBuyForm = () => {
    closeForms();
    redirectToBook();
  };

  return (
    <div>
      <Navigation />

      <div className="container">
        {showBookInfo && (
          <div id="bookInfo">
            <div>
              <img src="" alt="" />
              <p>
                <strong>Title:</strong> I Know Why the Caged Bird Sings
              </p>
              <p>
                <strong>Author:</strong> Maya Angelou
              </p>
              <p>
                <strong>Publish Time:</strong> 1969
              </p>
              <p>
                <strong>Summary:</strong> "I Know Why the Caged Bird Sings" is an autobiography by
                Maya Angelou, an American author and poet.
              </p>
            </div>
          </div>
        )}

        {showBookInfo && (
          <div>
            <button onClick={openRentForm}>Borrow a Book</button>
            <button onClick={openBuyForm}>Buy a Book</button>
          </div>
        )}

        {showRentForm && (
          <div className="popup-container" id="rentPopup">
            <div className="popup-content">
              <h2>Borrow a Book Form</h2>
              <form id="rentForm">
                {/* Your form fields here */}
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" id="fullName" name="fullName" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="bookTitle">contacts:</label>
                <input type="text" id="rentalDuration" name="bookTitle" />

                <label htmlFor="bookTitle">Book Title:</label>
                <input
                  type="text"
                  id="bookTitle"
                  name="bookTitle"
                  readOnly
                  placeholder="why all bird sings"
                />

                <label htmlFor="rentalDuration">Rental Duration (days):</label>
                <input
                  type="number"
                  id="rentalDuration"
                  name="rentalDuration"
                  readOnly
                  placeholder="5"
                />

                <button type="button" className='bt' onClick={submitRentForm}>
                  Submit
                </button>
                <button className="bt" onClick={closeForms}>
                Close
              </button>
              </form>
            
            </div>
          </div>
        )}

        {showBuyForm && (
          <div className="popup-container" id="buyPopup">
            <div className="popup-content">
              <h2>Buy a Book Form</h2>
              <form id="buyForm">
                {/* Your form fields here */}
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" id="fullName" name="fullName" required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="bookTitle">Book Title:</label>
                <input
                  type="text"
                  id="bookTitle"
                  name="bookTitle"
                  readOnly
                  placeholder="why all bird sing"
                />

                <label htmlFor="paymentDetails">Payment Details:</label>
                <textarea id="paymentDetails" name="paymentDetails" readOnly>
                  momo:04045
                </textarea>
                <textarea id="paymentDetails" name="paymentDetails" readOnly>
                  telephone:0791789685
                </textarea>

                <button type="button" className='bt' onClick={submitBuyForm}>
                  Buy Now
                </button>
                <button className="bt" onClick={closeForms}>
                Close
              </button>
              </form>
             
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default BookDescriptionPage;
