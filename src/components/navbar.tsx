import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Link } from "@heroui/link";
import clsx from "clsx";

export const Navbar = () => {
  return (
    <HeroUINavbar
      isBordered
      position="sticky"
      className="bg-primary border-b-2 border-foreground px-8 font-sans z-50"
    >
      {/* Left: Logo */}
      <NavbarContent
        justify="start"
        className="gap-6 border-r-2 border-foreground pr-4"
      >
        <NavbarBrand className="gap-2">
          <Link href="/" className="text-foreground no-underline">
            <h2 className="text-4xl font-serif sm:hidden text-foreground">
              E&amp;A
            </h2>
            <h2 className="text-4xl font-serif hidden sm:block text-foreground white">
              Emma &amp; Andy
            </h2>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      {/* Center: Nav Items */}
      <NavbarContent
        justify="center"
        className="hidden md:flex border-l-2 border-foreground pl-4"
      >
        {[
          { label: "Details", href: "#story" },
          { label: "Playlist", href: "#team" },
          { label: "RSVP", href: "#contact" },
        ].map((item) => (
          <NavbarItem key={item.href}>
            <Link
              href={item.href}
              className={clsx(
                "border border-foreground px-3 py-1 rounded-md text-lg text-foreground hover:text-accent transition duration-300",
              )}
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      {/* Right: Mobile Menu Toggle */}
      <NavbarContent justify="end" className="md:hidden">
        <NavbarMenuToggle className="text-foreground border border-foreground p-2 rounded-md" />
      </NavbarContent>

      {/* Mobile Menu (Drawer) */}
      <NavbarMenu className="bg-primary text-foreground font-sans">
        {[
          { label: "Details", href: "#story" },
          { label: "Playlist", href: "#team" },
          { label: "RSVP", href: "#contact" },
        ].map((item) => (
          <NavbarMenuItem key={item.href}>
            <Link
              href={item.href}
              className="text-lg border border-foreground px-3 py-2 rounded-md block hover:text-accent transition duration-300"
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </HeroUINavbar>
  );
};

export default Navbar;
