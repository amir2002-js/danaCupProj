import BestSellerBook from "./BestSellerBook"

export const BestSellerBooks = () => {
  return (
    <div className="my-10">
        <div>
            <p className="dark:text-white/60 font-danabold my-4">
                پر فروش ترین کتاب ها
            </p>
        </div>
        <BestSellerBook/>
    </div>
  )
}
