export default function ResumeBuilder({user, onNext}){
 return(
 <div style={{padding:'30px 15px', background:'#fdfdfd', minHeight:'100vh'}}>
  <h1 style={{fontSize:'34px', fontWeight:'900', textAlign:'center', color:'#ff6a00', textTransform:'uppercase'}}>📄 BUILD YOUR DREAM RESUME</h1>
  <p style={{textAlign:'center', fontWeight:'800', fontSize:'18px', marginBottom:'30px'}}>BOLD & PROFESSIONAL - Get Hired Faster!</p>
  <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'25px', maxWidth:'1150px', margin:'auto'}}>
    <div style={cardS}>
      <h3 style={h3S}>📤 Upload Existing Resume</h3><input type="file" style={fileS}/>
      <h3 style={h3S}>📸 Upload Your Professional Photo</h3><input type="file" style={fileS}/>
      <h3 style={h3S}>🎨 Choose Attractive Template</h3>
      <div style={{display:'flex', flexDirection:'column', gap:'12px'}}>
        <div style={temp}>📄 Template 1 - Corporate Bold</div>
        <div style={{...temp, background:'#ff6a00', color:'white'}}>🔥 Template 2 - Modern Bold [SELECTED]</div>
        <div style={temp}>✨ Template 3 - Creative Professional</div>
      </div>
    </div>
    <div style={cardS}>
      <h3 style={h3S}>✍️ Fill Your Resume Details - BOLD LETTERS</h3>
      <textarea style={taS} placeholder="Career Objective - Ex: Seeking a challenging role as Software Engineer..."></textarea>
      <textarea style={taS} placeholder="Skills, Projects, Achievements - Type in BOLD letters..."></textarea>
      <textarea style={taS} placeholder="Education, Experience - Details..."></textarea>
      <button onClick={onNext} style={{width:'100%', padding:'20px', fontSize:'22px', fontWeight:'900', background:'linear-gradient(90deg,#00b050,#00d060)', color:'white', border:'none', borderRadius:'16px', cursor:'pointer', marginTop:'15px', boxShadow:'0 8px 20px rgba(0,176,80,0.3)'}}>🚀 SUBMIT RESUME FOR REVIEW</button>
    </div>
  </div>
 </div>
 )
}
const cardS={background:'white', padding:'28px', borderRadius:'20px', boxShadow:'0 10px 30px rgba(0,0,0,0.08)', border:'2.5px solid #ffe0c0'};
const h3S={fontSize:'18px', fontWeight:'900', margin:'16px 0 10px'};
const fileS={width:'100%', padding:'14px', border:'2.5px dashed #ff6a00', borderRadius:'12px', fontWeight:'700'};
const temp={padding:'16px', border:'2.5px solid #ddd', borderRadius:'14px', fontWeight:'800', textAlign:'center', cursor:'pointer'};
const taS={width:'100%', height:'110px', margin:'10px 0', padding:'14px', borderRadius:'12px', border:'2.5px solid #ddd', fontWeight:'700', fontSize:'15px'};