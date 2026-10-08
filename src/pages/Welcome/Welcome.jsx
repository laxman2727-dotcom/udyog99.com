import logoSquare from '../../assets/logos/logo-square.jpg';
import englishBanner from '../../assets/logos/welcome-english.jpg';

export default function Welcome({onNext, onBack}){
 return(
  <div style={{minHeight:'100vh', background:'white', display:'flex', justifyContent:'center'}}>
    <div style={{width:'100%', maxWidth:'500px', background:'white', minHeight:'100vh'}}>

      {/* TOP - Udyog99.com PEDDAGAA BOSS! */}
      <div style={{
        padding:'18px 16px',
        display:'flex',
        alignItems:'center',
        gap:'14px',
        borderBottom:'2px solid #eef2ff',
        background:'white',
        position:'sticky', top:0, zIndex:10
      }}>
        <button onClick={onBack} style={{
          width:'46px', height:'46px', borderRadius:'50%',
          border:'1.5px solid #dbe4ff', background:'white',
          fontSize:'22px', fontWeight:'900', cursor:'pointer',
          display:'flex', alignItems:'center', justifyContent:'center',
          boxShadow:'0 2px 8px rgba(0,0,0,0.06)'
        }}>←</button>

        {/* LOGO PEDDAGAA */}
        <img src={logoSquare} style={{
          width:'68px', height:'68px',
          borderRadius:'16px',
          boxShadow:'0 6px 18px rgba(0,0,0,0.15)'
        }} alt="logo"/>

        {/* Udyog99.com PEDDAGAA BOLD GA */}
        <h1 style={{
          fontSize:'38px',
          fontWeight:'900',
          margin:0,
          letterSpacing:'-1px',
          lineHeight:'1'
        }}>
          <span style={{color:'#1448ff'}}>Udyog</span><span style={{color:'#ff7a00'}}>99.com</span>
        </h1>
      </div>

      {/* BANNER */}
      <img src={englishBanner} style={{width:'100%', display:'block'}} alt="banner"/>

      {/* CONTENT */}
      <div style={{padding:'22px 20px', textAlign:'center'}}>
        <h2 style={{fontSize:'26px', fontWeight:'900', margin:'0 0 10px', color:'#111'}}>Welcome to Udyog99.com</h2>
        
        <div style={{
          background:'#fff0d6', color:'#ff6a00', fontWeight:'900',
          padding:'8px 20px', borderRadius:'30px', display:'inline-block',
          fontSize:'14px', marginBottom:'14px', letterSpacing:'1px'
        }}>
          LAUNCHING VERY SOON!
        </div>

        <h3 style={{fontSize:'21px', fontWeight:'800', lineHeight:'1.35', margin:'0', color:'#222'}}>
          Find Your Dream Job<br/>
          <span style={{color:'#1448ff', fontWeight:'900'}}>India's No.1 Job Portal</span>
        </h3>

        <button onClick={onNext} style={{
          width:'100%', marginTop:'24px', padding:'18px',
          fontSize:'21px', fontWeight:'900',
          background:'linear-gradient(90deg,#ff7b00,#ff9500)',
          color:'white', border:'none', borderRadius:'50px',
          cursor:'pointer', boxShadow:'0 12px 28px rgba(255,123,0,0.38)'
        }}>
          Get Started 🚀
        </button>

        <p style={{fontSize:'13px', color:'#999', marginTop:'14px', fontWeight:'600'}}>
          Trusted by 10 Lakh+ Job Seekers
        </p>
      </div>

    </div>
  </div>
 )
}