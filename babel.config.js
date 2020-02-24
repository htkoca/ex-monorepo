module.exports = (api) => {
  api.cache(true)

  console.log('xxx root babel.config.js')

  const out = {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react'
    ],
    plugins: [
      'babel-plugin-styled-components'
    ]
  }

  return out
};
