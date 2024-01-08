import { IoPerson } from "react-icons/io5";
import Link from "next/link";


export const User = () =>{
    return (
        <div>
           <Link href="/register"><IoPerson size="25"/> </Link>
        </div>
    )
  }