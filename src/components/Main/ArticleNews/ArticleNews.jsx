import { Link } from 'react-router-dom';
import './ArticleNews.css';

export default function ArticleNews() {
  return (
    <div className='sec-articleNews container'>
      <div className='sec-articleNews-wrap'>
        <h2>اخبار و مقالات</h2>
        <div className='articleNews-wrap'>
          <div className='articleNews-card'>
            <Link to={'/how-to-use'}>
              <div>
                <img
                  src='./images/articleNews/baner1.webp'
                  alt='whyUseGoldika'
                />
              </div>
              <h3>آموزش قدم به قدم سامانه گلدیکا</h3>
            </Link>
          </div>
          <div className='articleNews-card'>
            <Link to={'/buy-gold'}>
              <div>
                <img
                  src='./images/articleNews/baner2.webp'
                  alt='whyUseGoldika'
                />
              </div>
              <h3>خرید طلای آبشده یا دست‌ دوم؟</h3>
            </Link>
          </div>
          <div className='articleNews-card'>
            <Link to={'/gold-price'}>
              <div>
                <img
                  src='./images/articleNews/baner3.webp'
                  alt='whyUseGoldika'
                />
              </div>
              <h3>
                نحوه محاسبه قیمت طلا در زمان خرید – سال 1402 (به همراه یک مثال)
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
