import React, { useEffect, useState } from "react";
import non1 from "../assets/non1.jpg";
import "../Non-Fiction/nonfiction.css";
import { Link } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navigation from "../components/Navigation";
import axios from "axios";

function Nonfiction() {
  // State to store all the books
  const [books, setBooks] = useState([]);

  // Function to get all the books from backend
  async function getBooks() {
    const response = await axios.get("http://localhost:5000/api/v1/book/list");
    // return response.data;
    setBooks(response.data);
  }
  console.log(books);

  // useEffect hook
  useEffect(() => {
    console.log("Getting books");
    getBooks();
  }, []);

  return (
    <div>
      <Navigation />
      <div className="heeee">
        <div className="products-heading">
          <h2>Non-Fiction Books</h2>
        </div>
        <div className="bookproducts">

          {/*...........books mapping..........*/}
          {books.map((book) => (

          <div className="image-book-products-1">
            <div>
              <img src={non1} alt="" />
            </div>
            <div className="title-book-products-1">
              <h4>{book.title}</h4>
              <p>
                <Link to={`/BookDescription/${book._id}`}>Learn more...</Link> {/*to concatenate string and variable*/}

              </p>
            </div>

          </div>
          ))};

        </div>
   
        <Footer />
      </div>
    </div>
  );
}

export default Nonfiction;
