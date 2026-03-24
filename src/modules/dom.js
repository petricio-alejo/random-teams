export function getElements() {
  return {
    input: document.getElementById('playerInput'),
    btnAdd: document.getElementById('btnAdd'),
    btnGenerate: document.getElementById('btnGenerate'),
    btnReshuffle: document.getElementById('btnReshuffle'),
    btnReset: document.getElementById('btnReset'),
    counter: document.getElementById('count'),
    playerList: document.getElementById('playerList'),
    error: document.getElementById('error'),
    fieldEmpty: document.getElementById('fieldEmpty'),
    fieldTeams: document.getElementById('fieldTeams'),
    teamA: document.getElementById('teamA'),
    teamB: document.getElementById('teamB'),
  };
}

export function renderPlayerList(container, players, onRemove) {
  container.innerHTML = players.map((p, i) => `
    <div class="player-item">
      <div class="player-info">
        <span class="player-badge">${i + 1}</span>
        <span>${p}</span>
      </div>
      <button class="btn-remove" data-index="${i}">&times;</button>
    </div>
  `).join('');

  container.querySelectorAll('.btn-remove').forEach(btn => {
    btn.addEventListener('click', () => onRemove(Number(btn.dataset.index)));
  });
}

export function updateCounter(counter, count) {
  counter.textContent = count;
}

export function showError(errorEl, msg) {
  errorEl.textContent = msg;
  errorEl.classList.add('visible');
}

export function hideError(errorEl) {
  errorEl.classList.remove('visible');
}

export function setInputState(input, btnAdd, disabled) {
  input.disabled = disabled;
  btnAdd.disabled = disabled;
}

export function setGenerateButton(btn, enabled) {
  btn.disabled = !enabled;
}

export function showTeams(fieldEmpty, fieldTeams, btnReshuffle) {
  fieldEmpty.style.display = 'none';
  fieldTeams.classList.add('visible');
  btnReshuffle.classList.add('visible');
}

export function hideTeams(fieldEmpty, fieldTeams, btnReshuffle) {
  fieldTeams.classList.remove('visible');
  fieldEmpty.style.display = 'flex';
  btnReshuffle.classList.remove('visible');
}