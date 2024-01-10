import Image from "next/image"
import {Rating} from "@mui/material";
import AddInput from "@/app/components/userBook/addInput";
import AddUserWishlist from "@/app/components/userWishList/AddInput";
import Link from "next/link";
import "./bookcard.css"

export const BookCard=({book}:{book:any})=>{
    return(
        <div className="w-[240px] cursor-pointer flex flex-col shadow-lg pg-2 ml-16 mb-10 rounded-md bookcard-bg" >
          <div className="relative h-[200px]">
              <Link href={`/book/${book.id}`} >
             <Image src={book.imageUrl} fill alt="" className="object-contain"/>
              </Link>
          </div>
            <div className="text-center m-5">
                <div className="text-black">{book.title}</div>
                <div>
                    <Rating
                     name="rating"
                     defaultValue={book.totalRating}
                     precision={0.5}
                     readOnly
                    />

                    <AddInput bookId={book.id}/>
                    <AddUserWishlist bookId={book.id}/>
                </div>
            </div>
        </div>
    )
}
