import Category from "@/app/components/category/category";
import BookSlider from "@/app/components/popularWishlist/page";
import {Fragment} from "react";
import UserBookSlider from "@/app/components/popularUserBook/page";

export default function Home() {
  return (
      <Fragment>
       <Category/>
          <BookSlider/>
          <UserBookSlider/>
      </Fragment>
  )
}
