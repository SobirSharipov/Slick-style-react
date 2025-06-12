import './Cart.css'

const Card = ({  img,name ,sum}) => {
  return (
    <div className='product'>
      <img style={{width:"200px"}} src={img} alt="" />
      <h2>{name}</h2>
      <div>
        <h3>{sum}</h3>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 sz">
  <path strokeLinecap="round" strokeLinejoin="round" d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>

      </div>
    </div>
  )
}

export default Card