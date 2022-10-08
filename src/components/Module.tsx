import ModuleTtitle from '@/components/ModuleTtitle';
import { FC, PropsWithChildren } from 'react';

interface IModuleProps {
  title: string;
}

const Module: FC<PropsWithChildren<IModuleProps>> = (props) => {
  const { title, children } = props;

  return (
    <div className="flex flex-col mb-0.5">
      <ModuleTtitle text={title}/>
      <div>{children}</div>
    </div>
  );
};

export default Module;
