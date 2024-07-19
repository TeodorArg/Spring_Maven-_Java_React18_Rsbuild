import { useDeleteItemById } from '@entites/index';

import {
  IItem,
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@shared/index";

export const ItemDialogDelete = ({ item, showAlert, onOpenChange }: { item: IItem; showAlert: boolean; onOpenChange: (isOpen: boolean) => void }) => {

  // Используйте хук на верхнем уровне компонента
  const { mutate: deleteItem } = useDeleteItemById(item.id);

  // Обработчик, который вызывает мутацию
  const handleDelete = () => {
    deleteItem();
  };

  return (
    <AlertDialog open={showAlert} onOpenChange={(isOpen) => onOpenChange(isOpen)}>
      <AlertDialogContent className='bg-topbar'>
        <AlertDialogHeader>
          <AlertDialogTitle>Вы уверены, что хотите удалить Товар: {item.name} ? </AlertDialogTitle>
          <AlertDialogDescription>
              <span className='grid grid-cols-[80px_1fr] gap-4'><span className='font-bold'>ID:</span> <span>{item.id}</span></span>
              <span className='grid grid-cols-[80px_1fr] gap-4'><span className='font-bold'>Description:</span> <span>{item.description}</span></span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className='bg-sky-200'>Отмена</AlertDialogCancel>
          <AlertDialogAction className='bg-sky-500 hover:bg-sky-700' onClick={handleDelete}>Удалить</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}