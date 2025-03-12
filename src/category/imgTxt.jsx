const ImageWithText = () => {
  return (
    <>
      <div className="flex gap-4">
        <div className="bg-black relative">
          <img src="ps5.png" alt="Sample" className="w-full h-auto" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
            <h1 className="font-bold text-2xl">Play Station 5</h1>
            <h1>
              Black and White version of PS5
              <p>coming out on sale</p>
            </h1>
            <button className="underline">Shop Now</button>
          </div>
        </div>

        <div className="bg-black ">
          <div className="relative ">
            <img src="woman.png" alt="Sample" className="w-full h-auto" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
              <h1 className="font-bold text-2xl">Speaker</h1>
              <p>Amazon Wireless Speakers</p>
              <button className="underline">Shop Now</button>
            </div>
          </div>
          <div className="flex bg-black ">
            <div className="relative w-full max-w-xs">
              <img src="speaker.png" alt="Sample" className="w-full h-auto" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                <h1 className="font-bold text-2xl">Speaker</h1>
                <p>Amazon Wireless Speakers</p>
                <button className="underline">Shop Now</button>
              </div>
            </div>

            <div className="relative w-full max-w-xs">
              <img src="perfume.png" alt="Sample" className="w-full h-auto" />
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
                <h1 className="font-bold text-2xl">Speaker</h1>
                <p>Amazon Wireless Speakers</p>
                <button className="underline">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageWithText;
