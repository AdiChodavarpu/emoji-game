import './index.css'

const WinOrLossCard = props => {
  const {score, TopScore, NewGame} = props

  const resultImg =
    score === 12
      ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const OnSelectPlayAgain = () => {
    NewGame(score)
  }

  return (
    <div className="WinOrLossCardContainer">
      <div className="resultContainer">
        {score === 12 ? (
          <h1 className="resultHeading">You Won</h1>
        ) : (
          <h1 className="resultHeading">You Lose</h1>
        )}
        <div>
          <p className="resultScore">Best Score</p>
          <p className="finalscores">{score}/12</p>

          <button
            className="PlayAgainBtn"
            type="button"
            onClick={OnSelectPlayAgain}
          >
            Play Again
          </button>
        </div>
      </div>
      <img className="resultImg" src={resultImg} alt="win or lose" />
    </div>
  )
}

export default WinOrLossCard
