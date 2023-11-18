let defaultDepth = 20;
let nextMove = {
  row: -1,
  numberOfRemoves: -1,
};
let globalDifficulty = "hard";

const max = 99999;
const min = -99999;
export function getV2AIMove(
  gameState: number[],
  difficulty: string,
  numberOfRows: number
) {
  if (numberOfRows === 3 || numberOfRows === 4) defaultDepth = 99999;
  else defaultDepth = 4;
  nextMove = {
    row: -1,
    numberOfRemoves: -1,
  };
  globalDifficulty = difficulty;
  const x = randomInt(0, 99999);
  if (difficulty === "medium" && x % 7 === 2) return selectRandom(gameState);
  else if (difficulty === "easy" && x % 4 !== 0) {
    return selectRandom(gameState);
  }
  minMax(defaultDepth, min, max, true, gameState);
  return nextMove;
}

export function minMax(
  depth: number,
  alpha: number,
  beta: number,
  isMaximizing: boolean,
  gameState: number[]
): number {
  if (depth === 0 || isGameOver(gameState)) {
    if (!isMaximizing) {
      return evaluating(gameState) === 0 ? max + 1 : min - 1;
    } else {
      return evaluating(gameState) === 0 ? min - 1 : max + 1;
    }
  }

  if (isMaximizing) {
    let best = min;
    for (let i = 0; i < gameState.length; i++) {
      for (let q = gameState[i]; q >= 1; q--) {
        const newGameState = [...gameState];
        newGameState[i] -= q;
        const isChildWinning = minMax(
          depth - 1,
          alpha,
          beta,
          false,
          newGameState
        );
        // best = Math.max(best, isChildWinning);
        if (best <= isChildWinning) {
          best = isChildWinning;
          if (depth === defaultDepth) {
            nextMove = {
              row: i + 1,
              numberOfRemoves: q,
            };
          }
          alpha = Math.max(alpha, best);
          if (beta <= alpha) {
            break;
          }
        }
      }
      if (beta <= alpha) break;
    }
    return best;
  } else {
    let best = max;
    for (let i = 0; i < gameState.length; i++) {
      for (let q = gameState[i]; q >= 1; q--) {
        const newGameState = [...gameState];
        newGameState[i] -= q;
        const isChildWinning = minMax(
          depth - 1,
          alpha,
          beta,
          true,
          newGameState
        );

        best = Math.min(best, isChildWinning);
        beta = Math.min(beta, best);

        if (beta <= alpha) break;
      }
      if (beta <= alpha) break;
    }
    return best;
  }
}

function isGameOver(gameState: number[]): boolean {
  for (let i = 0; i < gameState.length; i++)
    if (gameState[i] != 0) return false;
  return true;
}

function evaluating(gameState: number[]): number {
  let XORSum: any = 0;
  for (let i = 0; i < gameState.length; i++) {
    XORSum = XORSum ^ gameState[i];
  }
  XORSum = XORSum === 0;
  let ORsum: any = 0;
  for (let i = 0; i < gameState.length; i++) {
    ORsum = ORsum | gameState[i];
  }
  ORsum = ORsum === 1;
  const s = XORSum ^ ORsum;
  return s;
}

function randomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
const selectRandom = (currentGameArray: any) => {
  const arrValid = [];
  for (let i = 0; i < currentGameArray.length; i++) {
    if (currentGameArray[i] > 0) {
      arrValid.push({ index: i, value: currentGameArray[i] });
    }
  }
  const x: any = randomInt(0, arrValid.length - 1);
  const y: any = randomInt(1, arrValid[x].value);
  return { row: arrValid[x].index + 1, numberOfRemoves: y };
};
