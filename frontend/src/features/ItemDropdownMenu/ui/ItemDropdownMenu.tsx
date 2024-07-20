import { FC, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { MoreHorizontal } from "lucide-react";
import {
  IItem,
  Button,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@shared/index";

interface ItemDropdownMenuProps {
  item: IItem;
  openAlertDialogDel: (isOpen: boolean) => void;
  openAlertDialogEdit: (isOpen: boolean) => void;
  setRemovedItem: (item: IItem) => void;
  setEditedItem: (item: IItem) => void;
}

export const ItemDropdownMenu: FC<ItemDropdownMenuProps> = ({ item, openAlertDialogDel, openAlertDialogEdit, setRemovedItem, setEditedItem }) => {
  const handleCopyInfo = useCallback(() => {
    navigator.clipboard.writeText(`Item:${item.name}, Description:${item.description}`);
  }, [item.name, item.description]);

  const handleDelete = useCallback(() => {
    openAlertDialogDel(true);
    setRemovedItem(item);
  }, [item, openAlertDialogDel, setRemovedItem]);

  const handleEdit = useCallback(() => {
    openAlertDialogEdit(true);
    setEditedItem(item);
  }, [item, openAlertDialogEdit, setEditedItem]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0" aria-label="Open menu">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-topbar">
        <DropdownMenuItem className='hover:cursor-pointer' onClick={handleCopyInfo}>
          Копировать информацию
        </DropdownMenuItem>
        <DropdownMenuItem className='hover:cursor-pointer' onClick={handleEdit}>
          Редактировать информацию
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to={`/items/${item.id}`}>Просмотр Товара</Link>
        </DropdownMenuItem>
        <DropdownMenuItem className='hover:cursor-pointer' onClick={handleDelete}>
          Удалить Товар
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};