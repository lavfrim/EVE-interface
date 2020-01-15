import React, { PureComponent } from 'react';
import { setFractionsArray} from '../../redux';
import { connect } from 'react-redux';
import { url } from '../../content';

import Loading from '../loading';
import Fraction from '../fraction';
import Carousel from '../carousel';


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
  });
}


class Main extends PureComponent {
    getFractions() {
        const { setFractions } = this.props;
        const fractionsInfo = fetch(url.universe.fractions);
        fractionsInfo
        .then(response => response.json())
        .then((result) => {
            const fractionsComponentArray = result.map((fraction) => <Fraction key={fraction.faction_id} info={fraction} />);
            console.log(result);
            // console.log(fractionsComponentArray);
            setFractions(fractionsComponentArray);
        })
        .catch(err => console.log(err));
    }

    render() {
        const { fractionsComponentArray } = this.props;
        // console.log(fractionsComponentArray);
        if (!fractionsComponentArray.length) {
            this.getFractions();
        }

        return (
            <main>
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
