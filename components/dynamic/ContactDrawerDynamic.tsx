"use client";
import { ReactNode } from "react";
import dynamic from "next/dynamic";

// const ContactDrawerLoading = () => <div>Loading...</div>; // Or a spinner, skeleton, etc.

const ContactDrawer = dynamic(() => import("../ContactDrawer"), {
  // loading: () => <ContactDrawerLoading />,
  ssr: false, // Optional: Disable server-rendering for this component
});

// This is a wrapper component that you will use in your pages
const ContactDrawerDynamic = ({ children }: { children: ReactNode }) => {
  return <ContactDrawer>{children}</ContactDrawer>;
};

export default ContactDrawerDynamic;
