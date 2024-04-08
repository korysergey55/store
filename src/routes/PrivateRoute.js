import { useStore } from '../storeMobx/index';
import { observer } from 'mobx-react';

import { Navigate } from 'react-router-dom';
import { pathes } from '../utils/pathes';

const PrivateRoute = observer(({ element }) => {
  const { AuthStore } = useStore();
  const { token } = AuthStore;
  return !token ? <Navigate to={pathes.login} /> : element;
});

export default PrivateRoute;
