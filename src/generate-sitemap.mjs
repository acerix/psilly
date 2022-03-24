import { writeFileSync } from 'fs'
// import { globby } from 'globby'
import prettier from 'prettier'

async function generate() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  // const pages = await globby([
  //   // 'pages/*.js',
  //   // 'data/**/*.mdx',
  //   // '!data/*.mdx',
  //   // '!pages/_*.js',
  //   // '!pages/api',
  //   // '!pages/404.js'
  // ])

  let urlset = ''
  const { default: getPages } = await import('../prerender-urls.js')
  for (const page of await getPages()) {
    urlset += `<url>
    <loc>https://psilly.com${page.url}</loc>
    <lastmod>2022-02-22</lastmod>
  </url>`
  }

  const sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urlset}
</urlset>
  `

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
  })
  writeFileSync('src/static/sitemap.xml', formatted)
}

void generate()
