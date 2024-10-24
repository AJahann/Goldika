import styles from "./faqPage.module.css";
import AccordionFaq from "./AccordionFaq";
import faqData from "@/data/faqData";

const FaqPage = () => {
  return (
    <div>
      <div className={`${styles.faqMain} container`}>
        <div className={styles.faqWrap}>
          <h1 className={styles.faqTitle}>سوالات متداول</h1>

          {faqData.map((section, sectionIndex) => (
            <div key={sectionIndex} className={styles.accordionWrap}>
              <h2 className={styles.subTitle}>{section.category}</h2>
              {section.questions.map((question, questionIndex) => (
                <AccordionFaq
                  key={questionIndex}
                  title={question.title}
                  content={question.content}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
