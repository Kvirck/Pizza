import React from 'react'

const Categories = () => {
  const [activeIndex, setActiveIndex] = React.useState(0)
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']
  const onClickCategory = (i) => {
    setActiveIndex(i)
  }
  return (
    <div className="categories">
      <ul>
        {categories.map((categories, index) => (
          <li key={index} onClick={() => onClickCategory(index)} className={activeIndex === index ? 'active' : ''}>{categories}</li>
        ))}

      </ul>
    </div>
  );
};
export default Categories