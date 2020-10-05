/**
 * `Button` component's storybook
 * @author Arie M. Prasetyo
 * @copyright 2020
 */

import React, {Fragment} from 'react';
import { withKnobs, number } from '@storybook/addon-knobs';
import Donut from './Donut';

// Story title
export default {
  component: Donut,
  title: 'Components/Simple visualisation/Donut',
  decorators: [withKnobs],
  excludeStories: /.*Data$/
};

// Story: default button
export const Basic = () => (
  <Fragment>
    <Donut value={ number('Value (between 0 to 1)', 0.5, {range: true, min: 0, max: 1, step: 0.1}) }/>
  </Fragment>
);