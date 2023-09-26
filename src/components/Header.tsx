import Image from 'next/image'
import { ComponentProps, UniformText, registerUniformComponent } from "@uniformdev/canvas-react";
import { FC } from 'react';

interface HeaderProps extends ComponentProps {
  title: string; // Not needed when you add inline editing support
  highlightedTitle: string;  // Not needed when you add inline editing support
  imageUrl: string;
  imageAlt: string;
}

const Header: FC<HeaderProps> = ({ imageUrl, imageAlt }) => {
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
      <div className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
        <UniformText parameterId="title" as="p" placeholder="This is the title placeholder" />
        <UniformText parameterId="highlightedTitle" as="code" className="font-mono font-bold" placeholder="This is the highlighted title placeholder" />
      </div>
      <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
        <a
          className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          By{' '}
          <Image
            src={imageUrl}
            alt={imageAlt}
            className="dark:invert"
            width={100}
            height={24}
            priority
          />
        </a>
      </div>
    </div>
  )
}

registerUniformComponent({ type: 'header', component: Header });

export default Header;