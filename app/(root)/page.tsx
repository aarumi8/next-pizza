import { Container } from '@/components/shared/container';
import { Filters } from '@/components/shared/filters';
import { Title } from '@/components/shared/title';
import { TopBar } from '@/components/shared/top-bar';
import { ProductsGroupList } from '@/components/shared/products-group-list';
import { Suspense } from 'react';
import { GetSearchParams, findPizzas } from '@/lib/find-pizzas';
import { Stories } from '@/components/shared/stories';

export default async function Home({ searchParams }: { searchParams: GetSearchParams }) {
  const categories = await findPizzas(searchParams);

  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>

      <TopBar categories={categories.filter((category) => category.products.length > 0)} />

      {/* <Stories /> */}

      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px] flex-col lg:flex-row">
          {/* Фильтрация */}
          <div className="xl:w-[250px] xl:block">
            <Suspense>
              <Filters />
            </Suspense>
          </div>

          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      items={category.products}
                    />
                  ),
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}