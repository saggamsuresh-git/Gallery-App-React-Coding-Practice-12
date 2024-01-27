// Write your code here.
import './index.css'

const ThumbnailItem = props => {
  const {imageDetails, updateActiveImageId, isActive} = props
  const {id, thumbnailUrl, thumbnailAltText} = imageDetails
  const onUpdateImageId = () => {
    updateActiveImageId(id)
  }
  const active = isActive ? 'active-image' : ''
  return (
    <li>
      <button type="button">
        <img
          className={`thumbnail-image ${active}`}
          src={thumbnailUrl}
          alt={thumbnailAltText}
          onClick={onUpdateImageId}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
