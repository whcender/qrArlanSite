
import Linkler from './linkler'
import Mobilelink from './mobilelink'
import Arlan from "@/components/navbar/ar"


const index = () => {
    return (
        <div className='bg-black    '>
            <div className='flex items-center justify-between w-[65%] m-auto max-md:w-[90%] max-lg:w-[90%]'>
                <div className='flex gap-5'>
                    <img className='w-20  max-md:w-16' src="logobeyaz.png" alt="" />

                    <div className='flex items-center gap-7 max-md:hidden '>
                        <Linkler />
                    </div>
                </div>
                <div className='flex items-center gap-7 md:hidden'><Mobilelink /></div>
                <div className='max-md:hidden'>
                    <Arlan />
                </div>
            </div>

        </div>
    )
}

export default index