import React from 'react';
import ApartmentsRow from "../ApartmentsRow";
import SortingBtn from "../ui/SortingBtn";
import {CSSTransition, TransitionGroup} from "react-transition-group";

const ApartmentsTable = (props) => {
    const {sortBy, handleSort} = props;

    return (
        <div className="table-block">
            <table className="table table_mobile">
                <thead>
                    <tr>
                        <td className="mobile-hidden"/>
                        <td className="mobile-hidden">
                            <SortingBtn
                                active={sortBy.type === 'number'}
                                direction={sortBy.direction}
                                handleSort={handleSort}
                                type="number"
                            >
                                {
                                    <span className="vertical">
                                        <span>№</span>
                                    </span>
                                }
                            </SortingBtn>
                        </td>
                        <td>
                            <SortingBtn
                                active={sortBy.type === 'building'}
                                direction={sortBy.direction}
                                handleSort={handleSort}
                                type="building"
                            >
                                {
                                    <span className="vertical">
                                        <span>Корпус</span>
                                    </span>
                                }
                            </SortingBtn>
                        </td>
                        <td>
                            <SortingBtn
                                active={sortBy.type === 'rooms_count'}
                                direction={sortBy.direction}
                                handleSort={handleSort}
                                type="rooms_count"
                            >
                                {
                                    <span className="vertical">
                                        <span>Комнат</span>
                                    </span>
                                }
                            </SortingBtn>
                        </td>
                        <td>
                            <SortingBtn
                                active={sortBy.type === 'area'}
                                direction={sortBy.direction}
                                handleSort={handleSort}
                                type="area"
                            >
                                {
                                    <span className="vertical">
                                        <span>Общая площадь, м<sup>2</sup></span>
                                    </span>
                                }
                            </SortingBtn>
                        </td>
                        <td>
                            <SortingBtn
                                active={sortBy.type === 'floor'}
                                direction={sortBy.direction}
                                handleSort={handleSort}
                                type="floor"
                            >
                                {
                                    <span className="vertical">
                                        <span>Этаж</span>
                                    </span>
                                }
                            </SortingBtn>
                        </td>
                        <td>
                            <SortingBtn
                                active={sortBy.type === 'price'}
                                direction={sortBy.direction}
                                handleSort={handleSort}
                                type="price"
                            >
                                {
                                    <span className="vertical">
                                        <span>Стоимость, ₽</span>
                                    </span>
                                }
                            </SortingBtn>
                        </td>
                        <td>
                            <SortingBtn
                                active={sortBy.type === 'payment'}
                                direction={sortBy.direction}
                                handleSort={handleSort}
                                type="payment"
                            >
                                {
                                    <span className="vertical">
                                        <span>Ежемесячный платёж, ₽/мес</span>
                                    </span>
                                }
                            </SortingBtn>
                        </td>
                        <td className="mobile-hidden">
                            <SortingBtn
                                active={sortBy.type === 'period'}
                                direction={sortBy.direction}
                                handleSort={handleSort}
                                type="period"
                            >
                                {
                                    <span className="vertical">
                                        <span>Срок сдачи</span>
                                    </span>
                                }
                            </SortingBtn>
                        </td>
                        <td className="mobile-hidden">
                          <span className="vertical">
                            <span className="mobile-hidden">Скачать PDF</span>
                            <span className="mobile-visible">Скачать PDF</span>
                          </span>
                        </td>
                    </tr>
                </thead>
                <TransitionGroup component="tbody">
                    {
                        props.items.map((apartment) => {
                            return (
                                <CSSTransition
                                    timeout={600}
                                    unmountOnExit
                                    classNames="apartments__row"
                                    key={apartment.id}
                                >
                                    <ApartmentsRow  {...apartment}/>
                                </CSSTransition>
                            )
                        })
                    }
                </TransitionGroup>
            </table>
        </div>
    );
};

export default ApartmentsTable;