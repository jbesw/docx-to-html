const mammoth = require("mammoth")
const cheerio = require('cheerio')
const fs = require('fs')
const options = { convertImage: mammoth.images.imgElement() }

const main = async () => {
  const file = process.argv[2]
  const output = file.replace('.docx', '.html')
  console.log('Converting: ', file)

  const result = await mammoth.convertToHtml({path: file}, options)
  const $ = cheerio.load(result.value)
  $('a').attr('target','_blank')
  $('a').attr('rel','noopener')
  fs.writeFileSync(output, $.html())
  console.log('Output: ', output)
}

main()
