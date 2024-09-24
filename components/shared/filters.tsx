import React from "react";
import { Title } from "./title";
import { FilterCheckbox } from "./filter-checkbox";
import { Input } from "../ui/input";
import { RangeSlider } from "./range-slider";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface Props {
    className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
    return (
        <div className={className}>
            <Title text="Filter" size="sm" className="mb-5 font-bold" />

            <div className="flex flex-col gap-4">
                <FilterCheckbox text="You can make" value="1" />
                <FilterCheckbox text="New" value="2" />
            </div>

            <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
                <p className="font-bold mb-3">Price range:</p>
                <div className="flex gap-3 mb-5">
                    <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
                    <Input type="number" min={100} max={1000} placeholder="1000" />
                </div>

                <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
            </div>

            <CheckboxFiltersGroup 
                title="Ingridients"
                className="mt-5"
                limit={6}
                defaultItems={[
                    {
                        text: 'Cheese',
                        value: '1'
                    },
                    {
                        text: 'Tomato',
                        value: '2'
                    },
                    {
                        text: 'Pinacle',
                        value: '3'
                    },
                    {
                        text: 'Pineapple',
                        value: '4'
                    },
                    {
                        text: 'Bacon',
                        value: '5'
                    },
                    {
                        text: 'Chicken',
                        value: '6'
                    },
                ]}    
                items={[
                    {
                        text: 'Cheese',
                        value: '1'
                    },
                    {
                        text: 'Tomato',
                        value: '2'
                    },
                    {
                        text: 'Pinacle',
                        value: '3'
                    },
                    {
                        text: 'Pineapple',
                        value: '4'
                    },
                    {
                        text: 'Bacon',
                        value: '5'
                    },
                    {
                        text: 'Chicken',
                        value: '6'
                    },
                    {
                        text: 'Sauce',
                        value: '7'
                    },
                    {
                        text: 'Chili',
                        value: '8'
                    },
                ]}    
            />
        </div>
    );
}