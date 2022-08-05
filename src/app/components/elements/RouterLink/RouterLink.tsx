/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import classNames from 'clsx';
import routeConfig from '@config/route.config';
import { IRouterLinkProps } from './RouterLink.types';

const RouterLink = React.forwardRef<HTMLAnchorElement, IRouterLinkProps>(({
  className, children, to, params = {}, activeClassName, onClick, ...props
}, ref) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClickEvent = useCallback((e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (onClick) {
      onClick(e);
    }

    e.preventDefault();
    navigate(routeConfig.getAppRoute(to, params));
  }, [navigate, onClick, params, to]);

  const activeClass = useMemo(() => routeConfig.matchRoute(to, location.pathname) ? activeClassName : null, [activeClassName, to, location]);

  return (
    <a {...props} onClick={handleClickEvent} className={classNames(className, activeClass)} ref={ref}>
      {React.Children.toArray(children)}
    </a>
  );
});

export default React.memo(RouterLink);
