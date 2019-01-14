import { configure, addDecorator } from '@storybook/react'
import { withOptions } from '@storybook/addon-options'
import { withInfo } from '@storybook/addon-info'

addDecorator(
  withOptions({
    name: 'CRA TypeScript Kitchen Sink',
  })
)

addDecorator(withInfo())

function loadStories() {
  const req = require.context('../src', true, /\.stories\.tsx$/)
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
