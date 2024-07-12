import { BooksBox } from "../DisCountBox/BooksBox";

export default function PublishersBox() {
    const listBooks = [
    {
        title: "بزرگراه لینکن",
        disCountedPrice: "210000 تومان",
        price: "260000 تومان",
        urlBook: "../../images/publisher1.png",
        id: 1000,
    },
    {
        title: "نگذار بماند",
        disCountedPrice: "150000 تومان",
        price: "200000 تومان",
        urlBook: "../../images/publisher2.png",
        id: 1001,
    },
    {
        title: "معجزه‌گر خاموش",
        disCountedPrice: "300000 تومان",
        price: "350000 تومان",
        urlBook: "../../images/publisher3.png",
        id: 1002,
    },
    {
        title: "همسایه‌ی فضایی: فضایی‌ها برای حمله می آیند؟",
        disCountedPrice: "70000 تومان",
        price: "90000 تومان",
        urlBook: "../../images/publisher4.png",
        id: 1003,
    },
    {
        title: "همسایه‌ی فضایی: تازه وارد",
        disCountedPrice: "318000 تومان",
        price: "455000 تومان",
        urlBook: "../../images/publisher5.png",
        id: 1004,
    },
];
  return (
    <div>
        <div className="flex justify-start items-center py-2">
            <p className="dark:text-white/60 font-danabold">
                تازه های نشر
            </p>
        </div>
        <BooksBox listBooks={listBooks}/>
    </div>
  )
}
