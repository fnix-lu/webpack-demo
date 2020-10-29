import _ from 'lodash'
import './style.css'
import MsgIcon from './msg.png'

import csv from './data/data.csv'
import xml from './data/data.xml'
import toml from './data/data.toml'
import yaml from './data/data.yaml'
import json5 from './data/data.json5'

import print from './print'

function component () {
  const element = document.createElement('div')

  element.innerHTML = _.join(['Hello', 'webpack'], ' ')
  element.classList.add('hello')

  const image = new Image()
  image.src = MsgIcon
  element.appendChild(image)

  const button = document.createElement('button')
  button.innerHTML = 'Click'
  button.onclick = print
  element.appendChild(button)

  return element
}

console.log('csv', csv)
console.log('xml', xml)
console.log('toml', toml)
console.log('yaml', yaml)
console.log('json5', json5)

document.body.appendChild(component())
