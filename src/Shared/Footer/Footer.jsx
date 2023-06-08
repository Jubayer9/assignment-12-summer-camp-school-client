import logo from '../../assets/img/pngtree-piano-violin-musical-logo-inspiration-isolated-on-white-backgr-png-image_5004482.jpg'
const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
        <div>
            <img className='w-28 rounded-full' src={logo} alt="" />
          <p>BAND ZooN Ltd.<br/>Providing reliable tech since 2002</p>
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
    );
};

export default Footer;