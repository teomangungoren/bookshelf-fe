import {Logo} from "@/app/components/navbar/logo";
import {Search} from "@/app/components/navbar/search";
import {User} from "@/app/components/navbar/user";
import {Wishlist} from "@/app/components/navbar/wishlist";
import Demo from "@/app/components/theme/page";
import {Post} from "@/app/components/navbar/post";


export const Navbar = () => {
    return(
        <div className="flex items-center justify-between gap-3 md:gap-10 px-3 md:px-10 h-16 bg-blue-600 text-blue-100">
            <Logo/>
            <Search/>
            <div className="flex items-center justify-between gap-3 md:gap-10 px-3 md:px-10">
                <Post/>
                <User/>
                <Wishlist/>
            </div>
        </div>
    )
}

