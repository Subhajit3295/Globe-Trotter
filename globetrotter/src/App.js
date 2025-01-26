
import { Navbar } from './components/navbar';
import './Style.css';
import './Media.css';
import { PageOne } from './components/page-1';
import { PageTwo } from './components/page-2';
import { HeadingThree, HeadingTwo } from './components/heading';
import { PageThree } from './components/page-3';

function App() {
  return (
    <>
    <Navbar/>
    <PageOne/>
    <HeadingTwo heading="Explore Top Destinations" subheading="Checkout some incredible destinations"/>
    <PageTwo/>
    <HeadingThree heading="Check Out A Few Advantages Of Joining Us" subheading="What we offer"/>
    <PageThree/>
    </>
  );
}

export default App;
