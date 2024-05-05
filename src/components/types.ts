import { ReactElement, ReactNode } from "react";
import { FieldError } from "react-hook-form";

export interface IIconProps extends React.SVGAttributes<SVGElement> {
  children?: never;
  color?: string;
  height?: string;
  width?: string;
  className?: string;
}

export interface IInputIconProps extends IIconProps {
  focused?: boolean; // input focus state
  togglePasswordInput?: boolean; // password input visible state
}

export interface ICustomInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: FieldError;
  prefixIcon?: ReactElement;
  suffixIcon?: ReactElement;
}
export interface ICustomInputTextAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  label?: string;
  error?: FieldError;
  prefixIcon?: ReactElement;
  suffixIcon?: ReactElement;
}

export interface IIconProps extends React.SVGAttributes<SVGElement> {
  children?: never;
  color?: string;
  height?: string;
  width?: string;
  className?: string;
}

export interface IArticle {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface IArticleData {
  title: string;
  body: string;
  name: string;
  phone: string;
}
