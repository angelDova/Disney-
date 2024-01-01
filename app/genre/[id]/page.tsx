type Props = {
  params: {
    id: string;
  };
  searchParams: {
    genre: string;
  };
};

function GenrePage({ params: { id }, searchParams: { genre } }: Props) {
  return (
    <div className="">
      Welcome to the genre with ID: {id} and name: {genre}
    </div>
  );
}

export default GenrePage;
