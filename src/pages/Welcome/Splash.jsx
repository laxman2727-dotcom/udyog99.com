import { useEffect } from 'react';
import logoRound from '../../assets/logos/logo-round.jpg';

export default function Splash({onNext}){
  useEffect(()=>{
    const t = setTimeout(()=> onNext(), 2500); // 2.5 sec flash
    return ()=> clearTimeout(t);
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
      <h1 style={{marginTop:'20px', fontSize:'30px', fontWeight:'900', animation:'fadeIn 1s ease-in 0.5s both'}}>
        <span style={{color:'#1655ff'}}>Udyog</span><span style={{color:'#ff7e00'}}>99.com</span>
      </h1>
      <style>{`
        @keyframes flashPop{
          0%{transform:scale(0); opacity:0}
          30%{transform:scale(1.3); opacity:1}
          50%{transform:scale(0.9)}
          70%{transform:scale(1.1)}
          100%{transform:scale(1)}
        }
        @keyframes fadeIn{
          from{opacity:0; transform:translateY(20px)}
          to{opacity:1; transform:translateY(0)}
        }
      `}</style>
    </div>
  )
}