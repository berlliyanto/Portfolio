import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

const CardMobile = ({ children, path, delay, content }) => {
    const { title, desc, demo, git, abstrak, publication, instance } = content;
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: delay }} viewport={{ once: true }}
            className="relative h-96 w-60 shadow-xl bg-slate-100 rounded-lg overflow-hidden flex justify-between hover:w-[22rem] group duration-300">
            <aside className="w-3/4 h-full ">
                <img src={path} alt="" width="173" />
            </aside>
            <main className="absolute top-0 left-1/2 origin-right w-0 h-full opacity-0 bg-slate-200/70 z-10 flex flex-col justify-between p-3 
            backdrop-blur-sm duration-300 group-hover:left-0 group-hover:w-full group-hover:origin-left group-hover:opacity-100 dark:bg-warna1/80 ">
                <div>
                    <h1 className="text-sm font-bold text-slate-900 md:text-[18px] dark:text-warna3">{title}</h1>
                    {
                        instance? <p className="text-[12px] text-slate-800 mt-2 md:text-sm dark:text-slate-300">| {instance} |</p> : <p></p>
                    }
                    <p className="text-[12px] text-slate-800 mt-2 md:text-sm dark:text-slate-300">{desc}</p>
                    <p className="text-[12px] text-slate-800 mt-2 md:text-sm dark:text-slate-300">{abstrak}</p>
                    {
                        publication ? <a href={publication} className="text-[12px] font-semibold text-slate-900 mt-2 md:text-sm dark:text-slate-300">
                        <FontAwesomeIcon icon={faLink} className="h-3 w-3 align-middle"/> See my publication 
                        </a> : <div></div>
                    }
                </div>
                <aside className="flex justify-evenly">
                    <a href={git} className={`py-1 px-4 text-slate-800 font-semibold ${git ? 'bg-warna3' : 'bg-slate-300 dark:bg-slate-400'} rounded-lg 
                    ${git ? 'hover:bg-warna4 active:warna-7 active:text-slate-100' : ''} shadow-md duration-300 ${git ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                        {
                            git ? 'Github' : 'Unavailable'
                        }
                    </a>
                    <a href={demo} target="_blank" className={`py-1 px-4 text-slate-800 font-semibold ${demo ? 'bg-teal-600' : 'bg-slate-300 dark:bg-slate-400'} rounded-lg 
                    ${demo ? 'hover:bg-teal-400 active:bg-teal-800 active:text-slate-100' : ''} shadow-md duration-300 ${demo ? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                        {
                            demo ? 'Demo' : 'Unavailable '
                        }
                    </a>
                </aside>
            </main>
            <aside className="py-4 pl-3 w-1/4 h-full dark:bg-gradient-to-l dark:from-slate-400 dark:to-transparent">
                {children}
            </aside>
        </motion.div>
    )
}

export default CardMobile;