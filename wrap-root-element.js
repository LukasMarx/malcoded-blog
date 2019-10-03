import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import Code from './src/components/blocks/code/Code'
import Demo from './src/components/blocks/demo/Demo'
import Box from './src/components/elements/box/Box'
import AffiliateAd from './src/components/elements/affiliate-ad/affiliateAd'
import { OutboundLink } from 'gatsby-plugin-google-gtag'

import { Provider } from 'react-redux'

import createStore from './src/state/createStore'

// components is its own object outside of render so that the references to
// components are stable
const components = {
  pre: preProps => {
    const props = preToCodeBlock(preProps)
    if (props) {
      return <Code {...props} />
    } else {
      return <pre {...preProps} />
    }
  },
  a: aProps => {
    return <OutboundLink {...aProps} />
  },
  Demo,
  Box,
  AffiliateAd,
}
export const wrapRootElement = ({ element }) => {
  const store = createStore()
  return (
    <Provider store={store}>
      <MDXProvider components={components}>{element}</MDXProvider>
    </Provider>
  )
}

function preToCodeBlock(preProps) {
  if (
    // children is MDXTag
    preProps.children &&
    // MDXTag props
    preProps.children.props &&
    // if MDXTag is going to render a <code>
    preProps.children.props.mdxType === 'code'
  ) {
    // we have a <pre><code> situation

    const codeString = preProps.children.props.children
    const className = preProps.children.props.className
    const props = preProps.children.props
    return {
      codeString: codeString.trim(),
      language: className && className.split('-')[1],
      ...props,
    }
  }
}
