import WildCard from '@/components/wildCard';

interface Props {
  params: Promise<{ id: string }>;
}

const Animal: React.FC<Props> = async ({ params }) => {
  const { id } = await params;
  return <WildCard id={id} />;
};

export default Animal;
