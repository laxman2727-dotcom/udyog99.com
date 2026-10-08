import { useState } from 'react';
import Splash from './pages/Welcome/Splash';
import Welcome from './pages/Welcome/Welcome';
// import Login from './pages/Auth/Login'; // Meeru login ready ayaka uncomment cheyandi

function App() {
  const [step, setStep] = useState('splash'); // splash -> welcome -> login

  return (
    <>
      {step === 'splash' && <Splash onNext={()=> setStep('welcome')} />}
      {step === 'welcome' && <Welcome onNext={()=> setStep('login')} onBack={()=> setStep('splash')} />}
      {step === 'login' && (
        <div style={{padding:'20px', textAlign:'center'}}>
          <button onClick={()=> setStep('welcome')} style={{padding:'10px 20px', borderRadius:'30px', border:'1px solid #ddd', background:'white', cursor:'pointer'}}>← Back to Welcome</button>
          <h2>Login Page Coming Soon...</h2>
        </div>
      )}
    </>
  );
}

export default App;