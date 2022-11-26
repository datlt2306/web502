import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

const provider = new GoogleAuthProvider();

const LoginGoogleWithFirebase = async () => {
    await signInWithPopup(auth, provider);

    // save nodejs
};
const Login = () => {
    return (
        <div>
            <button onClick={LoginGoogleWithFirebase}>Google</button>
        </div>
    );
};

export default Login;
