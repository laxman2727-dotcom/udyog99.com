import Logo from '../../assets/logos/logo-main.jpg';
export default function Dashboard({setScreen, user}){
  return (
    <div style={{minHeight:'100vh',background:'#fff',display:'flex',flexDirection:'column',padding:20}}>
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
        <img src={Logo} style={{height:44,objectFit:'contain'}} alt="Udyog99.com"/>
        <div style={{background:'#eff6ff',padding:'8px 14px',borderRadius:20,fontSize:13,fontWeight:800,color:'#2563eb'}}>Mr. {user.name}, {user.qual}</div>
      </div>
      <div style={{flex:1,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',gap:22}}>
        <div style={{width:110,height:110,background:'linear-gradient(135deg,#dcfce7,#bbf7d0)',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center'}}><span style={{fontSize:56}}>🚀</span></div>
        <div style={{display:'flex',flexDirection:'column',gap:14}}>
          <h1 style={{fontSize:26,fontWeight:900,margin:0}}>Hello</h1>
          <h2 style={{fontSize:22,fontWeight:800,color:'#16a34a',margin:0}}>Mr. {user.name}, {user.qual}</h2>
          <div style={{width:60,height:4,background:'linear-gradient(90deg,#2563eb,#22c55e)',borderRadius:10,margin:'6px auto'}}></div>
          <p style={{fontSize:18,fontWeight:700,margin:0}}>5000+ Jobs for You</p>
          <p style={{fontSize:16,color:'#475569',margin:0}}>Udyog99.com - Mancherial</p>
        </div>
      </div>
      <button onClick={()=>setScreen('welcome')} style={{width:'100%',padding:18,background:'linear-gradient(90deg,#2563eb,#1d4ed8)',color:'#fff',border:'none',borderRadius:14,fontSize:18,fontWeight:800,marginTop:20}}>Find Jobs →</button>
    </div>
  )
}
