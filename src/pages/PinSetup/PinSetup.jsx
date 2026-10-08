import { useState } from 'react';
export default function PinSetup({onNext}){
 const [pin,setPin]=useState('');
 return(
 <div style={{minHeight:'100vh', display:'flex', justifyContent:'center', alignItems:'center', background:'#fff8f0', padding:'20px'}}>
  <div style={{width:'100%', maxWidth:'450px', background:'white', padding:'40px', borderRadius:'22px', textAlign:'center', boxShadow:'0 12px 35px rgba(0,0,0,0.1)', borderTop:'7px solid #ff6a00'}}>
    <h2 style={{fontSize:'28px', fontWeight:'900'}}>🔒 Set Your 4-Digit Security PIN</h2>
    <p style={{fontWeight:'600', color:'#666', margin:'10px 0 25px'}}>This PIN Will Secure Your Resume</p>
    <input type="password" maxLength={4} value={pin} onChange={e=>setPin(e.target.value.replace(/\D/g,''))} placeholder="* * * *" style={{width:'100%', padding:'18px', fontSize:'32px', letterSpacing:'18px', textAlign:'center', fontWeight:'900', borderRadius:'14px', border:'2.5px solid #ff6a00', outline:'none'}}/>
    <button onClick={onNext} disabled={pin.length!==4} style={{width:'100%', padding:'16px', marginTop:'20px', background: pin.length===4 ? '#ff6a00' : '#ccc', color:'white', fontSize:'19px', fontWeight:'900', border:'none', borderRadius:'14px', cursor:'pointer'}}>SET PIN & CONTINUE</button>
  </div>
 </div>
 )
}