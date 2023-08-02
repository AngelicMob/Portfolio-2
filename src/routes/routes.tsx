import React from "react";
import { Route, Routes } from "react-router-dom";
import { routeCollection } from "./RoutesData";
import { TRoutesDataCollection } from "./RoutesDataType";

export const routes = (
  <Routes>
    {routeCollection.map((e: TRoutesDataCollection) => {
      return (
        <React.Fragment key={e.destination}>
          <Route path={e.destination} Component={e.comp} />
        </React.Fragment>
      );
    })}
  </Routes>
);
