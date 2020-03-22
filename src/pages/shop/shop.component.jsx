import React, { Component } from 'react';

import CollectionPreview from '../../components/collection-preview/collection-preview.component';

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
            <CollectionPreview key={id} {...otherProps}  />
          ))
        }
      </div>
    );
  }
}

export default ShopPage;
