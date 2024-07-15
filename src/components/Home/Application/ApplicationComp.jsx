import { useState } from "react"
import AppDownload from "./AppDownload"

export default function ApplicationComp() {
    const [dataApp , setDataApp] = useState([
        {title : "دانلود از بازار" , description : "نسخه اندروید" , urlImgae : "../../images/bazar.png"},
        {title : "دانلود از سیب اپ" , description : "نسخه iOS" , urlImgae : "../../images/sibApp.png"},
        {title : "دانلود از گوگل‌پلی" , description : "نسخه اندروید" , urlImgae : "../../images/googlePly.png"},
        {title : "دانلود از اپ‌استور" , description : "نسخه iOS" , urlImgae : "../../images/appStore.png"},
    ])
  return (
    <div className="bg-teal-700 rounded-xl p-5 my-10 flex justify-between items-center flex-wrap gap-6">
        <div className="flex flex-col gap-2 text-sm justify-center items-center mx-auto">
            <h1 className="text-slate-100 font-danabold text-center">
            با دانلود اپلیکیشن کتابخونه خریدهاتو راحت کن!
            </h1>
            <p className="text-slate-200 ">
            قابل دریافت از تمامی مارکت‌های ایرانی و بین‌المللی
            </p>
        </div>
        <div className="flex gap-4 flex-wrap justify-evenly items-center mx-auto">
            {dataApp.map((app , key) =>(
                <AppDownload title={app.title} description={app.description} url={app.urlImgae} key={key}/>
            ))}
        </div>
    </div>
  )
}
