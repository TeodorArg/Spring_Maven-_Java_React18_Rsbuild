import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumbs, IProduct } from '@/shared/index';
import { ProductDetails } from '@/widgets/index';
import { useGetProductById } from '@entites/index';

export const ProductDetailPage = () => {
  const productId = useParams();
  const ItemIdString = productId.productId || '';
  const { data } = useGetProductById(ItemIdString);
  const [itemData, setProductData] = useState<IProduct | null>(null);

  useEffect(() => {
    if (data) {
      setProductData(data);
    }
  }, [data]);

  return (
    <div>
      <Breadcrumbs Title={itemData?.name} />
      {itemData && <ProductDetails {...itemData} />}
    </div>
  );
};
