import BoxSkill from "../Elements/BoxSkill";
import { motion } from "framer-motion";

const Skill = () => {
    return (
        <section id="skill" className="mt-28 font-roboto_slab w-full">
            <motion.h1 initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ ease: "linear", duration: 1 }} viewport={{ once: true }} 
            className="text-5xl font-bold text-warna1 drop-shadow-lg text-center md:text-6xl lg:text-7xl h-24 
            dark:bg-gradient-to-b dark:from-warna3 dark:to-warna5 dark:bg-clip-text dark:text-transparent cursor-default">Skill</motion.h1>
            <article className="px-5 mt-5 flex gap-2 flex-col">
                <motion.div initial={{translateY: -100, opacity: 0}} whileInView={{translateY: 0, opacity: 1}} transition={{duration: 1.5, delay: 1.5}} viewport={{once: true}}
                id="web-skill" className="flex flex-wrap gap-2 justify-center">
                    <BoxSkill>Tailwind CSS</BoxSkill>
                    <BoxSkill>PHP</BoxSkill>
                    <BoxSkill>JavaScript</BoxSkill>
                    <BoxSkill>Node.JS</BoxSkill>
                    <BoxSkill>React.JS</BoxSkill>
                </motion.div>
                <motion.div initial={{translateY: -150, opacity: 0}} whileInView={{translateY: 0, opacity: 1}} transition={{duration: 1.5, delay: 1}} viewport={{once: true}}
                id="mobile-skill" className="flex flex-wrap gap-2 justify-center">
                    <BoxSkill>Flutter</BoxSkill>
                    <BoxSkill>Dart</BoxSkill>
                </motion.div>
                <motion.div initial={{translateY: -200, opacity: 0}} whileInView={{translateY: 0, opacity: 1}} transition={{duration: 1.5, delay: 0.5}} viewport={{once: true}}
                id="database-skill" className="flex flex-wrap gap-2 justify-center">
                    <BoxSkill>MongoDB</BoxSkill>
                    <BoxSkill>MySQL</BoxSkill>
                </motion.div>
                <motion.div initial={{translateY: -250, opacity: 0}} whileInView={{translateY: 0, opacity: 1}} transition={{duration: 1.5, delay: 0}} viewport={{once: true}}
                id="automation-skill" className="flex flex-wrap gap-2 justify-center">
                    <BoxSkill>Arduino</BoxSkill>
                    <BoxSkill>ESP</BoxSkill>
                    <BoxSkill>PLC Programming</BoxSkill>
                </motion.div>
            </article>
        </section>
    )
}

export default Skill;