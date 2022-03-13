# Toolbar

The Toolbar component displays important information and actions for an application.

## Use

1. Install the @pongo-ui/react-toolbar component.

Using NPM

```
npm install @pongo-ui/react-toolbar
```

Using Yarn

```
yarn add @pongo-ui/react-toolbar
```

2. Install the @fluentui/react-provider and our theme tokens from @pongo-ui/react-theme

3. Set up the provider in your app:

```jsx
import { FluentProvider } from '@fluentui/react-provider'
import { webLightTheme } from '@pongo-ui/react-theme'

const MyApp = () => {
  return (
    <FluentProvider theme={webLightTheme}>
    <FluentProvider>
  )
}
```

4. Integrate the Toolbar component.

```jsx
import { FluentProvider } from '@fluentui/react-provider'
import { webLightTheme } from '@pongo-ui/react-theme'
import { Toolbar } from '@pongo-ui/react-toolbar'

const MyApp = () => {
  return (
    <FluentProvider theme={webLightTheme}>
      <Toolbar>Hello World</Toolbar>
    <FluentProvider>
  )
}
```

## API

To learn more about the Toolbar API take a look at the [Toolbar Interface](src/components/Toolbar/Toolbar.types.ts) file.