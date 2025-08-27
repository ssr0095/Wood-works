import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Copy, Phone, Headphones, Mail } from "lucide-react";
import { Button } from "./ui/button";
import { ReactNode, useState } from "react";
import { toast } from "sonner";

const ContactDrawer = ({ children }: { children: ReactNode }) => {
  const [openDraw, setOpenDraw] = useState(false);

  return (
    <Drawer open={openDraw} onOpenChange={setOpenDraw}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>
      <DrawerContent className="flex items-center justify-center">
        <DrawerHeader className="w-full max-w-sm px-4 flex items-center justify-start">
          <div className="size-12 rounded-full bg-primary text-primary-foreground text-center flex items-center justify-center mb-4">
            <Headphones />
          </div>
          <DrawerTitle className="text-3xl">Contact us</DrawerTitle>
          <DrawerDescription className="text-md">
            Help is just a click away.
          </DrawerDescription>
        </DrawerHeader>
        <div className="w-full max-w-sm px-4">
          <div className="grid items-start gap-6">
            <p className="text-sm text-center text-foreground">
              Call us anytime between 10am - 7pm
            </p>
            <div
              className="flex items-center gap-3 cursor-pointer group"
              onClick={async () => {
                await navigator.clipboard.writeText(
                  `+91 ${process.env.NEXT_PUBLIC_PHONE_LINK}`
                );
                toast.success("Copied");
              }}
            >
              <Phone />
              <div className="w-full px-4 py-2 rounded-md border border-border bg-accent text-accent-foreground">
                {process.env.NEXT_PUBLIC_PHONE_TEXT}
              </div>
              <Button size="icon">
                <Copy />
              </Button>
            </div>
            <div
              className="flex items-center gap-3 cursor-pointer"
              onClick={async () => {
                await navigator.clipboard.writeText(
                  `${process.env.NEXT_PUBLIC_EMAIL}`
                );
                toast.success("Copied");
              }}
            >
              <Mail />
              <div className="w-full px-4 py-2 rounded-md border border-border bg-accent text-accent-foreground">
                {process.env.NEXT_PUBLIC_EMAIL}
              </div>
              <Button size="icon">
                <Copy className="" />
              </Button>
            </div>
          </div>
        </div>
        <DrawerFooter className="w-full max-w-sm my-6">
          <DrawerClose asChild>
            <Button variant="secondary">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default ContactDrawer;
