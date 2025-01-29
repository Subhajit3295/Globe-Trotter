
import { Navbar } from './components/navbar';
import './Style.css';
import './Media.css';
import { PageOne } from './components/page-1';
import { PageTwo } from './components/page-2';
import { HeadingThree, HeadingTwo } from './components/heading';
import { PageThree } from './components/page-3';
import { PageFour } from './components/page-4';
import { PageFive } from './components/page-5';
import { PageSix } from './components/page-6';
import { PageSeven } from './components/page-7';
import { PageEight } from './components/page-8';
import { Footer } from './components/footer';

function App() {
  return (
    <>
    <Navbar/>
    <PageOne/>
    <HeadingTwo heading="Explore Top Destinations" subheading="Checkout some incredible destinations"/>
    <PageTwo/>
    <HeadingThree heading="Check Out A Few Advantages Of Joining Us" subheading="What we offer"/>
    <PageThree/>
    <PageFour/>
    <PageFive/>
    <PageSix/>
    <PageSeven/>
    <PageEight/>
    <Footer/>
    </>
  );
}

export default App;
