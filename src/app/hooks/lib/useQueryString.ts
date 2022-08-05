import queryString, { ParsedQuery } from 'query-string';
import { useLocation } from 'react-router-dom';

export function useQueryString<T = ParsedQuery>(): T {
  return queryString.parse(useLocation().search) as any;
}
