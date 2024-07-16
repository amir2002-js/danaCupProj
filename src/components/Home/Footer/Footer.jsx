import { TiLocation, TiPhone } from "react-icons/ti";
import Logo from "../Navbar/Logo";
import { FaInstagram, FaTelegramPlane, FaWhatsapp } from "react-icons/fa";
import { CgPhone } from "react-icons/cg";
import { MdLocationPin, MdOutlineMail, MdPhoneEnabled } from "react-icons/md";

export default function Footer() {
	return (
		<div className="dark:text-slate-100 mt-14">
			<div className="max-w-maxWidth container py-5 flex max-lg:flex-wrap gap-10">
				<div className="flex flex-col gap-10 items-start col-span-4 max-md:flex-grow">
					<Logo />
					<p className="">
						اگه شما هم از علاقه‌مندان پروپاقرص کتاب و کتابخوانی
						هستید و لذت خواندن کتاب را با هیچ چیزی عوض نمی‌کنید،
						کتابخونه برای شماست! کتابخونه با داشتن بیش از ۱۴۰ هزار
						عنوان کتاب مختلف از پلتفرم‌های خرید اینترنتی کتاب محسوب
						می شود که امکان این‌که کتاب مورد نظرتان چه در حوزه‌های
						عمومی و چه در حوزه‌های رمان‌های خارجی و کمک‌درسی در آن
						یافت نشود بسیار بسیار اندک است.
					</p>
					<div className="text-3xl flex gap-2">
						<FaTelegramPlane className="text-blue-500" />
						<FaInstagram className="text-purple-500" />
						<FaWhatsapp className="text-teal-500" />
					</div>
				</div>
				<div className="flex max-lg:flex-wrap justify-center gap-9">
					{/* map */}
					<div className="flex flex-col gap-6">
						<h1 className="font-danablack text-nowrap">
							نقشه کتابخونه
						</h1>
						<ul className="flex flex-col gap-3 text-nowrap">
							<li className="">درباره ما</li>
							<li className="">تماس با ما</li>
							<li className="">فروشگاه</li>
							<li className="">تخفیفات ویژه</li>
							<li className="">مجله خبری</li>
							<li className="">نویسندگان</li>
							<li className="">ناشران</li>
						</ul>
					</div>
					{/* gide */}
					<div className="flex flex-col gap-6">
						<h1 className="font-danablack text-nowrap">
							راهنمای خرید
						</h1>
						<ul className="flex flex-col gap-3 text-nowrap">
							<li className="">روش ثبت سفارش</li>
							<li className="">نحوه ارسال کالا</li>
							<li className="">راهنمای پرداخت</li>
							<li className="">قوانین و مقررات</li>
							<li className="">روش‌های پرداخت</li>
							<li className="">خرید عمده کتاب</li>
							<li className="">رویه ارسال سفارش</li>
						</ul>
					</div>
					{/* customers */}
					<div className="flex flex-col gap-6">
						<h1 className="font-danablack text-nowrap">
							خدمات مشتریان
						</h1>
						<ul className="flex flex-col gap-3 text-nowrap">
							<li className="">سوالات متداول</li>
							<li className="">کدهای تخفیف</li>
							<li className="">رویه بازگشت کالا</li>
							<li className="">حریم خصوصی</li>
							<li className="">گزارش مشکلات سایت</li>
							<li className="">انتقادات و پیشنهادات</li>
							<li className="">فرصت‌های شغلی</li>
						</ul>
					</div>
					{/* location */}
					<div className="flex flex-col gap-6">
						<h1 className="font-danablack text-nowrap">نشانی ما</h1>
						<ul className="flex flex-col gap-3 ">
							<li className="flex justify-start items-start gap-2">
								<MdLocationPin className="text-3xl" />
								<p>
									اصفهان، خیابان فردوسی، فرعی سوم، کوچه
									بهارستان، ساختمان آبشار، واحد ۴
								</p>
							</li>
							<li className="flex justify-start items-center gap-2">
								<MdPhoneEnabled className="text-3xl" />
								<p>0914000000</p>
							</li>
							<li className="flex justify-start items-center gap-2">
								<MdOutlineMail className="text-3xl" />
								<p>info@ketabkhoone.com</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="max-w-maxWidth container mt-10 h-px bg-slate-300"></div>
			<div className="max-w-maxWidth container text-nowrap flex justify-center">
				<p className="text-slate-400 p-10">
					کلیه حقوق مادی و معنوی برای سایت کتابخونه محفوظ است.
				</p>
			</div>
		</div>
	);
}
