
import './App.css'
import Card from './component/cart'
import Product from './component/product'
import User from './component/user'

import img from '#/react.svg'
import img1 from '#/img1.png'
import img2 from '#/image.png'
import img3 from '#/img1 (1).png'
import img4 from '#/img1 (3).png'
import img5 from '#/img1 (5).png'
import img6 from '#/img1 (2).png'
import img7 from '#/img1 (4).png'
import img8 from '#/img1 (6).png'
import img9 from '#/img1 (7).png'
import img10 from '#/img1 (8).png'
import img11 from '#/img1 (9).png'
import img12 from '#/img1 (10).png'
import img13 from '#/img1 (11).png'
import img14 from '#/img1 (13).png'
import img15 from '#/img1 (12).png'
import img16 from '#/img1 (14).png'
import img17 from '#/img1 (15).png'
import img18 from '#/img1 (16).png'
import img19 from '#/img1 (17).png'
import img20 from '#/icon.jpg'


function App() {
 

  return (
    <div>
      <header>
        <div>
          <img src={img1} alt="" />
        </div>
        <div>
          <a href="">Home</a>
          <a href="">Shop</a>
          <a href="">Collection</a>
          <a href="">Customize</a>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
          </svg>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>


        </div>
      </header>
      <div className='FaindUs'>
        <div className='fUs'>
          <h1>Find Your Sole Mate with Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>
          <button>Shop Now</button>
        </div>
        <div>
          <img src={img2} alt="" className='img2' />
        </div>
      </div>
      <div className='brend'>
        <div>
          <img src={img3} alt="" />
        </div>
        <div>
          <img src={img4} alt="" />
        </div>
        <div>
          <img src={img5} alt="" />
        </div>
        <div>
          <img src={img3} alt="" />
        </div>
        <div>
          <img src={img4} alt="" />
        </div>
        <div>
          <img src={img5} alt="" />
        </div>

      </div>
      <div className='Allcard'>
        <div className='infoCard'>
          <p>- our trending shoes</p>
          <h1>Most popular <br /> products</h1>
          <p>Lorem ipsum dolor sit amet, <br /> consectetur adipiscing elit,</p>
          <button>Explore</button>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 sz btnback">
          <path strokeLinecap="round" strokeLinejoin="round" d="m11.25 9-3 3m0 0 3 3m-3-3h7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
        <div className='Card1'>
          <Card img={img8} name="Running canvas shoes" sum="Rs. 2999.00" />
          <Card img={img7} name="Running canvas shoes" sum="Rs. 2999.00" />
          <Card img={img6} name="casual nike shoes" sum="Rs. 2999.00" />
          <Card img={img8} name="Running canvas shoes" sum="Rs. 2999.00" />
          <Card img={img7} name="Running canvas shoes" sum="Rs. 2999.00" />
          <Card img={img6} name="casual nike shoes" sum="Rs. 2999.00" />
          <Card img={img8} name="Running canvas shoes" sum="Rs. 2999.00" />
          <Card img={img7} name="Running canvas shoes" sum="Rs. 2999.00" />
          <Card img={img6} name="casual nike shoes" sum="Rs. 2999.00" />
          <Card img={img8} name="Running canvas shoes" sum="Rs. 2999.00" />
          <Card img={img7} name="Running canvas shoes" sum="Rs. 2999.00" />
          <Card img={img6} name="casual nike shoes" sum="Rs. 2999.00" />
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 sz btnnext">
          <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
        </svg>
      </div>
      <div className='recproduct'>
        <div>
        <img src={img10} alt="" className='img10' />
        <img src={img9} alt=""  className='img9' />
        </div>
        <div className='infopro'>
          <h1>Are you ready to <br />
            lead the way</h1>
            <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do.</p>
            <button>Explore</button>
            <div className='minipro'>
              <img src={img11} alt="" className='img11' />
              <img src={img12} alt="" className='img12' />
              <img src={img13} alt="" className='img13' />
              <img src={img11} alt="" className='img11' />
              <img src={img12} alt="" className='img12' />
              <img src={img13} alt="" className='img13' />
              <img src={img11} alt="" className='img11' />
              <img src={img12} alt="" className='img12' />
              <img src={img13} alt="" className='img13' />
              <img src={img11} alt="" className='img11' />
              <img src={img12} alt="" className='img12' />
              <img src={img13} alt="" className='img13' />
            </div>
        </div>
      </div>
      <div style={{textAlign:"center",marginTop:"50px"}}>
        <h1 style={{fontSize:"40px"}}>- Best Selling -</h1>
        <div className='btn1'>
          <button style={{backgroundColor:"black",color:"white"}}>Man</button>
          <button>Woman</button>
          <button>Boy</button>
          <button>Child</button>
        </div>
      </div>
      <div className='imgProduct'>
        <Product btn="NEW" img={img14} name="Formal canvas shoe for man" sum="₹2999.00"/>
        <Product btn="NEW" img={img16} name="Formal canvas shoe for man" sum="₹2999.00"/>
        <Product btn="NEW" img={img17} name="Formal canvas shoe for man " sum="₹2999.00"/>
        <Product btn="NEW" img={img18} name="Formal canvas shoe for man " sum="₹2999.00"/>
        <Product btn="NEW" img={img19} name="Formal canvas shoe for man " sum="₹2999.00"/>
        <Product btn="NEW" img={img15} name="Formal Slick shoe for man " sum="₹2999.00"/>
      </div>
      <div style={{textAlign:"center",marginTop:"50px"}}>
        <h1 style={{fontSize:"40px"}}>- Client Testimonial -</h1>
        <div className='User1'>
          <User />
          <User />
        </div>
      </div>
      <footer>
        <div className='divfot'>
          <div>
            <h1>Slick</h1><br /><br />
            <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do eiusmod tempor <br /> incididunt ut labore et dolore magna aliqua.</p><br /><br />
            <img src={img20} alt="" />
          </div>
          <div>
            <h2>Subscribe to our news latter</h2>
            <input type="text" placeholder='Enter Email...' />
          </div>
          <div>
            <h2>Quick Link’s</h2> <br />
            <a href="">Home</a> <br /><br />
            <a href="">Shop</a> <br /><br />
            <a href="">Collection</a> <br /><br />
            <a href="">Contact</a> <br /><br />
            <a href="">Privacy</a> <br /><br />
          </div>
        </div>
        <div className='pFoot'>
          <p>slick.com©allrightreserve</p>
        </div>
      </footer>
    </div>
  )
}

export default App
