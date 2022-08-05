import routeConfig from '@config/route.config';
import { IAppRouteParams } from '@lcaetano/core-ui';
import { RouteKeyType } from '@types';
import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const usePushRoute = () => {
  const navigate = useNavigate();

  // eslint-disable-next-line default-param-last
  const push = useCallback((name: RouteKeyType, params?: IAppRouteParams, replace = false) => {
    const path = routeConfig.getAppRoute(name, params);
    navigate(path, { replace });
  }, [navigate]);

  return push as (name: RouteKeyType, params?: IAppRouteParams | undefined, replace?: boolean) => void;
};
