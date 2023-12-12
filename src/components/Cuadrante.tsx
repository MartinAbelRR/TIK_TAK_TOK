interface Props{   
  index: number;
  marcador: string;    
  changeMarca: (index: number) => void;
}

export const Cuadrante = ({index, marcador, changeMarca}: Props) => {          
  
  return (
    <div 
      className="border-2 cursor-pointer border-slate-300 flex h-full items-center justify-center text-slate-200 w-full transition-[background,color] hover:bg-white/10 hover:text-red-500"
      onClick={() => changeMarca(index)}
    >
      <p 
        className="font-bold text-3xl"
      >
        {marcador}
      </p>
    </div>          
  )
}