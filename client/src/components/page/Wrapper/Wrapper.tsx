import React, { ReactNode } from 'react';
import './style.css';

type Props = {
  classProps: string;
  children: ReactNode;
};

const Wrapper = ({ children, classProps, ...props }: Props) => (
  <main className={classProps} {...props}>
    {children}
  </main>
);

export default React.memo(Wrapper);
