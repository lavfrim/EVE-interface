import React from 'react';
import PropTypes from 'prop-types';
import { text } from '../../content';
import Loading from '../loading';
import { popUpStage } from '../../content';


const blockName = 'pop-up';

const outside = 'outside';
const forward = 'forward';
const backward = 'backward';
const close = 'close';

function PopUp(props) {
    const {
        children,
        stage,
        handleClose,
        handleClickForward,
        handleClickBackward
    } = props;

    function handleClick(event) {
       
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

    return (
        <div 
            className={blockName}
            onClick={(event) => handleClick(event)}
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

export default (PopUp);

PopUp.propTypes = {
    /**
     * Component inside the PopUp
     */
    children: PropTypes.node,
    /**
     * Numerical designation of the rander stage of the content
     */
    stage: PropTypes.number,
    /**
     * Callback function that handle close PopUp
     */
    handleClose: PropTypes.func,
    /**
     * Callback function that handle click on the forward button
     */
    handleClickForward: PropTypes.func,
    /**
     * Callback function that handle click on the backward button
     */
    handleClickBackward: PropTypes.func,
};