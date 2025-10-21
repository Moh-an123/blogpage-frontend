import { Input } from "@nextui-org/react";
import React from "react";
import { SearchIcon } from "./SearchIcon";

const Searchbar = () => {
  return (
    <div>
      <Input
        classNames={{
          base: `max-w-full sm:max-w-[10rem] h-10 hidden sm:block md:block lg:block xl:block`,
          // mainWrapper: "h-full",
          input: "text-small",
          inputWrapper:
            "h-full font-normal text-default-500 bg-default-400/20 rounded-full dark:bg-default-500/20",
        }}
        placeholder="Type to search..."
        size="sm"
        startContent={<SearchIcon size={18} />}
        type="search"
      />
      <div className="block sm:hidden md:hidden lg:hidden xl:hidden">
        <SearchIcon />
      </div>
    </div>
  );
};

export default Searchbar;
