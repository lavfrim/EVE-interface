import React from 'react';
import PropTypes from 'prop-types';
import { text } from '../../content';
import Loading from '../loading';


const blockName = 'corporation-card';


function CorporationCard(props) {
    const {
        corporation: { name, member_count, description },
        ceoInfo,
        handleClickCEO,
    } = props;
    const { card } = text;

    return (
        <>
            <p>{`${card.corporationName} ${name}`}</p>
            <div className={`${blockName}__ceo-link`}>
                <p className={`${blockName}__ceo-link-description`}>
                    {card.ceoName}
                </p>
                {ceoInfo.name ?
                <div
                    className={`${blockName}__ceo-link-link`}
                    onClick={(event) => handleClickCEO(event)}
                >
                    {ceoInfo.name}
                </div> :
                <Loading />}
            </div>
            <p>{`${card.memberCount} ${member_count}`}</p>
            <p>{`${card.description} ${description}`}</p>
        </>
    ) 
}

export default (CorporationCard);

CorporationCard.propTypes = {
    /**
     * Object with info about corporation
     */
    corporation: PropTypes.shape({
        name: PropTypes.string,
        member_count: PropTypes.number,
        description: PropTypes.string,
    }),
    /**
     * Object with info about CEO corporation
     */
    ceoInfo: PropTypes.shape({
        name: PropTypes.string,
    }),
    /**
     * Callback function that handle click on the COE name
     */
    handleClickCEO: PropTypes.func,
};