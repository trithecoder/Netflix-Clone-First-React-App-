import logo from "./netflix logo.png";
import logo1 from "./Netflix img.jpg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img className="logo" src={logo}></img>
      <header className="App-header"></header>
      <div>
        <section className="sign-in-section">
          <div className="form-container">
            <form className="form" action="">
              <h1 className="form-header">Sign in</h1>
              <div className="input-box">
                <input className="email-box" placeholder="Email or phone number" name="email-input-box" type="email" required></input>
              </div>
              <div className="input-box">
                <input className="password-box" placeholder="Password" type="password" name="password-input-box" required></input>
              </div>
              <button className="form-button">Sign in</button>
              <p>
              <span className="first-time-using-netflix">First time using Netflix?</span> <a className="create-an-acc" href='https://help.netflix.com/en/node/112419'>Create an account</a>
            </p>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
