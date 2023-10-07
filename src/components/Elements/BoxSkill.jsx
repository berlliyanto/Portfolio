import { motion } from "framer-motion";

const BoxSkill = ({ children }) => {
    return (
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ duration: 0.3 }}
        className="w-max px-3 py-1 border-[2px] border-slate-400 rounded-lg flex item-center justify-center dark:border-warna7 dark:shadow-inner dark:shadow-warna6">
            <p className="font-semibold text-lg text-slate-500 cursor-default dark:bg-gradient-to-b dark:from-warna4 dark:to-warna3 dark:bg-clip-text dark:text-transparent select-none">{children}</p>
        </motion.div>
    )
}

export default BoxSkill;