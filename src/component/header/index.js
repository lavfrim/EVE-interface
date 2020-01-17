import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { text } from '../../content';


function mapStateToProps(state) {
  const { errorMessage } = state;
  return ({
    errorMessage,
  });
}

const blockName = 'header';

function Header(props)  {
    const { errorMessage } = props;
       
    return (
        <header className={blockName}>
            <p>{text.appName}</p>
            {errorMessage && <p>{errorMessage}</p>}
        </header>
    )
}

export default connect(
    mapStateToProps,
)(Header);

Header.propTypes = {
    /**
     * String error message from server
     */
    errorMessage: PropTypes.string,
};
