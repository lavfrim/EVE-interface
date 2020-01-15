import React, { PureComponent } from 'react';
import { url } from '../../content';
import Loading from '../loading';


const blockName = 'fraction-card';

class Fraction extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            system: '',
        }
    }

    handleClick() {
        const { isOpen } = this.state;
        
        this.getSolarSystem();
        this.setState({isOpen: !isOpen})
    }

    getSolarSystem() {
        const { info: { solar_system_id} } = this.props;
        const { system } = this.state;
        if (!system) {
            const systemInfo = fetch(`${url.universe.systems}${solar_system_id}`);
            systemInfo
                .then(response => response.json())
                .then((result) => {
                    this.setState({system: result.name});
                })
                .catch(err => console.log(err));
            }
    }
    
    render() {
        const { isOpen, system } = this.state;
        const { info: { name, description, faction_id } } = this.props;

        return (
            <div
                id={faction_id}
                className={blockName}
                onClick={() => {this.handleClick()}}
            >
                <p className={`${blockName}__name`}>{name}</p>
                {isOpen && 
                    <>
                        <p className={`${blockName}__description`}>{description}</p>
                        <p className={`${blockName}__solar-sys`}>{system ? system : <Loading />}</p>
                    </>
                }
            </div>
        )
    }
}

export default (Fraction);