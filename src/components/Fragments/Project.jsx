import { useSelector } from "react-redux";
import Card from "../Elements/Card";
import CardMobile from "../Elements/CardMobile";
import Lottie from "lottie-react";
import comingLottie from "../../assets/lottie/comingsoon.json";
import { motion } from "framer-motion";
import content from "../../desc/project";

const Project = () => {
    const darkMode = useSelector((state) => state.darkMode);

    return (
        <section id="project" className="mt-28 font-roboto_slab w-full">
            <motion.h1 initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ ease: "linear", duration: 1 }} viewport={{ once: true }}  
            className="text-5xl font-bold text-warna1 drop-shadow-lg text-center md:text-6xl lg:text-7xl h-24
            dark:bg-gradient-to-b dark:from-warna3 dark:to-warna5 dark:bg-clip-text dark:text-transparent cursor-default">Project</motion.h1>
            <article id="web" className="px-5 mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:px-16">
                <Card path="images/react-pms.png" delay={0} content={content.reactpms}>
                    <div className="h-6 w-6">
                        <img src="icons/mongodb.svg" alt="" />
                    </div>
                    <div className="h-6 w-6">
                        <img src="icons/express.svg" alt="" />
                    </div>
                    <div className="h-6 w-6">
                        <img src="icons/react.svg" alt="" />
                    </div>
                    <div className="h-6 w-6">
                        <img src="icons/nodejs.svg" alt="" />
                    </div>
                </Card>
                <Card path="images/gudang.png" delay={0.5} content={content.gudang}>
                    <div className="h-6 w-6">
                        <img src="icons/php.svg" alt="" />
                    </div>
                    <div className="h-6 w-6">
                        <img src="icons/js.svg" alt="" />
                    </div>
                    <div className="h-6 w-6">
                        <img src="icons/mysql.svg" alt="" />
                    </div>
                    <div className="h-6 w-6">
                        <img src="icons/bootstrap.svg" alt="" />
                    </div>
                </Card>
                <Card path="images/dcs.png" delay={1} content={content.dcs}>
                    <div className="h-6 w-6">
                        <img src="icons/flutter.svg" alt="" />
                    </div>
                    <div className="h-6 w-6">
                        <img src="icons/php.svg" alt="" />
                    </div>
                    <div className="h-6 w-6">
                        <img src="icons/mysql.svg" alt="" />
                    </div>
                    <div className="h-6 w-6">
                        <img src="icons/plc.png" alt="" />
                    </div>
                    <div className="h-6 w-6">
                        <img src="icons/arduino.svg" alt="" />
                    </div>
                </Card>
                <Card path="images/enterprise.png" delay={1.5} content={content.erp}>
                    <div className="h-6 w-6">
                        <img src="icons/flutter.svg" alt="" />
                    </div>
                    <div className="h-6 w-6">
                        <img src="icons/nodejs.svg" alt="" />
                    </div>
                    <div className="h-6 w-6">
                        <img src="icons/express.svg" alt="" />
                    </div>
                    <div className="h-6 w-6">
                        <img src="icons/mongodb.svg" alt="" />
                    </div>
                    <div className="h-6 w-6">
                        <img src="icons/zoho.svg" alt="" />
                    </div>
                </Card>
                <Card path={darkMode ? "images/portfolio-dark.png" : "images/portfolio.png"} delay={2} content={content.portfolio}>
                    <div className="h-6 w-6">
                        <img src="icons/react.svg" alt="" />
                    </div>
                    <div className="h-6 w-6">
                        <img src="icons/tailwind.svg" alt="" />
                    </div>
                    <div className="h-6 w-6">
                        <img src="icons/framer.svg" alt=""/>
                    </div>
                </Card>
                <Card path="images/dicoding-frontend.png" delay={2.5} content={content.dFrontend}>
                    <div className="h-6 w-6">
                        <img src="icons/html.svg" alt="" />
                    </div>
                    <div className="h-6 w-6">
                        <img src="icons/css.svg" alt="" />
                    </div>
                    <div className="h-6 w-6">
                        <img src="icons/js.svg" alt=""/>
                    </div>
                </Card>
                <Card path="images/dicoding-planet.png" delay={3} content={content.dPlanet}>
                    <div className="h-6 w-6">
                        <img src="icons/html.svg" alt="" />
                    </div>
                    <div className="h-6 w-6">
                        <img src="icons/css.svg" alt="" />
                    </div>
                    <div className="h-6 w-6">
                        <img src="icons/js.svg" alt=""/>
                    </div>
                </Card>
                <Card path="images/portfolio-old.png" delay={3.5} content={content["portfolio-old"]}>
                    <div className="h-6 w-6">
                        <img src="icons/html.svg" alt="" />
                    </div>
                    <div className="h-6 w-6">
                        <img src="icons/css.svg" alt="" />
                    </div>
                    <div className="h-6 w-6">
                        <img src="icons/js.svg" alt=""/>
                    </div>
                </Card>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: 4}} viewport={{ once: true }}
                className="flex w-[350px] h-64 2xl:h-96 max-w-[350px] justify-center items-center rounded-lg sm:w-auto sm:justify-self-auto sm:max-w-none overflow-hidden shadow-xl">
                    <Lottie animationData={comingLottie} loop={true} className="h-96 w-7h-96 dark:invert"/>
                </motion.div>
            </article>
            <article id="mobile" className="mt-5 flex justify-center items-center gap-5 flex-wrap">
                <CardMobile path="images/mobile-pms.jpg" delay={0} content={content.ta}>
                    <div className="h-6 w-6 mb-3">
                        <img src="icons/flutter.svg" alt="" />
                    </div>
                    <div className="h-6 w-6 mb-3">
                        <img src="icons/nodejs.svg" alt="" />
                    </div>
                    <div className="h-6 w-6 mb-3">
                        <img src="icons/express.svg" alt="" />
                    </div>
                    <div className="h-6 w-6 mb-3">
                        <img src="icons/python.svg" alt="" />
                    </div>
                    <div className="h-6 w-6 mb-3">
                        <img src="icons/mongodb.svg" alt="" />
                    </div>
                    <div className="h-6 w-6 mb-3">
                        <img src="icons/raspberry.png" alt="" />
                    </div>
                    <div className="h-6 w-6 mb-3">
                        <img src="icons/arduino.svg" alt="" />
                    </div>
                </CardMobile>
                <CardMobile path="images/mobile-tma.jpg" delay={0.5} content={content.tma}>
                    <div className="h-6 w-6 mb-3">
                        <img src="icons/flutter.svg" alt="" />
                    </div>
                    <div className="h-10 w-10 mb-3">
                        <img src="icons/getx.png" alt="" />
                    </div>
                </CardMobile>
            </article>
        </section>
    );
}

export default Project;