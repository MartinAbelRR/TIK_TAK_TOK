import { useEffect, useState } from "react";
import { Marker } from "../enum";

interface Parameters {
    myRefGrid: any;
    positionsBoard: string[];
}

export const useGame = ({myRefGrid, positionsBoard}: Parameters) => {
  const [board, setBoard] = useState(positionsBoard);
  const [changeMark, setchangeMark] = useState(false);
  const [hidden, setHidden] = useState(true);

  const paintMark = (posicion: number): void => {
    const marker = changeMark === false ? Marker.x : Marker.y;
    setchangeMark(!changeMark);
    setBoard(
      board.map((marked, index) => {
        if (posicion === index && marked === "") return marker;
        return marked;
      })
    );
  };

  const isVictory = (): void => {
    const array: string[] = [];
    for (let i = 0; i < myRefGrid.current.children.length; i++) {
      const children: string = myRefGrid.current.children[i].innerText;
      array.push(children);
    }

    if (
      (array[0] === "X" && array[1] === "X" && array[2] === "X") ||
      (array[3] === "X" && array[4] === "X" && array[5] === "X") ||
      (array[6] === "X" && array[7] === "X" && array[8] === "X") ||
      (array[0] === "X" && array[3] === "X" && array[6] === "X") ||
      (array[1] === "X" && array[4] === "X" && array[7] === "X") ||
      (array[2] === "X" && array[5] === "X" && array[8] === "X") ||
      (array[0] === "X" && array[4] === "X" && array[8] === "X") ||
      (array[2] === "X" && array[4] === "X" && array[6] === "X")
    ) {
      setHidden(false);
    }

    if (
      (array[0] === "O" && array[1] === "O" && array[2] === "O") ||
      (array[3] === "O" && array[4] === "O" && array[5] === "O") ||
      (array[6] === "O" && array[7] === "O" && array[8] === "O") ||
      (array[0] === "O" && array[3] === "O" && array[6] === "O") ||
      (array[1] === "O" && array[4] === "O" && array[7] === "O") ||
      (array[2] === "O" && array[5] === "O" && array[8] === "O") ||
      (array[0] === "O" && array[4] === "O" && array[8] === "O") ||
      (array[2] === "O" && array[4] === "O" && array[6] === "O")
    ) {
      setHidden(false);
    }
  };

  const restartGame = (): void => {
    setBoard(Array(9).fill(""));
  };

  const changeHidden = (): void => {
    restartGame();
    setHidden(true);
  };

  // Constantemente verifica si hay un ganador.
  useEffect(() => {
    isVictory();
  }, [changeMark]);

  return {
    board,
    changeHidden,
    paintMark,
    changeMark,
    hidden,
    restartGame
  };
};
