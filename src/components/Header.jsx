import React from 'react'

function Header() {
  return (
    <div className='header' style={{backgroundColor:"khaki",overflow:"auto", position:"fixed",width:"100%",top:"0px"}}>
      <ul>
        <li className='li' id="logo"style={{listStyleType:"none",float:"left",marginLeft :"30px", fontSize:"30px" , color:"blue"}}>LOGO</li>
        <li className='li'id="pro" style={{listStyleType:"none", float:"left",marginLeft :"20px", color:"blue"}}>Products</li>
        <li className='li' style={{listStyleType:"none", float:"left",marginLeft :"30px", color:"blue"}}>Pricing</li>
        <li className='li' style={{listStyleType:"none",float:"left",marginLeft :"30px", color:"blue"}}>Blog</li>
        <li className='li' style={{listStyleType:"none",float:"left",marginLeft :"30px", color:"blue"}}>Log in</li>
        <li className='li' style={{listStyleType:"none",float:"left",marginLeft :"30px",}}><button style={{backgroundColor:"blue",color:"white",borderRadius:"10px"}}>30 days free trial</button></li>
      </ul>
    </div>
  )
}

export default Header
