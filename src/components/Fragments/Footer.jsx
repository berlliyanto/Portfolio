import Lottie from "lottie-react";
import gitLottie from "../../assets/lottie/github.json";
import linkedinLottie from "../../assets/lottie/linkedin.json";
import instagramLottie from "../../assets/lottie/insta2.json"
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { faLocation } from "@fortawesome/free-solid-svg-icons";
import { faJournalWhills } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

const Footer = () => {
    const navLinksDesktop = document.querySelectorAll('nav#nav-desktop ul li a');
    const sections = document.querySelectorAll('section.mt-28');

    useEffect(() => {
        // if(window.scrollY==0)document.querySelector('nav#nav-desktop ul li a[href*=home]').classList.add('nav-active-desktop');

        const navActive = () => {
            sections.forEach(sec => {
                let top = window.scrollY;
                let offset = sec.offsetTop - 150;
                let height = sec.offsetHeight;
                let id = sec.getAttribute('id');
                if (top == 0) {
                    document.querySelector('nav#nav-desktop ul li a[href*=home]').classList.add('nav-active-desktop');
                    document.querySelector('nav#nav-desktop ul li a[href*=about]').classList.remove('nav-active-desktop');
                }
                if (top >= offset && top < offset + height) {
                    navLinksDesktop.forEach((links, index) => {
                        links.classList.remove('nav-active-desktop');
                        document.querySelector('nav#nav-desktop ul li a[href*=' + id + ']')
                            .classList.add('nav-active-desktop');
                    });
                }
            });
        };
        window.addEventListener('scroll', navActive);
        return () => {
            window.removeEventListener('scroll', navActive);
        }
    }, [sections])



    const [gitState, setGitState] = useState(false);
    const [linkedinState, setLinkedinState] = useState(false);
    const [instagramState, setInstagramState] = useState(false);

    return (
        <footer className="w-full mt-5 bg-gradient-to-t from-slate-400 to-slate-200 py-3 rounded-t-xl dark:from-warna1 dark:to-warna2">
            <article className="flex justify-between gap-3 items-center mx-2">
                <section id="email" className="cursor-default" >
                    <div className="flex gap-2 items-center ">
                        <FontAwesomeIcon icon={faMessage} className="text-slate-700 dark:text-warna3" />
                        <h1 className="text-sm text-slate-700 font-semibold dark:text-warna3">berlianto393@gmail.com</h1>
                    </div>
                    <div className="flex gap-2 items-center mt-2">
                        <FontAwesomeIcon icon={faLocation} className="text-slate-700 dark:text-warna3" />
                        <h1 className="text-sm text-slate-700 font-semibold dark:text-warna3">Girimande B-11 No. 13, Mandalajati, Kota Bandung, 40195</h1>
                    </div>
                    <a className="flex gap-2 items-center mt-2" href="https://doi.org/10.29207/resti.v7i5.5221" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faJournalWhills} className="text-slate-700 dark:text-warna3" />
                        <h1 className="text-sm text-slate-700 font-semibold dark:text-warna3">My publication</h1>
                    </a>
                    <div className="mt-2 h-4">
                        <h1 className="text-sm text-slate-700 font-semibold dark:text-warna3">Made with:</h1>
                        <a href="https://react.dev/" target="_blank" rel="noreferrer"><img src="icons/react.svg" alt="" width="24" className="inline"/></a>
                        <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer"><img src="icons/tailwind.svg" alt="" width="24" className="inline ml-2"/></a>
                        <a href="https://www.framer.com/motion/" target="_blank" rel="noreferrer"><img src="icons/framer-teal.svg" alt="" width="24" className="inline ml-2"/></a>
                    </div>
                </section>
                <aside id="socmed" className="text-center self-start">
                    <a className="h-12 w-12 inline-block" href="https://github.com/berlliyanto/" target="_blank" rel="noreferrer">
                        <Lottie animationData={gitLottie} loop={gitState} onMouseOver={() => setGitState(true)} onMouseOut={() => setGitState(false)} className="dark:invert" />
                    </a>
                    <a className="h-12 w-12 inline-block" href="https://www.linkedin.com/in/berlliyanto-aji-nugraha-0a493b229/" target="_blank" rel="noreferrer">
                        <Lottie animationData={linkedinLottie} loop={linkedinState} onMouseOver={() => setLinkedinState(true)} onMouseOut={() => setLinkedinState(false)} />
                    </a>
                    <a className="h-12 w-12 inline-block" href="https://www.instagram.com/berlliyanto/" target="_blank" rel="noreferrer">
                        <Lottie animationData={instagramLottie} loop={instagramState} onMouseOver={() => setInstagramState(true)} onMouseOut={() => setInstagramState(false)} />
                    </a>
                </aside>
            </article>
            <h1 className="block text-center text-sm text-slate-700 mt-12 font-bold dark:text-warna3">Copyright 2023 Berlliyanto Aji Nugraha</h1>
        </footer>
    )
}

export default Footer;