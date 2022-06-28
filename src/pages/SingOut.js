import { useEffect } from "react";
import {useDispatch} from "react-redux";
import { useNavigate } from "react-router-dom";


function SignOut() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch({ type: 'auth/init' });
    navigate('/');
  }, [dispatch, navigate]);


  return null;
}

export default SignOut;