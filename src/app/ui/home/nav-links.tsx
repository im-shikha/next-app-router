"use client";

import {
  HomeIcon,
  CurrencyRupeeIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";

const links = [
  { name: "Home", href: "/home", icon: HomeIcon },
  { name: "Transactions", href: "/transactions", icon: CurrencyRupeeIcon },
  { name: "Add Entry", href: "/add-entry", icon: SquaresPlusIcon },
];

export default function NavLinks() {
  return (
    <>
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className="flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium text-zinc-700 transition hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-200 dark:hover:bg-zinc-800 dark:hover:text-zinc-50"
          >
            <Icon className="h-5 w-5" />
            <span>{link.name}</span>
          </Link>
        );
      })}
    </>
  );
}
