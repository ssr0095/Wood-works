"use client";
import { forwardRef, useState } from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import {
  servicesNav,
  ServiceNavType,
  ListItemProps,
} from "@/public/assets/assets";
import Image from "next/image";

const ListItem = forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, title, onHover, onLeave, href, ...props }, ref) => {
    return (
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          href={href}
          className={cn("select-none rounded-md px-3 py-2", className)}
          onMouseEnter={onHover}
          onMouseLeave={onLeave}
          {...props}
        >
          <div className="text-sm font-medium mb-1">{title}</div>
          {/* <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p> */}
        </a>
      </NavigationMenuLink>
    );
  }
);
ListItem.displayName = "ListItem";

const MenuSection: React.FC<{
  title: string;
  items: ServiceNavType[]; // | Location[] | AboutItem[];
  hoveredItem: string | null;
  setHoveredItem: (item: string | null) => void;
}> = ({ title, items, hoveredItem, setHoveredItem }) => {
  const defaultImage = servicesNav[0].src;
  const currentImage = hoveredItem
    ? servicesNav.find((item) => item.key === hoveredItem)?.src || defaultImage
    : defaultImage;
  const currentAlt = hoveredItem
    ? items.find((item) => item.key === hoveredItem)?.alt || hoveredItem
    : title;

  return (
    <div className="w-xl flex items-start gap-2 p-2">
      {/* Left side - Menu items */}
      <div className="flex-1 border-r mr-2">
        {/* <div className="mb-4">
          <h3 className="text-lg font-semibold text-foreground mb-1">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground">
            Explore our premium offerings
          </p>
        </div> */}

        <div className="grid grid-cols-2 pr-4">
          {items.map((item) => (
            <ListItem
              key={item.key}
              title={item.name}
              href={item.href}
              onHover={() => setHoveredItem(item.key)}
              onLeave={() => setHoveredItem(null)}
            >
              {item.description}
            </ListItem>
          ))}
        </div>

        {/* <div className="mt-6 pt-4 border-t">
          <NavigationMenuLink
            href={`/${title
              .toLowerCase()
              .replace(" & ", "-")
              .replace(" ", "-")}`}
            className="text-sm text-primary hover:underline font-medium"
          >
            View All {title} →
          </NavigationMenuLink>
        </div> */}
      </div>

      {/* Right side - Image */}
      <div className="w-[200px]">
        <div className="mt-3">
          <div className="text-xs uppercase text-muted-foreground font-medium">
            {hoveredItem
              ? items
                  .find((item) => item.key === hoveredItem)
                  ?.name.toUpperCase() || title.toUpperCase()
              : title.toUpperCase()}
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {hoveredItem
              ? items.find((item) => item.key === hoveredItem)?.description ||
                "Premium interior solutions tailored for you"
              : "Premium interior solutions tailored for you"}
          </p>
        </div>
        <div className="w-full aspect-[3/4] rounded-sm overflow-hidden bg-muted my-2">
          <Image
            src={currentImage}
            alt={currentAlt}
            className="w-full h-full object-cover overflow-hidden transition-all duration-500"
            loading="lazy"
            // width={200}
            // height={266}
          />
        </div>
      </div>
    </div>
  );
};

export const Navigation = () => {
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  // const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  // const [hoveredAbout, setHoveredAbout] = useState<string | null>(null);

  return (
    // <div className="w-full max-w-7xl mx-auto p-6">
    <NavigationMenu className="max-lg:hidden" viewport={false}>
      <NavigationMenuList className="flex space-x-1">
        {/* Home */}
        <NavigationMenuItem>
          <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
            Home
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Services */}
        <NavigationMenuItem>
          <NavigationMenuTrigger>Services</NavigationMenuTrigger>
          <NavigationMenuContent>
            <MenuSection
              title="Services"
              items={servicesNav}
              // images={serviceNavImages}
              hoveredItem={hoveredService}
              setHoveredItem={setHoveredService}
            />
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* About */}
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/about"
            className={navigationMenuTriggerStyle()}
          >
            About Us
          </NavigationMenuLink>
        </NavigationMenuItem>

        {/* Locations */}
        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>
            Locations
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <MenuSection
              title="Our Locations"
              items={locations}
              images={locationImages}
              hoveredItem={hoveredLocation}
              setHoveredItem={setHoveredLocation}
            />
          </NavigationMenuContent>
        </NavigationMenuItem> */}

        {/* Contact */}
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/contact"
            className={navigationMenuTriggerStyle()}
          >
            Contact
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    // </div>
  );
};
