import { useDeleteProductById } from '@entites/index';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  IProduct,
} from '@shared/index';

export const ProductDialogDelete = ({
  item,
  showAlert,
  onOpenChange,
}: {
  item: IProduct;
  showAlert: boolean;
  onOpenChange: (isOpen: boolean) => void;
}) => {
  // Используйте хук на верхнем уровне компонента
  const { mutate: deleteProduct } = useDeleteProductById(item.id);

  // Обработчик, который вызывает мутацию
  const handleDelete = () => {
    deleteProduct();
  };

  return (
    <AlertDialog
      open={showAlert}
      onOpenChange={(isOpen) => onOpenChange(isOpen)}
    >
      <AlertDialogContent className="bg-topbar">
        <AlertDialogHeader>
          <AlertDialogTitle>
            Вы уверены, что хотите удалить Продукт: {item.name} ?{' '}
          </AlertDialogTitle>
          <AlertDialogDescription>
            <span className="grid grid-cols-[80px_1fr] gap-4">
              <span className="font-bold">ID:</span> <span>{item.id}</span>
            </span>
            <span className="grid grid-cols-[80px_1fr] gap-4">
              <span className="font-bold">Price:</span>{' '}
              <span>{item.price}</span>
            </span>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className="bg-sky-200">Отмена</AlertDialogCancel>
          <AlertDialogAction
            className="bg-sky-500 hover:bg-sky-700"
            onClick={handleDelete}
          >
            Удалить
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};
