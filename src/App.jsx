import "./App.css";
import heroImg from "./assets/illustration-hero.svg";
import musicIcon from "./assets/icon-music.svg";

function App() {
  return (
    <main>
      <div className="main-div">
        <div className="main-div-content-1">
          <img src={heroImg} alt="Main Image" />
        </div>

        <div className="main-div-content-2">
          <h1>Order Summary</h1>
          <p className="main-paragraph">
            You can now listen to millions of songs, audiobooks, and podcasts on
            any device anywhere you like!
          </p>

          <div className="plan">
            <div className="plan-info">
              <img src={musicIcon} alt="Plan Icon" />
              <div className="plan-text">
                <h5>Annual Plan</h5>
                <p className="plan-price">$59.99/year</p>
              </div>
            </div>
            <button className="btn-change">Change</button>
          </div>

          <div className="btns">
            <button className="btn-proceed">Proceed to Payment</button>
            <button className="btn-cancel">Cancel Order</button>
          </div>

        </div>
      </div>
    </main>
  );
}

export default App;
