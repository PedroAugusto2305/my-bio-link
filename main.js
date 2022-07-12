import './src/styles/settings/variables.css'
import './src/styles/generic/reset.css'
import './src/styles/elements/base.css'

import Background from './src/objects'
import Photo from './src/components/perfilPhoto'
import Name from './src/components/perfilName'

const $root = document.querySelector('#root')

$root.insertAdjacentHTML(
  'beforeend',
  `
  ${Photo()}
  ${Name()}
  ${Background(3)}
  `
)
