import React from 'react'
import style from './Search.module.scss'
import searchSVG from "../../assets/img/search.svg"
export const Serach = ({ searchValue, setSearchValue }) => {
    return (
        <div className={style.root}>
            < img className={style.icon} src={searchSVG} alt="img" />
            <input value={searchValue} onChange={e => setSearchValue(e.target.value)}
                className={style.input} placeholder='Поиск Пиццы....' />
            {searchValue && <svg onClick={() => setSearchValue('')} className={style.clearSearch} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.6512 10.0005L18.9916 2.65978C19.4477 2.2041 19.4477 1.46473 18.9916 1.00905C18.5356 0.552974 17.797 0.552974 17.341 1.00905L10.0005 8.34979L2.6597 1.00905C2.20364 0.552974 1.46509 0.552974 1.00903 1.00905C0.552979 1.46473 0.552979 2.2041 1.00903 2.65978L8.34986 10.0005L1.00903 17.3413C0.552979 17.7969 0.552979 18.5363 1.00903 18.992C1.23706 19.2196 1.53591 19.3337 1.83436 19.3337C2.13282 19.3337 2.43167 19.2196 2.6597 18.9916L10.0005 11.6509L17.341 18.9916C17.569 19.2196 17.8678 19.3337 18.1663 19.3337C18.4647 19.3337 18.7636 19.2196 18.9916 18.9916C19.4477 18.5359 19.4477 17.7966 18.9916 17.3409L11.6512 10.0005Z" fill="#1D1D1B" />
            </svg>}
        </div >
    )
}
