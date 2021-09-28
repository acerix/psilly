import { writeFileSync } from 'fs'
import { globby } from 'globby'
import prettier from 'prettier'

async function generate() {
  const prettierConfig = await prettier.resolveConfig('./.prettierrc.js')
  const pages = await globby([
    // 'pages/*.js',
    // 'data/**/*.mdx',
    // '!data/*.mdx',
    // '!pages/_*.js',
    // '!pages/api',
    // '!pages/404.js'
  ])

  const sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<!-- Worst, sitemap, ever. -->
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://psilly.com/</loc>
    <lastmod>1970-01-01</lastmod>
  </url>
  ${pages
    .map((page) => {
      const path = page
      // .replace('pages', '')
      // .replace('data', '')
      // .replace('.js', '')
      // .replace('.mdx', '')
      const route = path === '/index' ? '' : path
      return `
        <url>
            <loc>${`https://leerob.io${route}`}</loc>
        </url>
      `
    })
    .join('')}
</urlset>
  `
  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: 'html'
  })
  writeFileSync('src/static/sitemap.xml', formatted)
}

void generate()
