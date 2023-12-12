/* eslint-disable react-hooks/exhaustive-deps */
import { useRef } from "react";
import { Cuadrante } from "./components/Cuadrante";
import { Footer } from "./components/Footer";
import { useGame } from "./hooks/useGame";
import { Marker } from "./enums";


export const TikTakTok = () => {  
  const myRefGrid: React.MutableRefObject<any> = useRef();
  const {board, changeMark, hidden, 
        paintMark, changeHidden, restartGame} = useGame({myRefGrid, positionsBoard: Array(9).fill("")});

  return (
    <>
      {!hidden === true ?
          <section className="fixed bg-black/50  min-h-full flex items-center justify-center w-full">
            <div className="bg-slate-300 min-w-[300px] px-24 py-14 relative rounded-lg">
              <p
                className="absolute cursor-pointer font-bold pr-3 right-0 text-black text-3xl top-0 transition-[color] hover:text-red-600"
                onClick={() => changeHidden()}
              >x</p>
              <h1 className="font-bold text-3xl text-slate-950"><i>Victoria</i>
               <span className={`${changeMark ? 'text-red-700' : 'text-blue-700'}`}>
                &nbsp;{changeMark ? Marker.x : Marker.o}
               </span>
              </h1>
            </div>
          </section>
        : 
        ''}

      <main className="bg-slate-700 max-w-5xl min-h-[90vh] mx-auto my-0 overflow-hidden p-1 py-6 md:max-w-full">
        <h1 className="font-bold mb-10 tracking-[10px] text-center text-slate-300 text-5xl pb-1 md:text-7xl">TIK
          <span className="text-red-500"> TAK </span>TOK</h1>
        <div className="grid mt-20 place-content-center">
          <section
            className="border-4 border-slate-300 grid grid-cols-3 grid-rows-3 h-72 max-w-[300px] w-72"
            ref={myRefGrid}
          >
            {board.map((marcador, index) => (
                <Cuadrante
                changeMarca={(index: number) => paintMark(index)}
                index={index}
                marcador={marcador}
              />
            ))}
          </section>
        </div>

        <div className="flex justify-center mt-20">
          <a
            className="bg-slate-400/50  cursor-pointer font-bold px-10 py-4 rounded-md text-white hover:bg-slate-900/30 hover:text-red-500"
            onClick={() => restartGame()}
          >
          Restart Game</a>
        </div>
      </main>

      <Footer />
    </>
  )
}
