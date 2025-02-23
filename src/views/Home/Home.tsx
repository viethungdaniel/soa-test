import SectionBanner from "./components/SectionBanner";
import SectionBlock1 from "./components/SectionBlock1";
import SectionBlock4 from "./components/SectionBlock4";
import SectionBlock5 from "./components/SectionBlock5";
import SectionBlock6 from "./components/SectionBlock6";
import SectionExplore from "./components/SectionExplore";
import SectionMap from "./components/SectionMap";
import SectionOurActivities from "./components/SectionOurActivities";

const Home = () => {
  return (
    <div>
      <SectionBanner />
      <SectionBlock1 />
      <SectionMap />
      <SectionOurActivities />
      <SectionBlock4 />
      <SectionBlock5 />
      <SectionBlock6 />
      <SectionExplore />
    </div>
  );
};

export default Home;
