import Image from '../assets/img-19.png';
import { IProduct } from '@/shared/index';

export const ProductDetails = (itemData: IProduct) => {
  return (
    <div className="row">
      <div className="grid grid-cols-1 gap-x-5 xl:grid-cols-1">
        <div
          className="px-4 py-3 mb-3 text-sm text-green-500 border border-green-200 rounded-md bg-green-50 dark:bg-green-400/20 dark:border-green-500/50"
          id="successAlert"
        >
          Have a <b>nice day</b>.
        </div>

        <div className="card">
          <div className="card-body">
            <div className="flex gap-3">
              <div>
                <img
                  src={Image}
                  alt={itemData?.name}
                  className="avatar-xl rounded-circle img-thumbnail"
                />
              </div>
              <div className="text-slate-500 dark:text-zink-200">
                <h5 className="text-slate-500">{itemData?.name}</h5>
                <p className="mb-1">{itemData?.id}</p>
                <p className="mb-0">{itemData?.price}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
