"use client";
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";
const MobNav = ({ icon, profileName, profileDesc, btnAction }) => {
  return (
    <React.Fragment>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" className="bg-btnPrimary">
            {icon}
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>{profileName}</SheetTitle>
            <SheetDescription>{profileDesc}</SheetDescription>
          </SheetHeader>

          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">{btnAction}</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </React.Fragment>
  );
};

export default MobNav;
