import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import GoogleLogin from "react-google-login";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { login } from "../../reduxUtils/action";

const Container = styled("div")`
  height: 100vh;
  text-align: center;
`;
const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const responseFacebook = (response) => {
    const { email, graphDomain: mode, name } = response;
    dispatch(login(email, name, mode));
    navigate("/table");
  };

  const responseGoogle = (response) => {
    const { profileObj } = response;
    const { email, name } = profileObj;
    dispatch(login(email, name, "google"));
    navigate("/table");
  };

  return (
    <div className="container">
      <Container className="row d-flex justify-content-center align-items-center">
        <div className="col-lg-4 col-md-6 col-12">
          <div className="title">Login with Facebook and Google</div>
          <div className="d-flex justify-content-center">
            <div className="col-2">
              <FacebookLogin
                appId="1116358372473408"
                fields="name,email,picture"
                callback={responseFacebook}
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <i className="bi bi-facebook"></i>
                  </button>
                )}
              />
            </div>
            <div className="col-2">
              <GoogleLogin
                clientId="730441470617-12oueaalm5mqpnrka3a3t0i3pcmudiuo.apps.googleusercontent.com"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                render={(renderProps) => (
                  <button
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  >
                    <i className="bi bi-google"></i>
                  </button>
                )}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Login;
