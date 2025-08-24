"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import { Avatar } from "@heroui/avatar";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { User } from "@heroui/user";
import NextLink from "next/link";
import clsx from "clsx";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, HeartFilledIcon, Logo } from "@/components/icons";
import { Badge } from "@heroui/badge";
import { useBasketStore } from "@/store/basketStore";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  useAuth,
  useUser,
} from "@clerk/nextjs";

export const Navbar = () => {
  const productList = useBasketStore((state) => state.productList);
  const { user } = useUser();
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Logo />
            <p className="font-bold text-inherit">ACME</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <ThemeSwitch />
        <NavbarItem className="hidden md:flex">
          <Badge
            color="danger"
            content={productList.length}
            shape="circle"
            isInvisible={productList.length === 0}
          >
            <Button
              as={Link}
              className="text-sm font-normal text-default-600 bg-default-100"
              href={siteConfig.links.sepet}
              startContent={<HeartFilledIcon className="text-danger" />}
              variant="flat"
            >
              Sepet
            </Button>
          </Badge>
        </NavbarItem>
        <NavbarItem className="hidden sm:flex">
          <SignedOut>
            <div className="flex items-center gap-2">
              <SignInButton>
                <Button variant="ghost" className="text-sm font-medium">
                  Giriş Yap
                </Button>
              </SignInButton>
              <SignUpButton>
                <Button
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium text-sm rounded-full px-6"
                  size="sm"
                >
                  Kayıt Ol
                </Button>
              </SignUpButton>
            </div>
          </SignedOut>
          <SignedIn>
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <Avatar
                  isBordered
                  as="button"
                  className="transition-transform hover:scale-110"
                  color="secondary"
                  name="Kullanıcı"
                  size="sm"
                  src={user?.imageUrl}
                />
              </DropdownTrigger>
              <DropdownMenu
                aria-label="Kullanıcı Menüsü"
                color="secondary"
                variant="flat"
              >
                <DropdownItem key="profile" className="h-14 gap-2">
                  {user && user.emailAddresses && (
                    <User
                      name={user?.username ?? user?.fullName}
                      description={user.emailAddresses.toString()}
                      classNames={{
                        name: "text-default-600",
                        description: "text-default-500",
                      }}
                      avatarProps={{
                        size: "sm",
                        src: user?.imageUrl,
                      }}
                    />
                  )}
                </DropdownItem>
                <DropdownItem as={Link} key="dashboard" href="/sepet">
                  Sepetim
                </DropdownItem>
                <DropdownItem key="settings" as={Link} href="/ayarlar">
                  Ayarlar
                </DropdownItem>
                <DropdownItem key="help_and_feedback">
                  Yardım & Geri Bildirim
                </DropdownItem>
                <DropdownItem
                  key="logout"
                  color="danger"
                  className="text-danger"
                  onPress={handleSignOut}
                >
                  Çıkış Yap
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </SignedIn>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
