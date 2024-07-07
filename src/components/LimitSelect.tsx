import * as React from "react";

interface LimitSelectProps {
  limit: number;
  onChange: (newLimit: number) => void;
}

const LimitSelect: React.FC<LimitSelectProps> = ({ limit, onChange }) => {
  const handleLimitChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(Number(event.target.value));
  };

  return (
    <select
      id="limit"
      className="px-2 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black-500"
      value={limit}
      onChange={handleLimitChange}
    >
      <option value={10}>10</option>
      <option value={20}>20</option>
      <option value={50}>50</option>
      <option value={100}>100</option>
    </select>
  );
};

export default LimitSelect;
