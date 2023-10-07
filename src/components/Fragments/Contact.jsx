import Button from "../Elements/Button";
import { motion } from "framer-motion";

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submit');
    }

    return (
        <article id="contact" className="mt-28 font-roboto_slab w-full">
            <motion.h1 initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ ease: "linear", duration: 1 }} viewport={{ once: true }}
                className="text-5xl font-bold text-warna1 drop-shadow-lg text-center md:text-6xl lg:text-7xl h-24
            dark:bg-gradient-to-b dark:from-warna3 dark:to-warna5 dark:bg-clip-text dark:text-transparent cursor-default">Contact</motion.h1>
            <article className="px-5 mt-5 w-[350px] mx-auto md:w-[450px] lg:w-[600px]">
                <form onSubmit={handleSubmit} className="flex flex-col gap-4 items-center">
                    <div className="w-full flex flex-col gap-4 lg:flex-row lg:justify-center">
                        <motion.input initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ ease: "linear", duration: 1 }} viewport={{ once: true }}
                            type="text" className="w-full px-2 py-2 border-none rounded-md outline-none bg-slate-200 text-slate-600 focus:ring-2 
                    dark:text-slate-100 dark:bg-warna2 lg:w-[280px]" placeholder="Your Name" />
                        <motion.input initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ ease: "linear", duration: 1 }} viewport={{ once: true }}
                            type="email" className="w-full px-2 py-2 border-none rounded-md outline-none bg-slate-200 text-slate-600 focus:ring-2 
                    dark:text-slate-100 dark:bg-warna2 lg:w-[280px]" placeholder="Your Email" />
                    </div>
                    <motion.input initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ ease: "linear", duration: 1 }} viewport={{ once: true }}
                        type="text" className="w-full px-2 py-2 border-none rounded-md outline-none bg-slate-200 text-slate-600 focus:ring-2 
                    dark:text-slate-100 dark:bg-warna2" placeholder="Subject" />
                    <motion.textarea initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ ease: "linear", duration: 1 }} viewport={{ once: true }}
                        className="w-full h-64 px-2 py-2 border-none rounded-md outline-none bg-slate-200 text-slate-600 focus:ring-2 
                    dark:text-slate-100 dark:bg-warna2 "
                        placeholder="Message"
                        style={{ resize: 'none' }}
                    ></motion.textarea>
                    <motion.div initial={{ opacity: 0, translateY: 50 }} whileInView={{ opacity: 1, translateY: 0 }} transition={{ ease: "linear", duration: 1 }} viewport={{ once: true }}>
                        <Button buttonClass="text-slate-100 w-40 mx-6 px-5 py-3 rounded-lg drop-shadow-lg bg-gradient-to-l from-warna3/80 to-warna7/80 hover:from-warna3/75 hover:to-warna4/75 
                        hover:text-white active:from-warna3 active:to-warna4 transition">
                            Send Message
                        </Button>
                    </motion.div>
                </form>
            </article>
        </article>
    )
}

export default Contact;