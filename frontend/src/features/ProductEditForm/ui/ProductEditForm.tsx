import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { FC } from 'react';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  IProduct,
} from '@/shared/index';
import { toast, Input, Button } from '@/shared/index';

interface ProductEditFormProps {
  item: IProduct;
  onClickSaveEdit: (data: z.infer<typeof FormSchema>) => void;
}

const FormSchema = z.object({
  id: z.string(),
  name: z.string().min(5, {
    message: 'Product name must be at least 5 characters.',
  }),
  price: z.string(),
});

export const ProductEditForm: FC<ProductEditFormProps> = ({
  item,
  onClickSaveEdit,
}) => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      id: item.id,
      name: item?.name,
      price: item?.price,
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: 'You submitted the following values:',
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
      className: 'bg-sky-500 text-white',
    });
    onClickSaveEdit(data);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-6">
        <FormField
          name="id"
          render={() => (
            <FormItem>
              <FormLabel className="font-bold">Product ID</FormLabel>
              <FormControl>
                <Input value={item.id} disabled />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Product Name</FormLabel>
              <FormControl>
                <Input placeholder="Имя/название продукта..." {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-bold">Product Price</FormLabel>
              <FormControl>
                <Input placeholder="Описание товара..." {...field} />
              </FormControl>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <div className="flex justify-between flex-wrap">
          <Button
            type="submit"
            className="bg-sky-300 hover:bg-sky-600 w-5/12 hover:text-stone-950 transition-all duration-250 "
          >
            Сохранить
          </Button>
          <Button className="bg-red-300 hover:bg-red-400 w-5/12 text-stone-950 hover:text-red-800 transition-all duration-250">
            Отмена
          </Button>
        </div>
      </form>
    </Form>
  );
};