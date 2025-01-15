import HomePageModule from '@/modules/HomePage';

export async function generateMetadata() {
  return {
    title: 'Dexterai - DeFi aint gonna DeFAI itself!',
    description:
      'Making DeFi effortless, accessible, and unstoppable for everyone—because the future of finance shouldn’t be hard to navigate',
  };
}

export default function Index() {
  return <HomePageModule />;
}
