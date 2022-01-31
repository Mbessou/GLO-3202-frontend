import { Button, styled } from "@mui/material";
import TextField from "@mui/material/TextField";
import { FormEvent, useState } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

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

const LoginInput = styled(TextField)({
    marginBottom: "1em",
    color: "white",
});

const LoginButton = styled(Button)({});

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cookie, setCookie, removeCookie] = useCookies(["token"]);
    const navigate = useNavigate();

    const handleSubmit = (event: FormEvent) => {
        let date: Date = new Date();
        date.setDate(date.getDate() + 1);

        event.preventDefault();
        console.log("email", email);
        console.log("password", password);
        setCookie("token", "abcdefg", {
            expires: date,
            path: "/",
        });
        navigate("/");
    };

    return (
        <Body>
            <FormContainer onSubmit={handleSubmit}>
                <LoginInput
                    id="email"
                    label="Email"
                    variant="outlined"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <LoginInput
                    id="password"
                    label="Password"
                    variant="outlined"
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <LoginButton variant="contained" type="submit">
                    Login
                </LoginButton>
            </FormContainer>
        </Body>
    );
}
