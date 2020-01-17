import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import PopUp from '../popup';
import PopupCard from '../popupCard';
import { popUpStage } from '../../content';


const blockName = 'pop-up-link';


class PopupLink extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            stage: popUpStage.basic,
        }
    }

    closePopup = () => {
        this.setState({
            isOpen: false,
            stage: popUpStage.basic,
        });
    }

    handleClick(event) {
        this.setState({isOpen: true});
        event.stopPropagation();
    }

    handleClickCEO = () => {
        this.setState({stage: popUpStage.cliked});
    }

    handleClickForward = () => {
        this.setState({stage: popUpStage.cliked});
    }

    handleClickBackward = () => {
        this.setState({stage: popUpStage.returned});
    }

    
    render() {
        const { isOpen, stage } = this.state;
        const { corporation } = this.props;

        return (
            <>
                <div
                    className={blockName}
                    onClick={(event) => this.handleClick(event)}
                >
                    {corporation.name}
                </div>
                {isOpen && 
                    <PopUp
                        handleClose={this.closePopup}
                        handleClickForward={this.handleClickForward}
                        handleClickBackward={this.handleClickBackward}
                        stage={stage}
                    >
                        <PopupCard
                            handleClickCEO={this.handleClickCEO}
                            corporation={corporation}
                            stage={stage}
                        />
                    </PopUp>
                }
            </>
        )
    }
}

export default (PopupLink);

PopupLink.propTypes = {
    /**
     * Object with info about CEO corporation
     */
    corporation: PropTypes.shape({
        name: PropTypes.string,
    }),
};