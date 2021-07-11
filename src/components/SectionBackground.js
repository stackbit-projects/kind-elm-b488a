import React from 'react';
import _ from 'lodash';

import { withPrefix } from '../utils';

export default class SectionBackground extends React.Component {
    render() {
        const section = _.get(this.props, 'section');
        const backgroundImage = _.get(section, 'background_image');
        const backgroundImageOpacity = _.get(section, 'background_image_opacity', 10