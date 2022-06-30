import { useDispatch } from "react-redux";
import { start } from "../../redux/slices/authSlice/authSlice";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


import classes from "./AuthView.module.scss";
export default function AuthView() {
  const dispatch = useDispatch();

  const { error, localId } = useSelector((store) => store.auth);

  const navigate = useNavigate();

  function onAuthStart(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    dispatch(
      start({
        email: formData.get("email"),
        password: formData.get("password"),
        method:
          event.nativeEvent.submitter.innerText === "Sign up"
            ? "signup"
            : "signin",
      })
    );

    // navigate('/');
  }

  if (localId !== null) {
    navigate("/");
  }

  let errorOutput = null;
  if (error) {
    errorOutput = <strong style={{ color: "red" }}>{error}</strong>;
  }

  return (
    <div className={classes.AuthView}>
      <div className={classes.backdrop}>

        <div className={classes.content}>
          <div className="container">
            <div className={classes.error}>
              {errorOutput}
            </div>
            <form onSubmit={onAuthStart}>


              <label>
                Email:
                <input type="email" name="email"/>
              </label>
              <label>
                Password:
                <input type="password" name="password" />
              </label>

              <div className={classes.for__btn}>
                <button className={classes.for__btn_1}>Sign in</button>
                <br />
                <br />
                <button className={classes.for__btn_2}  >Sign up</button>
              </div>


            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
