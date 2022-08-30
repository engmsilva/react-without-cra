import React from "react";
import img from "./assets/react-webpack-babel.png";
import "./app.scss";

const App: React.FC = () => {
    return (
        <div className="container">
            <div className="header">
                <h1>Hello world! I am using a React app created without CRA.</h1>
            </div>
            <img src={img} alt="react-webpack-babel" />
        </div>
    );
};

export default App;
