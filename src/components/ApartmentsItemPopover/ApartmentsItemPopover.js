import React, {Fragment, useRef} from 'react';
import Popper from '@material-ui/core/Popper';
import Fade from '@material-ui/core/Fade';
import { makeStyles } from '@material-ui/core/styles';
import flatIcon from "../../img/flat.svg";

const useStyles = makeStyles(theme => ({
    paper: {
        padding: 0,
        margin: 20,
        backgroundColor: theme.palette.background.paper,
        boxShadow: '0 0 60px 10px rgba(29, 23, 97, .3)'
    },
}));

const  ApartmentsItemPopover = (props) => {
    const classes = useStyles();
    const popperRef = useRef(null);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = (event) => {
        event.relatedTarget !==  popperRef.current && setAnchorEl(null);
    };


    const open = Boolean(anchorEl);

    const {
        number,
        planImg,
        floor,
        building,
        floorImg,
        buildingImg
    } = props;

    return (
        <Fragment>
            <img
                className="icon"
                src={flatIcon}
                alt={`Квартира № ${number}`}
                onMouseEnter={handlePopoverOpen}
                onMouseLeave={handlePopoverClose}
            />
            <Popper
                open={open}
                anchorEl={anchorEl}
                ref={popperRef}
                onMouseLeave={handlePopoverClose}
                placement='right'
                transition
                modifiers={{
                    offset: {
                        enabled: true,
                        offset: 40,
                    },
                    preventOverflow: {
                        enabled: true,
                        padding: 30,
                    },
                }}
            >
              {({ TransitionProps }) => (
                  <Fade {...TransitionProps} timeout={350}>
                          <div className={`apartments__popper ${classes.paper}`}>
                              <div className="apartments__item middle">
                                  <div className="apartments__item__left">
                                      <div className="apartments__item__img">
                                          <img src={planImg} alt={`Планировка ${floor}`}/>
                                      </div>
                                  </div>
                                  <div className="apartment__info">
                                      <div className="apartment__info__item">
                                          <div className="apartment__info__img">
                                              <img src={floorImg} alt={`Этаж ${floor}`}/>
                                          </div>
                                          <div className="apartment__info__text">
                                             <span>
                                                 Этаж {floor}
                                             </span>
                                          </div>
                                      </div>
                                      <div className="apartment__info__item">
                                          <div className="apartment__info__img">
                                              <img src={buildingImg} alt={`Корпус ${building}`}/>
                                          </div>
                                          <div className="apartment__info__text">
                                              <span>
                                                  Корпус {building}
                                              </span>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                  </Fade>
              )}
            </Popper>
        </Fragment>
    );
};

export default ApartmentsItemPopover;
