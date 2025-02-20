import "./Faq.css";
import { useState } from 'react';
import 'remixicon/fonts/remixicon.css';

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "サインタERPの導入は難しい？",
      answer: "サインタERPは、直感的な操作性を重視して設計されており、スムーズな導入が可能です。\nアクセスは非常にシンプルで、企業IDと登録済みメールアドレス（またはユーザー名）、パスワードでの認証後、すぐにシステムをご利用いただけます。\nクラウドベースのため、専用ソフトのインストールも不要です。"
    }
  ];

  return (
    <section className="faqSecMain">
      <div className='Faq'>
        <div className="faqq">
          <h5>よくある質問</h5> 
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
