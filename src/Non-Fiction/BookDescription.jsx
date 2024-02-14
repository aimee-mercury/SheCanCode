import React, {useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../Footer/Footer';
import './style.css';
import './form.css';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const BookDescriptionPage = () => {

  const [showBookInfo, setShowBookInfo] = useState(true);
  const [showRentForm, setShowRentForm] = useState(false);
  const [showBuyForm, setShowBuyForm] = useState(false);

  // to define book detail that will be displayed
  const [bookDetail, setBookDetail] = useState({
    
  });
  const [book, setBook] = useState({});
  const [user, setUser] = useState({});

// hook to retrieve boodId from url
  const params = useParams();
  console.log(params.id);

  async function getBook(id) {
    const response = await axios.get(`http://localhost:5000/api/v1/book/findById/${id}`);
    setBook (response.data)
  }

  // Function to retrieve saved user from log in.
  console.log(book);
  async function getUser(){
    const userData = localStorage.getItem('user');
    setUser (JSON.parse(userData));
  }
  console.log(user);

// Function to handle books borrowed
async function borrowBook(e){
  e.preventDefault();
 axios.post('http://localhost:5000/api/v1/borrow/add', {userId: user.id, bookId: params.id})
 .then(response =>{
  alert('Book borrowed successfully')
  
 }).catch(error =>{
  alert('Request denied')
 }) 
}

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



  const submitBuyForm = () => {
    closeForms();
  
  };

  // useEffect 
  useEffect(() =>{
    getBook(params.id);
    getUser();
  },[]);

  return (
    <div>
      <Navigation />

      <div className="container">
        {showBookInfo && (
          <div id="bookInfo">
            <div>
              <img src="" alt="" />
              <p>
                <strong>Title:</strong> {book.title}
              </p>
              <p>
                <strong>Author:</strong> {book.author}
              </p>
              <p>
                <strong>Publish Time:</strong> {book.publishedDate}
              </p>
              {/* <p>
                <strong>Summary:</strong> "I Know Why the Caged Bird Sings" is an autobiography by
                Maya Angelou, an American author and poet.
              </p> */}
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
              <form id="rentForm" onSubmit={borrowBook}>

                {/* Your form fields here */}
                <label htmlFor="fullName">Full Name:</label>
                <input type="text" id="fullName" name="fullName" value={user.fullName}required />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" value={user.email} required />

                <label htmlFor="bookTitle">contacts:</label>
                <input type="text" id="contactForm" name="contactTitle" />

                <label htmlFor="bookTitle">Book Title:</label>
                <input
                value={book.title}
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

                <button type="submit" className='bt' >
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
