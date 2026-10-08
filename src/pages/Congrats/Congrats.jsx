export default function Congrats({user, onHome}){
 return(
 <div style={{minHeight:'100vh', display:'flex', justifyContent:'center', alignItems:'center', background:'linear-gradient(135deg,#e6ffe6,#f0fff0)', padding:'20px'}}>
  <div style={{background:'white', padding:'55px 45px', borderRadius:'32px', textAlign:'center', maxWidth:'650px', boxShadow:'0 25px 60px rgba(0,176,80,0.25)', border:'5px solid #00b050'}}>
    <div style={{fontSize:'90px'}}>✅</div>
    <h1 style={{fontSize:'38px', fontWeight:'900', color:'#00b050'}}>Congratulations {user.name}!</h1>
    <h2 style={{fontSize:'24px', fontWeight:'800', margin:'15px 0'}}>Your Resume Has Been Successfully Submitted!</h2>
    <p style={{fontSize:'19px', fontWeight:'800', background:'#fff3cd', padding:'14px', borderRadius:'14px', color:'#856404', margin:'22px 0'}}>Under Review By Our Expert Team</p>
    <p style={{fontSize:'22px', fontWeight:'900', color:'#ff6a00', margin:'22px 0'}}>🌟 Wishing You All The Best To Get Your Dream Job! 🌟</p>
    <p style={{fontWeight:'600', color:'#555'}}>Your profile will be reviewed within 24 hours. Our AI will match you with the best opportunities.</p>
    <button onClick={onHome} style={{padding:'16px 38px', fontSize:'19px', fontWeight:'900', background:'#ff6a00', color:'white', border:'none', borderRadius:'35px', cursor:'pointer', marginTop:'28px'}}>Go To Home - Udyog99.com</button>
  </div>
 </div>
 )
}