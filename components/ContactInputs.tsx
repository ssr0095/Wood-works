"use client";
import { toast } from "sonner";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Copy, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const ContactInputs = () => {
  return (
    <div className="w-full max-w-sm flex flex-col gap-8 mt-8">
      <div className="w-full flex flex-col gap-3">
        <div className="w-full flex items-center justify-start gap-3">
          <Phone className="w-4" />
          <Label>Phone</Label>
        </div>
        <div
          className="w-full flex items-center gap-2 cursor-pointer"
          onClick={async () => {
            await navigator.clipboard.writeText(
              `+91 ${process.env.NEXT_PUBLIC_PHONE_LINK}`
            );
            toast.success("Copied");
          }}
        >
          <div className="w-full px-4 py-2 rounded-md border border-border bg-accent text-accent-foreground">
            {process.env.NEXT_PUBLIC_PHONE_TEXT}
          </div>
          <Tooltip delayDuration={400}>
            <TooltipTrigger asChild>
              <Button size="icon">
                <Copy />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>Copy</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
      <div className="w-full flex flex-col gap-3">
        <div className="w-full flex items-center justify-start gap-3">
          <Mail className="w-4" />
          <Label>Email</Label>
        </div>
        <div
          className="w-full flex items-center gap-2 cursor-pointer"
          onClick={async () => {
            await navigator.clipboard.writeText(
              `${process.env.NEXT_PUBLIC_EMAIL}`
            );
            toast.success("Copied");
          }}
        >
          <div className="w-full px-4 py-2 rounded-md border border-border bg-accent text-accent-foreground">
            {process.env.NEXT_PUBLIC_EMAIL}
          </div>
          <Tooltip delayDuration={400}>
            <TooltipTrigger asChild>
              <Button size="icon">
                <Copy />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="top">
              <p>Copy</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default ContactInputs;
