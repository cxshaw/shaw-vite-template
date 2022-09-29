import { FC } from 'react'

interface IModuleTitle {
	text: string;
}

const ModuleTtitle: FC<IModuleTitle> = (props) => {
  const { text } = props;

  return <div className="shadow text-xs rounded text-gray-900 bg-blue-400 py-0.5 px-1">
    {text}
  </div>
}

export default ModuleTtitle
