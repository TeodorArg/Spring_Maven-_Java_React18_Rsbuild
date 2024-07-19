import { useState } from 'react';
import { useItemsListQuery } from '@entites/index';
import { IItem } from '@shared/index';
import { DataTable} from "@shared/index";

import { ItemDialogDelete, ItemDropdownMenu } from '@/features/index';


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
          <ItemDropdownMenu item={action} openAlertDialog={setIsAlertDialogOpen} setRemovedItem={setRemovedItem} /> 
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
