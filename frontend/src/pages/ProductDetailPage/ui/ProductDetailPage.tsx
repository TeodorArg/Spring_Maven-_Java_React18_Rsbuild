import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Breadcrumbs, IProduct } from '@/shared/index';
import { ProductDetails } from '@/widgets/index';
import { useGetProductById } from '@entites/index';

export const ProductDetailPage = () => {
  const productId = useParams();
  const productIDString = productId.productId || '';
  const { data } = useGetProductById(productIDString);
  const [productData, setProductData] = useState<IProduct | null>(null);

  useEffect(() => {
    if (data) {
      setProductData(data);
    }
  }, [data]);

  return (
    <div>
      <Breadcrumbs Title={productData?.name} />
      {productData && <ProductDetails {...productData} />}
    </div>
  );
};
