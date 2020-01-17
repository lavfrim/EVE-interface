import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { url } from '../../content';
import CorporationCard from '../corporationCard';
import CEOCard from '../ceoCard';
import { popUpStage } from '../../content';


class PopupCard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            ceoInfo: {},
        }
    }

    getCEOinfo() {
        const { corporation: { ceo_id } } = this.props;
        const infoCEO = fetch(`${url.characters}${ceo_id}`);
        infoCEO
            .then(response => response.json())
            .then((result) => {
                this.setState({ceoInfo: result});
            })
            .catch(err => window.console.log(err));
    }

    
    
    render() {
        const { corporation, handleClickCEO, stage } = this.props;
        const { ceoInfo } = this.state;

        if (!ceoInfo.name) {
            this.getCEOinfo();
        }

        return (
            <>
                {stage === popUpStage.cliked ? <CEOCard ceoInfo={ceoInfo} /> :
                <CorporationCard
                    corporation={corporation}
                    ceoInfo={ceoInfo}
                    handleClickCEO={handleClickCEO}
                />}
            </>
        )
    }
}

export default (PopupCard);

PopupCard.propTypes = {
    /**
     * Object with info about CEO corporation
     */
    corporation: PropTypes.object,
    /**
     * Callback function that handle click on the corpocation CEO name
     */
    handleClickCEO: PropTypes.func,
    /**
     * Numerical designation of the rander stage of the content
     */
    stage: PropTypes.number,
};