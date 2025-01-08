import React from "react";

import { RestaurantCardInfo } from "../../restaurants/components/restaurants-info.component";

import { SafeArea } from "../../../components/utility/safe-area.component";

export const RestaurantDetailScreen = ({ route }) => {
  const { restaurant } = route.params;
  return (
    <SafeArea>
      <RestaurantCardInfo restaurant={restaurant} />
    </SafeArea>
  );
};