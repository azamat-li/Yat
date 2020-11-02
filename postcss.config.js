/* eslint-disable @typescript-eslint/no-var-requires */
const IN_PRODUCTION = process.env.NODE_ENV === 'production'

class TailwindVueExtractor {
  static extract(content) {
    const contentWithoutStyleBlocks = content.replace(
      /<style[^]+?<\/style>/gi,
      ''
    )
    return contentWithoutStyleBlocks.match(/[A-Za-z0-9-_:/]+/g) || []
  }
}

const extensionsUsingCSS = ['vue', 'html']
const extensionsOfCSS = [
  'css',
  'less',
  'pcss',
  'postcss',
  'sass',
  'scss',
  'styl'
]

import tailwindcss from '.tailwind.config.js'
import postcssPresetEnv from 'post-preset-env'
import fullhuman from '@fullhuman/postcss-purgecss'
import autoprefixer from 'autoprefixer'
module.exports = {
  plugins: [
    require('autoprefixer'),
    postcssPresetEnv,
    tailwindcss,
    IN_PRODUCTION &&
      fullhuman({
        content: [`./@(public|src)/**/*.@(${extensionsUsingCSS.join('|')})`],
        css: [`./src/**/*.@(${extensionsOfCSS.join('|')})`],
        extractors: [
          {
            extractor: TailwindVueExtractor,
            extensions: extensionsUsingCSS
          }
        ],
        whitelist: [],
        whitelistPatterns: [
          /-(leave|enter|appear)(|-(to|from|active))$/,
          /^(?!(|.*?:)cursor-move).+-move$/,
          /^router-link(|-exact)-active$/
        ]
      }),
    autoprefixer()
  ]
}
