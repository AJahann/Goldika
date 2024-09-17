import Footer from "@/shared/components/footer/Footer";
import NavBar from "@/shared/components/navBar/NavBar";
import AboutSection from "@/template/home/aboutSection/AboutSection";
import ArticleNewsSection from "@/template/home/articleNewsSection/ArticleNewsSection";
import ChartSection from "@/template/home/chartSection/ChartSection";
import InfoWorkGoldika from "@/template/home/infoSection/InfoWorkGoldika";
import InviteBanner from "@/template/home/InviteSection/InviteBanner";
import StepperSection from "@/template/home/stepperSection/StepperSection";
import TradingSection from "@/template/home/tradingSection/TradingSection";

const Home = () => {
  return (
    <div>
      <TradingSection />
      <InfoWorkGoldika />
      <StepperSection />
      <ChartSection />
      <ArticleNewsSection />
      <AboutSection />
      <InviteBanner isLogin={false} />
    </div>
  );
};

export default Home;
