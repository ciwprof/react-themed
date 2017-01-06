# react-themed

A solution-agnostic higher-order component for theming.

## Install

```
npm install react-themed --save
```

## How to

1. Define a static `themes` object on your themable component mapping theme names to whatever you want (strings, class names, CSS modules, styles objects…).
2. Define a static `defaultTheme` string on your themable component referencing an existing key from `themes` object.
3. Wrap your themable component with `Themed`.
4. Pass a `theme` prop to your component.

## CSS Modules example

```js
import Themed from 'react-themed'

class Button extends React.Component {
  static themes = {
    ghost: require('./ghost.css'),
    plain: require('./plain.css'),
    link: require('./link.css')
  }

  static defaultTheme = 'plain'

  render () {
    const styles = this.props.theme

    return (
      <button {...this.props} className={styles.button}>
        {this.props.children}
      </button>
    )
  }
}

export Themed(Button)
```

```js
<Button theme='ghost'>
  Do something
</Button>
```
