import { useState } from 'react';
import { useUpdateProductById } from '@entites/index';

import {
  IProduct,
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@shared/index';

import { ProductEditForm } from '@/features/index';

export const ProductDialogEdit = ({
  item,
  showAlert,
  onOpenChange,
}: {
  item: IProduct;
  showAlert: boolean;
  onOpenChange: (isOpen: boolean) => void;
}) => {
  const [productNew, setItemNew] = useState({} as IProduct);

  const { mutate: editItem } = useUpdateProductById(item.id, productNew);

  const handleEdit = async (productNew: IProduct) => {
    setItemNew(productNew);
    editItem();
    onOpenChange(false);
  };

  return (
    <AlertDialog
      open={showAlert}
      onOpenChange={(isOpen) => onOpenChange(isOpen)}
    >
      <AlertDialogContent className="bg-topbar">
        <AlertDialogHeader>
          <AlertDialogTitle>
            Редактировать Товар: {item.name} ?{' '}
          </AlertDialogTitle>
          <AlertDialogDescription></AlertDialogDescription>
        </AlertDialogHeader>
        <ProductEditForm item={item} onClickSaveEdit={handleEdit}></ProductEditForm>
      </AlertDialogContent>
    </AlertDialog>
  );
};
