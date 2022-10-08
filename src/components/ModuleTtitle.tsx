import { FC } from 'react';

interface IModuleTitle {
  text: string;
}

const ModuleTtitle: FC<IModuleTitle> = (props) => {
  const { text } = props;

  return (
    <div
      className="
      module-title shadow text-xs
      rounded text-indigo-50 bg-blue-400
      text-gray-900 py-0.5 px-1
      "
    >
      {text}
    </div>)
  ;
};

export default ModuleTtitle;
