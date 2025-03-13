import React from "react";

interface FAQItemProps {
  question: string;
  answer: React.ReactNode;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{question}</h3>
      <div className="text-gray-600">{answer}</div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: "How is the price calculated?",
      answer: (
        <p>
          Based on the selected work hours and the LLM you choose. Calculated as
          the LLM always works at full speed(max tokens per minute).
        </p>
      ),
    },
    {
      question: "Can I really let LLMs work for me 24/7?",
      answer: <p>I hope so.</p>,
    },
  ];

  return (
    <section className="py-12">
      {faqItems.map((item, index) => (
        <FAQItem key={index} question={item.question} answer={item.answer} />
      ))}
    </section>
  );
};

export default FAQ;
