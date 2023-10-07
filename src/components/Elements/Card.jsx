import { motion } from "framer-motion";

const Card = ({ path, children, delay, content }) => {
    const { title, desc, instance, demo, git } = content;
    return (
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1, delay: delay }} viewport={{ once: true }}
            className="relative flex flex-col w-[350px] bg-slate-100 h-64 max-w-[350px] justify-self-center rounded-lg sm:w-auto sm:justify-self-auto sm:max-w-none overflow-hidden shadow-xl group 
            2xl:h-96">
            <header className="w-[350px] h-56 md:w-full md:h-[200px]">
                <img src={path} alt="" />
            </header>
            <main className="absolute top-full opacity-0 left-0 w-full h-full bg-slate-200/70 z-10 flex flex-col justify-between p-3 backdrop-blur-sm group-hover:opacity-100 group-hover:top-0 duration-300 
            dark:bg-warna1/80">
                <div>
                    <h1 className="text-sm font-bold text-slate-900 md:text-[16px] dark:text-warna3">{title}</h1>
                    <p className="text-[12px] text-slate-800 mt-2 md:text-sm dark:text-slate-300">| {instance} |</p>
                    <p className="text-[12px] text-slate-800 mt-2 md:text-sm dark:text-slate-300">{desc}</p>
                </div>
                <aside className="flex justify-evenly">
                    <a href={git} className={`py-1 px-4 text-slate-800 font-semibold ${git? 'bg-warna3' : 'bg-slate-300 dark:bg-slate-400'} rounded-lg 
                    ${git? 'hover:bg-warna4 active:warna-7 active:text-slate-100' : ''} shadow-md duration-300 ${git? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                        {
                            git? 'Github' : 'Unavailable' 
                        }
                    </a>
                    <a href={demo} className={`py-1 px-4 text-slate-800 font-semibold ${demo? 'bg-teal-600' : 'bg-slate-300 dark:bg-slate-400'} rounded-lg 
                    ${demo? 'hover:bg-teal-400 active:bg-teal-800 active:text-slate-100' : ''} shadow-md duration-300 ${demo? 'cursor-pointer' : 'cursor-not-allowed'}`}>
                        {
                            demo? 'Demo' : 'Unavailable ' 
                        }
                    </a>
                </aside>
            </main>
            <footer className="w-full 2xl:absolute 2xl:bottom-0 bg-slate-100 py-4 px-5 flex gap-4 items-center dark:bg-gradient-to-t dark:from-slate-400 dark:to-transparent">
                {children}
            </footer>
        </motion.div>
    )
}

export default Card;