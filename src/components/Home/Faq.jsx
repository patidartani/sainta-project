import "./Faq.css";
import { useState } from 'react';
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

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
                  <i className={openIndex === index ? "rotate" : ""}>
                    {openIndex === index ? <IoMdArrowDropup size={24} /> : <IoMdArrowDropdown size={24} />}
                  </i>
                </div>
                <div className={`two ${openIndex === index ? "show" : ""}`}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
