import * as React from 'react';
import { IAppState } from './app';
import { PlaceSearchResult } from './place-search-result';

interface IResultLitsProps extends IAppState {
  handleSearch?: (term: string) => void;
}

export const PlaceSearchResultList: React.SFC<IResultLitsProps> = props => {
  const handler = props.handleSearch || (() => {});
  let resultSet: JSX.Element[] = [];
  if (props.term === '') {
    resultSet.push(<li className="blue">Please enterr something ...</li>);
  } else if (props.inProgress) {
    resultSet.push(<li className="blue">Searching for {props.term} ...</li>);
  } else {
    resultSet = props.results.map(res => <PlaceSearchResult key={res.id} {...res} />);
  }
  return (
    <div>
      <h2>Search for a place</h2>
      <input onChange={e => handler(e.target.value)} placeholder="Search" type="search" />
      {resultSet}
    </div>
  );
};
