import './home.scss';
import Header from '../../component/Header/Header';
import PresentationSection from '../../component/PresentationSection/PresentationSection';
import CompetenceSection from '../../component/CompetenceSection/CompetenceSection';
import Footer from '../../component/Footer/Footer';

const Home = () => {
  return (
    <div>
        <Header />
        <PresentationSection />
        <CompetenceSection />
        <Footer />
    </div>
  );
};

export default Home;