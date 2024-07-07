import { cn } from "@/lib/utils";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

const FormProduct = () => {
  return (
    <form className={cn("grid items-start gap-4")}>
      <div className="grid gap-2">
        <Label htmlFor="date">Date</Label>
        <Input type="date" id="date" defaultValue="contoh@example.com" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="invoice">Invoice Id</Label>
        <Input id="invoice" defaultValue="@contoh" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="harga">Harga Produk</Label>
        <Input id="harga" defaultValue="@contoh" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="discount">Discount</Label>
        <Input id="discount" defaultValue="@contoh" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="pajak">Pajak</Label>
        <Input id="pajak" defaultValue="@contoh" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="total">Total</Label>
        <Input id="total" defaultValue="@contoh" />
      </div>
    </form>
  )
}
 
export default FormProduct;