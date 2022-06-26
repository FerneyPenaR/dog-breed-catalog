import BreedCard from './BreedCard';

interface Props {
    dogs: string[]
}

const HomeList = ({dogs}: Props) => {

  const breedList = dogs;
  
  return (
    <div className='container d-flex flex-row flex-wrap justify-content-center'>
      {breedList?.map(breed => {
        return (
        <div key={breed} className='p-2'>
          <BreedCard breed={breed} image={''}></BreedCard>
        </div>
        )
      })}
      
    </div>
  );
}

export default HomeList;
