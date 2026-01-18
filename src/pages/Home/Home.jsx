import './home.scss';
import Header from '../../component/Header/Header';
import Accueil from '../../component/Section/Accueil/Accueil';
import About from '../../component/Section/About/About';
import Project from '../../component/Section/Project/Project';
import Competences from '../../component/Section/Competences/Competences';
import Tech from '../../component/Section/Tech/Tech';
import Contact from '../../component/Section/Contact/Contact';
import Footer from '../../component/Footer/Footer';

const Home = () => {
  return (
    <div>
        <Header />
        <Accueil />
        <About />
        <Project />
        <Competences />
        <Tech />
        <Contact />
        <Footer />
    </div>
  );
};

export default Home;