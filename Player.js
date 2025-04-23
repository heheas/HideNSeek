private var _playerID = null;
private var _playerName = "";

/** Getters and Setters **/

//Player ID
function getPlayerID() {
  return _playerID;
}
function setPlayerID(var playerID) {
  _playerID = !playerID ? playerID : nextID();
}

//Player Name
function getPlayerName() {
  return _playerName;
}
function setPlayerName(var playerName) {
  _playerName = !_playerName ? playerName : nextID();
}
/** End Getters and Setters **/

//Init Function
function init(var playerID = null, var playerName = null) {
  _playerID = !playerID ? playerID : nextID();
  _playerName = !playerName ? playerName : randomName();
}

function nextID() {
  return MATH.random() * 100;
}

function randomName() {
  return "Player " + getPlayerID();
}
