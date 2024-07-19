import { itemQuery } from '@entites/index';

export const ItemDetails = ({ itemID }: { itemID: string }) => {
  const itemData = itemQuery(itemID);

  if (typeof itemData === 'string') {
    return <div>{itemData}</div>;
  }

  return (
    <div>
      {itemData && (
        <ul>
          <li>{itemData.name}</li>
          <li>{itemData.description}</li>
        </ul>
      )}
    </div>
  );
};
