import React, { PureComponent } from 'react';
import { url } from '../../content';
import Loading from '../loading';
import PopupLink from '../popupLink';
import { text } from '../../content';


const blockName = 'fraction-card';

class Fraction extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            system: '',
            corporation: {},
        }
    }

    handleClick = () => {
        const { isOpen } = this.state;
        
        this.getSolarSystem();
        this.getCorporationInfo();
        this.setState({isOpen: !isOpen})
    }

    getSolarSystem() {
        const { info: { solar_system_id } } = this.props;
        const { system } = this.state;
        if (!system) {
            const systemInfo = fetch(`${url.universe.systems}${solar_system_id}`);
            systemInfo
                .then(response => response.json())
                .then((result) => {
                    this.setState({system: result.name});
                })
                .catch(err => window.console.log(err));
            }
    }

    getCorporationInfo() {
        const { info: { corporation_id } } = this.props;
        const { system } = this.state;
        if (!system) {
            const systemInfo = fetch(`${url.corporation}${corporation_id}`);
            systemInfo
                .then(response => response.json())
                .then(result => {
                    this.setState({corporation: result});
                })
                .catch(err => window.console.log(err));
            }
    }
    
    render() {
        const { isOpen, system, corporation } = this.state;
        const { info: { name, description, faction_id } } = this.props;
        const { card } = text;

        return (
            <div
                id={faction_id}
                className={blockName}
                onClick={this.handleClick}
            >
                <p className={`${blockName}__name`}>{name}</p>
                {isOpen && 
                    <>
                        <div className={`${blockName}__corp-link`}>
                            <p className={`${blockName}__corp-link-description`}>{card.corporationName}</p>
                            {corporation.name ? <PopupLink corporation={corporation} /> : <Loading />}
                        </div>
                        <p className={`${blockName}__description`}>{`${card.description} ${description}`}</p>
                        <div className={`${blockName}__solar-sys`}>
                            <p className={`${blockName}__solar-sys-description`}>{card.system}</p>
                            {system ? system : <Loading />}
                        </div>
                    </>
                }
            </div>
        )
    }
}

export default (Fraction);