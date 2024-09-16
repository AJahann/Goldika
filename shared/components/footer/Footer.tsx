import Image from "next/image";
import Link from "next/link";
import styles from "./footer.module.css";
import SocialGroupIcons from "./SocialGroupIcons";

const links = {
  right: [
    { href: "/", label: "صفحه‌ی اصلی" },
    { href: "/about", label: "درباره ما" },
    { href: "/rules", label: "شرایط و قوانین" },
    { href: "/blog", label: "وبلاگ" },
  ],
  left: [
    { href: "/faq", label: "سؤالات متداول" },
    { href: "/trust", label: "چطور به گلدیکا اعتماد کنیم؟" },
    { href: "/contact", label: "ارتباط با ما" },
  ],
};

const FooterLinks = () => {
  return (
    <div className={styles.footerLinks}>
      <div className={styles.footerLinksRight}>
        {links.right.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
      <div className={styles.footerLinksLeft}>
        {links.left.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};

const nemads = [
  {
    src: "/images/footer/gi-enamad.44d72e55.png",
    alt: "enamad",
    text: "نماد اعتماد الکترونیکی",
  },
  {
    src: "/images/footer/gi-samandehi.7615b7e6.png",
    alt: "samandehi",
    text: "نشان ملی ثبت\nsamandehi.ir",
  },
  {
    src: "/images/footer/gi-ecunion.7ed64975.png",
    alt: "ecunion",
    text: "اتحادیه‌ی کشوری کسب‌و‌کار‌های مجازی",
  },
];

const FooterNemads = () => {
  return (
    <div className={styles.footerNemads}>
      {nemads.map((nemad) => (
        <div key={nemad.alt} className={styles.footerNemad}>
          <div>
            <Image src={nemad.src} alt={nemad.alt} width={80} height={80} />
          </div>
          <p>{nemad.text}</p>
        </div>
      ))}
    </div>
  );
};

const FooterInfo = () => {
  return (
    <div className={styles.footerInfo}>
      <div className={styles.footerAddr}>
        <p>
          آدرس دفتر فنی: تهران، دانشگاه صنعتی شریف، مجتمع نوآوری شهید ستاری،
          طبقه پنجم، واحد ۵۲۳
        </p>
        <p>
          آدرس طلافروشی: تهران، خیابان ستارخان، تقاطع صادق پور، پاساژ الماس غرب،
          طبقه منفی یک، واحد ۱۵
        </p>
      </div>
      <div className={styles.footerConnect}>
        <div className={styles.footerPhone}>
          <span>تلفن:</span> ۰۲۱-۹۱۰ ۹۶ ۱۹۶
        </div>
        <div className={styles.footerSocials}>
          <SocialGroupIcons />
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrap}>
        <div className={styles.footerRow}>
          <FooterLinks />
          <div className={styles.footerGrow}></div>
          <FooterNemads />
        </div>
        <FooterInfo />
        <div
          style={{
            textAlign: "center",
            fontSize: 12,
            color: "rgb(128, 128, 128)",
            marginTop: 20,
            padding: 10,
          }}
        >
          کلیه‌ی حقوق برای گلدیکا محفوظ است.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
