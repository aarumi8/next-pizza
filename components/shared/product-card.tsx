import Link from 'next/link';
import React from 'react';
import { Title } from './title';
import { Button } from '../ui/button';
import { Plus } from 'lucide-react';
import { Ingredient } from '@prisma/client';

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  ingredients: Ingredient[];
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  ingredients,
  className,
}) => {
  return (
    <div className={className}>
      <Link href={`/product/${id}`}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg xl:h-[260px]">
          <img className="xl:w-[215px] xl:h-[215px] w-[100%] h-[100%]" src={imageUrl} alt={name} />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

        <p className="text-sm text-gray-400">
          {ingredients.map((ingredient) => ingredient.name).join(', ')}
        </p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-[20px]">
            starting <b>{price} ₽</b>
          </span>

          <Button variant="secondary" className="text-base font-bold">
            <Plus size={20} className="mr-1" />
            Add
          </Button>
        </div>
      </Link>
    </div>
  );
};