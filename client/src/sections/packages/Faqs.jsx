import { useState } from 'react';
import { faqs } from '../../constants';

const Faqs = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleQuestion = (id, event) => {
    if (event.target.closest('.question-title')) {
      setActiveId(activeId === id ? null : id);
    }
  };

  return (
    <section className="flex flex-col screen800">
      <div>
        <h2 className="page-sub-subheading text-fc-3">
          FAQs
        </h2>
      </div>
      {faqs.map((question) => (
        <article
          key={question.id}
          className={`question hover:cursor-pointer ${
            activeId === question.id ? 'show-text' : ''
          }`}
          onClick={(e) => toggleQuestion(question.id, e)}
        >
          <div className="question-title capitalize py-6 flex justify-between items-center">
            <p className="package-title pr-6">{question.q}</p>
            <button type="button" className="question-btn">
              <span className="down-arrow-icon">
                <i className="arrow down"></i>
              </span>
              <span className="up-arrow-icon">
                <i className="arrow up"></i>
              </span>
            </button>
          </div>
          <div className="question-text text-fc-3 text-lg font-fLato font-light leading-snug cursor-default pb-4">
            {question.a.map((answer, index) => (
              <p key={index}>{answer}</p>
            ))}
          </div>
        </article>
      ))}
    </section>
  );
};

export default Faqs;
