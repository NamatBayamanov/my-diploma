
import { useDispatch } from "react-redux";
import { start } from "../redux/slices/authSlice/authSlice";

export default function Auth() {

    const dispatch = useDispatch();

    function onAuthStart(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    dispatch(
        start({
        email: formData.get("email"),
        password: formData.get("password"),
        method: event.nativeEvent.submitter.innerText === "Sign up" ? 'signup' : 'signin',
        })
    );
}
    return (
    <form onSubmit={onAuthStart}>
        <label>
        Email:
        <input type="email" name="email" />
        </label>
        <label>
        Password:
        <input type="password" name="password" />
        </label>

        <button>Sign in</button>
        <br/>
        <br/>
        <button>Sign up</button>
    </form>
    );
}
