import React from 'react';
import { text } from '../../content';

const { loading } = text;

function Loading() {
    return <span>{loading}</span>
}

export default Loading;