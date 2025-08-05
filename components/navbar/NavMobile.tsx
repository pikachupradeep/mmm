'use client'
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { navLinks } from "@/constant";
import Link from "next/link";
import { RiMenu4Fill } from "react-icons/ri";
import { usePathname } from 'next/navigation'

export function SheetDemo() {

    const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="bg-transparent" variant="outline">
        <RiMenu4Fill className="text-gray-300" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Logo</SheetTitle>
          <SheetDescription>
            Next Wizards Information Technology.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 p-4">
            {navLinks.map((item)=>(
                <div key={item.id} className="flex flex-col items-start mb-12 w-full">
                <SheetDescription>
                <SheetClose asChild>
                    <Link className={`${pathname === item.link && 'text-gray-800'} w-full text-nowrap`} href={item.link}>{item.list}</Link>
                </SheetClose>
                </SheetDescription>
            
               
        
                </div>

            ))}
        </div>

        <SheetFooter>
          <SheetClose asChild>
        
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  )
}
