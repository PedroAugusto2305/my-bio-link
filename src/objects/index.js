import Button from '../components/buttons'
import './style.css'

function Background(amountButtons) {
  const $htmlButton = Button()
  const $htmlContent = $htmlButton.repeat(amountButtons)
  return `
    <div class="container">
      ${$htmlContent}
    </div>
  `
}

export default Background
