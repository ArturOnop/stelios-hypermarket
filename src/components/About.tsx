import {Carousel} from "./Carousel";

const About = () => {

  const items = [
    {
      name: "Nicolas Matthews",
      desc: "The shopping experience in Stelios Supermarket is very agreeable after the marvellous. It is overall the cheapest in Larnaca with many items being particularly inexpensive."
    },
    {
      name: "Natasa Boyadjian",
      desc: "Cheapest supermarket in Cyprus! They have great variety, it's clean and organized and they have the best prices! From all the supermarket we've been this is our favourite!"
    },
    {
      name: "Brian Fisk",
      desc: "Huge hypermarket on two floors. Very large meat and vegetable sections. Something for everyone."
    },
    {
      name: "Andreas Constantinides",
      desc: "Simply the best. Great prices, plenty of products and variety of brands. Very polite personnel, shocking discounts and perfect environment."
    },
  ]

  return (
    <div className="min-h-screen flex flex-col relative" id="about">
      <div
        className="w-5/6 mx-auto tracking-wider lg:text-lg mt-24 leading-relaxed flex flex-col gap-5 text-center sm:text-justify">
        <div>
          Welcome to <b>Stelios Hypermarket</b>, Livadia's favorite destination
          for unbeatable prices and a wide variety of products!
        </div>
        <div className="hidden sm:block">
          With our recent renovations, we've transformed our store into a modern and convenient shopping
          environment. From groceries to household essentials, we offer the lowest prices in town. Join our loyal
          customers from Livadia and beyond who appreciate our affordability and quality.
        </div>
        <div>
          Experience the difference at <b>Stelios Hypermarket</b> today!
        </div>
      </div>
      <Carousel items={items} direction="left" isImage={false}
      />
    </div>
  )
}

export default About