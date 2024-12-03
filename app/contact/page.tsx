import Head from 'next/head';

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Contact</title>
      </Head>
      <main className='flex flex-col items-center justify-center min-h-screen py-2'>
        <h1 className='text-4xl font-bold'>Contact</h1>
      </main>
    </div>
  );
}