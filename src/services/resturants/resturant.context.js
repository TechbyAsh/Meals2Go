import React, { useState, createContext, useEffect, useMemo } from "react";

import {restaurantsRequest, restaurantsTransform} from '../resturants/mock/resturant.services'

export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
    return (
      <RestaurantsContext.Provider
        value={{
          restaurants: [1, 2, 3, 4, ],
        }}
      >
        {children}
      </RestaurantsContext.Provider>
    );
  };