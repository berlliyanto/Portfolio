const NavLinks = ({navClass, ulClass, liClass, aClass, id}) => {
    const goToHome = (e) => {
        e.preventDefault();
        const home = document.getElementById('home');
        window.scrollTo({
            top: home.offsetTop - 120,
            behavior: "smooth"
        })
    }
    const goToAbout = (e) => {
        e.preventDefault();
        const about = document.getElementById('about');
        window.scrollTo({
            top: about.offsetTop - 90,
            behavior: "smooth"
        })
    }
    const goToEducation = (e) => {
        e.preventDefault();
        const education = document.getElementById('education');
        window.scrollTo({
            top: education.offsetTop - 90,
            behavior: "smooth"
        })
    }
    const goToSkill = (e) => {
        e.preventDefault();
        const skill = document.getElementById('skill');
        window.scrollTo({
            top: skill.offsetTop - 90,
            behavior: "smooth"
        })
    }
    const goToProject = (e) => {
        e.preventDefault();
        const project = document.getElementById('project');
        window.scrollTo({
            top: project.offsetTop - 90,
            behavior: "smooth"
        })
    }


    return (
        <nav id={id} className={navClass}>
            <ul className={ulClass}>
                <li className={liClass}><a href="#home" onClick={goToHome} className={aClass}>Home</a></li>
                <li className={liClass}><a href="#about" onClick={goToAbout} className={aClass}>About</a></li>
                <li className={liClass}><a href="#education" onClick={goToEducation} className={aClass}>Education</a></li>
                <li className={liClass}><a href="#skill" onClick={goToSkill} className={aClass}>Skill</a></li>
                <li className={liClass}><a href="#project" onClick={goToProject} className={aClass}>Project</a></li>
            </ul>
        </nav>
    )
}

export default NavLinks;