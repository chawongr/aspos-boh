'use client';

import * as React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { cva, type VariantProps } from 'class-variance-authority';
import OutsideClickHandler from 'react-outside-click-handler';

import { cn } from '@/lib/utils';
import { Checkbox } from './checkbox';
import axios from 'axios';

const Select = SelectPrimitive.Root;

const SelectGroup = SelectPrimitive.Group;

const SelectValue = SelectPrimitive.Value;

// Define size variants for SelectTrigger
const selectTriggerVariants = cva(
  'flex bg-light-light w-full items-center justify-between rounded-md border border-input text-sm ring-0 focus:border-primary focus:ring-0 font-medium ring-offset-0 ring-offset-background placeholder:text-muted-foreground hover:border-gray-400 focus:outline-none focus:ring-0 focus:border-primary data-[state=open]:border-primary focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1',
  {
    variants: {
      size: {
        default: 'h-10 px-3 py-2 text-[0.8125rem]',
        sm: 'h-8 px-2 py-1 text-xs',
        md: 'h-10 px-3 py-1',
        lg: 'h-11 px-4 py-3'
      }
    },
    defaultVariants: {
      size: 'default'
    }
  }
);

export interface SelectTriggerProps
  extends React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>,
  VariantProps<typeof selectTriggerVariants> { }

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  SelectTriggerProps
>(({ className, children, size, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(selectTriggerVariants({ size }), className)}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));

SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectScrollUpButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollUpButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollUpButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollUpButton
    ref={ref}
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <ChevronUp className="h-4 w-4" />
  </SelectPrimitive.ScrollUpButton>
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;

const SelectScrollDownButton = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.ScrollDownButton>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.ScrollDownButton>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.ScrollDownButton
    ref={ref}
    className={cn('flex cursor-default items-center justify-center py-1', className)}
    {...props}
  >
    <ChevronDown className="h-4 w-4" />
  </SelectPrimitive.ScrollDownButton>
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, position = 'popper', ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        'relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
        position === 'popper' &&
        'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        className
      )}
      position={position}
      {...props}
    >
      <SelectScrollUpButton />
      <SelectPrimitive.Viewport
        className={cn(
          'p-1',
          position === 'popper' &&
          'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]'
        )}
      >
        {children}
      </SelectPrimitive.Viewport>
      <SelectScrollDownButton />
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectLabel = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Label>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Label>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Label
    ref={ref}
    className={cn('py-1.5 pl-8 pr-2 text-sm font-semibold', className)}
    {...props}
  />
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      'relative flex w-full cursor-default select-none items-center rounded-md py-1.5 pl-8 pr-2 text-[13px] outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        <Check className="h-4 w-4" />
      </SelectPrimitive.ItemIndicator>
    </span>

    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const SelectSeparator = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Separator>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Separator>
>(({ className, ...props }, ref) => (
  <SelectPrimitive.Separator
    ref={ref}
    className={cn('-mx-1 my-1 h-px bg-muted', className)}
    {...props}
  />
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;

const SelectTitle = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'relative flex w-full cursor-default select-none items-center rounded-md py-1.5 px-2 text-sm font-semibold text-muted-foreground',
      className
    )}
    {...props}
  >
    {children}
  </div>
));
SelectTitle.displayName = 'SelectTitle';

const MultiSelect = ({
  apiEndpoint,
  queryParam = 'Query',
  isLabel
}: {
  apiEndpoint: string;
  queryParam?: string;
  isLabel: string;
}) => {
  const [items, setItems] = React.useState<{ value: string; label: string }[]>([]);
  const [selectedItems, setSelectedItems] = React.useState<{ value: string; label: string }[]>([]);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [loading, setLoading] = React.useState(false);
  const [dropdownOpen, setDropdownOpen] = React.useState(false);
  let token = localStorage.getItem("token");


  React.useEffect(() => {
    const fetchItems = async () => {
      setLoading(true);
      try {
        const url = searchTerm
          ? `${apiEndpoint}?${queryParam}=${searchTerm}`
          : apiEndpoint;

        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = Array.isArray(response.data) ? response.data : response.data.data;

        const formattedData = data.map((item: any, index: number) => ({
          value: item.code ? item.code.toString() : `fallback-${index}`,
          label: item[isLabel],

        }));

        setItems(formattedData);
      } catch (error) {
        console.error("Error fetching items:", error);
      } finally {
        setLoading(false);
      }
    };

    const debounceTimeout = setTimeout(fetchItems, 300);
    return () => clearTimeout(debounceTimeout);
  }, [searchTerm, apiEndpoint, queryParam, token]);

  const toggleSelection = (value: string, label: string) => {
    const existingIndex = selectedItems.findIndex((item) => item.value === value);

    const newSelection =
      existingIndex >= 0
        ? selectedItems.filter((item) => item.value !== value)
        : [...selectedItems, { value, label }];

    setSelectedItems(newSelection);
  };

  const removeSelectedItem = (value: string) => {
    const newSelection = selectedItems.filter((item) => item.value !== value);
    setSelectedItems(newSelection);
  };

  const handleTriggerClick = () => {
    if (selectedItems.length === 0) {
      setDropdownOpen((prev) => !prev); // Toggle dropdown when no items are selected
    }
  };

  const handleDropdownToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDropdownOpen((prev) => !prev); // Toggle dropdown state
  };

  return (
    <div className="relative">
      <div
        className='h-10 px-3 py-1 flex bg-light-light w-full items-center justify-between rounded-md border border-input text-sm ring-0 focus:border-primary focus:ring-0 font-medium ring-offset-0 ring-offset-background placeholder:text-muted-foreground hover:border-gray-400 focus:outline-none data-[state=open]:border-primary focus:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1'
        onClick={handleTriggerClick} // Handle clicking the main trigger
      >
        <div
          className="flex flex-wrap items-center gap-1.5  "
          style={{ whiteSpace: 'nowrap' }} // Prevent wrapping
        >
          {selectedItems.length > 0
            ? selectedItems.map((item) => (
              <div
                key={item.value}
                className="flex items-center bg-gray-200 px-2 py-1 rounded-lg text-sm text-gray-800"
                onClick={(e) => e.stopPropagation()} // Prevent dropdown toggle when clicking selected items
              >
                {item.label}
                <button
                  type="button"
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation(); // Prevent dropdown toggle when clicking "X"
                    removeSelectedItem(item.value);
                  }}
                  className="ml-1 text-gray-500 hover:text-gray-700 pointer-events-auto"
                >
                  ×
                </button>
              </div>
            ))
            : 'Select items...'}
        </div>
        {/* Dropdown Toggle Icon */}
        <SelectPrimitive.Icon onClick={handleDropdownToggle}>
          <ChevronDown className="h-4 w-4 opacity-50" />
        </SelectPrimitive.Icon>
      </div>

      {dropdownOpen && (
        <OutsideClickHandler
          onOutsideClick={() => {
            setDropdownOpen(false)
          }}
        >
          <div className="absolute p-1 mt-1 left-0 w-full max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-white text-gray-800 shadow-md z-10">
            <div className="sticky top-0 bg-white p-2 z-10">
              <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none"
              />
            </div>
            <div className="max-h-64 overflow-y-auto">
              {loading ? (
                <div className="p-2 text-sm text-gray-500">Loading...</div>
              ) : items.length > 0 ? (
                items.map((item) => (
                  <div
                    key={item.value}
                    className="flex items-center space-x-2 p-2 cursor-pointer hover:bg-gray-100"
                    onClick={() => toggleSelection(item.value, item.label)}
                  >
                    <Checkbox
                      checked={selectedItems.some(
                        (selected) => selected.value === item.value
                      )}
                    />
                    <span className="text-sm">{item.label}</span>
                  </div>
                ))
              ) : (
                <div className="p-2 text-sm text-gray-500">No items found</div>
              )}
            </div>
          </div>
        </OutsideClickHandler>
      )}
    </div>
  );
};

export default MultiSelect;


export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
  SelectTitle,
  MultiSelect
};
