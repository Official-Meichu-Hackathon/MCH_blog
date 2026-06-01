import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = dirname(fileURLToPath(import.meta.url))
const templatePath = resolve(root, 'dist/index.html')
const serverEntry = pathToFileURL(resolve(root, 'dist-ssr/entry-server.js')).href

const { render } = await import(serverEntry)
const appHtml = render()

const template = readFileSync(templatePath, 'utf-8')
const placeholder = '<div id="root"></div>'
if (!template.includes(placeholder)) {
  throw new Error(`Prerender failed: "${placeholder}" not found in dist/index.html`)
}

writeFileSync(templatePath, template.replace(placeholder, `<div id="root">${appHtml}</div>`))
rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true })

console.log(`Prerendered dist/index.html (${appHtml.length} chars of app HTML)`)
