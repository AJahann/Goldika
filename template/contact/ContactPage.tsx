import styles from "./contactPageStyle.module.css";
import ContactInfo from "./ContactInfo";
import SocialGroupIcons from "@/shared/components/footer/SocialGroupIcons";
import OperatorSVG from "./svg/OperatorSVG";
import contactInfo from "./contantData";

function ContactDetails() {
  return (
    <>
      <div>
        <OperatorSVG />
      </div>
      <div className={styles.contactContentTxt}>
        {contactInfo.map((item, index) => (
          <ContactInfo key={index} icon={item.icon}>
            {item.text}
          </ContactInfo>
        ))}
        <br />
        <div className={styles.contactSocials}>
          <SocialGroupIcons />
        </div>
      </div>
    </>
  );
}

function ContactMap() {
  return (
    <div className={styles.contactMap}>
      <iframe
        title="map"
        width="320"
        height="320"
        style={{ borderRadius: 16 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.014406178425!2d51.3530723!3d35.7012631!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e0167eaeb16d7%3A0xebf245068e88e31e!2z2K_Zgdiq2LEg2YXYsdqp2LLbjCDar9mE2K_bjNqp2Kc!5e0!3m2!1sfa!2sse!4v1701671177035!5m2!1sfa!2sse&amp;language=fa"
      ></iframe>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className={styles.contact}>
      <div className={`${styles.contactMain} container`}>
        <div className={styles.contactWrap}>
          <h1 className={styles.contactPageTitle}>ارتباط با گلدیکا</h1>
          <div className={styles.contactPageContent}>
            <ContactDetails />
            <ContactMap />
          </div>
        </div>
      </div>
    </div>
  );
}
