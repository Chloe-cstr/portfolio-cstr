import './home.scss';
import Header from '../../component/Header/Header';
import PresentationSection from '../../component/PresentationSection/PresentationSection';
import CompetenceSection from '../../component/CompetenceSection/CompetenceSection';

const Home = () => {
  return (
    <div>
        <Header />
        <PresentationSection />
        <CompetenceSection />
    </div>
  );
};

export default Home;