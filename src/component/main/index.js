import React from 'react';
import PropTypes from 'prop-types';
import { setFractionsArray, setErrorMessage } from '../../redux';
import { connect } from 'react-redux';
import getURL from '../../content';

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


function Main(props) {
    const { fractionsComponentArray, setFractions, setMessage } = props;

    function getFractions() {
        const url = getURL('universe/fractions');
        const fractionsInfo = fetch(url);
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

    if (!fractionsComponentArray.length) {
        getFractions();
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
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Main);

Main.propTypes = {
    /**
     * Array of components for Carousel
     */
    fractionsComponentArray: PropTypes.arrayOf(PropTypes.node),
    /**
     * Action for set Array of components to redux store
     */
    setFractions: PropTypes.func,
    /**
     * Action for set error message to redux store
     */
    setMessage: PropTypes.func,
};
