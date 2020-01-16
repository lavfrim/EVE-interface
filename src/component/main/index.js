import React, { PureComponent } from 'react';
import { setFractionsArray, setErrorMessage } from '../../redux';
import { connect } from 'react-redux';
import { url } from '../../content';

import Loading from '../loading';
import Fraction from '../fraction';
import Carousel from '../carousel';

const blockName = 'main';

const CARDS_AMOUNT = 3;

function mapStateToProps(state) {
  const { fractionsComponentArray } = state;
  return ({
    fractionsComponentArray,
  });
}

function mapDispatchToProps(dispatch) {
  return ({
      setFractions: (arr) => dispatch(setFractionsArray(arr)),
      setMessage: (message) => dispatch(setErrorMessage(message)),
  });
}


class Main extends PureComponent {
    getFractions() {
        const { setFractions, setMessage } = this.props;
        const fractionsInfo = fetch(url.universe.fractions);
        fractionsInfo
        .then(response => response.json())
        .then(result => {
            if (result.error) {
                setMessage(result.error);
            } else {
                const fractionsComponentArray = result.map((fraction) => <Fraction key={fraction.faction_id} info={fraction} />);
                setFractions(fractionsComponentArray);
            }
        })
        .catch(err => {
            window.console.log(err);
        });
    }

    render() {
        const { fractionsComponentArray } = this.props;
        if (!fractionsComponentArray.length) {
            this.getFractions();
        }

        return (
            <main className={blockName}>
                {fractionsComponentArray.length ? 
                    <Carousel 
                        fractionsComponentArray={fractionsComponentArray}
                        amountCards={CARDS_AMOUNT}
                    /> :
                    <Loading />}
                
            </main>
        )
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);
