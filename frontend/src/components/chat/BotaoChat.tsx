import Image from 'next/image';

export default function BotaoChat() {
  return (
    <div className='fixed bottom-5 right-5 cursor-pointer'>
      <Image src="/chat.svg" alt="Chat" width={50} height={50} />
    </div>
  );
}