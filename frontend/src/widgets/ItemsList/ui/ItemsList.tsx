import { useState } from 'react';
import { useItemsListQuery } from '@entites/index';
import { IItem } from '@shared/index';
import { DataTable } from '@shared/index';

import {
  ItemDialogDelete,
  ItemDialogEdit,
  ItemDropdownMenu,
} from '@/features/index';

export const ItemsList = () => {
  const itemsData = useItemsListQuery();

  // Состояние для AlertDialog
  const [isAlertDialogDelOpen, setIsAlertDialogDelOpen] = useState(false);
  const [removedItem, setRemovedItem] = useState({} as IItem);
  const [isAlertDialogEditOpen, setIsAlertDialogEditOpen] = useState(false);
  const [editItem, setEditedItem] = useState({} as IItem);

  const columns = [
    {
      accessorKey: 'id',
      header: 'ID',
    },
    {
      accessorKey: 'name',
      header: 'Name',
    },
    {
      accessorKey: 'description',
      header: 'Description',
    },
    {
      id: 'actions',
      accessorKey: 'actions',
      header: 'Actions',
      cell: ({ row }: { row: any }) => {
        const action = row.original;

        return (
          <ItemDropdownMenu
            item={action}
            openAlertDialogDel={setIsAlertDialogDelOpen}
            openAlertDialogEdit={setIsAlertDialogEditOpen}
            setRemovedItem={setRemovedItem}
            setEditedItem={setEditedItem}
          />
        );
      },
    },
  ];

  // Проверяем, является ли productsData строкой, что будет указывать на состояние загрузки или ошибку
  if (typeof itemsData === 'string') {
    return <div>{itemsData}</div>; // Выводим сообщение о загрузке или ошибке
  }

  // Если данные успешно получены, выводим список Items
  return (
    <div className="container mx-auto py-10">
      <ItemDialogDelete
        showAlert={isAlertDialogDelOpen}
        item={removedItem}
        onOpenChange={setIsAlertDialogDelOpen}
      />
      <ItemDialogEdit
        showAlert={isAlertDialogEditOpen}
        item={editItem}
        onOpenChange={setIsAlertDialogEditOpen}
      />
      <DataTable
        columns={columns}
        data={itemsData}
        placeholderText="Ищем по названию/имени..."
        searchField="name"
      />
    </div>
  );
};
