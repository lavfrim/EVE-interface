import React, { PureComponent } from 'react';
import { text } from '../../content';
import Loading from '../loading';


const blockName = 'pop-up';

const outside = 'outside';
const close = 'close';

class PopUp extends PureComponent {
       
    handleClick(event) {
        const { handleClose } = this.props;
        switch (event.target.id) {
            case outside: handleClose();
                break;
            case close: handleClose();
                break;
            default: break;    
        }
        event.stopPropagation();
    }
    
    render() {
        const { children } = this.props;

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
                        
                    >{text.buttons.close}</button>
                    <div className={`${blockName}__content-container__content`}>
                        {children || <Loading />}
                    </div>
                </div>
            </div>
        )
    }
}

export default (PopUp);