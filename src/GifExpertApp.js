import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () =>{

    //const categorias = ['One', 'Samuray X', 'Dragon ball', 'Naruto'];

    const [categories, setCategories] = useState(['Naruto'])
    
    
//    const handleAdd = () =>{
//        setCategories([...categories, 'ejemplo']);
//    }
    
    
    return(
        <>
            <h2>GifExpertApp</h2>

            <AddCategory setCategories={setCategories} />

            <hr></hr>
            <ol>
                {

                    categories.map((category, id) =>(
                        <GifGrid 
                        key = {category}
                        category = {category}/>
                    ))

                }

            </ol>
        </>
    );


}







export default GifExpertApp;
