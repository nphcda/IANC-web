import moment from 'moment'
import React from 'react'
import { AiOutlinePrinter } from 'react-icons/ai'
import { IoReturnUpBackOutline } from 'react-icons/io5'
import { useNavigate } from 'react-router-dom'

const Patientdetailfirst = ({ firstvisit }) => {
    // console.log(firstvisit)
    const year = moment(firstvisit && firstvisit[0]?.firstvisit_date).format('YYYY');
    const month = moment(firstvisit && firstvisit[0]?.firstvisit_date).format('MM');
    const day = moment(firstvisit && firstvisit[0]?.firstvisit_date).format('DD');
    const navigate = useNavigate()
    return (
        <div className='p-3'>
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
                <p>First Visit</p>

            </div>
            <div className='font-[600] max-w-[20rem] text-[16px] bg-primary10 p-2 border-[#2FCF97] border-[1.2px] rounded-[10px]'>Daily Habit and Lifestyle</div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-8'>
                {/* 1 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Do you smoke?<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.doyousmoke}</p>
                    </div>
                </div>
                {/* 2 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label >Do you drink alcohol?<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.doyoudrinkalcohol}</p>
                    </div>
                </div>
                {/* 3 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Do you use harmful substances?<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.othersubstances}</p>
                    </div>
                </div>
                {/* 11 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Who do you Live with?<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.whodoyoulivewith}</p>
                    </div>
                </div>
                {/* 12 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Stopped from leaving the house?<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.stoppedfromleavingthehouse}</p>
                    </div>
                </div>
                {/* 12 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Anyone threatened your life?<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.threatenedyourlife}</p>
                    </div>
                </div>
                {/* 13 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Anyone abused you physically?<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.abusedphysically}</p>
                    </div>
                </div>
            </div>
            <div className='font-[600] max-w-[20rem] my-5 text-[16px] bg-primary10 p-2 border-[#2FCF97] border-[1.2px] rounded-[10px]'>Physical examination</div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-8'>
                {/* 1 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Conjunctiva<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.conjunctiva}</p>
                    </div>
                </div>
                {/* 2 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label >Sclera<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.sclera}</p>
                    </div>
                </div>
                {/* 3 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Blood Pressure<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.bloodpressure}</p>
                    </div>
                </div>
                {/* 11 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Respiratory Rate<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.respiratoryrate}</p>
                    </div>
                </div>
                {/* 12 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Temperature<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.temperature}</p>
                    </div>
                </div>
                {/* 12 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Pulserate<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.pulserate}</p>
                    </div>
                </div>
                {/* 13 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Visual Breast Examination<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.breastexamination}</p>
                    </div>
                </div>
                {/* 13 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Visual Breast Examination (Abnormal)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.abnormalbreastexamination}</p>
                    </div>
                </div>
                {/* 13 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Abdomen Scars<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.abdomenScars}</p>
                    </div>
                </div>
                {/* 13 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Fundal Height<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.fundalheight}</p>
                    </div>
                </div>
                {/* 13 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Presentation<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.presentation}</p>
                    </div>
                </div>
                {/* 13 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Descent<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.descent}</p>
                    </div>
                </div>
                {/* 13 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Position Of Foetus<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.positionoffoetus}</p>
                    </div>
                </div>
                {/* 13 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Genital Examination<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.genitalexamination}</p>
                    </div>
                </div>
            </div>
            {/* obstetric history */}
            <div className='font-[600] max-w-[20rem] my-5 text-[16px] bg-primary10 p-2 border-[#2FCF97] border-[1.2px] rounded-[10px]'>Obstetric History</div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-8'>
                {/* 1 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Convulsions during pregnancy or
                            during/after childbirth<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.convulsionsduringpregnancy}</p>
                    </div>
                </div>
                {/* 2 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label >Caesarean section, uterine rupture, or
                            uterine surgery during childbirth<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.caesarean}</p>
                    </div>
                </div>
                {/* 3 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Tears through the sphincter and/or
                            rectum during childbirth<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.tearsthroughsphincter}</p>
                    </div>
                </div>
                {/* 4 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Postpartum haemorrhage<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.postpartiumhaemorrghage}</p>
                    </div>
                </div>
                {/* 5 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Stillbirths<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.stillbirths}</p>
                    </div>
                </div>
                {/* 6 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Premature deliveries<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.prematuredeliveries}</p>
                    </div>
                </div>
                {/* 7 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Low birthweight babies<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.lowbirthbabies}</p>
                    </div>
                </div>
                {/* 8 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Babies who died before 1 month of age<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.babieswhodied}</p>
                    </div>
                </div>
                {/* 9 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Three or more spontaneous miscarriages<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.miscarriages}</p>
                    </div>
                </div>
                {/* 10 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Others (please specify)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.otherinputobstetrichistory}</p>
                    </div>
                </div>
                {/* 11 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Year Of pregnancy<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.yearofpregnancy}</p>
                    </div>
                </div>
                {/* 11 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Carried to Term<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.carriedtoterm}</p>
                    </div>
                </div>
                {/* 11 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Mode of Delivery<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.modeofdelivery}</p>
                    </div>
                </div>
                {/* 11 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Weight Of The Baby<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.weightofbaby}</p>
                    </div>
                </div>
                {/* 11 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Sex Of The Baby<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.sexofbaby}</p>
                    </div>
                </div>
                {/* 12 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Baby Cried At Birth?<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.babycriedafterbirth}</p>
                    </div>
                </div>
                {/* 13 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Complications After Delivery?<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.complicationsafterdelivery}</p>
                    </div>
                </div>
                {/* 14 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Complication after Delivery<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.specifycomplicationsafterdelivery}</p>
                    </div>
                </div>
                {/* 14 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Breastfed Exclusively<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.breastfedexclusively}</p>
                    </div>
                </div>
            </div>
            {/* medical history */}
            <div className='font-[600] max-w-[20rem] my-5 text-[16px] bg-primary10 p-2 border-[#2FCF97] border-[1.2px] rounded-[10px]'>Medication History</div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-8'>
                <p className='text-primary90 font-[500] col-span-full text-[20px]'>General</p>
                {/* 1 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Fever<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.fever}</p>
                    </div>
                </div>
                {/* 2 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label >Chills<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.chills}</p>
                    </div>
                </div>
                {/* 3 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Headaches<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.headaches}</p>
                    </div>
                </div>
                {/* 4 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Dizziness<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.dizziness}</p>
                    </div>
                </div>
                {/* 5 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>convulsions<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.convulsions}</p>
                    </div>
                </div>
                {/* 6 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Weakness<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.weakness}</p>
                    </div>
                </div>
                {/* 7 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Blurry vision<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.blurryvision}</p>
                    </div>
                </div>
                <p className='text-primary90 font-[500] col-span-full text-[20px]'>Pulmonary</p>
                {/* 8 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Cough<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.cough}</p>
                    </div>
                </div>
                {/* 9 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Difficulty Breathing<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.difficultybreathing}</p>
                    </div>
                </div>
                {/* 9 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Persisitent Dry Cough<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.persistentdrycough}</p>
                    </div>
                </div>
                {/* 9 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Persisitent Dry Cough Duration<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.persistentdrycoughyes}</p>
                    </div>
                </div>
                {/* 9 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Unexplained Weight loss<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.progressiveweightloss}</p>
                    </div>
                </div>
                {/* 9 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Unexplained Weight loss Duration<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.progressiveweightlossyes}</p>
                    </div>
                </div>
                {/* 26 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Night Sweats<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.nightsweats}</p>
                    </div>
                </div>
                {/* 26 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Night Sweat Duration<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.nightsweatsyes}</p>
                    </div>
                </div>
                {/* 27 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Tuberculosis<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.diagnosedwithtuberculosis}</p>
                    </div>
                </div>
                {/* 27 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Tuberculosis (How long)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.diagnosedwithtuberculosisyes}</p>
                    </div>
                </div>
                {/* 27 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Treated For Tuberculosis<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.treatedTBpreviously}</p>
                    </div>
                </div>
                {/* 27 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Treated For Tuberculosis (How long)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.treatedTBpreviouslyyes}</p>
                    </div>
                </div>
                <p className='text-primary90 font-[500] col-span-full text-[20px]'>Cardiovascular</p>
                {/* 28 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Palpitations<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.palpitations}</p>
                    </div>
                </div>
                {/* 28 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Palpitations (How long)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.palpitationyes}</p>
                    </div>
                </div>
                {/* 29 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Swelling Feet<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.swellingfeet}</p>
                    </div>
                </div>
                {/* 29 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Swelling Feet (How long)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.swellingfeetyes}</p>
                    </div>
                </div>
                {/* 10 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Severe chest pain<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.severechestpain}</p>
                    </div>
                </div>
                {/* 10 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Severe chest pain (How long)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.severechestpainyes}</p>
                    </div>
                </div>
                {/* 11 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Severe Epigastric pain<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.severeepigastricpain}</p>
                    </div>
                </div>
                {/* 11 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Severe Epigastric pain (How long)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.severeepigastricpainyes}</p>
                    </div>
                </div>
                {/* 13 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Peptic Ulcer Patient<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.pepticulcerpatient}</p>
                    </div>
                </div>
                {/* 13 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Peptic Ulcer Patient (How long)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.pepticulcerpatientyes}</p>
                    </div>
                </div>
                {/* 14 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Severe Tiredness<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.severetiredness}</p>
                    </div>
                </div>
                {/* 14 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Severe Tiredness (How long)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.severetirednessyes}</p>
                    </div>
                </div>
                {/* 14 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Difficulty Lying Flat<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.difficultytosleep}</p>
                    </div>
                </div>
                {/* 14 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Difficulty Lying Flat (How long)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.difficultytosleepyes}</p>
                    </div>
                </div>
                <p className='text-primary90 font-[500] col-span-full text-[20px]'>BMI Calculator</p>
                {/* 28 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>BMI<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.bmi}</p>
                    </div>
                </div>
                <p className='text-primary90 font-[500] col-span-full text-[20px]'>Gastrointestinal</p>
                {/* 15 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Severe Abdominal Pain<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.severeabdominalpain}</p>
                    </div>
                </div>
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Severe Abdominal Pain (How long)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.severeabdominalpainyes}</p>
                    </div>
                </div>
                {/* 16 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Persisitent vomiting<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.persistentvomiting}</p>
                    </div>
                </div>
                {/* 16 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Persisitent vomiting (How long)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.persistentvomitingyes}</p>
                    </div>
                </div>
                {/* 17 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Severe Diarrhoea<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.severediarrhoea}</p>
                    </div>
                </div>
                {/* 17 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Severe Diarrhoea (How long)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.severediarrhoeayes}</p>
                    </div>
                </div>
                <p className='text-primary90 font-[500] col-span-full text-[20px]'>Urinary</p>
                {/* 18 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Pain with Urination<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.painwithurination}</p>
                    </div>
                </div>
                {/* 18 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Pain with Urination (How long)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.painwithurinationyes}</p>
                    </div>
                </div>
                {/* 19 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Severe Flank Pain<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.severeflankpain}</p>
                    </div>
                </div>
                {/* 19 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Severe Flank Pain (How long)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.severeflankpainyes}</p>
                    </div>
                </div>
                {/* 20 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Blood In Urine<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.bloodinurine}</p>
                    </div>
                </div>
                {/* 20 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Blood In Urine (How long)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.bloodinurineyes}</p>
                    </div>
                </div>
                {/* 21 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Increased Urination<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.increasedurination}</p>
                    </div>
                </div>
                {/* 21 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Increased Urination (How long)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.increasedurinationyes}</p>
                    </div>
                </div>
                {/* 21 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Ants around Urine<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.noticedantsaroundplaceurinated}</p>
                    </div>
                </div>
                {/* 22 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Increased Thirst<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.increasedthirst}</p>
                    </div>
                </div>
                {/* 22 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Increased Thirst (How long)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.increasedthirstyes}</p>
                    </div>
                </div>
                <p className='text-primary90 font-[500] col-span-full text-[20px]'>Gynaecological</p>
                {/* 23 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Vaginal Discharge<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.vaginaldischarge}</p>
                    </div>
                </div>
                {firstvisit?.vaginaldischarge == "Abnormal" && <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Vaginal Discharge (How long)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.vaginaldischargeyes}</p>
                    </div>
                </div>}
                {/* 24 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Deep Pelvic Pain<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.deeppelvicpain}</p>
                    </div>
                </div>
                {/* 24 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Deep Pelvic Pain (How long)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.deeppelvicpainyes}</p>
                    </div>
                </div>
                {/* 25 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Syphillis<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.syphilis}</p>
                    </div>
                </div>
                {/* 25 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Syphillis (How long)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.syphilisyes}</p>
                    </div>
                </div>
                {/* 25 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Syphillis treatment<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.syphilistreatment}</p>
                    </div>
                </div>



            </div>
            {/* past medical history */}
            <div className='font-[600] max-w-[20rem] my-5 text-[16px] bg-primary10 p-2 border-[#2FCF97] border-[1.2px] rounded-[10px]'>Past Medical History</div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-8'>
                {/* 1 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Hypertension<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.hypertension}</p>
                    </div>
                </div>
                {/* 1 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Hypertension (How Long)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.hypertensionyes}</p>
                    </div>
                </div>
                {/* 2 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label >Heart Disease<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.heartdisease}</p>
                    </div>
                </div>
                {/* 2 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label >Heart Disease (How Long)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.heartdiseaseyes}</p>
                    </div>
                </div>
                {/* 3 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Anaemia in the last 3 months<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.anaemia}</p>
                    </div>
                </div>
                {/* 3 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Anaemia in the last 3 months (How long)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.anaemiayes}</p>
                    </div>
                </div>
                {/* 4 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Kidney Disease<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.kidneydisease}</p>
                    </div>
                </div>
                {/* 4 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Kidney Disease (How Long)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.kidneydiseaseyes}</p>
                    </div>
                </div>
                {/* 5 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Sickle Cell<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.sicklecell}</p>
                    </div>
                </div>
                {/* 5 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Sickle Cell (How Long)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.sicklecellyes}</p>
                    </div>
                </div>
                {/* 6 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Diabetes<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.diabetes}</p>
                    </div>
                </div>
                {/* 7 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Diabetes (How Long)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.diabetesyes}</p>
                    </div>
                </div>
                {/* 8 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Goitre<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.goitre}</p>
                    </div>
                </div>
                {/* 9 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Goitre (How Long)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.goitreyes}</p>
                    </div>
                </div>
                {/* 9 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>HIV/AIDS<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.hivaids}</p>
                    </div>
                </div>
                {/* 9 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>HIV/AIDS (How Long)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.hivaidsyes}</p>
                    </div>
                </div>
                {/* 9 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Currently on Treatment for HIV/AIDS?<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.hivaidstreatment}</p>
                    </div>
                </div>
                {/* 9 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Covid19<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.covid19}</p>
                    </div>
                </div>
                {/* 9 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Covid19 (How Long)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.covid19yes}</p>
                    </div>
                </div>
                {/* 26 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Any other serious chronic illness<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.otherseriouschronicillnesses}</p>
                    </div>
                </div>
                {/* 26 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Specify other serious chronic illness<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.specifyseriouschronicillnesses}</p>
                    </div>
                </div>
                {/* 27 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Ever had Surgery?<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.hadsurgery}</p>
                    </div>
                </div>
                {/* 27 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Reason For Surgery<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.specifyhadsurgery}</p>
                    </div>
                </div>



            </div>
            {/* drug history */}
            <div className='font-[600] max-w-[20rem] my-5 text-[16px] bg-primary10 p-2 border-[#2FCF97] border-[1.2px] rounded-[10px]'>Drug History</div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-8'>
                {/* 1 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>History of Allergies?<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.historyofallergy}</p>
                    </div>
                </div>
                {/* 1 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Allergies<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.allergies}</p>
                    </div>
                </div>
                <p className='text-primary90 font-[500] col-span-full text-[20px]'>Are you currently taking any of the following drugs/medications</p>
                {/* 2 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label >Herbal remedies<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.herbalremedies}</p>
                    </div>
                </div>
                {/* 2 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label >Over the counter drugs<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.otcdrugs}</p>
                    </div>
                </div>
                {/* 3 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Vitamins<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.vitamins}</p>
                    </div>
                </div>
                {/* 3 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Dietary Supplements<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.anaemiayes}</p>
                    </div>
                </div>
                {/* 4 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Type of Dietary supplement<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.typeofdietarysupplement}</p>
                    </div>
                </div>
                {/* 4 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Others<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.otherdrugs}</p>
                    </div>
                </div>
                {/* 5 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Tetanus Vaccination<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.tetanus}</p>
                    </div>
                </div>
                {/* 5 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Tetanus Doses<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.tetanusdoses}</p>
                    </div>
                </div>
                {/* 6 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>When was the last Dose given?<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.lasttetanusdose}</p>
                    </div>
                </div>
                {/* 7 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Covid19 Vaccination<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.covidvaccination}</p>
                    </div>
                </div>
            </div>
            {/* family history */}
            <div className='font-[600] max-w-[20rem] my-5 text-[16px] bg-primary10 p-2 border-[#2FCF97] border-[1.2px] rounded-[10px]'>Family History</div>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-5 mt-8'>
                {/* 1 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Client already has children?<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.patienthaschildren}</p>
                    </div>
                </div>
                {/* 1 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Have you ever breastfed before?<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.haveyoubreastfedbefore}</p>
                    </div>
                </div>
                {/* 2 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label >Problems related to breastfeeding?<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.breastfeedingproblems}</p>
                    </div>
                </div>
                {/* 2 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label >Problems related to breastfeeding? (specify)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.breastfeedingproblemsmoredetails}</p>
                    </div>
                </div>
                {/* 2 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label >Baby less than a year old?<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.babylessthanayear}</p>
                    </div>
                </div>
                {/* 2 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label >Are you still breastfeeding?<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.stillbreastfeeding}</p>
                    </div>
                </div>
                {/* 3 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Came with a child under 5years?<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.camewithachildunder5years}</p>
                    </div>
                </div>
                {/* 3 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Has Unvaccinated children at home?<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.hasunvaccinatedchildren}</p>
                    </div>
                </div>
                {/* 3 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Epilepsy<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.familyepilepsy}</p>
                    </div>
                </div>
                {/* 3 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Epilepsy (How long)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.familyepilepsyyes}</p>
                    </div>
                </div>
                {/* 4 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Hypertension<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.familyhypertension}</p>
                    </div>
                </div>
                {/* 4 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Hypertension (How long)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.familyhypertensionyes}</p>
                    </div>
                </div>
                {/* 4 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Asthma<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.familyasthma}</p>
                    </div>
                </div>
                {/* 5 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Asthma (How long)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.familyasthmayes}</p>
                    </div>
                </div>
                {/* 5 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Diabetes<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.familydiabetes}</p>
                    </div>
                </div>
                {/* 5 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Diabetes (How long)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.familydiabetesyes}</p>
                    </div>
                </div>
                {/* 5 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Sickle cell<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.familysicklecell}</p>
                    </div>
                </div>
                {/* 5 */}
                <div className='flex gap-2 items-center justify-between'>
                    <div>
                        <label>Sickle cell (How long)<span className="ml-2 text-red-500">*</span></label>
                        <p className='text-secondary30 text-[14px]'>{firstvisit?.familysicklecellyes}</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Patientdetailfirst