import { useParams } from 'react-router-dom';
import { Breadcrumbs } from '@/shared/index';
import { ItemDetails } from '@/widgets/index';
import { useGetItemById } from '@entites/index';


export const ItemDetailPage = () => {
  const itemId = useParams().toString();
  const { data } = useGetItemById(itemId);
  return (
    <div>
      <Breadcrumbs Title={data?.name} />
      <ItemDetails itemData={data}/>
    </div>
  );
};
