import React, { useState, useEffect } from 'react';
import carousel1 from '../pages/img/carousel1.png';
import carousel2 from '../pages/img/carousel2.png';
import carousel3 from '../pages/img/carousel3.png';
import Slider from 'react-slick';
import '../pages/css/category.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import queryString from 'query-string';
import CategoryList from './CategoryList';
import PaginationUi from '@mui/material/Pagination';
import { Box } from '@mui/system';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles(() => ({
    pagination: {
        display: 'flex',
        justifyContent: 'center',
        '& ul li button': {
            '&:hover': {
                background: 'rgb(193, 231, 255)',
            }
        }
    },
}));

function SampleNextArrow(props) {
    const { onClick } = props;

    return (
        <span className={'btn-control btn-control-right button-modify'}
            onClick={onClick}>
            <i className="fas fa-chevron-right"></i>
        </span >
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;

    return (
        <span className={'btn-control btn-control-left button-modify'}
            onClick={onClick}>
            <i className="fas fa-chevron-left"></i>
        </span>
    );
}

const autoplay = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    prevArrow: <SamplePrevArrow />,
    nextArrow: <SampleNextArrow />,
};


const Category = () => {
    const classes = useStyles();
    const [item, setItem] = useState([]);

    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 8,
        _totalRows: 1
    });

    const [filters, setFilters] = useState({
        _limit: 8,
        _page: 1,
    })


    const handlePageChange = (_, newPage) => {
        setFilters({
            ...filters,
            _page: newPage,
        })
    }
    useEffect(() => {
        async function fetchPostList() {
            try {
                const paramString = queryString.stringify(filters);
                const requestUrl = `http://js-post-api.herokuapp.com/api/posts?${paramString}`;
                const response = await fetch(requestUrl);
                const responseJSON = await response.json();

                const { data, pagination } = responseJSON;
                setItem(data);
                setPagination(pagination);
            } catch (error) {
                console.log("Err", error);
            }
        }
        fetchPostList();
    }, [filters]);



    return (
        <div className="container">
            <div className="container-category">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="container-box">
                            <div className="box">
                                <h4 className="text">Danh m???c s???n ph???m</h4>
                                <div className="list">
                                    <a href="/#" className="">??i???n tho???i smartphone</a>
                                    <a href="/#" className="">??i???n tho???i b??n</a>
                                    <a href="/#" className="">??i???n tho???i ph??? th??ng</a>
                                    <a href="/#" className="">M??y ?????c s??ch</a>
                                    <a href="/#" className="">M??y t??nh b???ng</a>
                                </div>
                            </div>
                            <div className="box">
                                <h4 className="text">?????a ch??? nh???n h??ng</h4>
                                <div className="address">B???n mu???n giao h??ng t???i ????u?</div>
                                <div className="address-change">NH???P ?????A CH???</div>
                            </div>
                            <div className="box">
                                <h4 className="text">D???ch v???</h4>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check1" />
                                            <label className="custom-control-label" htmlFor="check1"> <img src="https://salt.tikicdn.com/ts/upload/f9/ad/0e/a8a97f5ac7661d637942b42796893662.png" alt="tiki" /> Giao si??u t???c 2H</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check2" />
                                            <label className="custom-control-label" htmlFor="check2"> <img src="https://salt.tikicdn.com/ts/upload/af/84/fc/2037c3b93a81767aed21358ebf3f8b8e.png" alt="tiki" /> Kh??ng gi???i h???n</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check3" />
                                            <label className="custom-control-label" htmlFor="check3"> R??? h??n ho??n ti???n</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="box">
                                <h4 className="text">N??i b??n</h4>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check4" />
                                            <label className="custom-control-label" htmlFor="check4">H??? Ch?? Minh</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check5" />
                                            <label className="custom-control-label" htmlFor="check5">H?? N???i</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check6" />
                                            <label className="custom-control-label" htmlFor="check6">B???n Tre</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check7" />
                                            <label className="custom-control-label" htmlFor="check7">Ngh??? An</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check8" />
                                            <label className="custom-control-label" htmlFor="check8">???? N???ng</label>
                                        </div>
                                        <a href="/#">Xem th??m</a><i className="fas fa-chevron-down"></i>
                                    </li>
                                </ul>
                            </div>
                            <div className="box">
                                <h4 className="text">????nh gi??</h4>
                                <div className="list">
                                    <a href="/#" className="rating">
                                        <p className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                        </p>
                                        <span>t??? 5 sao</span>
                                    </a>
                                    <a href="/#" className="rating">
                                        <p className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star" style={{ color: '#dddddd' }}></i>
                                        </p>
                                        <span>t??? 4 sao</span>
                                    </a>
                                    <a href="/#" className="rating">
                                        <p className="star">
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star" style={{ color: '#dddddd' }}></i>
                                            <i className="fas fa-star" style={{ color: '#dddddd' }}></i>
                                        </p>
                                        <span>t??? 3 sao</span>
                                    </a>
                                </div>
                            </div>
                            <div className="box">
                                <h4 className="text"> gi??</h4>
                                <div className="item">
                                    <span>D?????i 500.000</span>
                                </div>
                                <div className="item">
                                    <span>T??? 500.000 ?????n 4.500.000</span>
                                </div>
                                <div className="item">
                                    <span>T??? 4.500.000 ?????n 18.000.000</span>
                                </div>
                                <div className="item">
                                    <span>Tr??n 18.000.000</span>
                                </div>
                                <div className="price-small-text">Ch???n kho???ng gi??</div>
                                <div className="input-group">
                                    <input pattern="[0-9]*" placeholder="Gi?? t???" />
                                    <span >-</span>
                                    <input pattern="[0-9]*" placeholder="Gi?? ?????n" />
                                </div>
                                <button >??p d???ng</button>
                            </div>
                            <div className="box">
                                <h4 className="text">ROM</h4>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check9" />
                                            <label className="custom-control-label" htmlFor="check1">128GB</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check10" />
                                            <label className="custom-control-label" htmlFor="check10">64GB</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check11" />
                                            <label className="custom-control-label" htmlFor="check11">256GB</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check12" />
                                            <label className="custom-control-label" htmlFor="check12">16GB</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check13" />
                                            <label className="custom-control-label" htmlFor="check13">32GB</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="box">
                                <h4 className="text">Th????ng hi???u</h4>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check14" />
                                            <label className="custom-control-label" htmlFor="check14">Samsung</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check15" />
                                            <label className="custom-control-label" htmlFor="check15">Panasonic</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check16" />
                                            <label className="custom-control-label" htmlFor="check16">Apple</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check17" />
                                            <label className="custom-control-label" htmlFor="check17">Xiaomi</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check18" />
                                            <label className="custom-control-label" htmlFor="check18">OPPO</label>
                                        </div>
                                        <a href="/#">Xem th??m</a><i className="fas fa-chevron-down"></i>
                                    </li>
                                </ul>
                            </div>
                            <div className="box">
                                <h4 className="text">Camera sau</h4>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check19" />
                                            <label className="custom-control-label" htmlFor="check19">T??? 11MP ?????n 13MP</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check20" />
                                            <label className="custom-control-label" htmlFor="check20">Tr??n 16MP</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check21" />
                                            <label className="custom-control-label" htmlFor="check21">D?????i 8MP</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check22" />
                                            <label className="custom-control-label" htmlFor="check22">T??? 14MP ?????n 16MP</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check23" />
                                            <label className="custom-control-label" htmlFor="check23">T??? 8MP ?????n 10MP</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="box">
                                <h4 className="text">Camera tr?????c</h4>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check24" />
                                            <label className="custom-control-label" htmlFor="check24">T??? 8MP ?????n 12MP</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check25" />
                                            <label className="custom-control-label" htmlFor="check25">Tr??n 12MP</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check26" />
                                            <label className="custom-control-label" htmlFor="check26">D?????i 8MP</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check27" />
                                            <label className="custom-control-label" htmlFor="check27">T??? 5MP ?????n 8MP</label>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="box">
                                <h4 className="text">M??u s???c</h4>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check28" />
                                            <label className="custom-control-label" htmlFor="check28">??en</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check29" />
                                            <label className="custom-control-label" htmlFor="check29">Xanh</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check30" />
                                            <label className="custom-control-label" htmlFor="check30">Xanh d????ng</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check31" />
                                            <label className="custom-control-label" htmlFor="check31">B???c</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check32" />
                                            <label className="custom-control-label" htmlFor="check32">X??m</label>
                                        </div>
                                        <a href="/#">Xem th??m</a><i className="fas fa-chevron-down"></i>
                                    </li>
                                </ul>
                            </div>
                            <div className="box">
                                <h4 className="text">Nh?? cung c???p</h4>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check33" />
                                            <label className="custom-control-label" htmlFor="check33">Th??? Gi???i Di ?????ng Official</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check34" />
                                            <label className="custom-control-label" htmlFor="check34">Tiki Trading</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check35" />
                                            <label className="custom-control-label" htmlFor="check35">Long H??ng Mobile</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check36" />
                                            <label className="custom-control-label" htmlFor="check36">H???ng H???nh Mobile</label>
                                        </div>
                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input" id="check37" />
                                            <label className="custom-control-label" htmlFor="check37">TH???NG THAO MOBILE</label>
                                        </div>
                                        <a href="/#">Xem th??m</a><i className="fas fa-chevron-down"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <Box className="col-lg-9" >
                        <div className="container-fluid container-item">
                            <div className="title">
                                <h1>??i???n Tho???i - M??y T??nh B???ng </h1>
                            </div>
                            <Slider className="carousel" {...autoplay}>
                                <img className="card-img-top" src={carousel1} alt="card" />
                                <img className="card-img-top" src={carousel2} alt="card" />
                                <img className="card-img-top" src={carousel3} alt="card" />
                                <img className="card-img-top" src={carousel3} alt="card" />
                            </Slider>
                            <div className="sort_link">
                                <a href="/#" className="active link">Ph??? bi???n</a>
                                <a href="/#" className="link">B??n ch???y</a>
                                <a href="/#" className="link">H??ng m???i</a>
                                <a href="/#" className="link">Gi?? Th???p</a>
                                <a href="/#" className="link">Gi?? Cao</a>
                            </div>
                            <div className="filter-items">
                                <p className="item">
                                    <img src="https://salt.tikicdn.com/ts/upload/f9/ad/0e/a8a97f5ac7661d637942b42796893662.png" height="24" width="56" alt="tiki" />
                                </p>
                                <p className="item">
                                    <img src="https://salt.tikicdn.com/ts/upload/af/84/fc/2037c3b93a81767aed21358ebf3f8b8e.png" height="24" width="76" alt="tiki" />
                                </p>
                            </div>
                            <div className="row card-item">
                                <CategoryList posts={item} />
                            </div>
                        </div>
                        <PaginationUi page={pagination._page} color="primary" className={classes.pagination} count={Math.ceil(pagination._totalRows / pagination._limit)} onChange={handlePageChange} hidePrevButton hideNextButton />
                    </Box>
                </div>
            </div>
        </div >
    );
}

export default Category;