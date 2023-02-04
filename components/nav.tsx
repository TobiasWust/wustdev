import Image from 'next/image';
import {
  ImAddressBook, ImBriefcase, ImProfile, ImUser,
} from 'react-icons/im';
import Logo from '../public/images/logo.png';

export default function Nav() {
  const constructionColors = false;

  return (
    <nav className={`${constructionColors ? 'bg-teal-500' : ''} flex justify-between p-8`}>
      <Image src={Logo} alt="Logo" className="max-h-14 w-auto" />
      <ul className="flex gap-10 justify-end">
        <li className="flex flex-col items-center">
          <ImUser className="text-xl mb-1" />
          About
        </li>
        <li className="flex flex-col items-center">
          <ImProfile className="text-xl mb-1" />
          Resume
        </li>
        <li className="flex flex-col items-center">
          <ImBriefcase className="text-xl mb-1" />
          Works
        </li>
        <li className="flex flex-col items-center">
          <ImAddressBook className="text-xl mb-1" />
          Contact
        </li>
      </ul>
    </nav>
  );
}
