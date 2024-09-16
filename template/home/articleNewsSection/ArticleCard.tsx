import Image from "next/image";
import Link from "next/link";
import styles from "./articleNewsStyle.module.css";

interface ArticleCardProps {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
}

const ArticleCard = ({ href, imageSrc, imageAlt, title }: ArticleCardProps) => (
  <div className={styles.articleNewsCard}>
    <Link href={href}>
      <div>
        <Image src={imageSrc} alt={imageAlt} width={500} height={300} />
      </div>
      <h3>{title}</h3>
    </Link>
  </div>
);

export default ArticleCard;
