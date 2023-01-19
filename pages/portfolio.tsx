export default function Home() {
  return (
    <div className="bg-homeBg dark:bg-homeTwoBg-dark min-h-screen bg-no-repeat bg-center bg-cover bg-fixed md:pb-16 w-full">
      <div className="section-bg">
        <div className="w-full flex justify-between px-4">
          <a href="/">
            <img className="h-[26px] lg:h-[32px]" src="./images/logo/logo.png" alt="logo" />
          </a>
          <div className="flex items-center">
            <button id="theme-toggle" type="button" className="dark-light-btn">
              <i id="theme-toggle-dark-icon" className="fa-solid text-xl fa-moon hidden" />
              <i id="theme-toggle-light-icon" className="fa-solid fa-sun text-xl hidden" />
            </button>
            <button id="menu-toggle" type="button" className="menu-toggle-btn">
              <i id="menu-toggle-open-icon" className="fa-solid fa-bars text-xl " />
              <i id="menu-toggle-close-icon" className="fa-solid fa-xmark text-xl hidden  " />
            </button>
          </div>
        </div>
      </div>

      <nav id="navbar" className="hidden lg:hidden">
        <ul
          className="block rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white dark:bg-[#1d1d1d]"
        >
          <li>
            <a className="mobile-menu-items" href="./aboutOne.html">
              <span className="mr-2 text-xl">
                <i className="fa-regular fa-user" />
              </span>
              {' '}
              About
              {' '}

            </a>
          </li>
          <li>
            <a className="mobile-menu-items" href="./resumeOne.html">
              <span className="mr-2 text-xl">
                <i className="fa-regular fa-file-lines" />
              </span>
              {' '}
              Resume
              {' '}

            </a>
          </li>
          <li>
            <a className="mobile-menu-items-active" href="./portfiloOne.html">
              <span className="mr-2 text-xl">
                <i className="fas fa-briefcase" />
              </span>
              {' '}
              Works
              {' '}

            </a>
          </li>
          <li>
            <a className="mobile-menu-items" href="./blogOne.html">
              <span className="mr-2 text-xl">
                <i className="fa-brands fa-blogger" />
              </span>
              {' '}
              Blogs
              {' '}

            </a>
          </li>
          <li>
            <a className="mobile-menu-items" href="./contactOne.html">
              <span className="mr-2 text-xl">
                <i className="fa-solid fa-address-book" />
              </span>
              {' '}
              Contact
              {' '}

            </a>
          </li>
        </ul>
      </nav>

      <div className="container grid grid-cols-12 md:gap-10 justify-between lg:mt-[220px]">
        <div className="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44">
          <div
            className="w-full mb-6 lg:mb-0 mx-auto relative bg-white text-center dark:bg-[#111111] px-6 rounded-[20px] mt-[180px] md:mt-[220px] lg:mt-0"
          >
            <img
              src="./images/about/avatar.jpg"
              className="w-[240px] absolute left-[50%] transform -translate-x-[50%] h-[240px] drop-shadow-xl mx-auto rounded-[20px] -mt-[140px]"
              alt="about avatar"
            />
            <div className="pt-[100px] pb-8">
              <h1 className="mt-6 mb-1 text-[26px] font-semibold dark:text-white"> Monalisa Ashley </h1>
              <h3
                className="mb-4 text-[#7B7B7B] inline-block dark:bg-[#1D1D1D] px-5 py-1.5 rounded-lg dark:text-[#A6A6A6]"
              >
                Ui/Ux Designer
                {' '}

              </h3>
              <div className="flex justify-center space-x-3">
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <span className="socialbtn text-[#1773EA]">
                    <i className="fa-brands fa-facebook-f" />
                  </span>
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                  <span className="socialbtn text-[#1C9CEA]">
                    <i className="fa-brands fa-twitter" />
                  </span>
                </a>
                <a href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
                  <span className="socialbtn text-[#e14a84]">
                    <i className="fa-brands fa-dribbble" />
                  </span>
                </a>
                <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                  <span className="socialbtn text-[#0072b1]">
                    <i className="fa-brands fa-linkedin-in" />
                  </span>
                </a>
              </div>

              <div className="p-7 rounded-2xl mt-7 bg-[#F3F6F6] dark:bg-[#1D1D1D]">
                <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] pb-2.5">
                  <span className="socialbtn bg-white dark:bg-black text-[#E93B81] shadow-md">
                    <i className="fa-solid fa-mobile-screen-button" />
                  </span>
                  <div className="text-left ml-2.5">
                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Phone </p>
                    <p className="dark:text-white">+123 456 7890</p>
                  </div>
                </div>
                <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                  <span className="socialbtn bg-white dark:bg-black text-[#6AB5B9] shadow-md">
                    <i className="fa-solid fa-envelope-open-text" />
                  </span>
                  <div className="text-left ml-2.5">
                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Email </p>
                    <p className="dark:text-white">example@mail.com</p>
                  </div>
                </div>
                <div className="flex border-b border-[#E3E3E3] dark:border-[#3D3A3A] py-2.5">
                  <span className="socialbtn bg-white dark:bg-black text-[#FD7590] shadow-md">
                    <i className="fa-solid fa-location-dot" />
                  </span>
                  <div className="text-left ml-2.5">
                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Location </p>
                    <p className="dark:text-white">Hong kong china</p>
                  </div>
                </div>
                <div className="flex py-2.5">
                  <span className="socialbtn bg-white dark:bg-black text-[#C17CEB] shadow-md">
                    <i className="fa-solid fa-calendar-days" />
                  </span>
                  <div className="text-left ml-2.5">
                    <p className="text-xs text-[#44566C] dark:text-[#A6A6A6]"> Birthday </p>
                    <p className="dark:text-white">May 27, 1990</p>
                  </div>
                </div>
              </div>

              <button className="dowanload-btn">
                <img className="mr-3" src="./images/icons/dowanload.png" alt="icon" />
                {' '}
                Download CV
                {' '}

              </button>
            </div>
          </div>
        </div>

        <div className="col-span-12 lg:col-span-8">
          <header
            className="lg:w-[560px] h-[144px] hidden lg:block p-[30px] ml-auto mb-10 rounded-[16px] bg-white dark:bg-[#111111]"
          >
            <nav className="hidden lg:block">
              <ul className="flex">
                <li>
                  {' '}
                  <a className="menu-item" href="./aboutOne.html">
                    <span className="text-xl mb-1">
                      <i className="fa-regular fa-user" />
                    </span>
                    {' '}
                    About
                    {' '}
                  </a>

                </li>
                <li>
                  {' '}
                  <a className="menu-item" href="./resumeOne.html">
                    <span className="text-xl mb-1">
                      <i className="fa-regular fa-file-lines" />
                    </span>
                    {' '}
                    Resume
                    {' '}
                  </a>

                </li>
                <li>
                  {' '}
                  <a className="menu-active" href="./portfiloOne.html">
                    <span className="text-xl mb-1">
                      <i className="fas fa-briefcase" />
                    </span>
                    {' '}
                    Works
                    {' '}
                  </a>

                </li>
                <li>
                  <a className="menu-item" href="./blogOne.html">
                    <span className="text-xl mb-1">
                      <i className="fa-brands fa-blogger" />
                    </span>
                    {' '}
                    Blogs
                    {' '}
                  </a>

                </li>
                <li>
                  {' '}
                  <a className="menu-item" href="./contactOne.html">
                    <span className="text-xl mb-1">
                      <i className="fa-solid fa-address-book" />
                    </span>
                    {' '}
                    Contact
                    {' '}
                  </a>

                </li>
              </ul>
            </nav>
          </header>

          <section id="portfolio" className="bg-white   lg:rounded-2xl dark:bg-[#111111]">
            <div className="container  mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
              <div className="py-12 ">
                <h2 className="after-effect after:left-48 lg:mt-0">Portfolio</h2>
                <ul
                  className="button-group isotop-menu-wrapper mt-[30px] flex w-full justify-start md:justify-end flex-wrap font-medium"
                >
                  <li className="fillter-btn mr-4 md:mx-4 is-checked" data-filter="*">All</li>
                  <li className="fillter-btn mr-4 md:mx-4" data-filter=".dev">Video</li>
                  <li className="fillter-btn mr-4 md:mx-4" data-filter=".plugin"> Web Design</li>
                  <li className="fillter-btn mr-4 md:mx-4" data-filter=".branding"> Logo</li>
                  <li className="fillter-btn mr-4 md:mx-4" data-filter=".custom">Graphic Design</li>
                </ul>
              </div>

              <div id="isotop-gallery-wrapper" className="mymix portfolio_list-two  two-col ">
                <div className="grid-sizer" />
                <div className="portfolio_list-two-items isotop-item plugin custom ">
                  <div
                    className="rounded-lg bg-[#fff0f0] p-6 dark:bg-transparent dark:border-[2px] border-[#212425]"
                  >
                    <div className="overflow-hidden rounded-lg">
                      <a href="#portfiloOne" rel="modal:open">
                        <img
                          className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                          src="./images/work_images/small/1.jpg"
                          alt="portfolio image"
                        />
                      </a>
                    </div>
                    <span
                      className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]"
                    >
                      UI/UX

                    </span>
                    <h2
                      className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2"
                    >
                      <a href="#portfiloOne" rel="modal:open"> Chul urina </a>
                    </h2>
                  </div>
                </div>

                <div id="portfiloOne" className="modal-container modal">
                  <div
                    className="overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight"
                  >
                    <h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
                      UI/UX Project
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
                      <div className="space-y-2">
                        <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                          <i
                            className="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"
                          >
                          </i>
                          Project :&nbsp;
                          <span className="font-medium"> Website</span>
                        </p>
                        <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                          <i className="fa-solid fa-code text-lg mr-2 hidden sm:block" />
                          Langages :&nbsp;
                          <span className="font-medium">Photoshop, Figma</span>
                        </p>
                      </div>

                      <div className="space-y-2">
                        <p
                          className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg"
                        >
                          <i className="fa-regular fa-user text-lg mr-2 hidden sm:block" />
                          Client :&nbsp;
                          {' '}
                          <span className="font-medium">Envato</span>
                        </p>
                        <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                          <i
                            className="fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block"
                          >
                          </i>
                          Preview :&nbsp;
                          <span
                            className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]"
                          >
                            <a
                              href="https://www.envato.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              www.envato.com

                            </a>
                          </span>
                        </p>
                      </div>
                    </div>

                    <p className="dark:text-white text-2line font-normal text-[15px] sm:text-sm">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Mollitia placeat magnam possimus iusto blanditiis pariatur
                      labore explicabo quo repellat hic dolorum numquam
                      asperiores, voluptatum fugiat reiciendis aspernatur, non,
                      odio aperiam voluptas ex tempora vitae. Dolor, consequatur
                      quidem! Quas magni distinctio dolorum dolore natus, vel
                      numquam accusamus. Nostrum eligendi recusandae qui tempore
                      deserunt!
                    </p>
                    <div className="pr-3">
                      <img
                        className="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6"
                        src="./images/work_images/1.jpg"
                        alt="portfolio image"
                      />
                    </div>
                  </div>
                  <a
                    href="#close-modal"
                    rel="modal:close"
                    className="close bg-close-light dark:bg-close-dark"
                  >
                    Close

                  </a>
                </div>

                <div className="portfolio_list-two-items isotop-item dev branding ">
                  <div
                    className="rounded-lg bg-[#fff3fc] dark:bg-transparent p-6 dark:border-[2px] border-[#212425]"
                  >
                    <div className="overflow-hidden rounded-lg">
                      <a href="#portfiloTwo" rel="modal:open">
                        <img
                          className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                          src="./images/work_images/small/2.jpg"
                          alt="portfolio image"
                        />
                      </a>
                    </div>
                    <span
                      className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]"
                    >
                      Logo

                    </span>
                    <h2
                      className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2"
                    >
                      <a href="#portfiloTwo" rel="modal:open">Chul urina</a>
                    </h2>
                  </div>
                </div>

                <div id="portfiloTwo" className="modal-container modal">
                  <div
                    className="overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight"
                  >
                    <h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
                      Logo Project
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
                      <div className="space-y-2">
                        <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                          <i
                            className="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"
                          >
                          </i>
                          Project :&nbsp;
                          <span className="font-medium"> Website</span>
                        </p>
                        <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                          <i className="fa-solid fa-code text-lg mr-2 hidden sm:block" />
                          Langages :&nbsp;
                          <span className="font-medium">Photoshop, Figma</span>
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p
                          className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg"
                        >
                          <i className="fa-regular fa-user text-lg mr-2 hidden sm:block" />
                          Client :&nbsp;
                          {' '}
                          <span className="font-medium">Envato</span>
                        </p>
                        <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                          <i
                            className="fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block"
                          >
                          </i>
                          Preview :&nbsp;
                          <span
                            className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]"
                          >
                            <a
                              href="https://www.envato.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              www.envato.com

                            </a>
                          </span>
                        </p>
                      </div>
                    </div>

                    <p className="dark:text-white text-2line font-normal text-[15px] sm:text-sm">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Mollitia placeat magnam possimus iusto blanditiis pariatur
                      labore explicabo quo repellat hic dolorum numquam
                      asperiores, voluptatum fugiat reiciendis aspernatur, non,
                      odio aperiam voluptas ex tempora vitae. Dolor, consequatur
                      quidem! Quas magni distinctio dolorum dolore natus, vel
                      numquam accusamus. Nostrum eligendi recusandae qui tempore
                      deserunt!
                    </p>
                    <div className="pr-3">
                      <img
                        className="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6"
                        src="./images/work_images/2.jpg"
                        alt="portfolio image"
                      />
                    </div>
                  </div>
                  <a
                    href="#close-modal"
                    rel="modal:close"
                    className="close bg-close-light dark:bg-close-dark"
                  >
                    Close

                  </a>
                </div>

                <div className="portfolio_list-two-items isotop-item plugin ">
                  <div
                    className="rounded-lg bg-[#fff3fc] dark:bg-transparent p-6 dark:border-[2px] border-[#212425]"
                  >
                    <div className="overflow-hidden rounded-lg">
                      <a href="#portfiloThree" rel="modal:open">
                        <img
                          className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                          src="./images/work_images/small/3.jpg"
                          alt="portfolio image"
                        />
                      </a>
                    </div>
                    <span
                      className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]"
                    >
                      UI/UX

                    </span>
                    <h2
                      className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2"
                    >
                      <a href="#portfiloThree" rel="modal:open">
                        T-Shirt Design
                      </a>
                    </h2>
                  </div>
                </div>

                <div id="portfiloThree" className="modal-container modal">
                  <div
                    className="overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight"
                  >
                    <h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
                      T-Shirt Design Project
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
                      <div className="space-y-2">
                        <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                          <i
                            className="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"
                          >
                          </i>
                          Project :&nbsp;
                          <span className="font-medium"> Website</span>
                        </p>
                        <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                          <i className="fa-solid fa-code text-lg mr-2 hidden sm:block" />
                          Langages :&nbsp;
                          <span className="font-medium">Photoshop, Figma</span>
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p
                          className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg"
                        >
                          <i className="fa-regular fa-user text-lg mr-2 hidden sm:block" />
                          Client :&nbsp;
                          {' '}
                          <span className="font-medium">Envato</span>
                        </p>
                        <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                          <i
                            className="fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block"
                          >
                          </i>
                          Preview :&nbsp;
                          <span
                            className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]"
                          >
                            <a
                              href="https://www.envato.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              www.envato.com

                            </a>
                          </span>
                        </p>
                      </div>
                    </div>

                    <p className="dark:text-white text-2line font-normal text-[15px] sm:text-sm">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Mollitia placeat magnam possimus iusto blanditiis pariatur
                      labore explicabo quo repellat hic dolorum numquam
                      asperiores, voluptatum fugiat reiciendis aspernatur, non,
                      odio aperiam voluptas ex tempora vitae. Dolor, consequatur
                      quidem! Quas magni distinctio dolorum dolore natus, vel
                      numquam accusamus. Nostrum eligendi recusandae qui tempore
                      deserunt!
                    </p>
                    <div className="pr-3">
                      <img
                        className="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6"
                        src="./images/work_images/3.jpg"
                        alt="portfolio image"
                      />
                    </div>
                  </div>
                  <a
                    href="#close-modal"
                    rel="modal:close"
                    className="close bg-close-light dark:bg-close-dark"
                  >
                    Close

                  </a>
                </div>

                <div className="portfolio_list-two-items isotop-item dev custom ">
                  <div
                    className="rounded-lg p-6 bg-[#e9faff] dark:bg-transparent dark:border-[2px] border-[#212425]"
                  >
                    <div className="overflow-hidden rounded-lg">
                      <a href="#portfiloFour" rel="modal:open">
                        <img
                          className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                          src="./images/work_images/small/4.jpg"
                          alt="portfolio image"
                        />
                      </a>
                    </div>
                    <span
                      className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]"
                    >
                      UI/UX

                    </span>
                    <h2
                      className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2"
                    >
                      <a href="#portfiloFour" rel="modal:open">
                        Packaging Box
                      </a>
                    </h2>
                  </div>
                </div>

                <div id="portfiloFour" className="modal-container modal">
                  <div
                    className="overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight"
                  >
                    <h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
                      Packaging Box Project
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
                      <div className="space-y-2">
                        <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                          <i
                            className="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"
                          >
                          </i>
                          Project :&nbsp;
                          <span className="font-medium"> Website</span>
                        </p>
                        <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                          <i className="fa-solid fa-code text-lg mr-2 hidden sm:block" />
                          Langages :&nbsp;
                          <span className="font-medium">Photoshop, Figma</span>
                        </p>
                      </div>

                      <div className="space-y-2">
                        <p
                          className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg"
                        >
                          <i className="fa-regular fa-user text-lg mr-2 hidden sm:block" />
                          Client :&nbsp;
                          {' '}
                          <span className="font-medium">Envato</span>
                        </p>
                        <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                          <i
                            className="fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block"
                          >
                          </i>
                          Preview :&nbsp;
                          <span
                            className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]"
                          >
                            <a
                              href="https://www.envato.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              www.envato.com

                            </a>
                          </span>
                        </p>
                      </div>
                    </div>

                    <p className="dark:text-white text-2line font-normal text-[15px] sm:text-sm">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Mollitia placeat magnam possimus iusto blanditiis pariatur
                      labore explicabo quo repellat hic dolorum numquam
                      asperiores, voluptatum fugiat reiciendis aspernatur, non,
                      odio aperiam voluptas ex tempora vitae. Dolor, consequatur
                      quidem! Quas magni distinctio dolorum dolore natus, vel
                      numquam accusamus. Nostrum eligendi recusandae qui tempore
                      deserunt!
                    </p>
                    <div className="pr-3">
                      <img
                        className="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6"
                        src="./images/work_images/4.jpg"
                        alt="portfolio image"
                      />
                    </div>
                  </div>
                  <a
                    href="#close-modal"
                    rel="modal:close"
                    className="close bg-close-light dark:bg-close-dark"
                  >
                    Close

                  </a>
                </div>

                <div className="portfolio_list-two-items isotop-item branding ">
                  <div
                    className="rounded-lg bg-[#fffae9] dark:bg-transparent p-6 dark:border-[2px] border-[#212425]"
                  >
                    <div className="overflow-hidden rounded-lg">
                      <a href="#portfiloFive" rel="modal:open">
                        <img
                          className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                          src="./images/work_images/small/5.jpg"
                          alt="portfolio image"
                        />
                      </a>
                    </div>
                    <span
                      className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]"
                    >
                      Web
                      Design

                    </span>
                    <h2
                      className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2"
                    >
                      <a href="#portfiloFive" rel="modal:open"> Aura Dione</a>
                    </h2>
                  </div>
                </div>

                <div id="portfiloFive" className="modal-container modal">
                  <div
                    className="overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight"
                  >
                    <h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
                      Aura Dione Project
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
                      <div className="space-y-2">
                        <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                          <i
                            className="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"
                          >
                          </i>
                          Project :&nbsp;
                          <span className="font-medium"> Website</span>
                        </p>
                        <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                          <i className="fa-solid fa-code text-lg mr-2 hidden sm:block" />
                          Langages :&nbsp;
                          <span className="font-medium">Photoshop, Figma</span>
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p
                          className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg"
                        >
                          <i className="fa-regular fa-user text-lg mr-2 hidden sm:block" />
                          Client :&nbsp;
                          {' '}
                          <span className="font-medium">Envato</span>
                        </p>
                        <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                          <i
                            className="fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block"
                          >
                          </i>
                          Preview :&nbsp;
                          <span
                            className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]"
                          >
                            <a
                              href="https://www.envato.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              www.envato.com

                            </a>
                          </span>
                        </p>
                      </div>
                    </div>

                    <p className="dark:text-white text-2line font-normal text-[15px] sm:text-sm">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Mollitia placeat magnam possimus iusto blanditiis pariatur
                      labore explicabo quo repellat hic dolorum numquam
                      asperiores, voluptatum fugiat reiciendis aspernatur, non,
                      odio aperiam voluptas ex tempora vitae. Dolor, consequatur
                      quidem! Quas magni distinctio dolorum dolore natus, vel
                      numquam accusamus. Nostrum eligendi recusandae qui tempore
                      deserunt!
                    </p>
                    <div className="pr-3">
                      <img
                        className="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6"
                        src="./images/work_images/5.jpg"
                        alt="portfolio image"
                      />
                    </div>
                  </div>
                  <a
                    href="#close-modal"
                    rel="modal:close"
                    className="close bg-close-light dark:bg-close-dark"
                  >
                    Close

                  </a>
                </div>

                <div className="portfolio_list-two-items isotop-item branding ">
                  <div
                    className="rounded-lg bg-[#f4f4ff] dark:bg-transparent p-6 dark:border-[2px] border-[#212425]"
                  >
                    <div className="overflow-hidden rounded-lg">
                      <a href="#portfiloSix" rel="modal:open">
                        <img
                          className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                          src="./images/work_images/small/6.jpg"
                          alt="portfolio image"
                        />
                      </a>
                    </div>
                    <span
                      className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]"
                    >
                      Video

                    </span>
                    <h2
                      className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2"
                    >
                      <a href="#portfiloSix" rel="modal:open">
                        Modern Bag Design
                      </a>
                    </h2>
                  </div>
                </div>

                <div id="portfiloSix" className="modal-container modal">
                  <div
                    className="overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight"
                  >
                    <h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
                      Modern Bag Design Project
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
                      <div className="space-y-2">
                        <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                          <i
                            className="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"
                          >
                          </i>
                          Project :&nbsp;
                          <span className="font-medium"> Website</span>
                        </p>

                        <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                          <i className="fa-solid fa-code text-lg mr-2 hidden sm:block" />
                          Langages :&nbsp;
                          <span className="font-medium">Photoshop, Figma</span>
                        </p>

                      </div>

                      <div className="space-y-2">
                        <p
                          className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg"
                        >
                          <i className="fa-regular fa-user text-lg mr-2 hidden sm:block" />
                          Client :&nbsp;
                          {' '}
                          <span className="font-medium">Envato</span>
                        </p>
                        <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                          <i
                            className="fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block"
                          >
                          </i>
                          Preview :&nbsp;
                          <span
                            className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]"
                          >
                            <a
                              href="https://www.envato.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              www.envato.com

                            </a>
                          </span>
                        </p>
                      </div>
                    </div>

                    <p className="dark:text-white text-2line font-normal text-[15px] sm:text-sm">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Mollitia placeat magnam possimus iusto blanditiis pariatur
                      labore explicabo quo repellat hic dolorum numquam
                      asperiores, voluptatum fugiat reiciendis aspernatur, non,
                      odio aperiam voluptas ex tempora vitae. Dolor, consequatur
                      quidem! Quas magni distinctio dolorum dolore natus, vel
                      numquam accusamus. Nostrum eligendi recusandae qui tempore
                      deserunt!
                    </p>
                    <div className="pr-3">
                      <img
                        className="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6"
                        src="./images/work_images/6.jpg"
                        alt="portfolio image"
                      />
                    </div>
                  </div>
                  <a
                    href="#close-modal"
                    rel="modal:close"
                    className="close bg-close-light dark:bg-close-dark"
                  >
                    Close

                  </a>
                </div>

                <div className="portfolio_list-two-items isotop-item plugin ">
                  <div
                    className="rounded-lg bg-[#f4f4ff] dark:bg-transparent p-6 dark:border-[2px] border-[#212425]"
                  >
                    <div className="overflow-hidden rounded-lg">
                      <a href="#portfiloSeven" rel="modal:open">
                        <img
                          className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                          src="./images/work_images/small/7.jpg"
                          alt="portfolio image"
                        />
                      </a>
                    </div>
                    <span
                      className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]"
                    >
                      Video

                    </span>
                    <h2
                      className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2"
                    >
                      <a href="#portfiloSeven" rel="modal:open"> Chul urina </a>
                    </h2>
                  </div>
                </div>

                <div id="portfiloSeven" className="modal-container modal">
                  <div
                    className="overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight"
                  >
                    <h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
                      UI/UX Project
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
                      <div className="space-y-2">
                        <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                          <i
                            className="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"
                          >
                          </i>
                          Project :&nbsp;
                          <span className="font-medium"> Website</span>
                        </p>
                        <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                          <i className="fa-solid fa-code text-lg mr-2 hidden sm:block" />
                          Langages :&nbsp;
                          <span className="font-medium">Photoshop, Figma</span>
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p
                          className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg"
                        >
                          <i className="fa-regular fa-user text-lg mr-2 hidden sm:block" />
                          Client :&nbsp;
                          {' '}
                          <span className="font-medium">Envato</span>
                        </p>
                        <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                          <i
                            className="fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block"
                          >
                          </i>
                          Preview :&nbsp;
                          <span
                            className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]"
                          >
                            <a
                              href="https://www.envato.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              www.envato.com

                            </a>
                          </span>
                        </p>
                      </div>
                    </div>

                    <p className="dark:text-white text-2line font-normal text-[15px] sm:text-sm">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Mollitia placeat magnam possimus iusto blanditiis pariatur
                      labore explicabo quo repellat hic dolorum numquam
                      asperiores, voluptatum fugiat reiciendis aspernatur, non,
                      odio aperiam voluptas ex tempora vitae. Dolor, consequatur
                      quidem! Quas magni distinctio dolorum dolore natus, vel
                      numquam accusamus. Nostrum eligendi recusandae qui tempore
                      deserunt!
                    </p>
                    <div className="pr-3">
                      <img
                        className="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6"
                        src="./images/work_images/7.jpg"
                        alt="portfolio image"
                      />
                    </div>
                  </div>
                  <a
                    href="#close-modal"
                    rel="modal:close"
                    className="close bg-close-light dark:bg-close-dark"
                  >
                    Close

                  </a>
                </div>

                <div className="portfolio_list-two-items isotop-item dev branding ">
                  <div
                    className="rounded-lg bg-[#f4f4ff] dark:bg-transparent p-6 dark:border-[2px] border-[#212425]"
                  >
                    <div className="overflow-hidden rounded-lg">
                      <a href="#portfiloEight" rel="modal:open">
                        <img
                          className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                          src="./images/work_images/small/8.jpg"
                          alt="portfolio image"
                        />
                      </a>
                    </div>
                    <span
                      className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]"
                    >
                      Video

                    </span>
                    <h2
                      className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2"
                    >
                      <a href="#portfiloEight" rel="modal:open"> Chul urina </a>
                    </h2>
                  </div>
                </div>

                <div id="portfiloEight" className="modal-container modal">
                  <div
                    className="overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight"
                  >
                    <h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
                      UI/UX Project
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
                      <div className="space-y-2">
                        <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                          <i
                            className="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"
                          >
                          </i>
                          Project :&nbsp;
                          <span className="font-medium"> Website</span>
                        </p>
                        <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                          <i className="fa-solid fa-code text-lg mr-2 hidden sm:block" />
                          Langages :&nbsp;
                          <span className="font-medium">Photoshop, Figma</span>
                        </p>
                      </div>
                      <div className="space-y-2">
                        <p
                          className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg"
                        >
                          <i className="fa-regular fa-user text-lg mr-2 hidden sm:block" />
                          Client :&nbsp;
                          {' '}
                          <span className="font-medium">Envato</span>
                        </p>
                        <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                          <i
                            className="fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block"
                          >
                          </i>
                          Preview :&nbsp;
                          <span
                            className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]"
                          >
                            <a
                              href="https://www.envato.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              www.envato.com

                            </a>
                          </span>
                        </p>
                      </div>
                    </div>

                    <p className="dark:text-white text-2line font-normal text-[15px] sm:text-sm">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Mollitia placeat magnam possimus iusto blanditiis pariatur
                      labore explicabo quo repellat hic dolorum numquam
                      asperiores, voluptatum fugiat reiciendis aspernatur, non,
                      odio aperiam voluptas ex tempora vitae. Dolor, consequatur
                      quidem! Quas magni distinctio dolorum dolore natus, vel
                      numquam accusamus. Nostrum eligendi recusandae qui tempore
                      deserunt!
                    </p>
                    <div className="pr-3">
                      <img
                        className="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6"
                        src="./images/work_images/8.jpg"
                        alt="portfolio image"
                      />
                    </div>
                  </div>
                  <a
                    href="#close-modal"
                    rel="modal:close"
                    className="close bg-close-light dark:bg-close-dark"
                  >
                    Close

                  </a>
                </div>

                <div className="portfolio_list-two-items isotop-item plugin custom ">
                  <div
                    className="rounded-lg bg-[#fff0f8] dark:bg-transparent p-6 dark:border-[2px] border-[#212425]"
                  >
                    <div className="overflow-hidden rounded-lg">
                      <a href="#portfiloNine" rel="modal:open">
                        <img
                          className="w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110 rounded-lg h-auto"
                          src="./images/work_images/small/9.jpg"
                          alt="portfolio image"
                        />
                      </a>
                    </div>
                    <span
                      className="pt-5 text-[14px] font-normal text-gray-lite block dark:text-[#A6A6A6]"
                    >
                      Web
                      Design

                    </span>
                    <h2
                      className="font-medium cursor-pointer text-xl duration-300 transition hover:text-[#FA5252] dark:hover:text-[#FA5252] dark:text-white mt-2"
                    >
                      <a href="#portfiloNine" rel="modal:open"> Aura Dione </a>
                    </h2>
                  </div>
                </div>

                <div id="portfiloNine" className="modal-container modal">
                  <div
                    className="overflow-y-scroll scroll-hide-1700  max-h-[60vh] lg:max-h-[80vh] dark:scrollbarDark scrollbarLight"
                  >
                    <h2 className="text-[#ef4060] dark:hover:text-[#FA5252] text-4xl text-center font-bold">
                      Aura Dione Project
                    </h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 my-6 pr-3">
                      <div className="space-y-2">
                        <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                          <i
                            className="fa-regular fa-file-lines sm:text-lg hidden sm:block mr-4 md:text-xl"
                          >
                          </i>
                          Project :&nbsp;
                          <span className="font-medium"> Website</span>
                        </p>
                        <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                          <i className="fa-solid fa-code text-lg mr-2 hidden sm:block" />
                          Langages :&nbsp;
                          <span className="font-medium">Photoshop, Figma</span>
                        </p>
                      </div>

                      <div className="space-y-2">
                        <p
                          className="dark:text-white flex items-center mt-2 lg:mt-0 text-[15px] sm:text-lg"
                        >
                          <i className="fa-regular fa-user text-lg mr-2 hidden sm:block" />
                          Client :&nbsp;
                          {' '}
                          <span className="font-medium">Envato</span>
                        </p>
                        <p className="dark:text-white flex items-center text-[15px] sm:text-lg">
                          <i
                            className="fa-solid fa-arrow-up-right-from-square text-lg mr-2 hidden sm:block"
                          >
                          </i>
                          Preview :&nbsp;
                          <span
                            className="font-medium transition-all duration-300 ease-in-out hover:text-[#ef4060]"
                          >
                            <a
                              href="https://www.envato.com"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              www.envato.com

                            </a>
                          </span>
                        </p>
                      </div>
                    </div>

                    <p className="dark:text-white text-2line font-normal text-[15px] sm:text-sm">
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Mollitia placeat magnam possimus iusto blanditiis pariatur
                      labore explicabo quo repellat hic dolorum numquam
                      asperiores, voluptatum fugiat reiciendis aspernatur, non,
                      odio aperiam voluptas ex tempora vitae. Dolor, consequatur
                      quidem! Quas magni distinctio dolorum dolore natus, vel
                      numquam accusamus. Nostrum eligendi recusandae qui tempore
                      deserunt!
                    </p>
                    <div className="pr-3">
                      <img
                        className="w-full md:h-[450px] h-auto object-cover rounded-xl mt-6"
                        src="./images/work_images/9.jpg"
                        alt="portfolio image"
                      />
                    </div>
                  </div>
                  <a
                    href="#close-modal"
                    rel="modal:close"
                    className="close bg-close-light dark:bg-close-dark"
                  >
                    Close

                  </a>
                </div>
              </div>
            </div>

            <footer className="overflow-hidden rounded-b-2xl bg-[#f8fbfb] dark:bg-[#212425]">
              <p className="text-center py-6 text-gray-lite dark:text-color-910">
                {' '}
                © 2022 All Rights Reserved by
                {' '}
                <a
                  className="hover:text-[#FA5252] duration-300 transition"
                  href="https://themeforest.net/user/ib-themes"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ib-themes
                </a>
                .
              </p>
            </footer>
          </section>
        </div>
      </div>
    </div>
  );
}
