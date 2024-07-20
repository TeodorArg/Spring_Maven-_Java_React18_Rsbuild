import { Link } from 'react-router-dom';
import { Breadcrumbs } from '@shared/index';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@shared/index';


export const MainPage = () => {
  return (
    <>
      <Breadcrumbs Title="Добро пожаловать" IsMainPage />
      <div className="row">
        <div className="grid grid-cols-1 gap-x-5 lg:grid-cols-2 gap-8">
          <Card className="w-full bg-slate-50">
            <CardHeader>
              <CardTitle className='hover:cursor-pointer'>Продукты</CardTitle>
              <CardDescription>
                Описание для продуктов
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="w-full bg-slate-50">
            <CardHeader>
              <CardTitle className='hover:cursor-pointer'>Товары</CardTitle>
              <CardDescription>
                Описание для товаров
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </>
  );
};
