export default function ProfileForm({user, onNext}){
 return(
 <div style={{minHeight:'100vh', display:'flex', justifyContent:'center', alignItems:'center', background:'#fff8f0', padding:'20px'}}>
  <div style={{width:'100%', maxWidth:'480px', background:'white', padding:'35px', borderRadius:'22px', boxShadow:'0 12px 35px rgba(0,0,0,0.1)', borderTop:'7px solid #ff6a00'}}>
    <h2 style={{fontSize:'30px', fontWeight:'900'}}>Welcome Mr. {user.name || 'XXX'}!</h2>
    <p style={{fontWeight:'700', color:'#666', marginBottom:'20px'}}>Please Complete Your Education Details</p>
    <input style={s} placeholder="Qualification - Ex: M.Tech CSE *"/>
    <input style={s} placeholder="Specialization - Ex: Computer Science"/>
    <input style={s} placeholder="Experience - Ex: Fresher / 2 Years"/>
    <input style={s} placeholder="Dream Job - Ex: Software Engineer"/>
    <button onClick={()=>onNext({})} style={b}>NEXT → BUILD MY RESUME</button>
  </div>
 </div>
 )
}
const s={width:'100%', padding:'15px', margin:'10px 0', borderRadius:'14px', border:'2.5px solid #ddd', fontSize:'16px', fontWeight:'700'};
const b={width:'100%', padding:'16px', marginTop:'15px', background:'#ff6a00', color:'white', fontSize:'19px', fontWeight:'900', border:'none', borderRadius:'14px', cursor:'pointer'};