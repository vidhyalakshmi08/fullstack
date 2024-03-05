import { Link } from 'react-router-dom'
import img from '../../assets/images/homeuser.avif'

const Home = () => {
  return (
    <section className="text-yellow-600 bg-yellow-100 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-xl lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded w-full h-full" alt="hero" src={img}/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-500">"Unwrap the Magic: Where Every Gift Tells a Story. Your Personalized Touch, Our Gift to You!"
        <br className="hidden lg:inline-block"/>
      </h1>
      <p className="mb-8 leading-relaxed">Welcome to GiftWonders, your ultimate destination for personalized gifts that leave a lasting impression. At GiftWonders, we believe in transforming ordinary moments into extraordinary memories. Discover a curated collection of thoughtful and unique gifts, crafted with care and designed to express your heartfelt sentiments.</p>
      <div className="flex justify-center">
        <button className="inline-flex text-gray-900 bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-400 rounded text-lg"><Link to="/app-project/user/shop">Shop</Link></button>
      </div>
    </div>
  </div>
</section>
  )
}

export default Home