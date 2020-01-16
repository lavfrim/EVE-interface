import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { text } from '../../content';


function mapStateToProps(state) {
  const { errorMessage } = state;
  return ({
    errorMessage,
  });
}

const blockName = 'header';

class Header extends PureComponent {
    

    render() {
        const { errorMessage } = this.props;
       
        return (
            <header className={blockName}>
                <p>{text.appName}</p>
                {errorMessage && <p>{errorMessage}</p>}
            </header>
        )
    }
}

export default connect(
    mapStateToProps,
)(Header);
