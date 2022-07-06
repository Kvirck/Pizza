import React from 'react'

const Categories = ({value, setValue}) => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

  return (
    <div className="categories">
      <ul>
        {categories.map((categories, index) => (
          <li key={index} onClick={() => setValue(index)} className={value === index ? 'active' : ''}>{categories}</li>
        ))}

      </ul>
    </div>
  );
};
export default Categories