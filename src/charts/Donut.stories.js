/**
 * `Button` component's storybook
 * @author Arie M. Prasetyo
 * @copyright 2020
 */

import React, {Fragment} from 'react';
import Donut from './Donut';

// Story title
export default {
  component: Donut,
  title: 'Components/Simple visualisation/Donut'
};

// Story: default button
export const Basic = () => (
  <Fragment>
    <Donut value={0.64}/>
    <Donut value={0.97}/>
    <Donut value={0.32}/>
    <Donut value={0.76}/>
  </Fragment>
);