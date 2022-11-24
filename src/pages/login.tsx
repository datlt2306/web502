import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";

const provider = new GoogleAuthProvider();

const LoginGoogleWithFirebase = async () => {
    const result = await signInWithPopup(auth, provider);
    const credential = await GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;

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
