const Circle = ({children}) => {
    return (
        <div className="relative h-[30px] w-[30px] rounded-full border-2 border-slate-300 flex items-center justify-center bg-transparent
        dark:border-none dark:bg-gradient-to-tr dark:from-warna3 dark:to-warna5">{children}</div>
    )
}

export default Circle