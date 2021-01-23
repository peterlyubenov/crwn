import React from "react";
import { Route } from "react-router-dom";

import CollectionsOverview from "../../components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

// import collections from "./shop.data";
const ShopPage = ({ match }) => (
  <div className="shop-page">
    <Route exact path={`${match.path}`} component={CollectionsOverview}></Route>
    <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    {/* <CollectionsOverview /> */}
  </div>
);

export default ShopPage;
