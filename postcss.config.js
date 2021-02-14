const purgecss = [ '@fullhuman/postcss-purgecss', {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './styles/**/*.css'
  ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
}]

module.exports = {
  plugins: [
    'tailwindcss',
    ...(process.env.NODE_ENV === 'production' ? [purgecss] : []),
    'postcss-preset-env'
  ]
}
