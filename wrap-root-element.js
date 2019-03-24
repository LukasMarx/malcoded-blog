import React from 'react'
import { MDXProvider } from '@mdx-js/tag'
import Code from './src/components/blocks/code/Code'
import { preToCodeBlock } from 'mdx-utils'

import { Provider } from 'react-redux'

import createStore from './src/state/createStore'

// components is its own object outside of render so that the references to
// components are stable
const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    // if there's a codeString and some props, we passed the test
    if (props) {
      return <Code {...props} />
    } else {
      // it's possible to have a pre without a code in it
      return <pre {...preProps} />
    }
  },
}
export const wrapRootElement = ({ element }) => {
  const store = createStore()
  return (
    <Provider store={store}>
      <MDXProvider components={components}>{element}</MDXProvider>
    </Provider>
  )
}
