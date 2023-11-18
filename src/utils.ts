import { GameType } from "./Game";

export function newShade(color: any, percent: any) {
  const num: any = parseInt(color.replace("#", ""), 16),
    amt = Math.round(2.55 * percent),
    R = (num >> 16) + amt,
    B = ((num >> 8) & 0x00ff) + amt,
    G = (num & 0x0000ff) + amt;
  return (
    "#" +
    (
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (B < 255 ? (B < 1 ? 0 : B) : 255) * 0x100 +
      (G < 255 ? (G < 1 ? 0 : G) : 255)
    )
      .toString(16)
      .slice(1)
  );
}


export const GameStateDefault: GameType = {
  version: null,
  gameConfig: {
    currentTurn: "p1",
    PlayerOnePoints: 0,
    PlayerTwoPoints: 0,
    v1CurrentGameState: [],
    v2CurrentGameState: [],
  },
  Settings: {
    masterVolume: 100,
    musicVolume: 100,
    SFXVolume: 100,
  },
  GameCustomization: {
    v2NumberOfRows: 3,
    v1InitGameState: [4],
    isTwoPlayer: false,
    isHintEnabled: false,
    isTakeBackEnabled: false,
    difficulty: "easy",
  },
};
