import { SearchCard, SearchImgWrapper } from '../Common/SearchCard';

const ActorCard = ({ name, country, birthday, deathday, gender, image }) => {
 return (
  <SearchCard>
   <SearchImgWrapper>
    <img src={image} alt={name} />
   </SearchImgWrapper>
   <h1>
    {name}({!!gender && `${gender}`})
   </h1>
   {!!birthday && <p>Born {birthday}</p>}
   <p>{deathday ? `Died ${deathday}` : 'Alive'}</p>
   <p>{country ? `Comes from ${country}` : 'No Country Known'}</p>
  </SearchCard>
 );
};
export default ActorCard;
