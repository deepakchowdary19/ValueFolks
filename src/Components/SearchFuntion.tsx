import React, { useState } from 'react';
import Dropdown from 'react-dropdown-select';
import '../Styles/Search.css'; 

interface Option {
  label: string;
  value: string;
}

function SearchFunction() {
  const options: Option[] = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];

  const [selectedOptions, setSelectedOptions] = useState<Option[]>([]);

  const handleChange = (values: Option[]) => {
    setSelectedOptions(values);
  };

  return (
    <div>
      <Dropdown
        options={options}
        values={selectedOptions}
        onChange={handleChange}
        multi
        searchable
        placeholder="Select options..."
      />
    </div>
  );
}

export default SearchFunction;
