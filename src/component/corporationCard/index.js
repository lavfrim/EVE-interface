import React, { PureComponent } from 'react';
import { text } from '../../content';
import Loading from '../loading';


const blockName = 'corporation-card';


class CorporationCard extends PureComponent {
    
    render() {
        const {
            corporation: { name, member_count, description },
            ceoInfo,
            handleClickCEO,
        } = this.props;
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
}

export default (CorporationCard);