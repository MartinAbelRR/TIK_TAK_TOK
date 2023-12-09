import { useState } from "react";

interface Props{
  key?: number;    
  cambiarMarca: boolean;
  changeMarca: () => void;
}

enum Marcador{
  x = 'X',
  y = 'O'
}

export const Quad = ({cambiarMarca, changeMarca}: Props) => {      
  const [marcador, setMarcador] = useState('');

  const colocarMarca = (): void => {
    if(marcador === ''){
      cambiarMarca ? setMarcador(Marcador.x) : setMarcador(Marcador.y);
      changeMarca();
    }      
  }
  

  return (
    <div 
      className="w-full rounded-xl h-full flex justify-center items-center border border-red-500" 
      onClick={() => colocarMarca()}  
    >
      <p 
        className="text-gray-900 font-bold text-3xl"
      >
        {!marcador ? '' :  marcador}
      </p>
    </div>
  )
}