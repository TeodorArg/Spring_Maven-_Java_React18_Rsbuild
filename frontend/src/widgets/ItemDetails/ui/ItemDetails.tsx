import { useGetItemById } from '@entites/index';

export const ItemDetails = ({ itemID }: { itemID: string }) => {
  const { data: itemData, isLoading, error } = useGetItemById(itemID);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;
  if (!itemData) return <div>No data found</div>;

  return (
    <div>
      <ul>
        <li>{itemData.name}</li>
        <li>{itemData.description}</li>
      </ul>
    </div>
  );
};
