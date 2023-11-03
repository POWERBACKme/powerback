import React, { KeyboardEventHandler, MouseEventHandler } from 'react';
import ListGroupItem from 'react-bootstrap/esm/ListGroupItem';
import ListGroup from 'react-bootstrap/esm/ListGroup';
import { Props } from '@Types';
import { OptionCategory } from '@Interfaces';
// import { INIT } from '@CONSTANTS';

type Links = {
  bills: { name: string; value: string }[];
  pols: {
    name: 'NAME' | 'STATE' | 'DISTRICT';
    value: 'Name' | 'State' | 'District';
    label:
      | 'Search by name.'
      | 'Search by state.'
      | '(Your address/zipcode)';
  }[];
};

const LINKS = {
  bills: [
    { name: 'popular', value: 'Most Popular' },
    // { name: 'topic', value: 'Bills By Topic' },
    { name: 'upcoming', value: 'Upcoming Votes' },
    { name: 'recent', value: 'Recent Action' },
  ],
  pols: [
    {
      name: 'NAME',
      value: 'Name',
      label: 'Search by name.',
    },
    {
      name: 'STATE',
      value: 'State',
      label: 'Search by state.',
    },
    {
      name: 'DISTRICT',
      value: 'District',
      label: '(Your address/zipcode)',
    },
  ],
};

const LinkGroup = ({
  linksClass = { NAME: 'options-link-active', DISTRICT: '', STATE: '' },
  handleOptions,
}: Props) => (
  <ListGroup horizontal={true}>
    {(LINKS['pols' as keyof Links] as OptionCategory[]).map(
      (link: OptionCategory) => (
        <ListGroupItem
          onKeyDown={handleOptions as unknown as KeyboardEventHandler}
          onClick={handleOptions as unknown as MouseEventHandler}
          className={linksClass[link.name]}
          key={link.name}
          action>
          {link.value}
        </ListGroupItem>
      )
    )}
  </ListGroup>
);

export default React.memo(LinkGroup);
