'use client';

import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";
import { Category } from "@prisma/client";
import Link from "next/link";
import React from "react";

interface Props {
    cats: Category[];
    className?: string;
}

export const Categories: React.FC<Props> = ({ cats, className }) => {
    const categoryActiveId = useCategoryStore((state) => state.activeId);

    return (
        <div className={cn('inline-flex gap-1 bg-gray-50 p-1 rounded-2xl', className)}>
            {
                cats.map(({name, id}, index) => (
                    <Link key={index} className={cn('flex items-center font-bold h-11 rounded-2xl px-5',
                        categoryActiveId === id && 'bg-white shadow-md shadow-gray-200 text-primary'
                    )} href={`/#${name}`}>
                        {name}
                    </Link>
                ))
            }
        </div>
    );
}