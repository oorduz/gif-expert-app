import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


export const GifExpertApp = () => {
    const categoriasData = ['Feliz'];
    const [categories, setcategories] = useState (categoriasData);

    // const handleAdd = () => {
    //     // setcategories([...categories,'prueba']);
    //     setcategories(x => [...x,'otro']);
    // }

    return <>
        <h2>GifExpertApp</h2>
        <hr/>
        <AddCategory setCategories={setcategories}/>
        {
            categories.map((category) => {
                return <GifGrid key={category} categoria={category}/> 
            })
        }
    </>
}