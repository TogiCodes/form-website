import { useState } from 'react'
import './App.css'
import LeftImage from './assets/undraw_social_expert_re_elbp.svg';
import WaveHand from './assets/wave-hand.png';
import GoogleIcon from './assets/google.png';

function App() {

  return (
    <div className="App">
        <div className = "image-side">
            <img src={LeftImage} alt="Left Side Image" />
        </div>

        <div className = "form-side">
            <div className = "form_logo-header"> 
                <div className = "form-logo">
                    {/* Put Logo In here */}
                    <img src ={WaveHand} alt="Hello Logo Image" />
                </div>
            </div>
            <h2 className = "title">Welcome Again!</h2>
            <p className = "desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <div className = "input-container">
                <div class="form__div">
                    <input type="text" class="form__input" placeholder=" " />
                    <label for="" class="form__label">Email</label>
                </div>
                <div class="form__div">
                    <input type="password" class="form__input" placeholder=" " />
                    <label for="" class="form__label">Password</label>
                </div>
            </div>
            <button className = "button-primary">
                <p>Login</p>
            </button>
            <button className = "button-secondary">
                <img src={GoogleIcon} alt="Google Icon" />
                <p>Login with Google</p>
            </button>
        </div>
    </div>
  )
}

export default App
