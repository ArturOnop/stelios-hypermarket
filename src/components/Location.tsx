const Location = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center relative" id="location">
      <div className="mx-auto tracking-wider lg:text-lg">Petraki Kyprianou 40, Livadia</div>
      <div className="w-5/6 h-80 mx-auto mt-10">
        <iframe
          className="w-full h-full rounded"
          loading="lazy"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26162.570990194683!2d33.628213!3d34.948553!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14de2871e977eb4b%3A0xb8743017f075496a!2sStelios%20Hypermarket!5e0!3m2!1sen!2s!4v1711622897129!5m2!1sen!2s"
          title="Stelios Hypermarket" aria-label="Stelios Hypermarket"/>
      </div>
    </div>
  )
}

export default Location