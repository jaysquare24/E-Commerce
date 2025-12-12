import { useMemo } from "react";
import { useSelector } from "react-redux";
import { selectInventory } from "../features/inventorySlice";
import { selectFilters } from "../features/filterSlice";

export const useFilteredProducts = () => {
  const allProducts = useSelector(selectInventory);
  const filters = useSelector(selectFilters);

  const filteredProducts = useMemo(() => {
    return allProducts.filter((item) => {
      if (filters.category && item.category.toLowerCase() !== filters.category) {
        return false;
      }

      if (filters.style && !item.styles.some(style => style.toLowerCase() === filters.style)) {
        return false;
      }

      if (filters.topSelling && !item.topSelling) return false;
      if (filters.newArrival && !item.newArrival) return false;

      if (filters.color && !item.colors.some(color => color.toLowerCase() === filters.color)) return false;
      if (filters.size && !item.sizes.some(size => size.toLowerCase() === filters.size)) return false;

      if (
        item.price < (filters.price.min || 0) ||
        item.price > (filters.price.max || Infinity)
      )
        return false;

      return true;
    });
  }, [allProducts, filters]);

  return filteredProducts;
};
