import NavBar from "@/shared/components/navBar/NavBar";
import ArticleNewsSection from "@/template/home/articleNewsSection/ArticleNewsSection";
import ChartSection from "@/template/home/chartSection/ChartSection";
import InfoWorkGoldika from "@/template/home/infoSection/InfoWorkGoldika";
import StepperSection from "@/template/home/stepperSection/StepperSection";
import TradingSection from "@/template/home/tradingSection/TradingSection";

const Home = () => {
  return (
    <div>
      <NavBar />
      <TradingSection />
      <InfoWorkGoldika />
      <StepperSection />
      <ChartSection />
      <ArticleNewsSection />
    </div>
  );
};

export default Home;
