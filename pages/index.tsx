import Sidebar from '../components/sidebar';
import getResume from './utils/getResume';

/* eslint-disable max-len */
export default function Home({ resume }: { resume: any }) {
  return (
    <main className="grid grid-cols-[1fr_3fr]">
      <Sidebar basics={resume.basics} />

      <div>
        <section id="about-section" className="bg-white lg:rounded-2xl dark:bg-[#111111]">
          <h1>About</h1>
          {resume.basics.summary}
        </section>

        <section id="portfolio-section" className="bg-white lg:rounded-2xl dark:bg-[#111111]">
          Portfolio
        </section>

        <section id="resume-section" className="bg-white lg:rounded-2xl dark:bg-[#111111]">
          <h1>Resume</h1>
          {resume.work?.map((work: any) => (
            <div key={`${work.name}${work.position}`}>
              <h2>{work.name}</h2>
              <h3>{work.position}</h3>
              <h4>{work.startDate}</h4>
              <h4>{work.endDate}</h4>
              <p>{work.summary}</p>

            </div>
          ))}
        </section>

        <section id="resume-section" className="bg-white lg:rounded-2xl dark:bg-[#111111]">
          <form>
            <label htmlFor="name">
              Name
              <input type="text" id="name" name="name" />
            </label>
            <label htmlFor="email">
              Email
              <input type="email" id="email" name="email" />
            </label>
            <label htmlFor="message">
              Message
              <textarea id="message" name="message" />
            </label>
            <button type="submit">Send</button>
          </form>
        </section>
      </div>
    </main>
  );
}

export async function getStaticProps() {
  const resume = await getResume();

  return {
    props: {
      resume,
    },
  };
}
