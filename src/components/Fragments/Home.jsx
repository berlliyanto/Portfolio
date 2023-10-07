import Button from "../Elements/Button";
import Lottie from 'lottie-react';
import reactLottie from '../../assets/lottie/react.json';
import flutterLottie from '../../assets/lottie/flutter.json';
import dbLottie from '../../assets/lottie/db.json';
import { motion } from "framer-motion";

const Home = () => {

    const downloadCV = () => {
        window.location.href = "https://aplikasipms.com/berli-portfolio/file/CV_Berli_Eng.pdf";
    }

    return (
        <section id="home" className="w-full px-5 mt-4 md:flex md:gap-6 md:justify-between md:items-center lg:px-20 lg:mt-10 font-roboto_slab cursor-default">
            <article>
                <motion.h3 initial={{ opacity: 0, translateX: -50 }} animate={{ opacity: 1, translateX: 0 }} transition={{ duration: 1 }}
                    className="text-2xl font-bold text-transparent bg-gradient-to-b from-warna1 to-warna2 bg-clip-text drop-shadow-sm md:text-4xl lg:text-4xl dark:from-warna3 dark:bg-warna4">Hello!</motion.h3>
                <motion.h2 initial={{ opacity: 0, translateX: -50 }} animate={{ opacity: 1, translateX: 0 }} transition={{ duration: 1, delay: 0.3 }}
                    className="text-4xl font-bold text-warna1 drop-shadow-md md:text-5xl md:leading-snug lg:text-6xl lg:leading-tight dark:text-transparent dark:bg-gradient-to-b dark:from-warna4 dark:to-warna3 dark:bg-clip-text ">My Name is
                    <span className="text-transparent bg-gradient-to-b hover:animate-pulse from-warna4 to-warna3 bg-clip-text dark:to-warna5"> Berlli</span>
                    yanto Aji Nugraha</motion.h2>
                <motion.h2 initial={{ opacity: 0, translateX: -50 }} animate={{ opacity: 1, translateX: 0 }} transition={{ duration: 1, delay: 0.6 }}
                    className="text-xl font-bold text-warna1 drop-shadow-md mt-2 md:text-3xl lg:text-3xl lg:mt-6 dark:text-transparent dark:bg-gradient-to-b dark:from-warna4 dark:to-warna3 dark:bg-clip-text">Software Enthusiast</motion.h2>
                <motion.h2 initial={{ opacity: 0, translateX: -50 }} animate={{ opacity: 1, translateX: 0 }} transition={{ duration: 1, delay: 0.9 }}
                    className="text-xl font-bold text-warna1 drop-shadow-md md:text-3xl lg:text-3xl dark:text-transparent dark:bg-gradient-to-b dark:from-warna4 dark:to-warna3 dark:bg-clip-text">Automation Engineer</motion.h2>
                <section className="w-auto flex items-center gap-3 py-2 my-3 justify-center md:justify-start">
                    <motion.div initial={{ opacity: 0, translateX: -50 }} animate={{ opacity: 1, translateX: 0 }} transition={{ duration: 1, delay: 2 }}
                        className="w-12 h-12">
                        <Lottie animationData={reactLottie} loop={true} />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, translateX: -100 }} animate={{ opacity: 1, translateX: 0 }} transition={{ duration: 1, delay: 1.5 }}
                        className="w-11 h-11">
                        <img src="icons/nodejs.svg" alt="" className="animate-wiggle" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, translateX: -150 }} animate={{ opacity: 1, translateX: 0 }} transition={{ duration: 1, delay: 1 }}
                        className="w-12 h-12">
                        <Lottie animationData={flutterLottie} loop={true} />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, translateX: -200 }} animate={{ opacity: 1, translateX: 0 }} transition={{ duration: 1, delay: 0.5 }}
                        className="w-12 h-12">
                        <Lottie animationData={dbLottie} loop={true} className="mb-2" />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, translateX: -250 }} animate={{ opacity: 1, translateX: 0 }} transition={{ duration: 1, delay: 0 }}
                        className="w-12 h-12">
                        <img src="icons/tailwind.svg" alt="" className="animate-pulse" />
                    </motion.div>
                </section>
                <motion.div initial={{ opacity: 0, translateX: -50 }} animate={{ opacity: 1, translateX: 0 }} transition={{ duration: 1, delay: 1.2 }}>
                    <Button handleClick={downloadCV} buttonClass="hidden md:block relative font-semibold text-md text-warna1 overflow-hidden mb-2 py-3 px-5 border-2 border-warna3 rounded-xl hover:text-white duration-300
                before:contents-['*'] before:-z-10 before:w-0 before:h-full before:absolute before:top-0 before:left-0 
                before:bg-gradient-to-r before:from-warna3 before:to-warna4 before:box-border before:duration-300 hover:before:w-full dark:text-warna3 dark:hover:text-white">Download CV</Button>
                </motion.div>
            </article>
            <aside className="mt-4 flex flex-col justify-start items-center gap-3 md:items-center md:justify-end md:flex-row">
                <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}
                    className="h-72 w-72 overflow-hidden rounded-full ring-1 ring-warna3 drop-shadow-lg shadow-lg md:h-[400px] md:w-[400px] lg:h-96 lg:w-96 shadow-warna6 select-none">
                    <img src="images/foto-formal.png" alt="foto-formal" />
                </motion.div>
                <motion.div initial={{ opacity: 0, translateX: -50 }} animate={{ opacity: 1, translateX: 0 }} transition={{ duration: 1, delay: 1.2 }}>
                    <Button handleClick={downloadCV} buttonClass="block md:hidden relative font-semibold text-md text-warna1 overflow-hidden mt-6 mb-2 py-3 px-5 border-2 border-warna3 rounded-xl hover:text-white duration-300
                    before:contents-['*'] before:-z-10 before:w-0 before:h-full before:absolute before:top-0 before:left-0 
                    before:bg-gradient-to-r before:from-warna3 before:to-warna4 before:box-border before:duration-300 hover:before:w-full dark:text-warna3 dark:hover:text-white">Download CV</Button>
                </motion.div>
            </aside>
        </section>
    )
}

export default Home;