import { getSet, getTerms } from '../../db';
import Cards from './cards';

export default async function MesmeryData(context) {
  const set = await getSet(context.params.set);
  console.log('retrieved set**: ', set);
  const terms = await getTerms(set.id);
  return (
    <>
      <Cards title={set.name} terms={terms} />
    </>
  );
}
