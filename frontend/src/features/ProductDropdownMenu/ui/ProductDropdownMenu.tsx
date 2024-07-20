import { FC, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { MoreHorizontal } from 'lucide-react';
import {
  IProduct,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  toast,
} from '@shared/index';

interface ProductDropdownMenuProps {
  item: IProduct;
  openAlertDialogDel: (isOpen: boolean) => void;
  openAlertDialogEdit: (isOpen: boolean) => void;
  setRemovedProduct: (item: IProduct) => void;
  setEditedProduct: (item: IProduct) => void;
}

export const ProductDropdownMenu: FC<ProductDropdownMenuProps> = ({
  item,
  openAlertDialogDel,
  openAlertDialogEdit,
  setRemovedProduct,
  setEditedProduct,
}) => {
  const handleCopyInfo = useCallback(() => {
    navigator.clipboard.writeText(
      `Product:${item.name}, Price:${item.price}`,
    );
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">
            {JSON.stringify(
              `Product:${item.name}, Price:${item.price}`,
              null,
              2,
            )}
          </code>
        </pre>
      ),
      className: 'bg-sky-500 text-white',
    });
  }, [item.name, item.price]);

  const handleDelete = useCallback(() => {
    openAlertDialogDel(true);
    setRemovedProduct(item);
  }, [item, openAlertDialogDel, setRemovedProduct]);

  const handleEdit = useCallback(() => {
    openAlertDialogEdit(true);
    setEditedProduct(item);
  }, [item, openAlertDialogEdit, setEditedProduct]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0" aria-label="Open menu">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-topbar">
        <DropdownMenuItem
          className="hover:cursor-pointer"
          onClick={handleCopyInfo}
        >
          Копировать информацию
        </DropdownMenuItem>
        <DropdownMenuItem className="hover:cursor-pointer" onClick={handleEdit}>
          Редактировать информацию
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to={`/products/${item.id}`}>Просмотр Продукта</Link>
        </DropdownMenuItem>
        <DropdownMenuItem
          className="hover:cursor-pointer"
          onClick={handleDelete}
        >
          Удалить продукт
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
