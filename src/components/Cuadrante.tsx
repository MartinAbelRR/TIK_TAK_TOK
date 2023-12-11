import { useState } from "react";

enum Marcador{
  x = 'X',
  y = 'O'
}

interface Props{
  key?: number;    
  cambiarMarca: boolean;
  changeMarca: () => void;
}

export const Cuadrante = ({cambiarMarca, changeMarca}: Props) => {      
  const [marcador, setMarcador] = useState('');

  const colocarMarca = (): void => {        
    if(marcador === ''){
      cambiarMarca ? setMarcador(Marcador.x) : setMarcador(Marcador.y);
      changeMarca();
    }      
  }
  
  return (
    <div 
      className="border-2 cursor-pointer border-slate-300 flex h-full items-center justify-center text-slate-200 w-full transition-[background,color] hover:bg-white/10 hover:text-red-500"
      onClick={() => colocarMarca()}
    >
      <p 
        className="font-bold text-3xl"
      >
        {!marcador ? '' :  marcador}
      </p>
    </div>          
  )
}