import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumbs } from '@/shared/index';
import { ItemDetails } from '@/widgets/index';
import { useGetItemById } from '@entites/index';
import { IItem } from '@/shared/index';

export const ItemDetailPage = () => {
  const itemId = useParams();
  const ItemIdString = itemId.itemId || '';
  const { data } = useGetItemById(ItemIdString);
  const [itemData, setItemData] = useState<IItem | null>(null);

  useEffect(() => {
    if (data) {
      setItemData(data);
    }
  }, [data]);

  return (
    <div>
      <Breadcrumbs Title={itemData?.name} />
      {itemData && <ItemDetails {...itemData} />}
    </div>
  );
};
