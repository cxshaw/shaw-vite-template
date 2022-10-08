import classNames from 'classnames';
import { FC, ReactNode, useMemo } from 'react';

export enum BUTTONTHEME {
  PRIMARY = 'PRIMARY',
  WARN = 'WARN',
  ERROR = 'ERROR'
}

interface IButtonProps extends Pick<HTMLButtonElement, any> {
  text: string | ReactNode;
  theme?: BUTTONTHEME;
}

const btnBaseClassName = "font-serif font-medium rounded-full py-1 px-6 cursor-pointer shadow-inner";

const Button: FC<IButtonProps> = (props) => {
  const { text, className, theme = BUTTONTHEME.PRIMARY } = props;


  const primaryClassName = useMemo(() =>
    classNames(`${btnBaseClassName} bg-blue-400 text-white`,
      { [`${className}`]: className }),
  [ className ]
  );

  const btnClassName = useMemo(
    () => {
      switch (theme) {
      case BUTTONTHEME.ERROR:
      default:
        return primaryClassName;
      case BUTTONTHEME.PRIMARY:
        return primaryClassName;
      case BUTTONTHEME.WARN:
        return primaryClassName;
      }
    },
    [ theme ]
  );

  return (
    <button className={btnClassName}>{text}</button>
  );
};

export default Button;
