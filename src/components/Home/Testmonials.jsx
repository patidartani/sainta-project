import { useState, useEffect } from 'react';
import "./Testmonials.css";
import StarRatings from "react-star-ratings";

const reviews = [
  {

    text: "I am extremely satisfied with the quality and professionalism. Will definitely be coming back for more.",
    name: "Pallavi Patel",
    imgSrc: "https://static.vecteezy.com/system/resources/previews/042/392/476/non_2x/ai-generated-portrait-of-young-beautiful-japanese-woman-in-glasses-on-busy-city-street-free-photo.jpg",
    rating: 5,
  },
  {

    text: "Amazing experience! The service was top-notch, and the team went above and beyond to meet our needs. Highly recommend!",
    name: "Neha Jain",
    imgSrc: "https://img-musesai.163264.com/pic/202407/0SQP9JW4NbXm.jpg",
    rating: 4.4,
  },
  {

    text: "This was the best decision I made! The results exceeded my expectations, and the customer service was fantastic.",
    name: "Urvashi Solanki",
    imgSrc: "https://img-musesai.163264.com/pic/202407/JV5mKfz4E9MA.jpg",
    rating: 3.5,
  },
  {

    text: "Exceptional quality and outstanding support. Highly recommended for anyone looking for reliability and excellence.",
    name: "Rahul Mehta",
    imgSrc: "https://imgcdn.stablediffusionweb.com/2024/4/26/c2d8ee17-1e5b-4b40-be19-8e3f79d43a0e.jpg",
    rating: 5,
  },
  {

    text: "A seamless shopping experience with great customer support. Highly recommend this website!",
    name: "Amit Sharma",
    imgSrc: "https://t4.ftcdn.net/jpg/06/97/16/73/360_F_697167359_VkW6Q2TPBikxrA5QhvEGhmp67E0mf7tP.jpg",
    rating: 2.9,
  },
  {

    text: "From start to finish, the entire process was smooth and efficient. I couldn't be happier with the outcome!",
    name: "Sneha Roy",
    imgSrc: "https://static.vecteezy.com/system/resources/thumbnails/051/499/354/small/portrait-young-japanese-woman-with-modern-hairstyle-and-warm-smile-photo.jpeg",
    rating: 4.1,
  },
  {

    text: "I've tried many services before, but this one stands out. The team is friendly, knowledgeable, and always ready to help.",
    name: "Ravi Verma",
    imgSrc: "https://static.vecteezy.com/system/resources/thumbnails/054/006/132/small/asian-girl-smiling-with-backpack-photo.jpg",
    rating: 4,
  },
  {

    text: "Their attention to detail and commitment to customer satisfaction is unparalleled. A fantastic experience!",
    name: "Priya Sinha",
    imgSrc: "https://static.vecteezy.com/system/resources/thumbnails/054/006/451/small/a-young-woman-with-long-hair-and-a-backpack-photo.jpg",
    rating: 5,
  },
  {

    text: "From start to finish, the entire process was smooth and efficient. I couldn't be happier with the outcome!",
    name: "Kunal Desai",
    imgSrc: "https://t3.ftcdn.net/jpg/06/26/62/42/360_F_626624267_xgPGOBjMSI4G2ei7p8uwz4SJ8n5RF3wN.jpg",
    rating: 3.7,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = window.innerWidth <= 768 ? 1 : 3;
  const [isDragging, setIsDragging] = useState(false);


  useEffect(() => {
    const timer = setTimeout(() => {
      if (!isDragging) {
        setCurrentIndex((prevIndex) =>
          prevIndex >= reviews.length - itemsPerPage ? 0 : prevIndex + itemsPerPage
        );
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [currentIndex, itemsPerPage, isDragging]);



  const currentReviews = reviews.slice(currentIndex, currentIndex + itemsPerPage);

  return (
    <div className='Demat-main'>
      <div className="Demat-page">
        <div className="advantage">
        <h5>お客様の声</h5>
                </div>
        <div className="advantage-slider">
          <div className="Review-container">
            {currentReviews.map((review, index) => (
              <div key={index} className="Review">
                <p className="review-text">" {review.text} "</p>
                <div className="review-info">
                  <img src={review.imgSrc} alt={review.name} className="review-img" />
                  <h5 className="review-name">{review.name}</h5>
                  <div className="review-stars">
                    <StarRatings
                      rating={Number(review.rating)}
                      starRatedColor="#ffd700"
                      numberOfStars={5}
                      starDimension="15px"
                      starSpacing="1px"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="pagination">
          {Array.from({ length: Math.ceil(reviews.length / itemsPerPage) }).map((_, index) => (
            <span
              key={index}
              className={`dot ${currentIndex / itemsPerPage === index ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index * itemsPerPage)}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
