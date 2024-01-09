import Category from "@/app/components/category/category";
import BookSlider from "@/app/components/popular/page";
import {Fragment} from "react";

export default function Home() {
  return (
      <Fragment>
   <Category/>
  <BookSlider/>
      </Fragment>
  )
}
