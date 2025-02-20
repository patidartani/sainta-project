import "./Faq.css";
import { useState } from 'react';
import 'remixicon/fonts/remixicon.css';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    { question: "What is your return policy?", answer: "You can return any item within 30 days of purchase." },
    { question: "How can I track my order?", answer: "You can track your order from the 'Orders' section in your account." },
    { question: "Do you offer international shipping?", answer: "Yes, we ship to most countries worldwide." },
    { question: "How do I contact customer support?", answer: "You can reach us via email at support@example.com." }
  ];

  return (
    <section className="faqSecMain">
      <div className='Faq'>
        <div className="faqq">
          <h5>Frequently Asked Questions</h5>
          <div className="f-btm">
            {faqData.map((faq, index) => (
              <div className="line" key={index}>
                <div className="one" onClick={() => handleToggle(index)}>
                  <p>{faq.question}</p>
                  <i className={openIndex === index ? "ri-arrow-up-s-line" : "ri-arrow-down-s-line"}></i>
                </div>
                {openIndex === index && (
                  <div className="two show">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;