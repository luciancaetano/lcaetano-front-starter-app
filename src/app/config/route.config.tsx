import EmptyLayout from '@components/layouts/EmptyLayout';
import {
  Routes, Route, Navigate,
} from 'react-router';
import NotFoundPage from '@components/pages/NotFoundPage';
import TodoPage from '@components/pages/TodoPage';
import { createRouterHelpers } from '@lcaetano/core-ui';
import React from 'react';

export const appRoutes = {
  home: '/',
  notFound: '/404',
};

const routeHelpers = createRouterHelpers(appRoutes);

function RouteConfig(): JSX.Element {
  return (
    <Routes>
      <Route element={<EmptyLayout />}>
        <Route index element={<TodoPage />} />
        <Route path={appRoutes.notFound} element={<NotFoundPage />} />
      </Route>
      <Route path="*" element={<Navigate to={appRoutes.notFound} />} />
    </Routes>
  );
}

interface IComposedComponent extends React.ForwardRefExoticComponent<unknown> {
  getAppRoute: typeof routeHelpers.getAppRoute;
  matchRoute: typeof routeHelpers.matchRoute;
}

export default Object.assign(RouteConfig, routeHelpers) as unknown as IComposedComponent;
