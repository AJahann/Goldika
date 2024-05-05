import React, { useEffect } from 'react';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

import './OrderFilters.css';
import { Button, ButtonBase, Checkbox, Drawer, Slider } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const initialState = {
  filters: {
    weight: 0,
    brand: [],
    type: [],
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_WEIGHT':
      return {
        ...state,
        filters: { ...state.filters, weight: action.payload },
      };
    case 'SET_BRAND':
      if (action.payload === '[]') {
        return { ...state, filters: { ...state.filters, brand: [] } };
      }
      const brand = action.payload;
      const updatedBrands = state.filters.brand.includes(brand)
        ? state.filters.brand.filter((b) => b !== brand)
        : [...state.filters.brand, brand];
      return { ...state, filters: { ...state.filters, brand: updatedBrands } };
    case 'SET_TYPE':
      if (action.payload === '[]') {
        return { ...state, filters: { ...state.filters, type: [] } };
      }
      const type = action.payload;
      const updatedTypes = state.filters.type.includes(type)
        ? state.filters.type.filter((t) => t !== type)
        : [...state.filters.type, type];
      return { ...state, filters: { ...state.filters, type: updatedTypes } };
    default:
      return state;
  }
};

export default function OrderFilters({ isOpen, onClose, data, setData }) {
  const [{ filters }, dispatch] = React.useReducer(reducer, initialState);

  const handleCheckboxChangeBrand = (event) => {
    dispatch({ type: 'SET_BRAND', payload: event.target.value });
  };
  const handleCheckboxChangeType = (event) => {
    dispatch({ type: 'SET_TYPE', payload: event.target.value });
  };
  const handleSliderChangeWeight = (event, newValue) => {
    dispatch({ type: 'SET_WEIGHT', payload: newValue });
  };

  useEffect(() => {
    let updateData = data.filter((item) => {
      return (
        item.weight >= filters.weight &&
        (filters.brand.length ? filters.brand.includes(item.brand) : true) &&
        (filters.type.length ? filters.type.includes(item.type) : true)
      );
    });
    setData(updateData);
  }, [filters]);

  return (
    <Drawer className='order-filters' open={isOpen} onClose={onClose}>
      <div className='order-filters-wrap'>
        <div className='order-filters-header'>
          <h3>فیلتر ها</h3>
          <ButtonBase onClick={onClose}>
            <CloseRoundedIcon fontSize='medium' />
          </ButtonBase>
        </div>
        <div className='order-filters-body'>
          <div className='order-filter'>
            <div className='header'>
              <span>وزن (گرم)</span>
              <Button
                variant='text'
                style={{ visibility: !filters.weight ? 'hidden' : 'visible' }}
                disabled={!filters.weight}
                onClick={() => dispatch({ type: 'SET_WEIGHT', payload: 0 })}
              >
                پاک کردن
              </Button>
            </div>
            <div className='filter'>
              <Slider
                onChange={handleSliderChangeWeight}
                value={filters.weight}
                max={2}
                marks
                step={0.1}
                min={0}
                aria-label='Default'
                valueLabelDisplay='auto'
              />
            </div>
          </div>
          <div className='order-filter'>
            <div className='header'>
              <span>برند</span>
              <Button
                variant='text'
                style={{
                  visibility: !filters.brand.length ? 'hidden' : 'visible',
                }}
                disabled={!filters.brand.length}
                onClick={() => dispatch({ type: 'SET_BRAND', payload: '[]' })}
              >
                پاک کردن
              </Button>
            </div>
            <div className='filter'>
              <span>
                <Checkbox
                  checked={filters.brand.includes('کهزاد')}
                  onChange={handleCheckboxChangeBrand}
                  value={'کهزاد'}
                  {...label}
                />
                کهزاد
              </span>
              <span>
                <Checkbox
                  checked={filters.brand.includes('لوکس')}
                  onChange={handleCheckboxChangeBrand}
                  value={'لوکس'}
                  {...label}
                />
                لوکس
              </span>
              <span>
                <Checkbox
                  checked={filters.brand.includes('پارسس')}
                  onChange={handleCheckboxChangeBrand}
                  value={'پارسس'}
                  {...label}
                />
                پارسس
              </span>
            </div>
          </div>
          <div className='order-filter'>
            <div className='header'>
              <span>نوع</span>
              <Button
                variant='text'
                style={{
                  visibility: !filters.type.length ? 'hidden' : 'visible',
                }}
                disabled={!filters.type.length}
                onClick={() => dispatch({ type: 'SET_TYPE', payload: '[]' })}
              >
                پاک کردن
              </Button>
            </div>
            <div className='filter'>
              <span>
                <Checkbox
                  checked={filters.type.includes('آبشده‌')}
                  onChange={handleCheckboxChangeType}
                  value={'آبشده‌'}
                  {...label}
                />
                آبشده
              </span>
              <span>
                <Checkbox
                  checked={filters.type.includes('سکه پارسیان')}
                  onChange={handleCheckboxChangeType}
                  value={'سکه پارسیان'}
                  {...label}
                />
                سکه پارسیان
              </span>
            </div>
          </div>
        </div>
        <div className='order-filters-footer'>
          <Button
            onClick={onClose}
            variant='contained'
            style={{ boxShadow: 'none' }}
          >
            بستن
          </Button>
        </div>
      </div>
    </Drawer>
  );
}
