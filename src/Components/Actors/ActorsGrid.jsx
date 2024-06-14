import { FlexGrid } from '../Common/FlexGrid';
import ActorCard from './ActorCard';
import NotFoundSrc from '../../lib/not-found.png';
const ActorsGrid = ({ actors }) => {
 return (
  <FlexGrid>
   {actors.map(data => (
    <ActorCard
     key={data.person.id}
     name={data.person.name}
     country={data.person.country ? data.person.country.name : null}
     birthday={data.person.birthday}
     deathday={data.person.deathday}
     gender={data.person.gender}
     image={data.person.image ? data.person.image.medium : NotFoundSrc}
    />
   ))}
  </FlexGrid>
 );
};
export default ActorsGrid;
