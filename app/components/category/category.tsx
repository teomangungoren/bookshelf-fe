"use client"
import {ReactNode, useEffect, useState} from "react";
import {categoriesAPICall} from "@/app/services/CategoryService";
import Link from "next/link";
import "./category.css"

interface Category {
    id: string;
    name: string;
}

type CategoryList = Category[];

const Category =  () => {
    const[categoryList,setCategoryList]=useState<CategoryList>([])
    useEffect(() => {
        const fetchData = async() => {
            let response = await categoriesAPICall();

            setCategoryList(response.data);
        }
        fetchData().then(() =>{}).catch((e) =>{console.log(e)});
    }, []);

    return (
        <div className=" flex items-center justify-center px-3 md:px-10 gap-4 md:gap-10 my-5 md:my-10 category-container">
            {categoryList.map((category, index) => (
                <div className="flex justify-center relative  text-[#292020] z-30 cursor-pointer" key={index}>
                    <Link className="category-link" href={`/category/${category.id}`}>{category.name}</Link>
                </div>
            ))}
        </div>
    )
}

export default Category