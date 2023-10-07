import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import NavBar from './components/Fragments/Navbar';
import BackGround from './components/Fragments/Background';
import MainContentLayout from './components/Layouts/MainContentLayout';
import { useEffect, useState } from 'react';
import Footer from './components/Fragments/Footer';

function App() {
  const darkMode = useSelector((state) => state.darkMode);
  const [isAtTop, setIsAtTop] = useState(true);
  const [sticky, setSticky] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.body.style.backgroundColor = '#222831';
    } else {
      document.body.style.backgroundColor = 'white';
      document.documentElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth < 500) {
        setSticky(false);
      } else {
        setSticky(true);
      }
      if (window.scrollY === 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Fragment>
      <BackGround />
      <NavBar isAtTop={isAtTop} isSticky={sticky} />
      <MainContentLayout />
      <Footer />
    </Fragment>
  )
}

export default App
