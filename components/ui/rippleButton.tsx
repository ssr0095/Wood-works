"use client";

import Ripple from "material-ripple-effects";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";

export function RippleButton() {
  useEffect(() => {
    const ripple = new Ripple();
    document.querySelectorAll(".ripple").forEach((btn) => {
      ripple.create(btn);
    });
  }, []);

  return (
    <Button className="ripple bg-primary text-primary-foreground">
      Click Me
    </Button>
  );
}
