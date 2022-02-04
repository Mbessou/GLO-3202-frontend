import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link } from "react-router-dom";

export default function App() {
    return (
        <div>
            <nav>
                <Link to="/login">Login</Link> | <Link to="/">Home</Link>
            </nav>
        </div>
    );
}
