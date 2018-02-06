const colors = [
  '#c00000',
  '#ff0000',
  '#ffc000',
  '#ffff00',
  '#92d050',
  '#00b050',
  '#00b0f0',
  '#0070c0',
  '#002060',
  '#7030a0'
]

const colorStyleMap = {}

colors.forEach((color, index) => {
  colorStyleMap[`color${index}`] = {
    color
  }
})

export default colorStyleMap
