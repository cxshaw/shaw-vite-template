import { FC } from 'react';

interface IInfoItemProps {
  label: string;
  value: string;
}

const InfoItem: FC<IInfoItemProps> = (props) => {
  const { label, value } = props;

  return (
    <div className="flex items-center">
      <span className="text-gray-500 min-w-min text-xs">{label}: </span>
      <span className="text-gray-900 flex-1 text-base">{value}</span>
    </div>
  );
};

export default InfoItem;
