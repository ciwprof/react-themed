const React = require('react')

const Themed = (Component) => {
  const { themes, defaultTheme, displayName, name } = Component
  const componentName = displayName || name

  if (typeof themes === 'undefined' || Object.keys(themes).length === 0) {
    throw new Error(`No themes found for component ${componentName}`)
  }

  const getDefaultTheme = (theme) => {
    if (typeof defaultTheme === 'undefined') {
      throw new Error(`Neither theme ‘${theme}’ nor default theme found for component ${componentName}`)
    }

    return themes[defaultTheme]
  }

  const getTheme = (theme) => {
    if (typeof theme === 'undefined') {
      return getDefaultTheme(theme)
    }

    if (!themes[theme]) {
      console.warn(`Theme ‘${theme}’ not found for component`, componentName)
    }

    return themes[theme] || getDefaultTheme(theme)
  }

  class ThemedComponent extends React.Component {
    render () {
      return (
        <Component
          {...this.props}
          theme={getTheme(this.props.theme)}
        />
      )
    }
  }

  return ThemedComponent
}

module.exports = Themed
