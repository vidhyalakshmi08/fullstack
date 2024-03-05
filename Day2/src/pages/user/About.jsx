import img from '../../assets/images/aboutuser.avif'
const About = () => {
  return (
    <div>
      <section className="text-yellow-600 bg-yellow-100 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-500">GiftWonders: Unwrapping Happiness, One Thoughtful Gift at a Time!
        <br className="hidden lg:inline-block"/>
      </h1>
      <p className="mb-8 leading-relaxed">Whether it's a special occasion or just a spontaneous gesture, our personalized gifts add a touch of magic to every celebration. From custom engravings to personalized photo creations, explore a world of endless possibilities to make your loved ones feel truly cherished. Embrace the joy of giving with GiftWonders – where every present tells a story and every memory becomes a treasure.</p>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded w-full h-full" alt="hero" src={img}/>
    </div>
  </div>
</section>
    </div>
  )
}

export default About