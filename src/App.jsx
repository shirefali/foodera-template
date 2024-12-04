import Stats from './components/Stats';
import Home from './pages/Home';
import './index.css';
import About from './pages/About';
import Blog from './pages/Blog';
import Testimonials from './pages/Testimonials';
import Faq from './pages/Faq';
import Parallex from './components/Parallex';
import Subscribe from './components/Subscribe';
import Foooter from './components/Foooter';
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from 'react';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 700,
            once: true,
        });
    }, []);
    return (
        <>
            <Home />
            <Stats />
            <About />
            <Blog />
            <Testimonials />
            <Faq />
            <Parallex />
            <Subscribe />
            <Foooter />
        </>
    );
}

export default App;
