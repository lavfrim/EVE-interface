import React, { PureComponent } from 'react';
import { text } from '../../content';
import Loading from '../loading';
import { popUpStage } from '../../content';


const blockName = 'pop-up';

const outside = 'outside';
const forward = 'forward';
const backward = 'backward';
const close = 'close';

class PopUp extends PureComponent {
       
    handleClick(event) {
        const { handleClose, handleClickForward, handleClickBackward } = this.props;
        switch (event.target.id) {
            case outside: handleClose();
                break;
            case close: handleClose();
                break;
            case forward: handleClickForward();
                break;
            case backward: handleClickBackward();
                break;
            default: break;    
        }
        event.stopPropagation();
    }
    
    render() {
        const { children, stage } = this.props;

        return (
            <div 
                className={blockName}
                onClick={(event) => this.handleClick(event)}
                id={outside}
            >
                <div 
                    className={`${blockName}__content-container`}
                >
                    <button
                        className={`${blockName}__content-container__close-button`}
                        id={close}
                        
                    >
                        {text.buttons.close}
                    </button>

                    <div className={`${blockName}__content-container__content`}>
                        {children || <Loading />}
                    </div>

                    {stage === popUpStage.cliked && <button
                        id={backward}
                        className={`${blockName}__content-container__nav-button`}
                    >
                        {text.buttons.backward}
                    </button>}

                    {stage === popUpStage.returned && <button
                        id={forward}
                        className={`${blockName}__content-container__nav-button`}
                    >
                        {text.buttons.forward}
                    </button>}
                </div>
            </div>
        )
    }
}

export default (PopUp);