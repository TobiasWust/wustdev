export default function Home() {
  return (
    <section id="portfolio" className="bg-white lg:rounded-2xl dark:bg-[#111111]">
      <div className="container  mb-8 px-4 sm:px-5 md:px-10 lg:px-[60px]">
        <div className="py-12 ">
          <h2 className="after-effect after:left-48 lg:mt-0">Headline</h2>
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

        <div>
          Content goes here
        </div>
      </div>
    </section>
  );
}
