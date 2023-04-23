export const activeRouter = ({
  router,
  expectedRouter,
}: {
  router: string;
  expectedRouter: string;
}) => {
  if (router === expectedRouter) {
    return true;
  }

  if (
    router.toLowerCase().includes(expectedRouter) &&
    expectedRouter !== '/'
  ) {
    return true;
  }

  return false;
};
