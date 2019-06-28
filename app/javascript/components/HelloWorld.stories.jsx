import { storiesOf } from '@storybook/react'

import React from 'react'

import HelloWorld from './HelloWorld';

storiesOf('Hello World', module)
  .add('Hola', () => (
    <HelloWorld greeting="Hola" />
  ))
