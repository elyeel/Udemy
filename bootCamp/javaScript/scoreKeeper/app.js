const resetButton = document.querySelector('#reset');
const maxScoreSelect = document.querySelector('#max-score-select');

const p1 = {
	score: 0,
	button: document.querySelector('#p1Button'),
	display: document.querySelector('#p1Score')
};

const p2 = {
	score: 0,
	button: document.querySelector('#p2Button'),
	display: document.querySelector('#p2Score')
};

let winningScore = 5,
	isGameOver = false;

function updateScores(player, opponent) {
	if (!isGameOver) {
		player.score++;
		if (player.score === winningScore) {
			isGameOver = true;
			player.display.classList.add('has-text-success');
			player.button.disabled = true;
			opponent.button.disabled = true;
		}
		player.display.textContent = player.score;
	}
}

p1.button.addEventListener('click', () => {
	updateScores(p1, p2);
});

p2.button.addEventListener('click', () => {
	updateScores(p2, p1);
});

const reset = () => {
	isGameOver = false;
	for (let p of [ p1, p2 ]) {
		p.score = 0;
		p.display.textContent = 0;
		p.display.classList.remove('has-text-success', 'has-text-danger');
		p.button.disabled = false;
	}
};

maxScoreSelect.addEventListener('change', function() {
	// value of this using regular f() differs from using arrow f() (this refer to parent's)
	winningScore = parseInt(this.value);
	reset();
});

resetButton.addEventListener('click', reset);
