import './ArticleNews.css';

export default function ArticleNews() {
  return (
    <div className='sec-articleNews container'>
      <div className='sec-articleNews-wrap'>
        <h2>اخبار و مقالات</h2>
        <div className='articleNews-wrap'>
          <div className='articleNews-card'>
            <a href='/'>
              <div>
                <img
                  src='./images/articleNews/baner1.webp'
                  alt='whyUseGoldika'
                />
              </div>
              <h3>آموزش قدم به قدم سامانه گلدیکا</h3>
            </a>
          </div>
          <div className='articleNews-card'>
            <a href='/'>
              <div>
                <img
                  src='./images/articleNews/baner2.webp'
                  alt='whyUseGoldika'
                />
              </div>
              <h3>خرید طلای آبشده یا دست‌ دوم؟</h3>
            </a>
          </div>
          <div className='articleNews-card'>
            <a href='/'>
              <div>
                <img
                  src='./images/articleNews/baner3.webp'
                  alt='whyUseGoldika'
                />
              </div>
              <h3>
                نحوه محاسبه قیمت طلا در زمان خرید – سال 1402 (به همراه یک مثال)
              </h3>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
