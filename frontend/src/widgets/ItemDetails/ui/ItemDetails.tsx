export const ItemDetails = (itemData: any ) => {

  return (
    <div>
      <ul>
        <li>{itemData?.id}</li>
        <li>{itemData?.name}</li>
        <li>{itemData?.description}</li>
      </ul>
    </div>
  );
};
