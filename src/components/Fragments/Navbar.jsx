import { useRef, useEffect } from "react";
import Switch from "../Elements/Switch";
import { faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import NavLinks from "../Elements/NavLinks";
import Button from "../Elements/Button";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { toggleDarkMode } from "../../redux/slice/darkMode";
import { faMoon } from "@fortawesome/free-solid-svg-icons";
import Progress from "../Elements/ProgressBar";
import { motion } from "framer-motion";
import { useState } from "react";

const NavBar = ({ isAtTop, isSticky }) => {
    const dispatch = useDispatch();
    const darkMode = useSelector((state) => state.darkMode);
    const [settingOpen, setSettingOpen] = useState(false);

    const line1Ref = useRef(null);
    const line2Ref = useRef(null);
    const line3Ref = useRef(null);
    const mobileMenuRef = useRef(null);
    const settingsRef = useRef(null);
    const buttonSettingRef = useRef(null);

    const listStyle = {
        'li-a': 'drop-shadow-sm transition duration-300 rounded-lg py-3 px-4 hover:bg-warna3 hover:text-slate-100 dark:active:bg-warna6 ',
        'line-h': "h-1 w-8 bg-warna3 mb-2 duration-300",
        'li-mobile': "py-1 pl-2 block hover:bg-warna2 active:bg-warna1 duration-300 rounded-l-md"
    }

    function changeTheme() {
        dispatch(toggleDarkMode());
    }

    const handleOpen = () => {
        line1Ref.current.classList.toggle('-rotate-45');
        line1Ref.current.classList.toggle('translate-y-3');
        line2Ref.current.classList.toggle('opacity-0');
        line3Ref.current.classList.toggle('rotate-45');
        line3Ref.current.classList.toggle('-translate-y-3');
        mobileMenuRef.current.classList.toggle('right-0');
    }

    const handleSettingOpen = () => {
        setSettingOpen(!settingOpen);
        settingsRef.current.classList.toggle('invisible');
        settingsRef.current.classList.toggle('-translate-y-4');
        settingsRef.current.classList.toggle('opacity-0');
        buttonSettingRef.current.classList.toggle('rotate-180');
        if (darkMode) {
            buttonSettingRef.current.classList.toggle('bg-slate-600');
        } else {
            buttonSettingRef.current.classList.toggle('bg-slate-300');
        }
    }

    const goToContact = (e) => {
        e.preventDefault();
        const contact = document.getElementById('contact');
        window.scrollTo({
            top: contact.offsetTop - 90,
            behavior: "smooth"
        })
    }

    useEffect(() => {
        if (darkMode) {
            document.body.style.backgroundColor = '#222831';
            document.documentElement.classList.add('dark');
            if (settingOpen) {
                buttonSettingRef.current.classList.remove('bg-slate-300');
                buttonSettingRef.current.classList.add('bg-slate-600');
            }
        } else {
            document.body.style.backgroundColor = 'white';
            document.documentElement.classList.remove('dark');
            if (settingOpen) {
                buttonSettingRef.current.classList.remove('bg-slate-600');
                buttonSettingRef.current.classList.add('bg-slate-300');
            }
        }
    }, [darkMode])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (settingsRef.current && !settingsRef.current.contains(event.target) && !buttonSettingRef.current.contains(event.target)) {
                setSettingOpen(false);
                settingsRef.current.classList.add("invisible", "-translate-y-4", "opacity-0");
                buttonSettingRef.current.classList.remove('rotate-180');
                buttonSettingRef.current.classList.remove('bg-slate-300');
                buttonSettingRef.current.classList.remove('bg-slate-600');
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [settingsRef]);

    const headerStyle = `z-40 px-4 md:px-2 font-roboto_slab text-warna3 container flex justify-between mx-auto items-center h-16 duration-300 rounded-b-lg box-border ${isSticky ? 'sticky' : ''}
    ${isAtTop ? 'relative' : 'fixed top-0 backdrop-blur-sm bg-slate-100/80 dark:bg-warna1/80 shadow-lg'}`;

    return (
        <motion.header initial={{ opacity: 0, translateY: -50 }} animate={{ opacity: 1, translateY: 0 }} transition={{ duration: 1, ease: "linear" }}
            id="header" className={headerStyle}>
            <Progress />
            <div id="logo" className="font-bold text-3xl tracking-widest cursor-pointer bg-gradient-to-r from-warna3 to-warna4 text-transparent bg-clip-text drop-shadow-md dark:from-warna5 dark:to-warna3">BYAN</div>
            <NavLinks id="nav-desktop" navClass="hidden md:block" ulClass="flex md:gap-2" aClass={listStyle["li-a"]} />
            <div className="relative gap-3 py-6 items-center hidden md:flex">
                <Button handleClick={goToContact}
                    buttonClass="px-5 py-3 rounded-xl drop-shadow-lg bg-gradient-to-l from-warna3/25 to-warna4/25 hover:from-warna3/75 hover:to-warna4/75 hover:text-slate-100 transition duration-300">Contact</Button>
                <FontAwesomeIcon icon={faCog} onClick={handleSettingOpen} className="text-xl cursor-pointer duration-500 px-1 py-1 rounded-full" ref={buttonSettingRef} />
                <div id="setting" ref={settingsRef} className="z-50 h-40 w-36 p-3 backdrop-blur-sm absolute top-16 left-0 mx-auto my-5 bg-slate-100 border-2 flex invisible opacity-0
                border-warna3/50 rounded-lg flex-col justify-start items-start -translate-y-4 duration-300 dark:bg-warna2">
                    <h1 className="text-sm mb-2 text-warna1 font-semibold dark:text-white">{darkMode ? "Light Mode" : "Dark Mode"}</h1>
                    <div className="w-full flex justify-between">
                        <Switch handleOnChange={changeTheme} checked={darkMode} />
                        <FontAwesomeIcon icon={darkMode ? faMoon : faSun} className="text-2xl ml-2 text-slate-300 dark:text-warna3" />
                    </div>
                </div>
            </div>
            <button id="hamburger" className="block md:hidden box-border z-50" onClick={handleOpen}>
                <div ref={line1Ref} className={listStyle["line-h"]}></div>
                <div ref={line2Ref} className={listStyle["line-h"]}></div>
                <div ref={line3Ref} className={listStyle["line-h"]}></div>
            </button>
            <aside ref={mobileMenuRef} className="md:hidden z-40 flex flex-col justify-start fixed top-0 -right-full duration-300 h-screen w-1/2 bg-gradient-to-br backdrop-blur-sm from-slate-200 to-slate-100/95 
            dark:from-warna1 dark:to-warna2/95 py-10">
                <NavLinks id="nav-mobile" ulClass="mt-4" liClass="mb-4 ml-4" aClass="py-1 pl-2 block hover:bg-slate-300 active:bg-warna1 duration-300 rounded-l-md dark:hover:bg-warna1" />
                <Button handleClick={goToContact} buttonClass="text-slate-200 mx-6 px-5 py-3 rounded-lg drop-shadow-lg bg-gradient-to-l from-warna3/50 to-warna4/50 
                hover:from-warna3/75 hover:to-warna4/75 hover:text-white active:from-warna3 active:to-warna4 transition duration-300">Contact</Button>
                <div className="mx-auto my-5 flex items-center">
                    <Switch handleOnChange={changeTheme} checked={darkMode} />
                    <FontAwesomeIcon icon={darkMode ? faMoon : faSun} className="text-2xl ml-5 text-slate-300 dark:text-warna3" />
                </div>
            </aside>
        </motion.header>
    )
}

export default NavBar;