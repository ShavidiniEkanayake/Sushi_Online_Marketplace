const Footer = () => {
    const socialLinks = [
      {
        icon: "fb",
        url: "https://www.facebook.com",
      },
      {
        icon: "insta",
        url: "https://www.instagram.com",
      },
      {
        icon: "linkedin",
        url: "https://www.linkedin.com",
      },
      {
        icon: "twitter",
        url: "https://twitter.com",
      },
      {
        icon: "youtube",
        url: "https://www.youtube.com",
      },
    ];
  
    return (
      <div>
        <div
          className="flex flex-col justify-between p-3 md:p-12 md:pb-0 bg-black grayscale md:flex-row"
          id="footer"
        >
          <div className="flex flex-col items-center justify-center w-full mt-6 md:justify-start md:items-center ">
            <h1 className="mb-8 text-2xl font-semibold text-white">Contact</h1>
            <a
              className="mb-8 text-nav-links-unselected hover:text-primary transition duration-300 text-whites text-white"
              href="mailto:shavidilunika10s@gmail.com"
              target="_blank"
            >
              shavidilunika10s@gmail.com
            </a>
            <div className="flex justify-start mb-8">
              {socialLinks.map((link) => (
                <a href={link.url} target="_blank">
                  <img
                    src={`/assets/social/${link.icon}.svg`}
                    className="w-5 h-5 mx-2 fill-current hover:brightness-200 transition duration-300"
                  ></img>
                </a>
              ))}
            </div>
            <h1 className="mb-4 text-2xl font-semibold text-white">
              Visit Us On
            </h1>
            <a
              className="mb-2 text-nav-links-unselected hover:text-primary transition duration-300 text-white"
              href="https://www.google.com/"
              target="_blank"
            >
              google.com
            </a>
          </div>
        </div>
  
        <div
          id="copyright-section"
          className="flex flex-col justify-start px-10 pt-5 pb-6 bg-black md:flex-row md:justify-between text-nav-links-unselected md:px-24"
        >
          <span className="text-center md:text-left text-white">
            Web Developer © 2023
          </span>
        </div>
      </div>
    );
  };
  
  export default Footer;
  