import { type Animal, animals } from '@/static/animal';

interface Props {
  params: Promise<{ id: string }>;
}

// export default async function Animal() {
const Animal: React.FC<Props> = async ({ params }) => {
  const { id } = await params;
  const animal: Animal | undefined = animals.find((animal) => animal.id === id);

  return (
    <main className="flex fixed inset-0 items-center justify-center">
      {!animal ? (
        <div>Animal not found</div>
      ) : (
        <div
          className="w-screen h-screen bg-cover bg-center bg-no-repeat px-5 sm:px-10 pb-10 sm:pb-10 flex"
          style={{ backgroundImage: `url(${animal.imageSrc})` }}
        >
          <h2 className="self-end text-5xl md:text-7xl 2xl:text-9xl">
            {animal.name}
          </h2>
        </div>
      )}
    </main>
  );
};

export default Animal;
