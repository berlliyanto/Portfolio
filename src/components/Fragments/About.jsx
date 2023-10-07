import { motion, useScroll } from "framer-motion"

const About = () => {
    return (
        <section id="about" className="mt-28 font-roboto_slab w-full">
            <motion.h1 initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ ease: "linear", duration: 1 }} viewport={{ once: true }} 
            className="text-5xl font-bold text-warna1 drop-shadow-lg text-center md:text-6xl lg:text-7xl h-24 
            dark:bg-gradient-to-b dark:from-warna3 dark:to-warna5 dark:bg-clip-text dark:text-transparent cursor-default">About Me</motion.h1>
            <article className="px-5 mt-5 sm:px-10 md:px-20 lg:px-48">
                <motion.p initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ ease: "linear", duration: 1 }} viewport={{ once: true }}
                className="text-center text-sm font-semibold sm:text-lg lg:text-2xl lg:leading-normal dark:text-slate-100">I am a graduate of the D4 program at Bandung Manufacturing Polytechnic. I have a strong interest in software development, 
                    particularly in the areas of web applications, mobile applications, and IoT (Internet of Things). My skills include Flutter, 
                    Node.js, React.JS, SQL, and MongoDB. I am a self-motivated individual, a hard worker, and I enjoy learning new things. Therefore, 
                    I believe I can work effectively and make a positive impact in an engineering role.</motion.p>
            </article>
        </section>
    )
}

export default About;