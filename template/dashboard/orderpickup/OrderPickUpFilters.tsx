import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import { Button, ButtonBase, Checkbox, Drawer, Slider } from "@mui/material";
import { useState } from "react";
import styles from "./orderpickup.module.css";

interface OrderFiltersProps {
  isOpen: boolean;
  onClose: () => void;
  data: any;
  setData: (newData: any) => void;
}

const OrderPickUpFilters: React.FC<OrderFiltersProps> = ({
  isOpen,
  onClose,
  data,
  setData,
}) => {
  const [weight, setWeight] = useState<number>(0);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  const handleWeightChange = (event: Event, newValue: number | number[]) => {
    setWeight(newValue as number);
  };

  const handleBrandChange = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand],
    );
  };

  const handleTypeChange = (type: string) => {
    setSelectedTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type],
    );
  };

  const clearFilter = () => {
    setWeight(0);
    setSelectedBrands([]);
    setSelectedTypes([]);
  };

  return (
    <Drawer className={styles.orderFilters} open={isOpen} onClose={onClose}>
      <div className={styles.orderFiltersWrap}>
        <div className={styles.orderFiltersHeader}>
          <h3>فیلترها</h3>
          <ButtonBase onClick={onClose}>
            <CloseRoundedIcon sx={{ color: "white" }} fontSize="medium" />
          </ButtonBase>
        </div>

        <div className={styles.orderFiltersBody}>
          {/* Weight Filter */}
          <div className={styles.orderFilter}>
            <div className={styles.header}>
              <span>وزن (گرم)</span>
              <Button
                variant="text"
                sx={{ visibility: weight === 0 ? "hidden" : "visible" }}
                onClick={() => setWeight(0)}
              >
                پاک کردن
              </Button>
            </div>
            <div className="filter">
              <Slider
                value={weight}
                onChange={handleWeightChange}
                max={2}
                marks
                step={0.1}
                min={0}
                aria-label="Weight"
                valueLabelDisplay="auto"
              />
            </div>
          </div>

          {/* Brand Filter */}
          <div className={styles.orderFilter}>
            <div className={styles.header}>
              <span>برند</span>
              <Button
                variant="text"
                sx={{
                  visibility:
                    selectedBrands.length === 0 ? "hidden" : "visible",
                }}
                onClick={() => setSelectedBrands([])}
              >
                پاک کردن
              </Button>
            </div>
            <div className={styles.filter}>
              {["کهزاد", "لوکس", "پارسس"].map((brand) => (
                <span key={brand}>
                  <Checkbox
                    checked={selectedBrands.includes(brand)}
                    onChange={() => handleBrandChange(brand)}
                    value={brand}
                  />
                  {brand}
                </span>
              ))}
            </div>
          </div>

          {/* Type Filter */}
          <div className={styles.orderFilter}>
            <div className={styles.header}>
              <span>نوع</span>
              <Button
                variant="text"
                sx={{
                  visibility: selectedTypes.length === 0 ? "hidden" : "visible",
                }}
                onClick={() => setSelectedTypes([])}
              >
                پاک کردن
              </Button>
            </div>
            <div className={styles.filter}>
              {["آبشده", "سکه پارسیان"].map((type) => (
                <span key={type}>
                  <Checkbox
                    checked={selectedTypes.includes(type)}
                    onChange={() => handleTypeChange(type)}
                    value={type}
                  />
                  {type}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className={styles.orderFiltersFooter}>
          <Button
            onClick={onClose}
            variant="contained"
            sx={{ boxShadow: "none" }}
          >
            بستن
          </Button>
          <Button onClick={clearFilter} variant="outlined" sx={{ ml: 2 }}>
            پاک کردن همه
          </Button>
        </div>
      </div>
    </Drawer>
  );
};

export default OrderPickUpFilters;
