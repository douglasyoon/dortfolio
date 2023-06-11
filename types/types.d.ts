declare interface IIconProps {
  size?: number;
  color?: string;
}

declare interface Response<T> {
  status: string;
  list: Array<T>;
}
