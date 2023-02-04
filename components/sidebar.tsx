import Image from 'next/image';
import {
  ImCalendar, ImEnvelop, ImFacebook2, ImGithub, ImLinkedin, ImLocation2, ImMobile,
} from 'react-icons/im';
import { VscTwitter } from 'react-icons/vsc';
import Avatar from '../public/images/avatar.webp';

type Basics = {
  name: string;
  label: string;
  image: string;
  profiles: {
    network: string;
    username: string;
    url: string;
  }[]
  phone: string;
  email: string;
  location: {
    address: string;
  }
};

const networkIcons = new Map<string, JSX.Element>();
networkIcons.set('facebook', <ImFacebook2 className="text-[#1773EA]" />);
networkIcons.set('twitter', <VscTwitter className="text-[#1C9CEA]" />);
networkIcons.set('LinkedIn', <ImLinkedin className="text-[#0072b1]" />);
networkIcons.set('GitHub', <ImGithub className="text-[#4078c0]" />);

export default function Sidebar({ basics }: { basics: Basics }) {
  return (
    <aside className="">
      <Image
        src={basics.image || Avatar}
        width={200}
        height={200}
        className="m-auto rounded-2xl shadow-2xl"
        alt="picture of Tobias Wust"
      />
      <div className="flex flex-col items-center">
        <h1 className="">{basics.name}</h1>
        <h3 className="">{basics.label}</h3>

        <div className="flex gap-3">
          {basics.profiles
            .map((profile) => (
              <a href={profile.url} key={profile.network}>{networkIcons.get(profile.network)}</a>
            ))}
        </div>

        <div className="p-7 rounded-2xl mt-7 bg-slate-200 grid gap-4">
          <div className="flex">
            <ImMobile />
            <div className="text-left ml-2.5">
              <p className="text-xs">Phone</p>
              <p className="dark:text-white">{basics.phone}</p>
            </div>
          </div>
          <div className="flex">
            <ImEnvelop />
            <div className="text-left ml-2.5">
              <p className="text-xs">Email</p>
              <p className="dark:text-white">{basics.email}</p>
            </div>
          </div>
          <div className="flex">
            <ImLocation2 />
            <div className="text-left ml-2.5">
              <p className="text-xs">Location</p>
              <p className="dark:text-white">{basics.location.address}</p>
            </div>
          </div>
          <div className="flex">
            <ImCalendar />
            <div className="text-left ml-2.5">
              <p className="text-xs">Birthday</p>
              <p className="dark:text-white">December 19, 1988</p>
            </div>
          </div>
        </div>

        {/* <button type="button" className="flex flex-col items-center">
          <ImDownload className="m-1" />
          Download CV
        </button> */}
      </div>
    </aside>
  );
}
