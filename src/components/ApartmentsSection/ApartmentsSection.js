import React, {Component} from 'react';
import orderBy from 'lodash/orderBy';
import {
    generateStringFromCount,
    getMortgageValue,
    getMortgagePriceValue
} from "../../utils/helpers";
import classNames from "classnames";
import ApartmentsTable from "../ApartmentsTable";
import ApartmentsList from "../ApartmenstList";
import {
    fetchApartments,
    incVisibleCount,
    setSort,
    setFinish,
    setRoomsCount,
    unSetRoomsCount,
    setRangeValue,
    setFilterCalc,
    setFilterByPrice,
    setFilterByInitialFee,
    resetAll
} from "../../redux/actions/apartments";
import {connect} from "react-redux";
import Spinner from "../Spinner";
import Sorting from "../Sorting";
import SortingBtn from "../ui/SortingBtn";
import RangeSlider from "../ui/RangeSlider";
import FilterBtn from "../ui/FilterBtn";
import Tabs from "../Tabs";
import TabsItem from "../TabsItem";
import {CSSTransition} from "react-transition-group";

class ApartmentsSection extends Component {

    state = {
        defaultView: false,
        hasError: false
    };

    componentDidMount() {
        this.props.fetchApartments();
        console.log('componentDidMount')
    }

    componentDidCatch(error, errorInfo) {
        this.setState({hasError: true})
    }

    toggleView = (value) => () => {
        this.setState({
            defaultView: value
        });
    };

    handleSort = (newType) => {
        const {
            setSort,
            sortBy:{
                type,
                direction
            }
        } = this.props;

        let newDirection = !direction ? 'asc' : direction === 'asc' ? 'desc' : 'asc';

        if(type !== newType) {
            newDirection = 'asc';
        }

        setSort({
            type : newType,
            direction: newDirection
        });
    };

    handleSetFinish = (finish) => {
        const {setFinish} = this.props;
        setFinish(!finish);
    };

    handleSetRoomsCount = (roomsCount) => {
        const {
            setRoomsCount,
            unSetRoomsCount,
            filters: {rooms_count}
        } = this.props;

        rooms_count.indexOf(roomsCount) === -1 ? setRoomsCount(roomsCount) : unSetRoomsCount(roomsCount);

    };

    handleFilter = (name) => (e, newValue) => {
        const {setRangeValue} = this.props;

        setRangeValue({
            name,
            value: newValue
        });
    };

    render() {
        const {
            items,
            loading,
            visible,
            sortBy,
            resetAll,
            setFilterCalc,
            setFilterByPrice,
            setFilterByInitialFee,
            incVisibleCount,
            filters: {
                floor,
                area,
                rooms_count,
                finish,
                price,
                initial_fee,
                payment,
                period,
                calc,
                price_per_meter,
                by_price,
                by_initial_fee
            }
        } = this.props;

        function getValueText(value) {
            return `${value}°C`;
        }

        if(this.state.hasError){
            return (<div>Error!!!!!</div>);
        }

        return (
            <div>
                <div className="controls">
                    <div className="container">
                        <div className="controls__filters">
                            <div className="controls__groups">
                                <div className="controls__col">
                                    <div className="controls__group">
                                        <div className="filters filters_sm">
                                            <div className="filters__label">
                                                <span>Количество комнат (E — евро)</span>
                                            </div>
                                            <div className="filters__list">
                                                <div className="filters__item">
                                                    <FilterBtn label="Студии"  name="rooms_count" active={rooms_count.indexOf('0') !== -1} handleClick={() => this.handleSetRoomsCount('0')}/>
                                                </div>
                                                <div className="filters__item">
                                                    <FilterBtn label="1"  name="rooms_count" active={rooms_count.indexOf('1') !== -1} handleClick={() => this.handleSetRoomsCount('1')}/>
                                                </div>
                                                <div className="filters__item">
                                                    <FilterBtn label="2Е"  name="rooms_count" active={rooms_count.indexOf('2e') !== -1} handleClick={() => this.handleSetRoomsCount('2e')}/>
                                                </div>
                                                <div className="filters__item">
                                                    <FilterBtn label="2"  name="rooms_count" active={rooms_count.indexOf('2') !== -1} handleClick={() => this.handleSetRoomsCount('2')}/>
                                                </div>
                                                <div className="filters__item">
                                                    <FilterBtn label="3Е"  name="rooms_count" active={rooms_count.indexOf('3e') !== -1} handleClick={() => this.handleSetRoomsCount('3e')}/>
                                                </div>
                                                <div className="filters__item">
                                                    <FilterBtn label="3"  name="rooms_count" active={rooms_count.indexOf('3') !== -1} handleClick={() => this.handleSetRoomsCount('3')}/>
                                                </div>
                                                <div className="filters__item">
                                                    <FilterBtn label="4Е"  name="rooms_count" active={rooms_count.indexOf('4e') !== -1} handleClick={() => this.handleSetRoomsCount('4e')}/>
                                                </div>
                                                <div className="filters__item">
                                                    <FilterBtn label="4" name="rooms_count" active={rooms_count.indexOf('4') !== -1} handleClick={() => this.handleSetRoomsCount('4')}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="controls__group">
                                        <div className="filters">
                                            <div className="filters__list">
                                                <div className="filters__item">
                                                    <FilterBtn label="С отделкой" name="finish" active={finish} handleClick={() => this.handleSetFinish(finish)}/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="controls__group controls__group_sm">
                                    <label className="filters__label">
                                        <span>Этаж</span>
                                    </label>
                                    <div className="filters__range">
                                        <RangeSlider
                                            value={floor}
                                            onChange={this.handleFilter('floor')}
                                            valueLabelDisplay="auto"
                                            aria-labelledby="range-slider"
                                            min={0}
                                            max={99}
                                            name={'floor'}
                                            marks={[{value: 0, label: 0}, {value: 99, label: 99}]}
                                        />
                                    </div>
                                </div>
                                <div className="controls__group controls__group_sm">
                                    <label className="filters__label">
                                        <span>
                                          Площадь, м<sup>2</sup>
                                        </span>
                                    </label>
                                    <div className="filters__range">
                                        <RangeSlider
                                            defaultValue={area}
                                            value={area}
                                            onChange={this.handleFilter('area')}
                                            valueLabelDisplay="auto"
                                            aria-labelledby="range-slider"
                                            getAriaValueText={getValueText}
                                            min={10}
                                            max={999}
                                            name={'area'}
                                            marks={[{value: 10, label: 10}, {value: 999, label: 999}]}
                                        />
                                    </div>
                                </div>
                                <div className="controls__group controls__group_md">
                                    <Tabs
                                        active={by_price ? 'price' : 'price_per_meter'}
                                        onClick={(filter) =>  setFilterByPrice(filter)}
                                    >
                                        <TabsItem
                                            label="price"
                                            content={<label className="filters__label"> Цена за квартиру, ₽</label>}
                                        >
                                            <div className="filters__range">
                                                <RangeSlider
                                                    defaultValue={price}
                                                    value={price}
                                                    onChange={this.handleFilter('price')}
                                                    valueLabelDisplay="auto"
                                                    aria-labelledby="range-slider"
                                                    min={1000000}
                                                    max={12000000}
                                                    name={'price'}
                                                    marks={[{value: 1000000, label: 1000000}, {value: 12000000, label: 12000000}]}
                                                />
                                            </div>
                                        </TabsItem>
                                        <TabsItem
                                            label="price_per_meter"
                                            content={<label className="filters__label"> Цена за метр, ₽</label>}
                                        >
                                            <div className="filters__range">
                                                <RangeSlider
                                                    defaultValue={price_per_meter}
                                                    value={price_per_meter}
                                                    onChange={this.handleFilter('price_per_meter')}
                                                    valueLabelDisplay="auto"
                                                    aria-labelledby="range-slider"
                                                    min={10000}
                                                    max={300000}
                                                    name={'price_per_meter'}
                                                    marks={[{value: 10000, label: 10000}, {value: 300000, label: 300000}]}
                                                />
                                            </div>
                                        </TabsItem>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                        <div className="controls__calc">
                            <div className="calc">
                                <div className="calc__head">
                                    <div className="calc__left">
                                        <span onClick={setFilterCalc} className={classNames('link link_open', {'opened' : calc})}>
                                          <span>Калькулятор ипотеки и рассрочки</span>
                                        </span>
                                    </div>
                                    <div className="calc__right">
                                        <span className="link link_gray" onClick={resetAll}>Сбросить фильтр</span>
                                    </div>
                                </div>

                                <CSSTransition
                                    in={calc}
                                    timeout={600}
                                    unmountOnExit
                                    classNames="calc__body"
                                >
                                    <div className="calc__body">
                                        <div className="calc__container">
                                            <div className="controls__groups">
                                                <div className="controls__group">
                                                    <Tabs
                                                        active={by_initial_fee ? 'initial_fee' : 'payment'}
                                                        onClick={(filter) =>  setFilterByInitialFee(filter)}
                                                    >
                                                        <TabsItem
                                                            label="initial_fee"
                                                            content={<label className="filters__label"> Первоначальный взнос, ₽</label>}
                                                        >
                                                            <div className="filters__range">
                                                                <RangeSlider
                                                                    defaultValue={initial_fee}
                                                                    value={initial_fee}
                                                                    onChange={this.handleFilter('initial_fee')}
                                                                    valueLabelDisplay="auto"
                                                                    aria-labelledby="range-slider"
                                                                    getAriaValueText={getValueText}
                                                                    min={10000}
                                                                    max={12000000}
                                                                    name={'initial_fee'}
                                                                    marks={[{value: 10000, label: 10000}, {value: 12000000, label: 12000000}]}
                                                                />
                                                            </div>
                                                        </TabsItem>
                                                        <TabsItem
                                                            label="payment"
                                                            content={<label className="filters__label"> Ежемесячный платёж, ₽/мес </label>}
                                                        >
                                                            <div className="filters__range">
                                                                <RangeSlider
                                                                    defaultValue={payment}
                                                                    value={payment}
                                                                    onChange={this.handleFilter('payment')}
                                                                    valueLabelDisplay="auto"
                                                                    aria-labelledby="range-slider"
                                                                    getAriaValueText={getValueText}
                                                                    min={100000}
                                                                    max={10000000}
                                                                    name={'payment'}
                                                                    marks={[{value: 100000, label: 100000}, {value: 10000000, label: 10000000}]}
                                                                />
                                                            </div>
                                                        </TabsItem>
                                                    </Tabs>
                                                </div>
                                                <div className="controls__group">
                                                    <label className="filters__label"> Срок кредитования</label>
                                                    <div className="filters__range">
                                                        <RangeSlider
                                                            defaultValue={period}
                                                            value={period}
                                                            onChange={this.handleFilter('period')}
                                                            valueLabelDisplay="auto"
                                                            aria-labelledby="range-slider"
                                                            getAriaValueText={getValueText}
                                                            min={1}
                                                            max={30}
                                                            name={'period'}
                                                            marks={[{value: 1, label: 1}, {value: 30, label: 30}]}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </CSSTransition>

                                <div className="mobile-visible">
                                    <span className="link link_gray reset-params" onClick={resetAll}>Сбросить фильтр</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="section">
                    <div className="container">
                        <div className="section__head">
                            <div className="section__text">
                                {generateStringFromCount(items.length, ['Свободна', 'Свободны', 'Cвободно'])} для продажи
                                <strong>
                                    {" "}<span>{ items.length }</span>{" "}
                                </strong>
                                {generateStringFromCount(items.length, ['квартира', 'квартиры', 'квартир'])} по указанным параметрам
                            </div>
                            <div className="section__view">
                                <div className="section__view__control">
                                    <button className={classNames('btn__view btn__view_rows', {'active' : !this.state.defaultView})} onClick={this.toggleView(false)}>
                                        <span>
                                          <span />
                                        </span>
                                    </button>
                                    <button className={classNames('btn__view btn__view_grid', {'active' : this.state.defaultView})} onClick={this.toggleView(true)}>
                                            <span>
                                              <span />
                                            </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {
                            loading ? (<Spinner/>) : items.length > 0 ? (
                                <div className="apartments__content">
                                    {
                                        this.state.defaultView ? (
                                            <div className="apartments__view apartments__view_row">
                                                <ApartmentsTable items={items.slice(0, visible)} sortBy={sortBy} handleSort={this.handleSort}/>
                                            </div>
                                        ) : (
                                            <div className="apartments__view apartments__view_grid">
                                                <Sorting>
                                                    <SortingBtn
                                                        active={sortBy.type === 'price'}
                                                        direction={sortBy.direction}
                                                        handleSort={this.handleSort}
                                                        type="price"
                                                    >
                                                        {<span>по стоимости</span>}
                                                    </SortingBtn>
                                                    <SortingBtn
                                                        active={sortBy.type === 'area'}
                                                        direction={sortBy.direction}
                                                        handleSort={this.handleSort}
                                                        type="area">
                                                            {<span>по площади</span>}
                                                    </SortingBtn>
                                                </Sorting>
                                                <ApartmentsList items={items.slice(0, visible)}/>
                                            </div>
                                        )
                                    }
                                    {
                                        visible < items.length ? (
                                            <div className="apartments__actions">
                                                <button className="btn btn_thin" onClick={() => incVisibleCount(visible)}>
                                                    Показать еще
                                                </button>
                                            </div>
                                        ) : null
                                    }
                                </div>
                            ) : null
                        }
                    </div>
                </div>
            </div>
        );
    }
}


const sortItems = (items, {type, direction}) => {

    if(!type || !direction){
        return items;
    }

    return orderBy(items, [(o) => {
            if(isNaN(o[type])){
                return o[type];
            } else {
                return Number(o[type]);
            }
        }
    ], direction)
};

const filtrateItems = (items, filters) => {

    return  items.filter((obj) => {

        if(Object.keys(filters).length) {
            for(let filter of Object.keys(filters)){
                switch (filter) {
                    case 'floor':
                    case 'area':
                        if(filters[filter][0] > obj[filter] || obj[filter] > filters[filter][1]){
                            return false;
                        }
                        break;
                    case 'price':
                        if(filters.by_price) {
                            if(filters[filter][0] > obj[filter] || obj[filter] > filters[filter][1]){
                                return false;
                            }
                        }
                        break;
                    case 'price_per_meter':
                        if(!filters.by_price){
                            let price_per_meter = Math.round(Number(obj.price)/Number(obj.area));
                            if(filters[filter][0] > price_per_meter || price_per_meter > filters[filter][1]){
                                return false;
                            }
                        }
                        break;
                    case 'initial_fee':
                        if(filters.calc && filters.by_initial_fee){
                            const {period} = filters;
                            const payment = getMortgageValue(filters[filter] / 0.1, filters[filter], period, 9.3);

                            if( obj.payment > payment){
                                return false;
                            }
                        }
                        break;

                    case 'payment':
                        if(filters.calc && !filters.by_initial_fee){
                            const {period} = filters;
                            const price = getMortgagePriceValue(filters[filter], period, 9.3);

                            if(obj.price > price){
                                return false
                            }

                            if(obj.payment > filters[filter]) {
                                return false;
                            }
                        }
                        break;
                    case 'finish':
                        if(filters[filter] && filters[filter] !== Boolean(obj[filter])) return false;
                        break;
                    case 'rooms_count':
                        if(filters[filter].length > 0){
                            let t;
                            let f = filters[filter].map(f => { return typeof f === 'number' ? f : f.toLowerCase() });

                            const { euro } = obj;

                            Boolean(euro) ? t = Number(obj[filter]) + 'e' : t = Number(obj[filter]);

                            if(f.indexOf(t.toString()) === -1 && f.indexOf(t) === -1){
                                if(f.indexOf(obj[filter].toString()) === -1 && f.indexOf(obj[filter]) === -1) {
                                    return false
                                }
                            }
                        }
                        break;
                    default:
                        return true;
                }
            }
        }

        return true;
    });

};

const getCurrentItems = (items, filter, sortBy) => {
    return filtrateItems(sortItems(items, sortBy), filter);
};

const mapStateToProps = (
        {
            apartments : {
                items,
                loading,
                error,
                visible,
                sortBy,
                filters
            }
        }
    ) => {

    return {
        items: items && getCurrentItems(items, filters, sortBy, visible),
        loading,
        visible,
        error,
        sortBy,
        filters
    }
};

const mapDispatchToProps = {
    fetchApartments,
    incVisibleCount,
    setSort,
    resetAll,
    setFinish,
    setRoomsCount,
    setRangeValue,
    setFilterCalc,
    setFilterByPrice,
    setFilterByInitialFee,
    unSetRoomsCount
};

export default connect(mapStateToProps, mapDispatchToProps)(ApartmentsSection);