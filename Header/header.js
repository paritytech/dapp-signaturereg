// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './header.css';
import blocks from '@parity/shared/assets/images/dapps/blocks-350.jpg';

export default class Header extends Component {
  static propTypes = {
    blockNumber: PropTypes.object.isRequired,
    totalSignatures: PropTypes.object.isRequired
  }

  render () {
    const { totalSignatures } = this.props;

    return (
      <div className={ styles.header }>
        <div className={ styles.banner }>
          contract signature registry
        </div>
        <img src={ blocks } />
        <div className={ styles.content }>
          <div className={ styles.hero }>
            { totalSignatures.toFormat(0) }
          </div>
          <div className={ styles.byline }>
            signatures registered
          </div>
        </div>
      </div>
    );
  }
}
