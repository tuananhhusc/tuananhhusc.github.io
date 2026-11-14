'use client';

import { useState } from 'react';

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container-narrow">
      {items.map((item, index) => {
        const isOpen = activeIndex === index;
        const answerId = `faq-answer-${index}`;

        return (
          <div key={index} className={`faq-accordion-item ${isOpen ? 'active' : ''}`}>
            <button
              className="faq-question-btn"
              onClick={() => toggle(index)}
              aria-expanded={isOpen}
              aria-controls={answerId}
            >
              <span>{item.question}</span>
              <span className="faq-chevron" aria-hidden="true">
                ▼
              </span>
            </button>
            <div id={answerId} className="faq-answer-pane" role="region">
              {item.answer}
            </div>
          </div>
        );
      })}
    </div>
  );
}
