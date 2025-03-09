const Footer = () => {
  return (
    <>
      <div className="flex bg-black text-white mt-40 justify-evenly text-1xl p-10">
        <div className="">
          <h1 className="text-3xl"> Exclusive</h1>
          <br />
          <div className="text-xl">
            <h1 className="font-semibold">Subscribe</h1>
            <br />
            <h1>get 10% off your first order</h1>
            <br />
            <div className=" flex border-2 p-0 rounded-xl gap-2 ">
              <input
                type="email"
                placeholder="Enter your email"
                name="email"
                className="p-3"
              />
              <img src="send.svg" alt="" className="h-15 w-10 p-2" />
            </div>
          </div>
        </div>
        <div className="gap-3">
          <h1 className="text-3xl">Support</h1>
          <br />
          <div className="text-xl">
            <h1>
              111 Bijoy sanari,
              <p>Dhaka DH 1515,Bangladesh</p>
            </h1>
            <br />
            <h1>exclusive@gmail.com</h1>
            <br />
            <h1>+88015-88888-99999</h1>
          </div>
        </div>
        <div>
          <h1 className="text-3xl"> Account</h1>
          <br />
          <div className="text-xl">
            <h1>My Account</h1> <br />
            <h1>Login / Register</h1> <br />
            <h1>Cart</h1> <br />
            <h1>Wishlist</h1> <br />
            <h1>Shop</h1>
          </div>
        </div>
        <div>
          <h1 className="text-3xl"> Quick Link</h1>
          <br />
          <div className="text-xl">
            <h1>Privacy Policy</h1> <br />
            <h1>Terms of Use</h1> <br />
            <h1>FAQ</h1> <br />
            <h1>Contact</h1>
          </div>
        </div>
        <div>
          <h1 className="text-3xl">Download Apps</h1>
          <br />
          <div className="text-xl">
            <h1>Save $3 with New App User Only</h1>
            <br />
            <div className="flex gap-2">
              <img src="scan-code.png" className="w-35 h-25 " />
              <div className=" w-35 h-10">
                <img src="google-play.png" />
                <img src="app-store.svg" />
              </div>
            </div>
            <br />
            <div className="flex gap-10 w-12 h-8">
              <img src="facebook.svg" />
              <img src="twitter.svg" />
              <img src="instagram.svg" />
              <img src="linkedin.svg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
