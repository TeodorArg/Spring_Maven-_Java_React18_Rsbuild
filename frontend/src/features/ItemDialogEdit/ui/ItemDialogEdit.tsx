import { useState } from 'react';
import { useUpdateItemById } from '@entites/index';

import {
  IItem,
  AlertDialog,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@shared/index';

import { ItemEditForm } from '@/features/index';

export const ItemDialogEdit = ({
  item,
  showAlert,
  onOpenChange,
}: {
  item: IItem;
  showAlert: boolean;
  onOpenChange: (isOpen: boolean) => void;
}) => {
  const [itemNew, setItemNew] = useState({} as IItem);

  const { mutate: editItem } = useUpdateItemById(item.id, itemNew);

  const handleEdit = async (itemNew: IItem) => {
    setItemNew(itemNew);
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
        <ItemEditForm item={item} onClickSaveEdit={handleEdit}></ItemEditForm>
      </AlertDialogContent>
    </AlertDialog>
  );
};
