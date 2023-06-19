import logo from "../../assets/logo.png";

const Footer = () => {
  return (
    <div className="bg-chineseBlack">
      <footer className="footer p-10 max-w-screen-2xl mx-auto text-white">
        <div>
          <div className="flex items-center font-lobster">
            <img src={logo} alt="logo" className="w-10" />
            <p className="text-3xl">
              <span className="text-deepbeer">Ashta</span>Banjan
            </p>
          </div>

          <p>Copyright © 2023 - All right reserved</p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
