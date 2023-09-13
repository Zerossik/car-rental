import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';
import Section from '../Section';
import { Suspense } from 'react';
import { Container, Header } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Navigation />
      </Header>
      <main>
        <Section>
          <Suspense fallback={<div>...Loading</div>}>
            <Outlet />
          </Suspense>
        </Section>
      </main>
    </Container>
  );
};

export default SharedLayout;
