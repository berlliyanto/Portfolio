import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Circle from "../Elements/Circle";
import LineVertical from "../Elements/LineVertical";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const Education = () => {
    return (
        <section id="education" className="mt-28 font-roboto_slab w-full relative">
            <motion.div initial={{ opacity: 0, translateY: -50 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ duration: 1 }} viewport={{ once: true }} 
            className="absolute top-0 left-4 h-10 w-10 sm:left-20 sm:h-24 sm:w-24 dark:bg-warna1">
                <img src="icons/node2-topleft.svg" alt="node" />
            </motion.div>
            <motion.h1 initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ ease: "linear", duration: 1 }} viewport={{ once: true }} 
            className="text-5xl font-bold text-warna1 drop-shadow-lg text-center md:text-6xl lg:text-7xl h-24 
            dark:bg-gradient-to-b dark:from-warna3 dark:to-warna5 dark:bg-clip-text dark:text-transparent cursor-default">Education</motion.h1>
            <article className="px-5 mt-5 flex flex-col justify-start items-center">
                <LineVertical />
                <Circle>
                    <FontAwesomeIcon icon={faGraduationCap} className="h-4 w-4 text-slate-300 animate-wiggle" />
                    <motion.aside initial={{ opacity: 0 }} whileInView={{ opacity: 1, }} transition={{ ease: "easeIn", duration: 1 }} viewport={{ once: true }} 
                    id="polman" className="absolute top-1/2 -translate-y-1/2 -right-[172px] p-1 h-36 w-40 bg-slate-200 border-2 border-warna6/20 rounded-lg flex flex-col justify-start items-center 
                    hover:scale-125 hover:-translate-x-10 origin-bottom duration-300 cursor-default 
                    dark:bg-gradient-to-b dark:from-warna6 dark:to-warna5 dark:border-none 
                    md:origin-top md:hover:scale-125 md:hover:translate-x-12 md:h-52 md:w-56 md:-right-60">
                        <h1 className="text-sm text-center font-semibold dark:text-slate-200 md:text-xl">Politeknik Manufaktur Bandung</h1>
                        <div className="h-12 w-12 md:h-20 md:w-20">
                            <img src="images/polman.png" alt="" />
                        </div>
                        <h4 className="text-xs text-slate-400 mt-2 md:text-sm">2019 - 2023</h4>
                        <h2 className="text-xs font-semibold dark:text-slate-200 md:text-lg">Automation Engineering</h2>
                    </motion.aside>
                </Circle>
                <LineVertical />
                <Circle>
                    <FontAwesomeIcon icon={faGraduationCap} className="h-4 w-4 text-slate-300 animate-wiggle" />
                    <motion.aside initial={{ opacity: 0 }} whileInView={{ opacity: 1, }} transition={{ ease: "easeIn", duration: 1 }} viewport={{ once: true }} 
                    id="sma" className="absolute top-1/2 -translate-y-1/2 right-10 h-36 w-40 p-1 bg-slate-200 border-2 border-warna6/20 rounded-lg flex flex-col justify-center items-center 
                    hover:scale-125 hover:translate-x-10 origin-bottom duration-300 cursor-default 
                    dark:bg-gradient-to-b dark:from-warna6 dark:to-warna5 dark:border-none 
                    md:origin-top md:hover:scale-125 md:hover:-translate-x-12 md:h-52 md:w-56 md:right-11">
                        <h1 className="text-sm text-center font-semibold dark:text-slate-200 md:text-xl">SMAN 23 Bandung</h1>
                        <div className="h-12 w-12 mt-3 md:h-20 md:w-20">
                            <img src="images/sman23.png" alt="" />
                        </div>
                        <h4 className="text-xs text-slate-400 mt-2 md:text-sm">2016 - 2019</h4>
                        <h2 className="text-xs font-semibold dark:text-slate-200 md:text-lg">MIPA</h2>
                    </motion.aside>
                </Circle>
                <LineVertical />
                <motion.div initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ duration: 1 }} viewport={{ once: true }}  
                className="absolute bottom-0 right-4 h-10 w-10 sm:right-20 sm:h-24 sm:w-24">
                    <img src="icons/node2-botright.svg" alt="node" />
                </motion.div>
            </article>
        </section>
    )
}

export default Education;