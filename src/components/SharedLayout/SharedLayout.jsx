import { Outlet } from 'react-router-dom';
import Navigation from '../Navigation';
import Section from '../Section';
import { Suspense } from 'react';

const SharedLayout = () => {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <main>
        <container>
          <Section>
            <Suspense fallback={<div>...Loading</div>}>
              <Outlet />
            </Suspense>
          </Section>
        </container>
      </main>
    </>
  );
};

export default SharedLayout;
