export default function BrandHeader({onHome}){
  return (
    <div style={{height:72,background:'#fff',borderRadius:16,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 20px',boxShadow:'0 4px 20px rgba(0,0,0,0.08)',margin:12}}>
      <div style={{display:'flex',alignItems:'center',gap:10}}>
        <div style={{width:48,height:48,background:'#2563eb',borderRadius:12,display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontWeight:800}}>U</div>
        <div style={{fontWeight:900,fontSize:20}}><span style={{color:'#2563eb'}}>Udyog</span><span style={{color:'#f97316'}}>99.com</span></div>
      </div>
      <button onClick={onHome} style={{background:'none',border:'none',fontWeight:700,cursor:'pointer'}}>Home</button>
    </div>
  );
}
