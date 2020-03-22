import React, { Component } from 'react';

import PreviewCollection from '../../components/preview-collection/preview-collection.component';

import collections from './collections';

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections,
    }
  }

  render() {
    return (
      <div className="shop-page">
        {
          collections.map(({ id, ...otherProps }) => (
            <PreviewCollection key={id} {...otherProps}  />
          ))
        }
      </div>
    );
  }
}

export default ShopPage;
