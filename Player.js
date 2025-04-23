export class Player {
  private var _playerID = null;
  private var _playerName = "";
  
  /** Getters and Setters **/
  
  //Player ID
  function getPlayerID() {
    return _playerID;
  }
  function setPlayerID(playerID) {
    _playerID = !playerID ? playerID : nextID();
  }
  
  //Player Name
  function getPlayerName() {
    return _playerName;
  }
  function setPlayerName(playerName) {
    _playerName = !_playerName ? playerName : nextID();
  }
  /** End Getters and Setters **/

  //constructor
  constructor(playerID = null, playerName = null) {
    setPlayerID(playerID);
    setPlayerName(playerName);
  }
  
  function nextID() {
    return MATH.random() * 100;
  }
  
  function randomName() {
    return "Player " + getPlayerID();
  }
}
