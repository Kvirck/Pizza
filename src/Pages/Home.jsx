import React from 'react'
import Categories from '../components/Categories';
import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock/PizzaBlock';
import Skeleton from '../components/PizzaBlock/Skeleton';
import Pagination from '../components/Pagination/Pagination';
import { SerachContext } from './../App';
import { useSelector, useDispatch } from 'react-redux';
import { setCategoriesId, setCurrentPage } from '../redux/slices/filterSlice'
import axios from 'axios';


const Home = () => {
    const { categoriesId, currentPage } = useSelector(state => state.filter)
    const dipatch = useDispatch()
    const setCategories = (i) => { dipatch(setCategoriesId(i)) }

    const sortType = useSelector(state => state.filter.sort)
    const { searchValue } = React.useContext(SerachContext)
    const [items, setItems] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);

    React.useEffect(() => {
        setIsLoading(true);
        const categories = categoriesId > 0 ? `category=${categoriesId}` : ''
        // const sort = `${categories === '' ? '?' : '&'}sortBy=${sortType.sort}`
        const sort = `sortBy=${sortType.sort}`
        const order = `order=${sortType.order}`
        const search = searchValue ? `&search=${searchValue}` : ""
        let page = currentPage
        const limit = 4

        axios.get(`https://62c55701134fa108c24eec50.mockapi.io/items?${sort}&${order}&${categories}&page=${page}&limit=${limit}${search}`)
            .then((res) => {
                setItems(res.data);
                setIsLoading(false);
                ;
            })

        window.scrollTo(0, 0)
    }, [categoriesId, sortType, searchValue, currentPage]);


    const pizzas = items.map((item) => <PizzaBlock key={item.id} {...item} />)
    const skeletons = [...new Array(6)].map((_, i) => <Skeleton key={i} />)
    
    const onChangePage = (number) => {
        dipatch(setCurrentPage(number))
    }
    return (
        <div className="container">
            <div className="content__top">
                <Categories value={categoriesId} setValue={setCategories} />
                <Sort />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoading ? skeletons : pizzas}
            </div>
            <Pagination currentPage={currentPage} onChangePage={onChangePage} />
        </div>

    )
}
export default Home