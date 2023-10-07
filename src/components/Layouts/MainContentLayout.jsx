import Divider from "../Elements/Divider";
import About from "../Fragments/About";
import Contact from "../Fragments/Contact";
import Education from "../Fragments/Education";
import Home from "../Fragments/Home";
import Project from "../Fragments/Project";
import Skill from "../Fragments/Skill";

const MainContentLayout = () => {
    return (
        <main>
            <Home />
            <Divider />
            <About />
            <Divider />
            <Education />
            <Divider />
            <Skill />
            <Divider />
            <Project />
            <Divider />
            <Contact />
        </main>
    )
}

export default MainContentLayout;