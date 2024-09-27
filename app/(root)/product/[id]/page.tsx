import { Container } from "@/components/shared/container";
import { prisma } from "@/prisma/prisma-client";
import { notFound } from "next/navigation";
import { ProductImage } from "@/components/shared/product-image";
import { Title } from "@/components/shared/title";
import { GroupVariants } from "@/components/shared/group-variants";

export default async function ProductPage({ params: { id } }: { params: { id: string } })  {
    const product = await prisma.product.findFirst({ where: { id: Number(id) } });

    if (!product) {
        return notFound();
    }

    return (
        <Container className="flex flex-col my-10">
            <div className="flex flex-1">
                <ProductImage imageUrl={product.imageUrl} size={40} className="" />

                <div className="w-[490px] bg-[#f6f6f6] p-7">
                    <Title text={product.name} size="md" className="font-extrabold mb-1" />

                    <p className="text-gray-400">Lorem ipsum</p>

                    <GroupVariants
                        value="1"
                        items={[
                            {
                                name: 'Small',
                                value: '1'
                            },
                            {
                                name: 'Medium',
                                value: '2'
                            },
                            {
                                name: 'Big',
                                value: '3'
                            }
                        ]}
                    />
                </div>
            </div>
        </Container>
    );
}