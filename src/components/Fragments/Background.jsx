import { Fragment } from "react"

const BackGround = () => {
    return (
        <Fragment>
            <div className="-z-20 absolute -left-52 top-10 h-[300px] w-[300px] rounded-full bg-teal-100/50  shadow-2xl blur-3xl animate-pulse 
            dark:bg-teal-950/30 md:h-[600px] md:w-[600px] md:-left-52 md:top-10"></div>
            <div className="-z-20 absolute right-1 -top-20 h-[200px] w-[200px] rounded-full bg-pink-100 blur-3xl shadow-2xl animate-pulse
            dark:bg-pink-950/30 sm:h-[300px] sm:w-[300px] md:h-[600px] md:w-[600px] md:-right-32 md:-top-20"></div>
            <div className="-z-20 absolute right-1 top-80 h-[200px] w-[200px] rounded-full bg-purple-100 blur-3xl shadow-2xl animate-pulse 
            dark:bg-purple-950/30 md:left-52 md:-top-40 md:h-[300px] md:w-[300px] lg:left-96 lg:-top-20 lg:h-[400px] lg:w-[400px]"></div>
        </Fragment>
    )
}

export default BackGround;