import { useState } from 'react';
export default function Login({onNext}){
 const [f,setF]=useState({name:'', phone:'', email:''});
 return(
 <div style={{minHeight:'100vh', display:'flex', justifyContent:'center', alignItems:'center', background:'#fff8f0', padding:'20px'}}>
  <div style={{width:'100%', maxWidth:'480px', background:'white', padding:'35px', borderRadius:'22px', boxShadow:'0 12px 35px rgba(0,0,0,0.1)', borderTop:'7px solid #ff6a00'}}>
    <h2 style={{fontSize:'30px', fontWeight:'900', textAlign:'center'}}>🔐 Login / Registration</h2>
    <p style={{textAlign:'center', fontWeight:'700', color:'#666', margin:'10px 0 20px'}}>Create Your Free Account Today</p>
    <input style={inputS} placeholder="Full Name *" value={f.name} onChange={e=>setF({...f,name:e.target.value})}/>
    <input style={inputS} placeholder="Mobile Number *" value={f.phone} onChange={e=>setF({...f,phone:e.target.value})}/>
    <input style={inputS} placeholder="Email ID *" value={f.email} onChange={e=>setF({...f,email:e.target.value})}/>
    <button onClick={()=>onNext(f)} disabled={!f.name || !f.phone} style={btnS}>CONTINUE →</button>
  </div>
 </div>
 )
}
const inputS={width:'100%', padding:'15px', margin:'10px 0', borderRadius:'14px', border:'2.5px solid #ddd', fontSize:'16px', fontWeight:'700'};
const btnS={width:'100%', padding:'16px', marginTop:'15px', background:'#ff6a00', color:'white', fontSize:'19px', fontWeight:'900', border:'none', borderRadius:'14px', cursor:'pointer'};