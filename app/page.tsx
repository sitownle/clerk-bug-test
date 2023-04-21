import Image from 'next/image';
import Link from 'next/link';
import { Inter } from 'next/font/google';
import { UserButton } from '@clerk/nextjs/app-beta';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-24 gap-24'>
      <div className='z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex'>
        <p className='fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30'>
          Get started by editing&nbsp;
          <code className='font-mono font-bold'>app/page.tsx</code>
        </p>
        <div className='fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none'>
          <a
            className='pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0'
            href='https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
            target='_blank'
            rel='noopener noreferrer'>
            By{' '}
            <Image
              src='/vercel.svg'
              alt='Vercel Logo'
              className='dark:invert'
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
      </div>
      <div className='mb-32 grid text-center lg:mb-0 lg:grid-cols-1 lg:text-left'>
        <UserButton
          showName
          signInUrl={'/sign-in'}
          userProfileMode={'modal'}
          afterSignOutUrl={'/'}
          appearance={{
            elements: {
              rootBox: 'ml-auto pr-4',
              userButtonOuterIdentifier: 'text-slate-300',
              userButtonPopoverCard: 'text-slate-950 bg-slate-400',
              userButtonPopoverFooter: 'text-slate-200',
            },
          }}
        />
        <Link
          className='text-center p-2 rounded border border-slate-600 bg-gradient-to-t from-slate-600 to-slate-700 hover:to-slate-900 transition-all shadow-md shadow-slate-600 '
          //should be broken unless you uncomment the line below
          //prefetch={false}
          href='/protected'>
          I am protected
        </Link>
      </div>
    </main>
  );
}
