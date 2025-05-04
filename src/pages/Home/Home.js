import IntroductionComponent from "../../components/IntroductionComponent/IntroductionComponent";
import WorksShowcase from "../../components/WorksShowcase/WorksShowcase";
import Accordion from "../../components/Accordian/Accordian";

const Home = () => {
  return (
    <div>
      <IntroductionComponent />
      <WorksShowcase />
      <Accordion />
    </div>
  );
};

export default Home;
