const STORAGE_KEY = 'equipos_random_players';

export function loadPlayers() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
  } catch {
    return [];
  }
}

export function savePlayers(players) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(players));
}

export function clearPlayers() {
  localStorage.removeItem(STORAGE_KEY);
}