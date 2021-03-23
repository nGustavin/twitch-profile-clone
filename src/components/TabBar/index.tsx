import { ReactNode } from 'react';

import { Container } from './styles';

interface TabBarProps {
  children?: ReactNode;
}

function TabBar({ children }: TabBarProps) {
  return (
    <Container>
      <div>
        <h1>hellow</h1>
      </div>
      {children}
    </Container>
  );
};

export default TabBar;
