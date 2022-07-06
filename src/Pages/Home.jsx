import React from 'react'
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination/Pagination';
import { SerachContext } from './../App';

const Home = () => {
    const {searchValue}=React.useContext(SerachContext)
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const [categoriesId, setCategoriesID] = React.useState(0)
    const [sortType, setSortType] = React.useState(
        { id: 0, name: 'популярности (по убыванию)', sort: 'rating', order: 'desc' },
    )
    const [currentPage, setCurrentPage] = React.useState(1)
    React.useEffect(() => {
        setIsLoading(true);
        const categories = categoriesId > 0 ? `?category=${categoriesId}` : ''
        const sort = `${categories === '' ? '?' : '&'}sortBy=${sortType.sort}`
        const search = searchValue ? `&search=${searchValue}` : ""
        let page = currentPage
        const limit = 4
        fetch(`https://62c55701134fa108c24eec50.mockapi.io/items${categories}${sort}&order=${sortType.order}
        &page=${page}&limit=${limit}${search}`
        )
            .then((res) => res.json())
            .then((json) => {
                setTimeout(() => {
                    setItems(json);
                    setIsLoading(false);
                }, 500);
            });
        window.scrollTo(0, 0)
    }, [categoriesId, sortType, searchValue, currentPage]);
    const pizzas = items.map((item) => <PizzaBlock key={item.id} {...item} />)
    const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />)
    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoriesId} setValue={setCategoriesID} />
                <Sort sortType={sortType} setSortType={setSortType} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? skeletons : pizzas}
            </div>
            <Pagination onChangePage={number => setCurrentPage(number)} />
        </div>

    )
}
export default Home