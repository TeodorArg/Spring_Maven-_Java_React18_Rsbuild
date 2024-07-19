import {FC} from 'react';
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
  openAlertDialog: (isOpen: boolean) => void;
  setRemovedItem: (item: IItem) => void;
}

export const ItemDropdownMenu:FC<ItemDropdownMenuProps> = ({ item, openAlertDialog, setRemovedItem }) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-topbar">
        <DropdownMenuItem
          className='hover:cursor-pointer'
          onClick={() => navigator.clipboard.writeText(`Item:${item.name}, Description:${item.description}`)}
          >
          Copy Item Info
        </DropdownMenuItem>
        <DropdownMenuItem>
            <Link to={`/items/${item.id}`}>View Item Details</Link>
        </DropdownMenuItem>
        <DropdownMenuItem 
          className='hover:cursor-pointer'
          onClick={() => {
            openAlertDialog(true); // Открываем AlertDialog
            setRemovedItem(item); // Устанавливаем удаляемый Item
          }}>
            Удалить Товар
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
};