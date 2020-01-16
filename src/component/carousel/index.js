import React, { PureComponent } from 'react';
import { text } from '../../content';


const blockName = 'carousel';
const backwardType = 'backward';
const forwardType = 'forward'

class Carousel extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            start: 0,
        }
    }

    handleClick(type) {
        const { start } = this.state;
        const { amountCards, fractionsComponentArray } = this.props;
        const end = fractionsComponentArray.length - 1;
        switch (type) {
            case backwardType:
                if (start > 0) {
                    this.setState({
                        start: start - amountCards < 0 ? 0 : start - amountCards
                    });
                } else {
                    this.setState({start: end - amountCards});
                }
                break;
            case forwardType:
                if (start + amountCards < end) {
                    this.setState({start: start + amountCards});
                } else {
                    this.setState({start: 0});
                }
                break;
            default: break;
        }
    }

    render() {
        const { fractionsComponentArray, amountCards } = this.props;
        const { start } = this.state; 
        const { buttons: { forward, backward } } = text;

        return (
            <section className={blockName}>
                <button 
                    className={`${blockName}__button-backward`}
                    onClick={() => this.handleClick(backwardType)}
                >
                    {backward}
                </button>
                {fractionsComponentArray.length &&
                    fractionsComponentArray.slice(start, start + amountCards).map(fractionComponent => {
                        return fractionComponent;
                })}
                <button
                    className={`${blockName}__button-forward`}
                    onClick={() => this.handleClick(forwardType)}
                >
                    {forward}
                </button>
            </section>
        );
    }
}

export default Carousel;