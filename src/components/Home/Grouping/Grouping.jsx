import { LuAirplay, LuBookMarked, LuCoins, LuHeart } from 'react-icons/lu';
import HeadCough from '../headCough/HeadCough';
import Group from './Group';
export default function Grouping() {
  return (
    <div className='my-10'>
        <HeadCough title={"دسته‌بندی کتاب‌ها"}/>
        <div className="flex justify-between items-center *:flex-grow gap-5 flex-wrap my-5">
        <Group title={"کتاب‌های صوتی"} about={"cccc"} icon={<LuBookMarked className='text-3xl'/>}/>
        <Group title={"رمان عاشقانه"} about={"cccc"} icon={<LuHeart className='text-3xl'/>}/>
        <Group title={"درسی و کمک‌درسی"} about={"cccc"} icon={<LuAirplay className='text-3xl'/>}/>
        <Group title={"کسب‌وکار و تجارت"} about={"cccc"} icon={<LuCoins className='text-3xl'/>}/>
        </div>
    </div>
  )
}
