import React, { PureComponent } from 'react';
import { text } from '../../content';

const { loading } = text;

class Loading extends PureComponent {
    render() {
        return <span>{loading}</span>
    }
}

export default Loading;