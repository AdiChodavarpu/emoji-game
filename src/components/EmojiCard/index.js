import './index.css'

const EmojiCard = props => {
  const {eachEmoji, GetTheSelectedEmoji} = props
  const {id, emojiName, emojiUrl} = eachEmoji

  const selectingEmoji = () => {
    GetTheSelectedEmoji(id)
  }

  return (
    <li className="emojiContainer">
      <button type="button" className="btnemoji" onClick={selectingEmoji}>
        <img className="emojiImg" src={emojiUrl} alt={emojiName} />
      </button>
    </li>
  )
}

export default EmojiCard
