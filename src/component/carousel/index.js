import React, { PureComponent } from 'react';
import { text } from '../../content';


const blockName = 'carousel';
const backwardID = 'backward';
const forwardID = 'forward';

class Carousel extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            start: 0,
        }
    }

    handleClick(event) {
        const { start } = this.state;
        const { amountCards, fractionsComponentArray } = this.props;
        switch (event.target.id) {
            case backwardID:
                if (start > 0) {
                    this.setState({start: start - amountCards})
                }
                break;
            case forwardID: 
                if (start + amountCards + 1 < fractionsComponentArray.length) {
                    this.setState({start: start + amountCards})
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
                    id={backwardID}
                    onClick={(event) => this.handleClick(event)}
                >
                    {backward}
                </button>
                {fractionsComponentArray.length && fractionsComponentArray.map((fractionComponent, index) => {
                    if (index > start && index <= start + amountCards) {
                        return fractionComponent;
                    }
                })}
                <button
                    className={`${blockName}__button-forward`}
                    id={forwardID}
                    onClick={(event) => this.handleClick(event)}
                >
                    {forward}
                </button>
            </section>
        );
    }
}

export default Carousel;