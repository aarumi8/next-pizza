'use client';

import React from 'react';
import { Title } from './title';
import { Input } from '../ui/input';
import { RangeSlider } from './range-slider';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useQueryFilters, useIngredients, useFilters } from '@/hooks';
import { Button } from '../ui/button';
import { useMediaQuery } from '@/hooks/use-media-query';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const [showFilters, setShowFilters] = React.useState(false);
  const { ingredients, loading } = useIngredients();
  const filters = useFilters();
  const isDesktop = useMediaQuery('(min-width: 1024px)');

  useQueryFilters(filters);

  React.useEffect(() => {
    if (isDesktop) {
      setShowFilters(true);
    } else {
      setShowFilters(false);
    }
  }, [isDesktop]);

  const items = ingredients.map((item: any) => ({ value: String(item.id), text: item.name }));

  const updatePrices = (prices: number[]) => {
    filters.setPrices('priceFrom', prices[0]);
    filters.setPrices('priceTo', prices[1]);
  };

  const toggleFilters = () => {
    setShowFilters((prev) => !prev);
  }

  const renderFilters = () => (
    <>
      <CheckboxFiltersGroup
        title="Pizza type"
        name="pizzaTypes"
        className="mb-5"
        onClickCheckbox={filters.setPizzaTypes}
        selected={filters.pizzaTypes}
        items={[
          { text: 'Thin', value: '1' },
          { text: 'Traditional', value: '2' },
        ]}
      />

      <CheckboxFiltersGroup
        title="Sizes"
        name="sizes"
        className="mb-5"
        onClickCheckbox={filters.setSizes}
        selected={filters.sizes}
        items={[
          { text: '20 cm', value: '20' },
          { text: '30 cm', value: '30' },
          { text: '40 cm', value: '40' },
        ]}
      />

      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Price from and to:</p>
        <div className="flex gap-3 mb-5">
          <Input
            type="number"
            placeholder="0"
            min={0}
            max={1000}
            value={String(filters.prices.priceFrom)}
            onChange={(e) => filters.setPrices('priceFrom', Number(e.target.value))}
          />
          <Input
            type="number"
            min={100}
            max={1000}
            placeholder="1000"
            value={String(filters.prices.priceTo)}
            onChange={(e) => filters.setPrices('priceTo', Number(e.target.value))}
          />
        </div>

        <RangeSlider
          min={0}
          max={1000}
          step={10}
          value={[filters.prices.priceFrom || 0, filters.prices.priceTo || 1000]}
          onValueChange={updatePrices}
        />
      </div>

      <CheckboxFiltersGroup
        title="Ingredients"
        name="ingredients"
        className="mt-5"
        limit={6}
        defaultItems={items.slice(0, 6)}
        items={items}
        loading={loading}
        onClickCheckbox={filters.setSelectedIngredients}
        selected={filters.selectedIngredients}
      />
    </>
  );

  return (
    <div className={className}>
      <div className='flex justify-between items-center mb-5'>
        <Title text="Filters" size="sm" className="font-bold" />
        {!isDesktop && (
          <Button onClick={toggleFilters} variant="outline" size="sm">
            {showFilters ? 'Hide filters' : 'Show filters'}
          </Button>
        )}
      </div>

      {(showFilters || isDesktop) && renderFilters()}
    </div>
  );
};