

export const Maqueta = () => {
  return (
    <>
        <main className="bg-slate-700 max-w-5xl min-h-[90vh] mx-auto my-0 p-1 py-6 md:max-w-full">
            <h1 className="font-bold mb-10 text-center text-slate-300 text-5xl pb-1 md:text-7xl">TIK 
            <span className="text-red-500"> TAK </span>TOK</h1>
            <div className="grid place-content-center mt-20">
                <section className="border-4 border-slate-300 grid grid-cols-3 grid-rows-3 h-72 max-w-[300px] w-72">
                    <div className="border-2 cursor-pointer border-slate-300 flex h-full items-center justify-center text-slate-200 w-full transition-[background,color] hover:bg-white/10 hover:text-red-500">
                        <p className="font-bold  text-3xl">X</p>
                    </div>
                </section>
            </div>

            <div className="flex justify-center mt-8">
                <a className="bg-slate-400/50 cursor-pointer font-bold px-10 py-4 rounded-md text-white hover:bg-slate-900/30 hover:text-red-500">Restart</a>
            </div>
        </main>

        <footer className="bg-slate-300 max-w-5xl mx-auto min-h-[10vh] md:max-w-full">
            <h2 className="font-bold leading-[10vh] text-center text-slate-700 md:text-[24px]">&copy; Martin Reyes</h2>
        </footer>
    </>
  )
}
