/**
 * `Button` component's storybook
 * @author Arie M. Prasetyo
 * @copyright 2020
 */

import React from 'react';
import Donut from './Donut';

// Story title
export default {
  component: Donut,
  title: 'Components/Simple visualisation/Donut',
  decorators: [withKnobs],
  excludeStories: /.*Data$/,
};

// Story: default button
export const Basic = () => (
  <Donut value={0.64}/>
);