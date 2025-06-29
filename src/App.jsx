import React from 'react'
import './App.css'
import './App2.css'    
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';    
import myImage from './logo.png';   
import newImage from './logo2.png';   
import circle from './circletick.png';        
import imageElement from './Element.png';
import sponsor1 from './sponsors.png';    
import appset from './Apps.png';   
import appicon from './App-icon.png';     
export default function App() {
  return (
    <>
     <div className="zoro ">
        <div className='Navigation'>

          <div className='logo'>
            <img src={myImage} alt="Logo" />
          </div>

          <ul className='nav-links'>
              <li><a className='Ancor' href="#">Products</a></li>
              <li><a className='Ancor' href="#">Solutions</a></li>
              <li><a className='Ancor' href="#">Resources</a></li>
              <li><a className='Ancor' href="#">Pricing</a></li>
          </ul>

          <button className='btn'style={{backgroundColor: '#ffe492',color: '#043873'}}>Login</button>
          <button className='btn1'>Try Whitespace free</button>

        </div>
        <div className='area'>
            <div className='container'>

              <div className='content1'>
                <h1 className='title'>Get More Done with whitespace</h1>
                <p>Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks</p>
                <button className='btn1'>Try Whitespace free</button>
              </div>

              <div className='box'></div>
            </div>
              
          </div>
      </div>
      <div className='zoro2'>
        <div className='sub1'>
          <div className='content3'>
            <h1 className='title'>Project Management</h1>
            <p>Images, videos, PDFs and audio files are supported.
              Create math expressions and diagrams directly from the app.
              Take photos with the mobile app and save them to a note.</p>
            <button className='btn1'>Get Started</button>
          </div>
          <div className='box'>
          </div>
        </div>

        <div className='sub2'>

          <div className='logo2'>
            <img src={newImage} alt="Logo2" />
          </div>

          <div className='content3'>
            <h1 className='title'>Work together</h1>
            <p>With whitepace, share your notes with your colleagues and collaborate on them.
              You can also publish a note to the internet and share the URL with others.</p>
            <button className='btn1'>Try it now</button>
          </div>

        </div>
      </div>

      <div className='area'>
        <div className="container">
          <div className='content1'>

            <h1 className='title'>Use as Extension</h1>

            <p>Use the web clipper extension, available on Chrome and Firefox, to save web pages or take screenshots as notes.</p>
            <button className='btn1'>Let's Go</button>

          </div>

          <div className='box'>

          </div>

        </div>
      </div>
      <div className='sub2'>
        <div className='box'>

        </div>
        <div className='content3'>
          <h1 className='title'>Customise it to your needs</h1>

          <p>Customise the app with plugins, custom themes and multiple text editors (Rich Text or Markdown).
            Or create your own scripts and plugins using the Extension API</p>
          <button className='btn1'>Let's Go</button>

        </div>
      </div>
      <div>
        <div className='plan'>
          <h1>Choose Your Plan</h1>
          <p>Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</p>
        </div>

        <div className='d-flex flex-row justify-content-center' style={{marginBottom: '20px'}}>
            <div className='plan1 d-flex flex-column'>
                <div>
                  <h1>Free</h1>
                    <h2>$0</h2>
                      <p>Capture ideas and find them quickly</p>
                </div>

                <div>
                  <p><a className='space'><img src={circle}/></a>Sync unlimited devices</p>
                  <p><a className='space'><img src={circle}/></a>10 GB monthly uploads</p>
                  <p><a className='space'><img src={circle}/></a>200 MB max. note size</p>
                  <p><a className='space'><img src={circle}/></a>Customize Home dashboard and access extra widgets</p>
                  <p><a className='space'><img src={circle}/></a>Connect primary Google Calendar account</p>
                  <p><a className='space'><img src={circle}/></a>Add due dates, reminders, and notifications to your tasks</p>
                </div>
                <div>
                  <button className='btn2'>Get Started</button>
                </div>
            </div>
            <div className='plan2 d-flex flex-column'>
              <div>
                <h1>Personal</h1>
                <h2 style={{color:'#FFE492'}}>$11.99</h2>
                <p>Keep home and family on track</p>
              </div>
              <div>
                <p><a className='space'><img src={circle} style={{filter: 'invert(88%) sepia(81%) saturate(749%) hue-rotate(341deg) brightness(104%) contrast(104%)'}}/></a>Sync unlimited devices</p>
                <p><a className='space'><img src={circle} style={{filter: 'invert(88%) sepia(81%) saturate(749%) hue-rotate(341deg) brightness(104%) contrast(104%)'}}/></a>10 GB monthly uploads</p>
                <p><a className='space'><img src={circle} style={{filter: 'invert(88%) sepia(81%) saturate(749%) hue-rotate(341deg) brightness(104%) contrast(104%)'}}/></a>200 MB max. note size</p>
                <p><a className='space'><img src={circle} style={{filter: 'invert(88%) sepia(81%) saturate(749%) hue-rotate(341deg) brightness(104%) contrast(104%)'}}/></a>Customize Home dashboard and access extra widgets</p>
                <p><a className='space'><img src={circle} style={{filter: 'invert(88%) sepia(81%) saturate(749%) hue-rotate(341deg) brightness(104%) contrast(104%)'}}/></a>Connect primary Google Calendar account</p>
                <p><a className='space'><img src={circle} style={{filter: 'invert(88%) sepia(81%) saturate(749%) hue-rotate(341deg) brightness(104%) contrast(104%)'}}/></a>Add due dates, reminders, and notifications to your tasks</p>
              </div>
              <div>
                <button className='btn1'>Get Started</button>
              </div>
          </div>
              <div className='plan1 d-flex flex-column'>
                  <div>
                    <h1>Organization</h1>
                    <h2>$49.99</h2>
                    <p>Capture ideas and find them quickly</p>
                  </div>
                  <div>
                    <p><a className='space'><img src={circle}/></a>Sync unlimited devices</p>
                    <p><a className='space'><img src={circle}/></a>10 GB monthly uploads</p>
                    <p><a className='space'><img src={circle}/></a>200 MB max. note size</p>
                    <p><a className='space'><img src={circle}/></a>Customize Home dashboard and access extra widgets</p>
                    <p><a className='space'><img src={circle}/></a>Connect primary Google Calendar account</p>
                    <p><a className='space'><img src={circle}/></a>Add due dates, reminders, and notifications to your tasks</p>
                  </div>
                  <div>
                    <button className='btn2'>Get Started</button>
                  </div>
          </div>
        </div>

      </div>
      <div className='urwork '>
            <h1>Your work, everywhere you are</h1>
            <p>Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!</p>
            <button className='btn1 '>Try Taskey </button>
      </div>
      <div className='d-flex 'style={{marginTop:"100px", marginBottom:"100px"}}>
          <div className='area1'>
              <h1>100% your data</h1>
              <p>The app is open source and your notes are saved to an open format, so you'll always have access to them. Uses End-To-End Encryption (E2EE) to secure your notes and ensure no-one but yourself can access them.</p>
              <button className='btn1'>Try It Now</button>
          </div>
          <div ><img className='box4' src={imageElement} alt="Logo"/></div>
      </div>
      <div className='sponsors'>
        <div className='' style={{textAlign:"center"}}>
            <h1 style={{textAlign:"center", paddingBottom:"20px"}}>Our sponsors</h1>
        </div>
        <div ><img className='img2' src={sponsor1} alt="Logo"/></div>
      </div>
      <div className='zoro d-flex flex-row' style={{backgroundColor:"#043873", padding:"50px 0px"}}>
        <div ><img className='img3' src={appset} alt="Logo"/></div>
        <div className='urwork' style={{color:"white", paddingLeft:"20px",textAlign:"start"}}>
              <h1 style={{textAlign:"start"}}>Work with Your Favorite Apps Using whitepace</h1>
              <p>Whitepace teams up with your favorite software. Integrate with over 1000+ apps with Zapier to have all the tools you need for your project success.</p>
              <button className='btn1'>Read More</button>
        </div>
      </div>
      <div>
        <div style={{textAlign:"center", marginTop:"100px", marginBottom:"50px"}}>
          <h1>What our Clients Says</h1>
        </div>
        <div className='d-flex flex-row justify-content-center'>
          <div className='box1'></div>
          <div className='box1'></div>
          <div className='box1'></div>
        </div>
      </div>
      <div className='ending'>
         <div class name='container' style={{textAlign:"center", paddingTop:"100px", paddingBottom:"100px"}}>
            <h1>White Space Today</h1>
            <p>Get started for free.Add your whole team as your needs grow.</p>
            <button className='btn1' >Try Taskey Free</button>
            <p>On a big team? Contact Sales</p>
            <div ><img className='img' src={appicon} alt="Logo"/></div>
          </div>
      </div>
      <footer className='footer'>
        <div className='box5'>
          <a className="navbar-brand" href="#">
            <img src={myImage} alt="Logo" className='logo-image' /> 
          </a>
          <p className='box5' style={{textAlign:"start",width:"400px"}}>whitepace was created for the new ways we live and work.We make a better workspace around the world</p>
        </div>
        <div className='box5'>
          <p><a style={{color:"#fff",textDecoration:"None"}} href="#">Product</a></p>
          <p><a style={{color:"#fff",textDecoration:"None"}} href="#">Overview</a></p>
          <p><a style={{color:"#fff",textDecoration:"None"}} href="#">Pricing</a></p>
          <p><a style={{color:"#fff",textDecoration:"None"}} href="#">Customer stories</a></p>
        </div>
        <div className='box5'>
          <p><a style={{color:"#fff",textDecoration:"None"}} href="#">Resources</a></p>
          <p><a style={{color:"#fff",textDecoration:"None"}} href="#">Blog</a></p>
          <p><a style={{color:"#fff",textDecoration:"None"}} href="#">Guides & tutorials</a></p>
          <p><a style={{color:"#fff",textDecoration:"None"}} href="#">Help Center</a></p>
        </div>
        <div className='box5'>
          <p><a style={{color:"#fff",textDecoration:"None"}} href="#">Company</a></p>
          <p><a style={{color:"#fff",textDecoration:"None"}} href="#">About Us</a></p>
          <p><a style={{color:"#fff",textDecoration:"None"}} href="#">Careers</a></p>
          <p><a style={{color:"#fff",textDecoration:"None"}} href="#">Media Kit</a></p>
        </div>
        <div className='box6'>
          <h1>Try It Today</h1>
          <p>Get started for free.Add your whole team as your needs grow.</p>
          <button className='btn1'>Start Today</button>
        </div>
      </footer>
    </>
  )
}
