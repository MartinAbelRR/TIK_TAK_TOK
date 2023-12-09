/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Quad } from "./components/Quad";


const posiciones: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export const App = () => {
  const ubicaciones: boolean[] = [];
  
  
  const [cambiarMarca, setcambiarMarca] = useState(true);
  const [ubicacion, setUbicacion] = useState(ubicaciones);
  const [hidden, setHidden] = useState(true);
  

  const changeMarca = ():void => {    
    setUbicacion((ubicacion) => ([...ubicacion, cambiarMarca]));    

    if(cambiarMarca === false) setcambiarMarca(true);
    else setcambiarMarca(false); 
  }

  const isGanaste = (array: boolean[]): void => {    
    console.log(array);
    
    if((array[0] === true) && (array[2] === true) && (array[4] === true)){
      setHidden(false);
    }
  }

  const changeClose = (): void => {
    setHidden(true);
  }

  useEffect(() => {    
    isGanaste(ubicacion);
  }, [cambiarMarca]);
  

  return (
    <>
      <main className="bg-slate-700 max-w-7xl min-h-screen container relative">
        {!hidden === true ? 
            <>
              <section className="bg-black/50 h-full absolute w-full flex justify-center items-center">
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
          <h1 className="font-bold text-4xl text-white py-10 text-center">TIK TAK TOK</h1>
          <div className="grid place-content-center h-[500px]">
            <section 
              className="bg-slate-300 grid grid-cols-3 grid-rows-3 h-96 w-96 rounded-xl"              
            >
              {posiciones.map((posicion) => (
                  <Quad 
                    key={posicion} 
                    cambiarMarca= {cambiarMarca}
                    changeMarca= {changeMarca}
                  />                
              ))}
              </section>
          </div>

          <div className="flex justify-center">
            <a
              className="bg-slate-400/50 font-bold text-white px-10 py-4 rounded-md"
            >
              Clear
            </a>
          </div>
      </main>
    </> 
  )
}
