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
        <div className="container w-auto  flex flex-col justify-center">
            <h1 className='recipeHeading text-mid m-4 text-[1.5em] font-semibold  '>What would you like to have!</h1>
            <div className="tabs flex justify-center ">
                {
                    tabLabel.map((item, index) => (

                        <div onClick={() => (handelClick(item.name, item.id), props.setLoader(true))} key={index} className={`tablist shadow-[8px_-12px_49px_0px_#cbd5e0] ${active === item.name ? 'active text-[1em] font-bold shadow-[8px_-12px_39px_7px_#cbd5e0] ' : ''}  p-4  cursor-pointer lg:min-w-[6em] w-[5em] h-[5em] flex flex-col text-mid justify-center gap-2 content-center m-[1vw]`}>
                            <div className='text-[2em] m-auto'>
                                {item.icon}
                            </div>
                            <span className="text-[0.8em] m-auto">{item.name}</span>
                        </div>

                    ))
                }



            </div>
            <div className='recipe_banner  rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 p-5 flex flex-col-reverse  gap-[1em] m-[auto] lg:flex-row  text-white mt-3'>
                {
                    tabData !== "" &&
                    <>
                        <div className="left-col m-[auto] w-[90%]  lg:w-[50%]  ">
                            <span className='badge bg-mid border-[#8ae0ff] border-[1px] shadow-[rgba(0,_0,_0,_0.2)_0px_30px_90px] p-3 rounded-md mb-3 inline-block font-bold'>{(tabData.recipe.cuisineType[0]).toUpperCase()}</span>
                            <h1 className="text-[2em] font-bold mb-2">{tabData.recipe.label}</h1>
                            <p><strong className="m-2">Recipe by:</strong><small>{tabData.recipe.source}</small></p>
                            <h3>Ingredients</h3>
                            <div className='ingredients list-none'>
                                <ul className='grid grid-flow-row-dense  gap-2 justify-evenly mt-3 '>
                                    {
                                        tabData.recipe.ingredientLines.map((item, index) => (
                                            <li key={index} className='bg-mid rounded-md mb-3 inline-block text-[0.8em] shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] p-2'><GiCheckMark size="18px" className='inline-block mr-2 text-light' /><span>{item}</span></li>

                                        ))
                                    }

                                </ul>
                            </div>
                        </div>
                        <div className="right-col m-[auto] w-[60%] lg:w-[60%]  ">
                            <div >
                                <img className=' border-[5px] border-white rounded-[50%] bg-cover  lg:w-[60%] m-auto shadow-[rgba(0,_0,_0,_0.2)_0px_30px_90px] ' src={tabData.recipe.image} alt={tabData.recipe.label} />
                            </div>


                        </div>
                    </>
                }
            </div>
        </div>
    )

}

export default Tabs