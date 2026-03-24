function renderTeam(container, label, players, colorClass) {
  container.innerHTML = `<div class="field-team-label">${label}</div>` + players.map((p, i) =>
    `<div class="field-player"><span class="field-player-num">${i + 1}</span>${p}</div>`
  ).join('');
}

export function renderField(teamAEl, teamBEl, teamA, teamB) {
  renderTeam(teamAEl, 'Equipo A', teamA, 'team-a');
  renderTeam(teamBEl, 'Equipo B', teamB, 'team-b');
}