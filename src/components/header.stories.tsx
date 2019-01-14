import * as React from 'react'
import { storiesOf } from '@storybook/react'
import Header from './header'

storiesOf('Header', module).add('simple header', () => <Header />, {
  info: { inline: true },
})
