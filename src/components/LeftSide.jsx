import React from 'react'

function LeftSide() {
  return (
    <div style={{width:"100%",marginTop:"60px"}}>
        <div className='left' style={{float:"left",marginLeft:"40px"}}>
      <p>Search Library</p>
      <input type='search' placeholder='Search here'/><br />
      <h3 style={{color:"blue"}}>HOME</h3>
      <h4>Collections</h4>
      <h4>Catagories</h4>
      <div style={{width:"100%",backgroundColor:"wheat",borderRadius:"10px",boxShadow:"10px 10px white"}}>
        <h2>Contribute to Stark</h2>
        <p>
Hello!
Do you have any queries?
        </p>
                <button style={{backgroundColor :"blue",color:"white",borderRadius:"8px"}}>Submit a response</button>
      </div>
      </div>
      <div className="right"style={{display:"grid",placeItems:"center"}}>
        <div>
        <div className='a' style={{width:"500px",}}>
      <h1>New in the Library</h1>
      <p>Newly added accessibility resources, guides, and more.</p></div>
      <div>
      <div>
        <div className='d' style={{border:"1px solid gray",width:"150px",float:"left",marginLeft:"8px"}}>
            <h4 style={{color:"blue"}}>Resources</h4>
            <p>Making Accessible Books</p>
        </div>
        <div className='d'style={{border:"1px solid gray",width:"150px",float:"left",marginLeft:"8px"}}>
            <h4 style={{color:"blue"}}>Resources</h4>
            <p>Making Accessible Books</p>
        </div><div className='d'style={{border:"1px solid gray",width:"150px",float:"left",marginLeft:"8px"}}>
            <h4 style={{color:"blue"}}>Resources</h4>
            <p>Making Accessible Books</p>
        </div>
      </div>
      </div>
      <div>
        <div className='d' style={{border:"1px solid gray",width:"150px",float:"left",marginLeft:"8px",marginTop:"20px"}}>
            <h4 style={{color:"blue"}}>Resources</h4>
            <p>Making Accessible Books</p>
        </div>
        <div className='d'style={{border:"1px solid gray",width:"150px",float:"left",marginLeft:"8px",marginTop:"20px"}}>
            <h4 style={{color:"blue"}}>Resources</h4>
            <p>Making Accessible Books</p>
        </div><div className='d' style={{border:"1px solid gray",width:"150px",float:"left",marginLeft:"8px",marginTop:"20px"}}>
            <h4 style={{color:"blue"}}>Resources</h4>
            <p>Making Accessible Books</p>
            
        </div>
      </div>
      </div>
      <div><div className='b'>
        <h1>Featured Collections</h1>
        <p>Hand picked collection!</p>
</div>
<div className='b b2'> <div className="col-sm-12 col-md-6 col-lg-12 b1"style={{backgroundColor:"wheat",width:"150px",float:"left",marginLeft:"8px",marginTop:"20px"}}>
            <h3 style={{color:"red"}}>Disability Employment</h3>
            <p style={{fontSize:"17px"}}>Making Accessible Books all over the world</p>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNR2lqWIHWn_3XJw0gLZyAOREkCXuX15KDag&s' style={{width:"40px",height:"40px"}}/>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 b1" style={{backgroundColor:"wheat",width:"150px",float:"left",marginLeft:"8px",marginTop:"20px"}}>
            <h2 style={{color:"green",fontSize:"20px"}}>Making Accessible color combine</h2>
            <p>Making Accessible Books</p>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTtatLQgkE5zjOkydnz19NTtPGC-KKxPCkdmw&s' style={{width:"40px",height:"40px"}}/>
        </div>
        <div className="col-sm-12 col-md-6 col-lg-4 b1" style={{backgroundColor:"wheat",width:"150px",float:"left",marginLeft:"8px",marginTop:"20px"}}>
            <h2 style={{color:"blue",fontSize:"20px"}}>Tips and tricks for inclusive social media</h2>
            <p>Making Accessible Books</p>
            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1xa0v2R_dMhF16Irl9-KTEnXEeUeSLSRv0w&s' style={{width:"40px",height:"40px"}}/>
        </div></div>
      </div>
    </div>
    </div>
  )
}

export default LeftSide
