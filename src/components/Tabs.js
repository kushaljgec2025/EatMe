import React, { useState, useEffect } from 'react'
import { CiPizza } from 'react-icons/ci'
import { GiFruitBowl, GiNoodles, GiCheckMark } from 'react-icons/gi'
import { MdOutlineIcecream } from 'react-icons/md'
import { fetchTabData } from '../service'
function Tabs(props) {
    const [active, setActive] = useState('Pizza')
    const [tabLabel, setTabLabel] = useState([
        {
            name: 'Pizza',
            icon: <CiPizza />,
            id: '0209cb28fc05320434e2916988f47b71'

        },
        {
            name: 'Noodles',
            icon: <GiNoodles />,
            id: 'e0f06a8d4769e6a9344ff766d04a206f'

        },
        {
            name: 'Desert',
            icon: <GiFruitBowl />,
            id: 'bc865476ffe2b8a03fbe9aee2f739740'

        },
        {
            name: 'Icecream',
            icon: <MdOutlineIcecream />,
            id: 'dc0bd9f18c68a5710d0fc3fda6512b7b'

        }
    ]);
    const [tabData, setTabData] = useState('')
    const handelClick = (name, id) => {
        setActive(name)
        fetchTabData(id).then((response) => {
            setTabData(response);
            props.setLoader(false);
        })
    }
    useEffect(() => {
        fetchTabData(tabLabel[0].id).then((response) => {
            setTabData(response);
            // console.log(response);
            props.setLoader(false);
        })
    }, [])
    var cnt = 0;
    return (
        <div className="container">
            <h1 className='recipeHeading text-mid m-4 text-[1.5em] font-thin'>What would you like to have!</h1>
            <div className="tabs flex gap-2 justify-center mr-[1em] ml-[1em]">
                {
                    tabLabel.map((item, index) => (

                        <div onClick={() => (handelClick(item.name, item.id), props.setLoader(true))} key={index} className={`tablist ${active === item.name ? 'active text-[1em] font-bold' : ''}  p-4  cursor-pointer  w-[7em] h-[5em] flex flex-col justify-center gap-2 content-center`}>
                            <div className='text-[2em] m-auto'>
                                {item.icon}
                            </div>
                            <span className="text-[0.8em]">{item.name}</span>
                        </div>

                    ))
                }



            </div>
            <div className='recipe_banner bg-deep p-5 flex flex-col-reverse gap-[1em] m-[auto] lg:flex-row w-[100vw]  text-white mt-3'>
                {
                    tabData !== "" &&
                    <>
                        <div className="left-col m-[auto] w-[70%]   ">
                            <span className='badge bg-mid p-3 rounded-md mb-3 inline-block font-bold'>{(tabData.recipe.cuisineType[0]).toUpperCase()}</span>
                            <h1 className="text-[2em] font-bold mb-2">{tabData.recipe.label}</h1>
                            <p><strong className="m-2">Recipe by:</strong><small>{tabData.recipe.source}</small></p>
                            <h3>Ingredients</h3>
                            <div className='ingredients flex  justify-center list-none'>
                                <ul className='flex flex-wrap  gap-2 justify-evenly mt-3 '>
                                    {
                                        tabData.recipe.ingredientLines.map((item, index) => (
                                            <li key={index} className='bg-mid rounded-md mb-3 inline-block text-[1em] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] p-4'><GiCheckMark size="18px" className='inline-block mr-2 text-light' /><span>{item}</span></li>

                                        ))
                                    }

                                </ul>
                            </div>
                        </div>
                        <div className="right-col m-[auto] w-[30%] lg:w-[60%]  ">
                            <div >
                                <img className=' border-[5px] border-white rounded-lg bg-cover w-[100%] lg:w-[60%] m-auto shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] ' src={tabData.recipe.image} alt={tabData.recipe.label} />
                            </div>


                        </div>
                    </>
                }
            </div>
        </div>
    )

}

export default Tabs