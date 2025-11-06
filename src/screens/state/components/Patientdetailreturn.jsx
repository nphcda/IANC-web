import moment from 'moment'
import React from 'react'
import { AiOutlinePrinter } from 'react-icons/ai'
import { IoReturnUpBackOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'
import Notfound from '../../../components/Notfound'

const patientdetailreturn = ({ returnvisit }) => {
    const data = returnvisit
    // const { returnvisit_date } = returnvisit[0]
    const year = returnvisit && moment(returnvisit?.returnvisit_date).format('YYYY');
    const month = returnvisit && moment(returnvisit?.returnvisit_date).format('MM');
    const day = returnvisit && moment(returnvisit?.returnvisit_date).format('DD');
    const time = returnvisit && moment(returnvisit?.returnvisit_date).format('HH:mm:ss a');
    const navigate = useNavigate()
    return (
        <>
            {returnvisit && returnvisit.length ? <div className='p-3'>
                <div className='flex gap-2 items-center justify-between px-2'>
                    <p className='font-[600] text-[20px]'>{`Records for ${day}-${month}-${year}`}</p>
                    <div onClick={() => window.print()} className='flex gap-2 cursor-pointer items-center justify-center'>
                        <AiOutlinePrinter />
                        <span>Print Page</span>
                    </div>
                    <div className='text-white bg-primary90 text-[12px] font-[500] p-2 rounded-[10px]'>Download PDF</div>
                </div>
                <div onClick={() => navigate(-1)} className='flex cursor-pointer flex-1 items-center gap-2 my-8 font-[600] text-[24px] text-primary90'>
                    <IoReturnUpBackOutline />
                    <p>Return Visit</p>

                </div>
                <div className='font-[600] max-w-[20rem] mt-5 text-[16px] bg-primary10 p-2 border-[#2FCF97] border-[1.2px] rounded-[10px]'>General</div>
                <div className='grid grid-cols-1 md:grid-cols-2 py-2 gap-5'>
                    {/* 1 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Fever<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data.fever}</p>
                        </div>
                    </div>
                    {/* 2 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label >Headache<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data.headache}</p>
                        </div>
                    </div>
                    {/* 3 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Dizziness<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data.dizziness}</p>
                        </div>
                    </div>
                    {/* 4 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Weakness<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data.weakness}</p>
                        </div>
                    </div>
                    {/* 5 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Blurry Vision<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data.blurryvision}</p>
                        </div>
                    </div>
                </div>
                <div className='font-[600] max-w-[20rem] mt-5 text-[16px] bg-primary10 p-2 border-[#2FCF97] border-[1.2px] rounded-[10px]'>Pulmonary</div>
                <div className='grid grid-cols-1 md:grid-cols-2 py-2 gap-5'>
                    {/* 6 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Cough<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data.cough}</p>
                        </div>
                    </div>
                    {/* 7 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Difficulty Breathing<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data.difficultybreathing}</p>
                        </div>
                    </div>
                    {/* 8 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Persisitent Dry cough<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data.persisitentdrycough}</p>
                        </div>
                    </div>
                    {/* 9 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Unexplained weight loss<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data.unexplainedweightloss}</p>
                        </div>
                    </div>
                    {/* 10 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Night Sweats<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data.nightsweats}</p>
                        </div>
                    </div>
                    {/* 11 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Diagnosed with Tuberculosis<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data?.diagnosedwithtuberculosis}</p>
                        </div>
                    </div>
                    {/* 12 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Treated Tuberculosis<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data.treatedfortuberculosis}</p>
                        </div>
                    </div>
                    {/* 13 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Severe Tiredness<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data?.severetirednesss}</p>
                        </div>
                    </div>
                </div>
                {/* cardiovascular */}
                <div className='font-[600] max-w-[20rem] mt-5 text-[16px] bg-primary10 p-2 border-[#2FCF97] border-[1.2px] rounded-[10px]'>Cardiovascular</div>
                <div className='grid grid-cols-1 md:grid-cols-2 py-2 gap-5'>
                    {/* 8 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Palpitations<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data.palpitation}</p>
                        </div>
                    </div>
                    {/* 9 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Swelling of Feet<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data.swellingoffeet}</p>
                        </div>
                    </div>
                    {/* 10 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Severe Chest Pain<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data.severechestpain}</p>
                        </div>
                    </div>
                    {/* 11 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Severe Epigastric Pain<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data?.severeepigastricpain}</p>
                        </div>
                    </div>
                    {/* 12 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Peptic Ulcer Patient<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data.pepticulcerpatient}</p>
                        </div>
                    </div>
                    {/* 13 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Difficulty Lying flat<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data?.difficultylyingflat}</p>
                        </div>
                    </div>
                    {/* 14 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Severe Tiredness<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data?.severetirednesss}</p>
                        </div>
                    </div>
                </div>
                {/* Gastrointestinal */}
                <div className='font-[600] max-w-[20rem] mt-5 text-[16px] bg-primary10 p-2 border-[#2FCF97] border-[1.2px] rounded-[10px]'>Gastrointestinal</div>
                <div className='grid grid-cols-1 md:grid-cols-2 py-2 gap-5'>
                    {/* 8 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Severe Abdominal Pain<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data.severeabdominalpain}</p>
                        </div>
                    </div>
                    {/* 9 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Persisitent Vomiting<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data.vomiting}</p>
                        </div>
                    </div>
                    {/* 10 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Severe Diarrhoea<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data.diarrhoea}</p>
                        </div>
                    </div>
                </div>
                {/* urinary */}
                <div className='font-[600] max-w-[20rem] mt-5 text-[16px] bg-primary10 p-2 border-[#2FCF97] border-[1.2px] rounded-[10px]'>Urinary</div>
                <div className='grid grid-cols-1 md:grid-cols-2 py-2 gap-5'>
                    {/* 8 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Pain with Urination<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data.urinarypain}</p>
                        </div>
                    </div>
                    {/* 9 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>severe flank pain<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data.severeflankpain}</p>
                        </div>
                    </div>
                    {/* 10 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Blood In Urine<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data.bloodinurine}</p>
                        </div>
                    </div>
                    {/* 11 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Increased Urination<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data.increasedurination}</p>
                        </div>
                    </div>
                    {/* 12 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Wake up to Urinate<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data.wakeuptourinate}</p>
                        </div>
                    </div>
                    {/* 13 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Ants Around Urine<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data.antsaroundurine}</p>
                        </div>
                    </div>
                    {/* 14 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Increased Thirst<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data.increasedthirst}</p>
                        </div>
                    </div>
                </div>
                {/* Gynaecological */}
                <div className='font-[600] max-w-[20rem] mt-5 text-[16px] bg-primary10 p-2 border-[#2FCF97] border-[1.2px] rounded-[10px]'>Gynaecological</div>
                <div className='grid grid-cols-1 md:grid-cols-2 py-2 gap-5'>
                    {/* 8 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Vaginal Discharge<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data.vaginaldischarge}</p>
                        </div>
                    </div>
                    {/* 9 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Deep Pelvic Pain During Sex<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data.painduringsex}</p>
                        </div>
                    </div>
                    {/* 10 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Syphillis<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data.syphillis}</p>
                        </div>
                    </div>
                    {/* 11 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Syphillis Treatment<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data.syphillistreatment}</p>
                        </div>
                    </div>
                    {/* 12 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Care since last Visit<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data.receivedcaresincelastvisit}</p>
                        </div>
                    </div>
                    {/* 13 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Care Documentation<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data.whatcarewasprovided}</p>
                        </div>
                    </div>
                    {/* 14 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Outcome of the Care<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data.outcomeofthecare}</p>
                        </div>
                    </div>
                    {/* 15 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Have you been taking prescribed drugs?<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data.takingprescribeddrugs}</p>
                        </div>
                    </div>
                    {/* 16 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>Problem taking drugs?<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data.problemtakingdrugs}</p>
                        </div>
                    </div>
                    {/* 17 */}
                    <div className='flex gap-2 items-center justify-between'>
                        <div>
                            <label>What were the Problems?<span className="ml-2 text-red-500">*</span></label>
                            <p className='text-secondary30 text-[14px]'>{data.problemmedication}</p>
                        </div>
                    </div>
                </div>

            </div> :
                <div>
                    <Notfound />
                </div>
            }
        </>
    )
}

export default patientdetailreturn