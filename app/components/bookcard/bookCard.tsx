import Image from "next/image"
import {Rating} from "@mui/material";

export const BookCard=({book}:{book:any})=>{
    return(
        <div className="w-[240px] cursor-pointer flex flex-col shadow-lg pg-2 rounded-md bg-blend-soft-light" >
          <div className="relative h-[200px]">
             <Image src={book.imageUrl} fill alt="" className="object-contain"/>
          </div>
            <div className="text-center">
                <div className="text-black">{book.title}</div>
                <div>
                    <Rating
                     name="rating"
                     defaultValue={book.totalRating}
                     precision={0.5}
                     readOnly
                    />
                </div>
            </div>
        </div>
    )
}
