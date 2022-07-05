import React from 'react'
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
const Home = () => {
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    React.useEffect(() => {
        fetch('https://629f1de2461f8173e4e15689.mockapi.io/pizza/items')
            .then((res) => res.json())
            .then((json) => {
                setTimeout(() => {
                    setItems(json);
                    setIsLoading(false);
                }, 500);
            });
    }, []);
    return (
        <>
            <div className="content__top">
                <Categories />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading
                    ? [...new Array(6)].map((_, i) => <Skeleton key={i} />)
                    : items.map((item) => <PizzaBlock key={item.id} {...item} />)}
            </div>
        </>
    )
}
export default Home