import Link from "next/link";


export const Logo = () =>{
      return (
          <div className="text-lg md:text-2xl">
              <Link href="/">
                  BookShelf
              </Link>
          </div>
      )
    }