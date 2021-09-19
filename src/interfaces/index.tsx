import { MouseEventHandler } from 'react';

export interface HeaderComponent {
  path: string;
  selection: string;
}

export interface CoffeeType {
  name: string;
  sizes: [];
  extras: [];
}

export interface SizeProps {
  selectedCoffeeSizes: string[];
  selectedCoffeeExtras: string[];
}

export interface ExtraProps {
  coffeeExtras: string[];
}

export interface ButtonSelection {
  onClick: MouseEventHandler;
  src: string;
  alt: string;
  name: string;
}

export interface ButtonExtraOption extends ButtonSelection {
  key: string;
  id: string;
  getExtraOptions: string[];
}

export interface RadioButton {
  onClick: MouseEventHandler;
  key: string;
  id: string;
  name: string;
  value: string;
  htmlFor: string;
  extraName: string;
}
