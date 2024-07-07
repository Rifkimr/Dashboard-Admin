import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "@radix-ui/react-dialog";
import FormProduct from "./FormProduct";
import SelectFilter from "./SelectFilter";
import { DialogHeader, DialogFooter } from "./ui/dialog";
import React from "react";

const FiturTable = () => {
  const [openFilter, setOpenFilter] = React.useState(false)
  const [open, setOpen] = React.useState(false)


    const handleOpenFilter = () => {
        setOpenFilter(true)
      }
    
      const handleCloseFilter = () => {
        setOpenFilter(false)
      }
      
    return ( 
        <div className="relative flex items-center gap-2">
            <Input
              type="text"
              placeholder="Search..."
              className="pl-8 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black-500 focus:border-transparent"
            />
            <button className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500">
              <Search size={20} />
            </button>
            
            <SelectFilter/>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="outline">Tambah Product</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle >Tambah Product</DialogTitle>
                </DialogHeader>
                <FormProduct />
                <DialogFooter>
                  <Button> Simpan </Button>
                </DialogFooter>
               </DialogContent>
            </Dialog>
          </div>
     );
}
 
export default FiturTable;