import { Player } from "./Player.js"

export class Host extends Player {
  constructor(playerID = null, playerName = null) {
    super(playerID, playerName);
  }
}
