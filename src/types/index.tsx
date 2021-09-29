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

export interface Button {
  src: string;
  alt: string;
  name: string;
}

export interface ButtonSelection extends Button {
  onClick: MouseEventHandler;
}

export interface ButtonExtraOption extends Button {
  key: number;
  id: string;
  extraOptions: { _id: string; name: string }[];
}

export interface RadioButton {
  key: number;
  id: string;
  name: string;
  value: string;
  htmlFor: string;
  extraName: string;
}
