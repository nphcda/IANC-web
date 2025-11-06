import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import stateLocalGovts from '../../../utils/stateandlgas';

const DynamicSearchbox = () => {
    const [localGovts, setLocalGovts] = useState([]);
    const [statesearch, setStatesearch] = useState("all")
    const [lgasearch, setLgasearch] = useState("all")
    const [ward, setWard] = useState("all")
    const [indicatorsearchparam, setindicatorsearchparam] = useState({ query: "", state: "", lga: "" })

    const handlestate = (e) => {
        setStatesearch(e.target.value)
    }
    const handlelgasearch = (e) => {
        setLgasearch(e.target.value)
    }
    const handlesearchsubmit = async () => {
        let searchquery;
        try {
            if (statesearch == "all") {
                searchquery = "national"
                setindicatorsearchparam({ query: searchquery, state: statesearch, lga: lgasearch })
                // getAllPatients()
            }
            if (statesearch !== "all" && lgasearch == "all") {
                searchquery = "state"
                setindicatorsearchparam({ query: searchquery, state: statesearch, lga: lgasearch })
                // getAllStatePatients()
            }
            if (statesearch !== "all" && lgasearch !== "all") {
                searchquery = "lga"
                setindicatorsearchparam({ query: searchquery, state: statesearch, lga: lgasearch })
                // getAllLgaPatients()
            }
            // setindicatorsearchparam({ query: searchquery, state: statesearch, lga: lgasearch })
        } catch (error) {

        }
        console.log(searchquery)
    }
    const capitalizeFirstLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };
    useEffect(() => {
        if (statesearch !== "all") {
            setLocalGovts(stateLocalGovts[capitalizeFirstLetter(statesearch)]);

        }
    }, [statesearch])
    return (
        <div className='w-full flex items-center justify-center my-5'>
            <div className='bg-white min-w-[95%] pl-2 py-2 flex flex-row  items-center justify-center gap-6'>
                {/* 1 */}
                <div className='flex flex-col'>
                    <label className='text-primary90 font-[400]'>Filter</label>
                    <select defaultValue="" onChange={(e) => setFilter(e.target.value)} className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] min-w-[180px] border border-[#C6C7C880]">
                        <option>{"State"}</option>
                    </select>

                </div>
                <div className='flex flex-col'>
                    <label className='text-primary90 font-[400]'>State</label>
                    <select name="state" value={statesearch} onChange={(e) => handlestate(e)} className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C8]">
                        <option value="all" >
                            All states
                        </option>
                        <option value="Abia">Abia</option>
                        <option value="Adamawa">Adamawa</option>
                        <option value="Akwa Ibom">Akwa Ibom</option>
                        <option value="Anambra">Anambra</option>
                        <option value="Bauchi">Bauchi</option>
                        <option value="Bayelsa">Bayelsa</option>
                        <option value="Benue">Benue</option>
                        <option value="Borno">Borno</option>
                        <option value="Cross River">Cross River</option>
                        <option value="Delta">Delta</option>
                        <option value="Ebonyi">Ebonyi</option>
                        <option value="Edo">Edo</option>
                        <option value="Ekiti">Ekiti</option>
                        <option value="Enugu">Enugu</option>
                        <option value="FCT">FCT</option>
                        <option value="Gombe">Gombe</option>
                        <option value="Imo">Imo</option>
                        <option value="Jigawa">Jigawa</option>
                        <option value="Kaduna">Kaduna</option>
                        <option value="Kano">Kano</option>
                        <option value="Katsina">Katsina</option>
                        <option value="Kebbi">Kebbi</option>
                        <option value="Kogi">Kogi</option>
                        <option value="Kwara">Kwara</option>
                        <option value="Lagos">Lagos</option>
                        <option value="Nasarawa">Nasarawa</option>
                        <option value="Niger">Niger</option>
                        <option value="Ogun">Ogun</option>
                        <option value="Ondo">Ondo</option>
                        <option value="Osun">Osun</option>
                        <option value="Oyo">Oyo</option>
                        <option value="Plateau">Plateau</option>
                        <option value="Rivers">Rivers</option>
                        <option value="Sokoto">Sokoto</option>
                        <option value="Taraba">Taraba</option>
                        <option value="Yobe">Yobe</option>
                        <option value="Zamfara">Zamfara</option>
                    </select>

                </div>
                {/* 2 */}
                {statesearch !== 'all' &&
                    <div className='flex flex-col'>
                        <label className='text-primary90 font-[400]'>LGA</label>
                        <select name="lga" onChange={handlelgasearch} value={lgasearch} className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] border border-[#C6C7C8]">
                            <option value="all" >
                                All LGA
                            </option>
                            {localGovts?.map((localGovt) => (
                                <option key={localGovt} value={localGovt}>{localGovt}</option>
                            ))}
                        </select>

                    </div>}
                {/* 3 */}
                {lgasearch !== 'all' && <div className='flex flex-col'>
                    <label className='text-primary90 font-[400]'>Ward</label>
                    <select defaultValue="" onChange={(e) => setWard(e.target.value)} className="p-[16px] myselect text-secondary30 bg-transparent outline-none rounded-[8px] min-w-[180px] border border-[#C6C7C880]">

                        <option value={ward}>{"All wards"}</option>


                    </select>

                </div>
                }
                <div className='flex flex-col gap-2 justify-end '>
                    <label className='text-primary90 font-[400]'>Search</label>

                    <button onClick={handlesearchsubmit} className="bg-primary90 p-[16px] text-light10 rounded-[8px]">Search</button>
                </div>
            </div>
        </div>
    )
}

export default DynamicSearchbox