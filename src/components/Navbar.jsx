import Link from "next/link";
import React from "react";
import Container from "./Container";

const Navbar = () => {
  return (
    <div className="bg-red-50 w-full">
      <Container>
        <div className="h-20 flex items-center justify-between">
          <div>
            <h1>Task Manager</h1>
          </div>

          <ul className="flex items-center space-x-6">
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"/about"}>About</Link>
            </li>
            <li>
              <Link href={"/dashboard"}>Dashboard</Link>
            </li>
            <li>
              <Link href={"/login"}>Login</Link>
            </li>
            <li>
              <Link href={"/r"}>Register</Link>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Navbar;
