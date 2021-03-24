import { Route, Redirect } from "react-router-dom";
import {isLoggedIn} from '../utils/isAuth';
  
const PrivateRoute = ({ children, ...rest }) => (
    <Route
      {...rest}
      render={({ location }) =>
      isLoggedIn() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
);

export default PrivateRoute;