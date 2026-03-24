export function shufflePlayers(players) {
  return [...players].sort(() => Math.random() - 0.5);
}

export function splitTeams(players) {
  const shuffled = shufflePlayers(players);
  return {
    teamA: shuffled.slice(0, 5),
    teamB: shuffled.slice(5, 10),
  };
}

export function validatePlayers(players) {
  if (players.length !== 10) {
    return { valid: false, message: `Necesitas 10 jugadores. Tienes ${players.length}.` };
  }
  return { valid: true };
}

export function isDuplicate(players, name) {
  return players.some(p => p.toLowerCase() === name.toLowerCase());
}