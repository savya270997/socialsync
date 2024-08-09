import React, { useState } from "react";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebaseconfig";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../contexts/UserContext"; // Import useUser
import "./Login.css";

const LoginRegister = () => {
  const { setUser } = useUser(); // Use setUser from context
  const [isFlipped, setIsFlipped] = useState(false);
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [loginError, setLoginError] = useState("");
  const [registerError, setRegisterError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const userRef = doc(db, "users", username);
      const userSnap = await getDoc(userRef);

      if (userSnap.exists()) {
        setRegisterError("Username already taken.");
        return;
      }

      await setDoc(userRef, {
        name,
        username,
        phone,
        password,
      });
      alert("Registered successfully");

      navigate("/dashboard");
      setRegisterError("");
    } catch (error) {
      console.error("Registration error:", error);
      setRegisterError("Failed to register.");
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userRef = doc(db, "users", username);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists() || userSnap.data().password !== password) {
        setLoginError("Invalid username or password.");
        return;
      }

      // Set user in context
      setUser({
        name: userSnap.data().name,
        username: userSnap.data().username,
      });

      navigate("/dashboard");

      setLoginError("");
    } catch (error) {
      console.error("Login error:", error);
      setLoginError("Failed to log in.");
    }
  };

  return (
    <div className="wrapper">
      <div className="card-switch">
        <label className="switch">
          <input
            type="checkbox"
            className="toggle"
            onChange={() => setIsFlipped(!isFlipped)}
          />
          <span className="slider"></span>
          <span className="card-side"></span>
          <div className={`flip-card__inner ${isFlipped ? "flipped" : ""}`}>
            <div className="flip-card__front">
              <div className="title">Log in</div>
              <form className="flip-card__form" onSubmit={handleLogin}>
                <input
                  className="flip-card__input"
                  placeholder="Username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  className="flip-card__input"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="flip-card__btn">Let's go!</button>
                {loginError && <p className="error">{loginError}</p>}
              </form>
            </div>
            <div className="flip-card__back">
              <div className="title">Sign up</div>
              <form className="flip-card__form" onSubmit={handleRegister}>
                <input
                  className="flip-card__input"
                  placeholder="Name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  className="flip-card__input"
                  placeholder="Username"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <input
                  className="flip-card__input"
                  placeholder="Phone Number"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
                <input
                  className="flip-card__input"
                  placeholder="Password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="flip-card__btn">Confirm!</button>
                {registerError && <p className="error">{registerError}</p>}
              </form>
            </div>
          </div>
        </label>
      </div>
    </div>
  );
};

export default LoginRegister;
