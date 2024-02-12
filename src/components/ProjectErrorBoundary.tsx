import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

export function ProjectErrorBoundary() {
  const error = useRouteError();

  // We only care to handle 401's at this level, so if this is not a 401
  // ErrorResponse, re-throw to let the RootErrorBoundary handle it
  if (!isRouteErrorResponse(error) || error.status !== 401) {
    throw error;
  }

  return (
    <>
      <h1>Error boundary</h1>
    </>
  );
}
