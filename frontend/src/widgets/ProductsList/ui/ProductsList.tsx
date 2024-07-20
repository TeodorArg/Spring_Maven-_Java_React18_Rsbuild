import { useState } from 'react';
import { productsListQuery } from '@entites/index';
import { IProduct } from '@shared/index';
import { DataTable } from '@shared/index';

import {
  ProductDialogDelete,
  ProductDialogEdit,
  ProductDropdownMenu,
} from '@/features/index';

export const ProductsList = () => {
  const productsData = productsListQuery();

  // Состояния для AlertDialog
  const [isAlertDialogDelOpen, setIsAlertDialogDelOpen] = useState(false);
  const [removedProduct, setRemovedProduct] = useState({} as IProduct);
  const [isAlertDialogEditOpen, setIsAlertDialogEditOpen] = useState(false);
  const [editProduct, setEditedProduct] = useState({} as IProduct);

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
      accessorKey: 'price',
      header: 'Price',
    },
    {
      id: 'actions',
      accessorKey: 'actions',
      header: 'Actions',
      cell: ({ row }: { row: any }) => {
        const action = row.original;

        return (
          <ProductDropdownMenu
            item={action}
            openAlertDialogDel={setIsAlertDialogDelOpen}
            openAlertDialogEdit={setIsAlertDialogEditOpen}
            setRemovedProduct={setRemovedProduct}
            setEditedProduct={setEditedProduct}
          />
        );
      },
    },
  ];

  // Проверяем, является ли productsData строкой, что будет указывать на состояние загрузки или ошибку
  if (typeof productsData === 'string') {
    return <div>{productsData}</div>; // Выводим сообщение о загрузке или ошибке
  }


  return (
    <div className="container mx-auto py-10">
      <ProductDialogDelete
        showAlert={isAlertDialogDelOpen}
        item={removedProduct}
        onOpenChange={setIsAlertDialogDelOpen}
      />
      <ProductDialogEdit
        showAlert={isAlertDialogEditOpen}
        item={editProduct}
        onOpenChange={setIsAlertDialogEditOpen}
      />
      <DataTable
        columns={columns}
        data={productsData}
        placeholderText="Ищем по названию/имени..."
        searchField="name"
      />
    </div>
  );
};
