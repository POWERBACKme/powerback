import { createRouter, defineRoute, param } from 'type-route';

const hashParamRoute = (path: string) =>
  defineRoute(
    {
      hash: param.path.string,
    },
    (p) => `/${path}/${p.hash}`
  );

export const { RouteProvider, session, useRoute, routes } = createRouter({
  reset: hashParamRoute('reset'),
  main: defineRoute('/'),
});
