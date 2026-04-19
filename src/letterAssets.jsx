// Helper file to render letters

const imageModules = import.meta.glob('./assets/letters/*.png', { eager: true })

const toCamelCaseKey = (fileName) => {
  const [color1, color2, letter] = fileName.replace('.png', '').split('_')
  return `${color1}${color2.charAt(0).toUpperCase() + color2.slice(1)}${letter.toUpperCase()}`
}

const letterAssets = {}

for (const path in imageModules) {
  const fileName = path.split('/').pop()

  if (!fileName) continue

  const parts = fileName.replace('.png', '').split('_')

  if (parts.length === 3) {
    const key = toCamelCaseKey(fileName)
    letterAssets[key] = imageModules[path].default ?? imageModules[path]
  }
}

console.log(letterAssets)

export default letterAssets