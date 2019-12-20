import React, {Component} from 'react';
import {Switch, Route, withRouter} from 'react-router-dom';
import './App.scss';
import Loader from "../Loader";
import HomeLayout from "../Layouts/HomeLayout";
import PagesLayout from "../Layouts/PagesLayout";

class App extends Component {
    state = {
        loading: true,
        isScrolled: 0,
        visibleMenu: false
    };

    animationComplete = () => {
        this.setState({
            loading: !this.state.loading
        })
    };

    toggleMenu = () => {
        this.setState({
            visibleMenu: !this.state.visibleMenu
        });
    };

    handleOnScroll = (e) => {
        this.setState({isScrolled: window.scrollY })
    };

    componentDidMount() {
        window.addEventListener('scroll', this.handleOnScroll);

        const {history} = this.props;

        history.listen(() => {
            this.setState({
                visibleMenu: false
            });
        });
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleOnScroll)
    }


    render() {
        return this.state.loading ? <Loader animationComplete={this.animationComplete}/> : (
            <div className="App">
                <Switch>
                    <Route exact path="/" >
                        <HomeLayout visibleMenu={this.state.visibleMenu} toggleMenu={this.toggleMenu} isScrolled={this.state.isScrolled}/>
                    </Route>
                    <Route>
                        <PagesLayout visibleMenu={this.state.visibleMenu} toggleMenu={this.toggleMenu} isScrolled={this.state.isScrolled}/>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default withRouter(App);
