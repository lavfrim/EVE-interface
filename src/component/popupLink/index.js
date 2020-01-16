import React, { PureComponent } from 'react';
import PopUp from '../popup';
import Loading from '../loading';
import CorpotationCard from '../corporationCard';
import CEOCard from '../ceoCard';


const blockName = 'pop-up-link';

const linksType = {
    corporation: 'corporation',
    ceo: 'ceo',
}

class PopupLink extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
            component: <Loading />,
        }
    }

    getLinkInfo() {
        const { corporation, ceo } = this.props;

        if (corporation) {
            return {
                type: linksType.corporation,
                name: corporation.name,
            };
        } else if (ceo) {
            return {
                type: linksType.ceo,
                name: ceo.name,
            };
        }
    }

    closePopup() {
        this.setState({isOpen: false});
    }

    handleClick(event) {
        const { corporation, ceo } = this.props;
        switch (event.target.id) {
            case linksType.corporation:
                this.setState({
                    isOpen: true,
                    component: <CorpotationCard corporation={corporation} />,
                });
                break;
            case linksType.ceo:
                this.setState({
                    isOpen: true,
                    component: <CEOCard ceo={ceo} />,
                });
                break;
            default: break;
        }
        event.stopPropagation();
    }

   

    
    render() {
        const { isOpen, component } = this.state;
        

        const linkInfo = this.getLinkInfo();

        return (
            <>
                <p
                    id={linkInfo.type}
                    className={blockName}
                    onClick={(event) => {this.handleClick(event)}}
                >
                    {linkInfo.name}
                </p>
                {isOpen && 
                    <PopUp handleClose={() => this.closePopup.call(this)}>
                        {component}
                    </PopUp>
                }
            </>
        )
    }
}

export default (PopupLink);