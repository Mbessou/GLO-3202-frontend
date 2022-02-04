import { Button, styled } from "@mui/material";
import { red } from "@mui/material/colors";
import TextField from "@mui/material/TextField";
import { FormEvent, useState, useEffect } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";

const Body = styled("div")({
    width: "100%",
    height: "100vh",
    backgroundColor: "#1976d2",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
});

const FormContainer = styled("form")({
    display: "flex",
    flexDirection: "column",
    width: "300px",
    padding: "2em",
    backgroundColor: "#ffd166",
    borderRadius: "10px",
});

const RegisterInput = styled(TextField)({
    marginBottom: "1em",
    color: "white",
});

const RegisterButton = styled(Button)({});

const RegisterError = styled("div")({
    color: "red",
});

const LoginLink = styled(Link)({
    marginTop: "1em",
    alignSelf: "center",
});

export default function Register() {
    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [cookie, setCookie, removeCookie] = useCookies(["token"]);
    const navigate = useNavigate();

    const handleSubmit = (event: FormEvent) => {
        let date: Date = new Date();
        date.setDate(date.getDate() + 1);

        event.preventDefault();
        setCookie("token", "abcdefg", {
            expires: date,
            path: "/",
        });
        navigate("/");
    };

    useEffect(() => {
        let token: string = cookie.token;

        if (token) {
            console.log("token : ", token);
        }
        console.log("Loaded !");
    }, []);

    return (
        <Body>
            <FormContainer onSubmit={handleSubmit}>
                <RegisterInput
                    id="username"
                    label="Username"
                    variant="outlined"
                    required
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <RegisterInput
                    id="email"
                    label="Email"
                    variant="outlined"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <RegisterInput
                    id="password"
                    label="Password"
                    variant="outlined"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <RegisterInput
                    id="confirm-password"
                    label="Confirm password"
                    variant="outlined"
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />
                <RegisterButton variant="contained" type="submit">
                    Register
                </RegisterButton>
                <LoginLink to="/login">Sign in</LoginLink>
            </FormContainer>
        </Body>
    );
}
