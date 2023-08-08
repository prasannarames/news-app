"use client";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  const { user, logout } = useAuth();
  return (
    <nav className="flex justify-evenly p-4">
      <div className="cursor-pointer">
        <h1>
          <Link href="/">News-App</Link>
        </h1>
      </div>
      <div>
        {user ? (
          <button
            onClick={() => {
              logout();
              router.push("/login");
            }}
          >
            Logout
          </button>
        ) : (
          <ul className="flex gap-3 cursor-pointer">
            <Link href="/login">
              <li className="border-2 px-2 py-1 rounded-r-sm">login</li>
            </Link>
            <Link href="/register">
              <li className="border-2 px-2 py-1 rounded-r-sm">register</li>
            </Link>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
