import {Component} from 'react'
import NavBar from '../NavBar'
import EmojiCard from '../EmojiCard'
import WinOrLossCard from '../WinOrLoseCard'
import './index.css'

/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.

class EmojiGame extends Component {
  state = {
    score: 0,
    TopScore: 0,
    selectedEmojiesList: [],
    scoreCard: true,
  }

  shuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  GetTheSelectedEmoji = id => {
    const shufflingemojilist = this.shuffledEmojisList()
    const {score, TopScore, selectedEmojiesList, scoreCard} = this.state
    const emojiCheck = [...selectedEmojiesList]
    const newEmojiId = emojiCheck.includes(id)
    if (!newEmojiId) {
      if (score === 11) {
        this.setState({score: 12, TopScore: 12, scoreCard: false})
      } else {
        this.setState(prevValue => ({
          score: prevValue.score + 1,
          selectedEmojiesList: [prevValue.selectedEmojiesList, id],
        }))
      }
    } else {
      this.setState(prevValue => ({
        scoreCard: false,
      }))
    }
  }

  NewGame = scores => {
    const {score, TopScore, scoreCard} = this.state
    this.setState(prevValue => ({
      score: 0,
      TopScore: score >= prevValue.TopScore ? score : TopScore,
      scoreCard: true,
    }))
  }

  render() {
    const {score, TopScore, scoreCard} = this.state
    const {emojisList} = this.props

    return (
      <div className="emoji-bg-container">
        <NavBar score={score} TopScore={TopScore} scoreCard={scoreCard} />
        {scoreCard ? (
          <div>
            <ul className="emojiesContainer">
              {emojisList.map(eachemoji => (
                <EmojiCard
                  key={eachemoji.id}
                  eachEmoji={eachemoji}
                  GetTheSelectedEmoji={this.GetTheSelectedEmoji}
                />
              ))}
            </ul>
          </div>
        ) : (
          <div className="WinorLossContainer">
            <WinOrLossCard
              NewGame={this.NewGame}
              score={score}
              TopScore={TopScore}
            />
          </div>
        )}
      </div>
    )
  }
}

export default EmojiGame
