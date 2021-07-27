import * as React from "react";

import { ButtonColors, ButtonProps, ButtonSizes } from "./types";

import clsx from "clsx";

export const disabledStyles = "disabled:cursor-not-allowed disabled:opacity-75";

export function buttonBlockStyles(block?: boolean) {
  if (block) {
    return "flex";
  }

  return "inline-flex";
}

export function buttonSizes(size?: ButtonSizes) {
  switch (size) {
    case "xs": {
      return "px-2.5 py-1.5 text-xs";
    }
    case "sm": {
      return "px-3 py-2 text-sm leading-4";
    }
    case "md": {
      return "px-4 py-2 text-sm";
    }
    case "lg": {
      return "px-4 py-2 text-base";
    }
    case "xl": {
      return "px-6 py-3 text-base";
    }
    default: {
      return "px-4 py-2 text-base sm:text-sm";
    }
  }
}

export function buttonRoundedStyles(rounded?: boolean, size?: ButtonSizes) {
  if (rounded) {
    return "rounded-full";
  }

  if (size !== "xs") {
    return "rounded-md";
  }

  return "rounded";
}

export function buttonIconSizes(size?: ButtonSizes) {
  switch (size) {
    case "xs": {
      return "-ml-0.5 mr-2 h-4 w-4";
    }
    case "sm": {
      return "-ml-0.5 mr-2 h-4 w-4";
    }
    case "md": {
      return "-ml-1 mr-2 h-5 w-5";
    }
    case "lg": {
      return "-ml-1 mr-3 h-5 w-5";
    }
    case "xl": {
      return "-ml-1 mr-3 h-5 w-5";
    }
    default: {
      return "-ml-1 mr-2 h-5 w-5";
    }
  }
}

export function primaryButtonColors(color?: ButtonColors) {
  switch (color) {
    case "brand": {
      return "text-white bg-brand-500 hover:bg-brand-600 focus:ring-brand-500";
    }
    case "blue": {
      return "text-white bg-blue-600 hover:bg-blue-700 focus:ring-blue-500";
    }
    case "gray": {
      return "text-white bg-gray-600 hover:bg-gray-700 focus:ring-gray-500";
    }
    case "green": {
      return "text-white bg-green-600 hover:bg-green-700 focus:ring-green-500";
    }
    case "indigo": {
      return "text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500";
    }
    case "pink": {
      return "text-white bg-pink-600 hover:bg-pink-700 focus:ring-pink-500";
    }
    case "purple": {
      return "text-white bg-purple-600 hover:bg-purple-700 focus:ring-purple-500";
    }
    case "red": {
      return "text-white bg-red-600 hover:bg-red-700 focus:ring-red-500";
    }
    case "yellow": {
      return "text-white bg-yellow-600 hover:bg-yellow-700 focus:ring-yellow-500";
    }
    default: {
      return "text-white bg-gray-600 hover:bg-gray-700 focus:ring-gray-500";
    }
  }
}

export function secondaryButtonColors(color?: ButtonColors) {
  switch (color) {
    case "brand": {
      return "text-brand-700 bg-brand-100 hover:bg-brand-200 focus:ring-brand-500";
    }
    case "blue": {
      return "text-blue-700 bg-blue-100 hover:bg-blue-200 focus:ring-blue-500";
    }
    case "gray": {
      return "text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-gray-500";
    }
    case "green": {
      return "text-green-700 bg-green-100 hover:bg-green-200 focus:ring-green-500";
    }
    case "indigo": {
      return "text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:ring-indigo-500";
    }
    case "pink": {
      return "text-pink-700 bg-pink-100 hover:bg-pink-200 focus:ring-pink-500";
    }
    case "purple": {
      return "text-purple-700 bg-purple-100 hover:bg-purple-200 focus:ring-purple-500";
    }
    case "red": {
      return "text-red-700 bg-red-100 hover:bg-red-200 focus:ring-red-500";
    }
    case "yellow": {
      return "text-yellow-700 bg-yellow-100 hover:bg-yellow-200 focus:ring-yellow-500";
    }
    default: {
      return "text-gray-700 bg-gray-100 hover:bg-gray-200 focus:ring-gray-500";
    }
  }
}

export function renderButtonIcon(
  icon?: ButtonProps["icon"],
  size?: ButtonSizes,
  additionalClasses?: string,
) {
  if (icon) {
    return React.createElement(icon, {
      className: clsx(buttonIconSizes(size), additionalClasses),
      "aria-hidden": true,
    });
  }

  return null;
}
