import './index.css'

const NavBar = props => {
  const {score, TopScore, scoreCard} = props

  return (
    <nav className="navBar-Container">
      <div className="emojiContainer">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
        />
        <h1 className="EmojiHeading">Emoji Game</h1>
      </div>
      {scoreCard ? (
        <div className="scoreCardContainer">
          <p className="score">Score: {score}</p>
          <p className="score">Top Score: {TopScore}</p>
        </div>
      ) : null}
    </nav>
  )
}

export default NavBar
