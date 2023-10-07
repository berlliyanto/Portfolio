import { motion, useScroll } from "framer-motion"

function Progress() {
    const { scrollYProgress } = useScroll();

    return (
        <motion.div style={{ scaleX: scrollYProgress }} className="h-[2px] w-full bg-warna3 mb-2 duration-300 fixed top-0 left-0 rounded-md"/>
    )
}

export default Progress;