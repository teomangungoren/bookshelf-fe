import Link from "next/link";

export const Post = () =>{
    return(
        <div className="flex flex-1">
            <Link href="/post">
            Posts
            </Link>
        </div>
    )
}