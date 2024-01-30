import Logo from "@/assets/Logo.png";
const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" style={{ width: '100px', height: '50px', marginLeft: '-10px' }} src={Logo} />
          <p className="mb-5">
            Discover a world of fitness excellence at Zain Gym Fitness Center. Step into our state-of-the-art facility, where every detail is designed to empower your fitness journey. Join our vibrant community and embark on a path to a healthier, stronger, and more confident you.
          </p>
          <p>© Zain All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Connect with Us!</h4>
          <p className="my-5">Facebook</p>
          <p className="my-5">Instagram</p>
          <p>Email</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Reach Out for Assistance Today.</p>
          <p>0311 1260357</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;