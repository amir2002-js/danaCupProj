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
				<div className="flex max-lg:flex-wrap justify-center gap-9 max-sm:*:flex-grow">
					{/* map */}
					<div className="flex flex-col gap-6">
						<h1 className="font-danablack text-nowrap">
							نقشه کتابخونه
						</h1>
						<ul className="flex flex-col gap-3 text-nowrap">
							<li className="">
								<button className="text-slate-500 hover:text-black">
									درباره ما
								</button>
							</li>
							<li className="">
								<button className="text-slate-500 hover:text-black">
									تماس با ما
								</button>
							</li>
							<li className="">
								<button className="text-slate-500 hover:text-black">
									فروشگاه
								</button>
							</li>
							<li className="">
								<button className="text-slate-500 hover:text-black">
									تخفیفات ویژه
								</button>
							</li>
							<li className="">
								<button className="text-slate-500 hover:text-black">
									مجله خبری
								</button>
							</li>
							<li className="">
								<button className="text-slate-500 hover:text-black">
									نویسندگان
								</button>
							</li>
							<li className="">
								<button className="text-slate-500 hover:text-black">
									ناشران
								</button>
							</li>
						</ul>
					</div>
					{/* gide */}
					<div className="flex flex-col gap-6">
						<h1 className="font-danablack text-nowrap">
							راهنمای خرید
						</h1>
						<ul className="flex flex-col gap-3 text-nowrap">
							<li className="">
								<button className="text-slate-500 hover:text-black">
									روش ثبت سفارش
								</button>
							</li>
							<li className="">
								<button className="text-slate-500 hover:text-black">
									نحوه ارسال کالا
								</button>
							</li>
							<li className="">
								<button className="text-slate-500 hover:text-black">
									راهنمای پرداخت
								</button>
							</li>
							<li className="">
								<button className="text-slate-500 hover:text-black">
									قوانین و مقررات
								</button>
							</li>
							<li className="">
								<button className="text-slate-500 hover:text-black">
									روش‌های پرداخت
								</button>
							</li>
							<li className="">
								<button className="text-slate-500 hover:text-black">
									خرید عمده کتاب
								</button>
							</li>
							<li className="">
								<button className="text-slate-500 hover:text-black">
									رویه ارسال سفارش
								</button>
							</li>
						</ul>
					</div>
					{/* customers */}
					<div className="flex flex-col gap-6">
						<h1 className="font-danablack text-nowrap">
							خدمات مشتریان
						</h1>
						<ul className="flex flex-col gap-3 text-nowrap">
							<li className="">
								<button className="text-slate-500 hover:text-black">
									سوالات متداول
								</button>
							</li>
							<li className="">
								<button className="text-slate-500 hover:text-black">
									کدهای تخفیف
								</button>
							</li>
							<li className="">
								<button className="text-slate-500 hover:text-black">
									رویه بازگشت کالا
								</button>
							</li>
							<li className="">
								<button className="text-slate-500 hover:text-black">
									حریم خصوصی
								</button>
							</li>
							<li className="">
								<button className="text-slate-500 hover:text-black">
									گزارش مشکلات سایت
								</button>
							</li>
							<li className="">
								<button className="text-slate-500 hover:text-black">
									انتقادات و پیشنهادات
								</button>
							</li>
							<li className="">
								<button className="text-slate-500 hover:text-black">
									فرصت‌های شغلی
								</button>
							</li>
						</ul>
					</div>
					{/* location */}
					<div className="flex flex-col gap-6">
						<h1 className="font-danablack text-nowrap">نشانی ما</h1>
						<ul className="flex flex-col gap-3 ">
							<li className="flex justify-start items-start gap-2">
								<div className="min-w-8">
									<MdLocationPin className="text-3xl" />
								</div>
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
								<button className="text-slate-500 hover:text-black">
									info@ketabkhoone.com
								</button>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="max-w-maxWidth container mt-10 h-px bg-slate-300"></div>
			<div className="max-w-maxWidth container text-nowrap flex justify-center">
				<p className="text-slate-400 md:p-10 p-4 text-sm text-center">
					کلیه حقوق مادی و معنوی برای سایت کتابخونه محفوظ است.
				</p>
			</div>
		</div>
	);
}
