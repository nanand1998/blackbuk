import IntroductionComponent from "../../components/IntroductionComponent/IntroductionComponent";
import WorksShowcase from "../../components/WorksShowcase/WorksShowcase";
import Accordion from "../../components/Accordian/Accordian";
import AboutUsHome from "../../components/AboutUsHome/AboutUsHome";
import LetsTalkHome from "../../components/LetsTalkHome/LetsTalkHome";
import Footer from "../../components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <IntroductionComponent />
      <WorksShowcase />
      <Accordion />
      <AboutUsHome />
      <LetsTalkHome />
      <Footer />
    </div>
  );
};

export default Home;
