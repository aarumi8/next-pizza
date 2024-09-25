import { Container } from "@/components/shared/container";
import { Filters } from "@/components/shared/filters";
import { ProductCard } from "@/components/shared/product-card";
import { ProductsGroupList } from "@/components/shared/products-group-list";
import { Title } from "@/components/shared/title";
import { TopBar } from "@/components/shared/top-bar";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="All pizzas" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />

      <Container className="pb-14 mt-10">
        <div className="flex gap-[60px]">
          <div className="w-[250px]">
            <Filters />
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Pizzas"
                items={[
                  {
                    id: 1,
                    name: "Mozarella",
                    price: 550,
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif"
                  },
                  {
                    id: 1,
                    name: "Mozarella",
                    price: 550,
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif"
                  },
                  {
                    id: 1,
                    name: "Mozarella",
                    price: 550,
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif"
                  },
                  {
                    id: 1,
                    name: "Mozarella",
                    price: 550,
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif"
                  }
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Breakfast"
                items={[
                  {
                    id: 1,
                    name: "Mozarella",
                    price: 550,
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif"
                  },
                  {
                    id: 1,
                    name: "Mozarella",
                    price: 550,
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif"
                  },
                  {
                    id: 1,
                    name: "Mozarella",
                    price: 550,
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif"
                  },
                  {
                    id: 1,
                    name: "Mozarella",
                    price: 550,
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif"
                  }
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Dinner"
                items={[
                  {
                    id: 1,
                    name: "Mozarella",
                    price: 550,
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif"
                  },
                  {
                    id: 1,
                    name: "Mozarella",
                    price: 550,
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif"
                  },
                  {
                    id: 1,
                    name: "Mozarella",
                    price: 550,
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif"
                  },
                  {
                    id: 1,
                    name: "Mozarella",
                    price: 550,
                    imageUrl: "https://media.dodostatic.net/image/r:584x584/11EEF9E43DC39C94AA5765DBF1C97100.avif"
                  }
                ]}
                categoryId={1}
              />
            </div>
          </div>

        </div>
      </Container>
    </>
  );
}
