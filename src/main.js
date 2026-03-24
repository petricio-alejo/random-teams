import './styles/style.css';
import { loadPlayers, savePlayers, clearPlayers } from './modules/storage.js';
import { getElements, renderPlayerList, updateCounter, showError, hideError, setInputState, setGenerateButton, showTeams, hideTeams } from './modules/dom.js';
import { splitTeams, validatePlayers, isDuplicate } from './modules/teams.js';
import { renderField } from './modules/field.js';

const players = loadPlayers();
const dom = getElements();

function updateUI() {
  updateCounter(dom.counter, players.length);
  setInputState(dom.input, dom.btnAdd, players.length >= 10);
  setGenerateButton(dom.btnGenerate, players.length === 10);
  renderPlayerList(dom.playerList, players, removePlayer);
}

function addPlayer() {
  const name = dom.input.value.trim();
  if (!name) return;
  if (players.length >= 10) return;
  if (isDuplicate(players, name)) {
    showError(dom.error, 'Ese jugador ya fue agregado.');
    return;
  }

  players.push(name);
  dom.input.value = '';
  dom.input.focus();
  hideError(dom.error);
  savePlayers(players);
  updateUI();
}

function removePlayer(index) {
  players.splice(index, 1);
  hideTeams(dom.fieldEmpty, dom.fieldTeams, dom.btnReshuffle);
  savePlayers(players);
  updateUI();
}

function generateTeams() {
  const { valid, message } = validatePlayers(players);
  if (!valid) {
    showError(dom.error, message);
    return;
  }

  const { teamA, teamB } = splitTeams(players);
  renderField(dom.teamA, dom.teamB, teamA, teamB);

  hideError(dom.error);
  showTeams(dom.fieldEmpty, dom.fieldTeams, dom.btnReshuffle);
}

function resetAll() {
  players.length = 0;
  hideTeams(dom.fieldEmpty, dom.fieldTeams, dom.btnReshuffle);
  hideError(dom.error);
  clearPlayers();
  updateUI();
  dom.input.focus();
}

function init() {
  dom.input.addEventListener('keydown', e => {
    if (e.key === 'Enter') addPlayer();
  });

  dom.btnAdd.addEventListener('click', addPlayer);
  dom.btnGenerate.addEventListener('click', generateTeams);
  dom.btnReshuffle.addEventListener('click', generateTeams);
  dom.btnReset.addEventListener('click', resetAll);

  updateUI();
}

init();