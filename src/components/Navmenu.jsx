import React from "react";

import {
  Button,
  Menu,
  MenuItem,
  MenuTrigger,
  Popover,
} from "react-aria-components";

import { Bars3Icon } from "@heroicons/react/24/outline";
import { Section, Header } from "react-aria-components";

function Navmenu() {
  return (
    <MenuTrigger>
      <Button aria-label="Menu" className="outline-none">
        <Bars3Icon className="h-6 w-6 text-black" />
      </Button>
      <Popover>
        <Menu className="w-64 rounded bg-slate-950 p-1 pb-3 text-slate-200 outline outline-1 outline-white">
          <Section className="focus:bg-slate-500">
            <Header className="no-select cursor-default pl-4 font-bold">
              Us
            </Header>
            <MenuItem
              className="block cursor-pointer rounded-md pl-5 outline-none hover:bg-violet-800"
              href="/support"
            >
              Support
            </MenuItem>
            <MenuItem
              className="block cursor-pointer rounded-md pl-5 outline-none hover:bg-violet-800"
              href="/contact"
            >
              Contact
            </MenuItem>
          </Section>
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}

export default Navmenu;
