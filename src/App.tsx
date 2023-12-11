/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";
import { Cuadrante } from "./components/Cuadrante";
import { Footer } from "./components/Footer";


const posiciones: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const App = () => {  
  const [cambiarMarca, setcambiarMarca] = useState(true);
  const [hidden, setHidden] = useState(true);
  const myRefGrid: React.MutableRefObject<any> = useRef();

  let array: string[] = [];

  const changeMarca = (): void => {
    if (cambiarMarca === false) setcambiarMarca(true);
    else setcambiarMarca(false);
  }

  const isGanaste = (): void => {        
    for (let i = 0; i < myRefGrid.current.children.length; i++) {
      const children: string = myRefGrid.current.children[i].innerText;      
      array.push(children);
    }

    if ((array[0] === 'X' && array[1] === 'X' && array[2] === 'X') ||
      (array[3] === 'X' && array[4] === 'X' && array[5] === 'X') ||
      (array[6] === 'X' && array[7] === 'X' && array[8] === 'X') ||
      (array[0] === 'X' && array[3] === 'X' && array[6] === 'X') ||
      (array[1] === 'X' && array[4] === 'X' && array[7] === 'X') ||
      (array[2] === 'X' && array[5] === 'X' && array[8] === 'X') ||
      (array[0] === 'X' && array[4] === 'X' && array[8] === 'X') ||
      (array[2] === 'X' && array[4] === 'X' && array[6] === 'X')) {
      setHidden(false);
    }

    if ((array[0] === 'O' && array[1] === 'O' && array[2] === 'O') ||
      (array[3] === 'O' && array[4] === 'O' && array[5] === 'O') ||
      (array[6] === 'O' && array[7] === 'O' && array[8] === 'O') ||
      (array[0] === 'O' && array[3] === 'O' && array[6] === 'O') ||
      (array[1] === 'O' && array[4] === 'O' && array[7] === 'O') ||
      (array[2] === 'O' && array[5] === 'O' && array[8] === 'O') ||
      (array[0] === 'O' && array[4] === 'O' && array[8] === 'O') ||
      (array[2] === 'O' && array[4] === 'O' && array[6] === 'O')) {    
      setHidden(false);  
    }
  }

  const restartGame = (): void => {
          
  }  
  
  const changeClose = (): void => {
    setHidden(true);
  }

  useEffect(() => {
    isGanaste();
  }, [cambiarMarca]);


  return (
    <>
      {!hidden === true ?
        <>
          <section className="absolute bg-black/50 h-full flex items-center justify-center w-full">
            <div className="bg-slate-300 px-28 py-14 relative">
              <p
                className="absolute text-black top-0 right-0 pr-3 text-3xl font-bold cursor-pointer"
                onClick={() => changeClose()}
              >x</p>
              <h1 className="font-bold text-3xl text-slate-950">Ganaste</h1>
            </div>
          </section>
        </>
        : 
        ''}
      <main className="bg-slate-700 max-w-5xl min-h-[90vh] mx-auto my-0 p-1 py-6 md:max-w-full">
        <h1 className="font-bold mb-10 text-center text-slate-300 text-5xl pb-1 md:text-7xl">TIK
          <span className="text-red-500"> TAK </span>TOK</h1>
        <div className="grid place-content-center mt-20">
          <section
            className="border-4 border-slate-300 grid grid-cols-3 grid-rows-3 h-72 max-w-[300px] w-72"
            ref={myRefGrid}
          >
            {posiciones.map((posicion) => (
              <Cuadrante
                key={posicion}
                cambiarMarca={cambiarMarca}
                changeMarca={changeMarca}              
              />
            ))}
          </section>
        </div>

        <div className="flex justify-center mt-8">
          <a
            className="bg-slate-400/50  cursor-pointer font-bold px-10 py-4 rounded-md text-white hover:bg-slate-900/30 hover:text-red-500"
            onClick={() => restartGame()}
          >
            Restart
          </a>
        </div>
      </main>

      <Footer />
    </>
  )
}
