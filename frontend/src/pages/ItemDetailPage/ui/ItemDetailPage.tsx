import { useParams } from 'react-router-dom';
import { Breadcrumbs } from '@/shared/index';
import { ItemDetails } from '@/widgets/index';

export const ItemDetailPage = () => {
  const { itemId } = useParams<{ itemId: string }>();

  // Проверяем, определен ли itemId, иначе используем пустую строку или другое значение по умолчанию
  const safeItemId = itemId ?? '';

  return (
    <div>
      <Breadcrumbs Title="ItemDetailPage" />
      {/* Передаем itemId как prop в ItemDetails */}
      <ItemDetails itemID={safeItemId} />
    </div>
  );
};
