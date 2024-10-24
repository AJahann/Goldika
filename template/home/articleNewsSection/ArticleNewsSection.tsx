import ArticleCard from "./ArticleCard";
import styles from "./articleNewsStyle.module.css";

const articles = [
  {
    href: "/how-to-use",
    imageSrc: "/images/articleNews/baner1.webp",
    imageAlt: "آموزش قدم به قدم سامانه گلدیکا",
    title: "آموزش قدم به قدم سامانه گلدیکا",
  },
  {
    href: "/buy-gold",
    imageSrc: "/images/articleNews/baner2.webp",
    imageAlt: "خرید طلای آبشده یا دست‌ دوم؟",
    title: "خرید طلای آبشده یا دست‌ دوم؟",
  },
  {
    href: "/gold-price",
    imageSrc: "/images/articleNews/baner3.webp",
    imageAlt: "نحوه محاسبه قیمت طلا در زمان خرید – سال 1402 (به همراه یک مثال)",
    title: "نحوه محاسبه قیمت طلا در زمان خرید – سال 1402 (به همراه یک مثال)",
  },
];

const ArticleNewsSection = () => {
  return (
    <div className={`${styles.secArticleNews} container`}>
      <div className={styles.secArticleNewsWrap}>
        <h2>اخبار و مقالات</h2>
        <div className={styles.articleNewsWrap}>
          {articles.map((article, index) => (
            <ArticleCard
              key={index}
              href={article.href}
              imageSrc={article.imageSrc}
              imageAlt={article.imageAlt}
              title={article.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleNewsSection;
