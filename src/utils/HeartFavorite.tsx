import { BsHeart, BsHeartFill } from 'react-icons/bs';
import SaveService from '../services/save.service';
interface Props {
  favorite: boolean;
  breed: string;
  setFavorite: Function;
  image: string;
}

const HeartFavorite = ({ image, breed, setFavorite, favorite = false }: Props) => {
  const saveService = new SaveService();

  const handleClick = (fav: boolean) => {
    setFavorite(fav);
    if (fav) {
      saveService.saveFavorite(image, breed);
    } else {
      saveService.removeFavorite(image);
    }
  }
  return (
    <i className='icon-favorite'>
      {favorite ? (
        <BsHeartFill size={25} color={'red'} onClick={e => handleClick(false)}/>
      ) : (
        <BsHeart size={25} color={'#fff'} onClick={e => handleClick(true)} />
      )}
    </i>
  );
};

export default HeartFavorite;
