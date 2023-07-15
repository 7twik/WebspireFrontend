import { useRef, useState, useEffect } from 'react';
import App from "./components/App"

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        fetch("https://webspirebackend.onrender.com/")
        .then(res => res.json())
        .then(jsonRes => setNotes(jsonRes));
        console.log(notes);
        notes.forEach((notes)=>{
            const st=notes.Username;
            const tt=notes.Password;
            console.log(st);
            if (user===st)
            {
                if (pwd===tt)
                {
                    setSuccess(true);
                }
                else if (pwd!==tt)
                {
                    setErrMsg("Wrong Password for this username");
                    return 0;
                }
                userRef.current.focus();
            }
            else if(user!==st)
            {
                setErrMsg("Either username or password is wrong.");
            }
        })
    }


    return (
        <>
            {success ? (
                <section>
                    <App />
                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button>Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="/Register">Sign Up</a>
                        </span>
                    </p>
                </section>
            )}
        </>
    )
}

export default Login;