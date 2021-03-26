const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const p1Display = document.querySelector('#p1Score');
const p2Display = document.querySelector('#p2Score');
const resetButton = document.querySelector('#reset');
const maxScoreSelect = document.querySelector('#max-score-select');

let p1Score = 0,
	winningScore = 5,
	p2Score = 0,
	isGameOver = false;

p1Button.addEventListener('click', () => {
	if (!isGameOver) {
		p1Score++;
		if (p1Score === winningScore) {
			isGameOver = true;
			p1Display.classList.add('winner');
			p2Display.classList.add('loser');
		}
		p1Display.textContent = p1Score;
	}
});

p2Button.addEventListener('click', () => {
	if (!isGameOver) {
		p2Score++;
		if (p2Score === winningScore) {
			isGameOver = true;
			p1Display.classList.add('loser');
			p2Display.classList.add('winner');
		}
		p2Display.textContent = p2Score;
	}
});

const reset = () => {
	isGameOver = false;
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove('winner', 'loser');
	p2Display.classList.remove('winner', 'loser');
};

maxScoreSelect.addEventListener('change', function() {
	// value of this using regular f() differs from using arrow f() (this refer to parent's)
	winningScore = parseInt(this.value);
	reset();
});

resetButton.addEventListener('click', reset);
