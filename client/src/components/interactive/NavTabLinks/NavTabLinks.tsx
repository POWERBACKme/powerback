import React, {
  Dispatch,
  MouseEvent,
  useCallback,
  KeyboardEvent,
  SetStateAction,
} from 'react';
import Nav from 'react-bootstrap/esm/Nav';
import { handleKeyDown } from '@Utils';
import { ShowModal } from '@Interfaces';
import './style.css';

type Props = {
  LINK_LABELS: Array<string>;
  stateSetter: Dispatch<SetStateAction<ShowModal>>;
};

const NavTabLinks = ({ LINK_LABELS, stateSetter }: Props) => {
  const handleLinkEvent = useCallback(
    (
      e: MouseEvent<HTMLElement> | KeyboardEvent<HTMLElement>,
      linkLabel: { [index: string]: any }
    ) => {
      handleKeyDown(
        e,
        () =>
          stateSetter((s: ShowModal) => ({
            ...s,
            [linkLabel.toLowerCase()]: true,
          })),
        linkLabel
      );
    },
    [stateSetter]
  );

  return (
    <Nav className='nav-links flex-row'>
      {LINK_LABELS.map((linkLabel: String) => {
        return (
          <Nav.Link
            key={`NavLink-${linkLabel}`}
            onKeyDown={(e) => handleLinkEvent(e, linkLabel)}
            onClick={(e) => handleLinkEvent(e, linkLabel)}
            tabIndex={0}
            as={'span'}>
            {linkLabel}
          </Nav.Link>
        );
      })}
    </Nav>
  );
};

export default React.memo(NavTabLinks);
