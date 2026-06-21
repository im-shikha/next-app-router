"use client";

import NavLinks from "./nav-links";

export default function SideNav() {
  return (
    <aside className="w-full max-w-xs border-r border-zinc-200 bg-white p-6 text-zinc-900 dark:border-zinc-800 dark:bg-zinc-950 dark:text-zinc-100">
      <div className="mb-8">
        <h2 className="mt-3 text-2xl font-semibold">Navigation</h2>
      </div>
      <nav className="space-y-2">
        <NavLinks />
      </nav>
    </aside>
  );
}
