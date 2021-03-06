import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import getURL, { text } from '../../content';
import Loading from '../loading';


const blockName = 'ceo-card';

class CEOCard extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            race: '',
        };
    }
    
    getRace() {
        const { ceoInfo: { race_id } } = this.props;
        const url = getURL('universe/races');
        const racesInfo = fetch(url);
        racesInfo
            .then(response => response.json())
            .then((result) => {
                for (let i = 0; i < result.length; i += 1) {
                    if (result[i].race_id === race_id) {
                        this.setState({race: result[i].name});
                        break;
                    } 
                }
            })
            .catch(err => window.console.log(err));
    }
    
    render() {
        const { ceoInfo: { name, birthday } } = this.props;
        const { race } = this.state;
        const { card } = text;
        const fullDate = new Date(birthday);
        
        if ( !race ) {
            this.getRace()
        }

        return (
            <>
                <p>{`${card.ceoName} ${name}`}</p>
                <p>{`${card.birthday} ${fullDate.toLocaleString()}`}</p>
                <div className={`${blockName}__race`}>
                    <p className={`${blockName}__race-description`}>{card.race}</p>
                    {race ? <p>{race}</p> : <Loading />}
                </div>
            </>
        )
    }
}

export default (CEOCard);

CEOCard.propTypes = {
    /**
     * Object with info about CEO corporation
     */
    ceoInfo: PropTypes.shape({
        name: PropTypes.string,
        birthday: PropTypes.string,
        race_id: PropTypes.number,
    }),
};