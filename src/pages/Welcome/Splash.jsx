import { useEffect, useState } from 'react';
import logoRound from '../../assets/logos/logo-round.jpg';

export default function Splash({onNext}){
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(()=>{
    // 0.8 sec taruvata Welcome text chupinchu
    const t1 = setTimeout(()=> setShowWelcome(true), 800);

    // 3 sec taruvata next page ki vellu
    const t2 = setTimeout(()=> onNext(), 3000);

    return ()=> {
      clearTimeout(t1);
      clearTimeout(t2);
    }
  },[onNext]);

  return(
    <div style={{height:'100vh', width:'100vw', background:'#ffffff', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column', position:'fixed', top:0, left:0, zIndex:9999}}>
      <img
        src={logoRound}
        alt="Udyog99"
        style={{
          width:'240px', height:'240px', borderRadius:'50%',
          boxShadow:'0 20px 60px rgba(0,72,255,0.45)',
          animation:'flashPop 2.2s ease-out'
        }}
      />

      {/* Welcome Text - Meeru Adiginattu */}
      {showWelcome && (
        <h1 style={{
          marginTop:'24px',
          fontSize:'28px',
          fontWeight:'800',
          animation:'fadeInUp 0.8s ease-out',
          textAlign:'center'
        }}>
          <span style={{color:'#555', fontWeight:'600', display:'block', fontSize:'22px', marginBottom:'4px'}}>Welcome to</span>
          <span style={{color:'#1655ff'}}>Udyog</span><span style={{color:'#ff7e00'}}>99.com</span>
        </h1>
      )}

      <style>{`
        @keyframes flashPop{
          0%{transform:scale(0); opacity:0}
          30%{transform:scale(1.3); opacity:1}
          50%{transform:scale(0.9)}
          70%{transform:scale(1.1)}
          100%{transform:scale(1)}
        }
        @keyframes fadeInUp{
          from{opacity:0; transform:translateY(20px)}
          to{opacity:1; transform:translateY(0)}
        }
      `}</style>
    </div>
  )
}