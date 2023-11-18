let defaultDepth = 20;
let nextMove = {
  index: -1,
  numberOfRemoves: -1,
};
let globalDifficulty = "hard";
const max = 99999;
const min = -99999;

export function getV1AIMove(gameState: number[], difficulty: string) {
  defaultDepth = 50000;
  nextMove = {
    index: -1,
    numberOfRemoves: -1,
  };
  globalDifficulty = difficulty;
  const x = randomInt(0, 99999);
  if (globalDifficulty === "medium" && x % 7 === 2)
    return selectRandom(gameState);
  else if (globalDifficulty === "easy" && x % 4 !== 1)
    return selectRandom(gameState);
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
    return evaluating(gameState, isMaximizing);
  }

  if (isMaximizing) {
    let best = min;
    for (let i = 0; i < gameState.length; i++) {
      if (gameState[i] <= 2) continue;
      for (
        let q =
          Math.floor((gameState[i] + 1) / 2) - (gameState[i] % 2 == 0 ? 1 : 0);
        q >= 1;
        q--
      ) {
        const newGameState = [...gameState];
        newGameState[i] -= q;
        newGameState.push(q);
        const isChildWinning = minMax(
          depth - 1,
          alpha,
          beta,
          false,
          newGameState
        );
        if (best <= isChildWinning) {
          best = isChildWinning;
          if (depth === defaultDepth) {
            nextMove = {
              index: i + 1,
              numberOfRemoves: q,
            };
          }
          alpha = Math.max(alpha, best);
        }
        if (beta <= alpha) {
          break;
        }
      }
      if (beta <= alpha) break;
    }
    return best;
  } else {
    let best = max;
    for (let i = 0; i < gameState.length; i++) {
      if (gameState[i] <= 2) continue;
      for (
        let q = gameState[i] / 2 - (gameState[i] % 2) == 0 ? 1 : 0;
        q >= 1;
        q--
      ) {
        const newGameState = [...gameState];
        newGameState[i] -= q;
        newGameState.push(q);
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
  for (let i = 0; i < gameState.length; i++) if (gameState[i] > 2) return false;
  return true;
}

function evaluating(gameState: number[], isMaximizing: boolean): number {
  if (isGameOver(gameState) && isMaximizing) {
    return max + 1;
  }
  if (isGameOver(gameState) && !isMaximizing) {
    return min - 1;
  }
  return max;
}

function randomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
const selectRandom = (currentGameArray: any) => {
  const arrValid = [];
  for (let i = 0; i < currentGameArray.length; i++) {
    if (currentGameArray[i] > 2) {
      arrValid.push({ index: i, value: currentGameArray[i] });
    }
  }
  const x: any = randomInt(0, arrValid.length - 1);
  let y: any = randomInt(1, arrValid[x].value);
  if (arrValid[x].value % 2 === 0) {
    let z: any = y;
    while (z === arrValid[x].value / 2) {
      z = randomInt(1, arrValid[x].value);
    }
    y = z;
  }
  return { index: arrValid[x].index + 1, numberOfRemoves: y };
};
