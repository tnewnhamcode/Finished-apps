import React, { useState } from 'react';
import './todolistapp.css'

function MyList() {
  const [list, setList] = useState([]);
  const [item, setItem] = useState('');

  const addItem = () => {
    setList([...list, item]);
    setItem('');
  };
  const handleKeyPress=(event)=>{
    if(event.key ==='Enter'){
      addItem()
    }
  }
  const deleteItem = (index) => {
    const updatedList = [...list];
    updatedList.splice(index, 1);
    setList(updatedList);
  };
  
  const deleteList=()=>{
    setList([]);
  }
  
  return (
   <>
<body>
    <div style={{ backgroundColor:'orange', minHeight:'100vh', marginTop:'0vh', }}>
      <h1 style={{textAlign:'center', color:'white', fontFamily: 'Pacifico', fontSize:'7vw', marginLeft:'0vw',position:'relative', left:'-1vw',margintop:'0vh',paddingTop:'0vh'}}> To do list </h1>
      <div style={{textAlign:'center'}}> 
      <input
        type="text"
        value={item}
        style={{position:'relative', right:'-0.5vw', width:'30vw', fontSize:'2.7vw',color:'black', border:'0.3vw solid black'}}
        onChange={(e) => setItem(e.target.value)}
        onKeyDown={handleKeyPress} 
      />
      <button className='a' style={{marginLeft:'0.5vw',fontSize:'2.7vw', border:'0.3vw solid black', positions:'relative', right:'-4vw'}} onClick={addItem}>Add</button>
      </div>
      <ul>
        {list.map((item, index) => (
          <li style={{listStyle:'none',
          
      marginTop:'2vh',
      marginBottom:'1vh',
      paddingBottom:'3vh',
          color:'black',
          border:'0.4vw solid black',
          borderStyle:'solid',
          borderWidth:'0.4vw',
          fontSize:'2.6vw',
          fontFamily:'impact',
          backgroundColor:'white',
          overflow:'visible',
          width:'40vw',
      lineHeight:'1vh',
      position:'relative',
      right:'0vw',
      left:'23vw',
      bottom:'0.5vh'}}
           key={index}>
           <div style={{marginLeft:'11vw', lineHeight:'4.2vh',marginRight:'8vw', marginTop:'2vh'}}> {item} </div>
           <button className='b' name='delete' style={{ textAlign:'center', fontSize: '12vw',  display:'inline-block', fontSize:'2vw', position:'absolute', right:'-10.7vw', bottom:'3.3vh', borderWidth:'0.35vw', borderColor:''}} onClick={() => deleteItem(index)}>Complete</button> 
          </li>))}
        
      </ul>
      <button className='c' style={{ fontSize:'2.2vw', marginLeft:'39vw', borderWidth:'0.4vw', postion: 'relative', border: '0.35vw solid black',  width:'14vw', display:'inline-block', padding:'1vh' }} onClick={()=>deleteList()}>Remove All</button>
    </div>
    </body>
    </>
  );
}


export default MyList
//<button style={{padding:'20px', color:'white', fontSize: '12px', display:'inline-block',border:'none', backgroundColor:'gold', background:'transparent'}} onClick={() => deleteItem(index)}>Complete</button>
 //<button name='delete' style={{ textAlign:'center', color:'white', fontSize: '12vw',  display:'inline-block', backgroundColor:'gold', background:'transparent', fontSize:'2vw', position:'relative', borderColor:'white', top:'-1vw', right:'-35vw'}} onClick={() => deleteItem(index)}>Complete</button>