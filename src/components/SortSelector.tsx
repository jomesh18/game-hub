import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface Props {
  onSelectSortOrder: (ordering: string) => void;
  selectedOrder: string;
}
const SortSelector = ({ onSelectSortOrder, selectedOrder }: Props) => {
  const sortOrders = [
    { value: "", name: "Relevance" },
    { value: "name", name: "Name" },
    { value: "-released", name: "Release Date" },
    { value: "-added", name: "Date Added" },
    { value: "-rating", name: "Average Rating" },
    { value: "-metacritic", name: "Popularity" },
  ];
  let currentSelectedOrder = sortOrders.find((o) => o.value === selectedOrder);
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {currentSelectedOrder?.name || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((o) => (
          <MenuItem
            onClick={() => onSelectSortOrder(o.value)}
            key={o.value}
            value={o.value}
          >
            {o.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
