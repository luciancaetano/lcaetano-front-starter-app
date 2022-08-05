import { RouteKeyType } from '@types';
import React from 'react';

export interface IRouterLinkProps extends React.HtmlHTMLAttributes<HTMLAnchorElement> {
  className?: string;
  to: RouteKeyType;
  params?: { [key: string]: string | number | null | undefined };
  activeClassName?: string;
}
