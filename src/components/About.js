import React ,{useState} from 'react';

export default function About() {

    const [myStyle , setMyStyle] = useState({
    color:"black",
    backgroundColor:"white"
    })

    const [btnText,setBtnText] = useState("Enable Dark Mode")

    const toggleStyle = () => {
    if(myStyle.color === "white"){
       setMyStyle({
       color:"black",
       backgroundColor:"white",
       border:"1px solid black"
    })
    setBtnText("Enable Dark Mode");
    } else {
        setMyStyle({
        color:"white",
        backgroundColor:"black",
        border:"1px solid white"
    })
    setBtnText("Enable Light Mode");
    }
    }
    
  return (
    <div className='container' style={myStyle}>
        <h2 className='my-2'>About Us</h2>
        <div className="accordion" id="accordionExample" style={myStyle}>
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
       About TextUtils</button>
    </h2>
    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
         Welcome to TextUtils, your go-to text utility app designed to make text manipulation quick, easy, and efficient. Whether you're a student, developer, writer, or just someone who works with text frequently, TextUtils offers a suite of simple yet powerful tools to streamline your work
         <ul>
          <p><strong>Featues : </strong></p>
          <li>Convert text to uppercase or lowercase</li>
          <li>Remove extra spaces or special characters</li>
          <li>Copy text with a single click</li>
          <li>Toggle between light and dark mode for a comfortable experience</li>
         </ul>
      </div>
    </div>
    </div>
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Why Choose Us?
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       TextUtils is built with user experience in mind. We keep the interface clean and minimal so you can focus on your task. Whether you're cleaning up messy text or formatting input data, TextUtils is here to help — fast, free, and easy to use.
      </div>
      </div>
    </div>
    <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Our Mission
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
      <div className="accordion-body" style={myStyle}>
       To provide lightweight, accessible tools for text manipulation that work directly in your browser without any downloads or signups.
      </div>
    </div>
    </div>
    </div>
    <div className='container my-2'>
    <button type="button" className="btn btn-primary" onClick={toggleStyle}>{btnText}</button>
    </div>
    </div>
  )
}
