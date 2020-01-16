import React, { PureComponent } from 'react';
import { text } from '../../content';
import { url } from '../../content';
import Loading from '../loading';
import PopupLink from '../popupLink';


const blockName = 'corporation-card';


class CorpotationCard extends PureComponent {
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
        const { corporation: { name, member_count, description } } = this.props;
        const { ceoInfo } = this.state;
        const { card } = text;

        if ( !ceoInfo.name ) {
            this.getCEOinfo()
        }

        return (
            <>
                <p>{`${card.corporationName} ${name}`}</p>
                <div className={`${blockName}__ceo-link`}>
                    <p className={`${blockName}__ceo-link-description`}>{`CEO name:`}</p>
                    {<PopupLink ceo={ceoInfo} />|| <Loading />}
                </div>
                <p>{`${card.memberCount} ${member_count}`}</p>
                <p>{`${card.description} ${description}`}</p>
            </>
        )
    }
}

export default (CorpotationCard);