import * as React from 'react';
import { PlaceDetails } from '../../autocomplete-sfc/src/utils/places';

export const PlaceSearchResult: React.SFC<PlaceDetails> = props => {
  console.log(" LOG ___ props ", props )
  return (
    <div>{props.name}</div>
  );
};