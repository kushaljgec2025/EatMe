import React, { useEffect, useState } from 'react'
import { BsSearch } from 'react-icons/bs';
import { fetchData } from '../service';
function Recipe(props) {
    const [searchedTearm, setSearchedTearm] = useState('');
    const [query, setQuery] = useState('pizza');
    const [data, setData] = useState('');
    const searchRecipe = (searchQurey) => {
        fetchData(searchQurey).then((response) => {
            setData(response);
            props.setLoader(false);
            console.log(response);
        })
    }
    useEffect(() => {
        fetchData(query).then((response) => {
            setData(response);
            props.setLoader(false);
            console.log(response);
        })
    }, [searchedTearm])




    return (
        <div className='container '>
            <div className='heading-line p-8 text-[1.5em] mb-5 text-center text-mid '>
                <strong  >Search Recipes</strong>
                <div className='input-wrapper flex  justify-center h-10 mt-3' >
                    <input type="text" onChange={(e) => setSearchedTearm(e.target.value)} value={searchedTearm} placeholder='Search Your Recipe' className="w-[45%] min-w-[10em]  pl-3 text-mid focus:border-mid outline-none border-light border-2 rounded-bl-md rounded-tl-md" />
                    <button onClick={() => (searchRecipe(searchedTearm), props.setLoader(true))} className="w-[5%] cursor-pointer bg-mid min-w-[2em]   rounded-br-md rounded-tr-md "  >< BsSearch className="m-auto text-white" /></button>
                </div>
            </div>
            <div className='flexbox flex flex-wrap justify-center gap-3 '>
                {
                    data && data.hits.map((item, index) => (
                        <div key={index} className='flexItem  shadow-lg bg-white rounded-lg w-[15em]  overflow-hidden   m-2'>
                            <div className='img-wrapper '>
                                <img src={item.recipe.image} alt={item.recipe.label} className='object-cover' />
                            </div>
                            <div className='flex align-middle justify-center'>
                                <h1 className="text-black text-bold  text-center ">{item.recipe.label}</h1>
                            </div>
                        </div>

                    ))
                }
                {/* <div className='flexItem shadow-lg bg-white rounded-lg overflow-hidden w-[30%] m-2'>
                    <div className='img-wrapper'>
                        <img src="https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1378&q=80" alt='item.recipe.label' />
                    </div>
                    <p className="text-black text-bold pt-2">Pizza Recipe</p>
                </div>
                <div className='flexItem shadow-lg bg-white rounded-lg overflow-hidden w-[30%] m-2'>
                    <div className='img-wrapper'>
                        <img src="https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1378&q=80" alt='item.recipe.label' />
                    </div>
                    <p className="text-black text-bold pt-2">Pizza Recipe</p>
                </div>
                <div className='flexItem shadow-lg bg-white rounded-lg overflow-hidden w-[30%] m-2'>
                    <div className='img-wrapper'>
                        <img src="https://images.unsplash.com/photo-1607532941433-304659e8198a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1378&q=80" alt='item.recipe.label' />
                    </div>
                    <p className="text-black text-bold  pt-2">Pizza Recipe</p>
                </div> */}
            </div>
        </div >
    )
}

export default Recipe