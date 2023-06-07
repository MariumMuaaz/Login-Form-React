import './App.css';

function App() {
  return (
    <div className="App">
     <div className="logo-box">  
      <img src="twitter.avif" alt="logo" className="logo" />
      <h2>Sign In To Twitter</h2>
      <button>  
        <img src="google.png" alt="logo" className="logo" />
        Sign in with Google
        </button> 
        <button>  
        <img src="apple-logo.png" alt="logo" className="logo" />
        Sign in with Apple
        </button> 

          <hr />  
         <span>Or</span>
         <form> 
          <input type="text"  placeholder="Phone email or username"/>
          <button>Next</button>
          </form> 

          <button>Forget Password</button>
          <p>Dont have an account  <a>Sign Up</a></p>
      </div>
    </div>
  );
}

export default App;
