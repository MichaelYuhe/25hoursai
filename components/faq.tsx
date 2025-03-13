import type { FC, ReactNode } from "react";

interface FAQItemProps {
  question: string;
  answer: ReactNode;
}

const FAQItem: FC<FAQItemProps> = ({ question, answer }) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-2">{question}</h3>
      <div className="text-gray-600 dark:text-gray-400">{answer}</div>
    </div>
  );
};

const FAQ: FC = () => {
  const faqItems = [
    {
      id: "price-calculation",
      question: "How is the price calculated?",
      answer: (
        <p>
          Based on the selected work hours and the LLM you choose. Calculated as
          the LLM always works at full speed(max tokens per minute) and no cache enabled.
        </p>
      ),
    },
    {
      id: "24-7-work",
      question: "Can I really let LLMs work for me 24/7?",
      answer: <p>I hope so.</p>,
    },
  ];

  return (
    <section className="py-12">
      {faqItems.map((item) => (
        <FAQItem key={item.id} question={item.question} answer={item.answer} />
      ))}
    </section>
  );
};

export default FAQ;
