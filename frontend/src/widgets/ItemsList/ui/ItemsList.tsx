import { useState } from 'react';
import { useItemsListQuery } from '@entites/index';
import { IItem } from '@shared/index';
import { Link } from 'react-router-dom';
import { MoreHorizontal } from "lucide-react";
import {
  Button,
  DataTable,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "@shared/index";

import { ItemDialogDelete } from '@/features/index';


export const ItemsList = () => {
  const itemsData = useItemsListQuery();

  // Состояние для AlertDialog
  const [isAlertDialogOpen, setIsAlertDialogOpen] = useState(false);
  const [removedItem, setRemovedItem] = useState({} as IItem);
  
  const columns = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "description",
      header: "Description",
    },
    {
      id: "actions",
      accessorKey: "actions",
      header: "Actions",
      cell: ({ row }: { row: any }) => {
        const action = row.original
  
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
                onClick={() => navigator.clipboard.writeText(`Item:${action.name}, Description:${action.description}`)}
                >
                Copy Item Info
              </DropdownMenuItem>
              <DropdownMenuItem>
                  <Link to={`/items/${action.id}`}>View Item Details</Link>
              </DropdownMenuItem>
              <DropdownMenuItem 
                className='hover:cursor-pointer'
                onClick={() => {
                  setIsAlertDialogOpen(true); // Открываем AlertDialog
                  setRemovedItem(action); // Сохраняем удаляемый Item
                }}>
                  Delete Item
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]

  // Проверяем, является ли productsData строкой, что будет указывать на состояние загрузки или ошибку
  if (typeof itemsData === 'string') {
    return <div>{itemsData}</div>; // Выводим сообщение о загрузке или ошибке
  }

  // Если данные успешно получены, выводим список Items
  return (
    <>
      <ItemDialogDelete showAlert={isAlertDialogOpen} item={removedItem} onOpenChange={setIsAlertDialogOpen}/>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={itemsData} placeholderText="Ищем по названию/имени..." searchField="name" />
      </div>
    </>
  );
};
