import {useState} from "react";
import {getApiPage} from "../services/moviesApi.service";

export default function Pagination({item}) {
    const [pages]=useState(500);
    const [currentPage, setCurrentPage] = useState(item.page);
    const [pageLimit]=useState(20)
    const [renderComponent,setRenderComponent] = useState({});

    // console.log(renderComponent,pageLimit);
    // console.log(data,RenderComponent,pageLimit,dataLimit)
    // const [pages] = useState(Math.round(data.length / dataLimit));
    // const [currentPage, setCurrentPage] = useState(1);
    //
    const goToNextPage = () => {
        setCurrentPage(currentPage+1);
        getApiPage(currentPage).then(value => setRenderComponent(value));
        console.log(renderComponent)
    }

    const goToPreviousPage = () => {
        setCurrentPage(currentPage-1);
        getApiPage(currentPage).then(value => setRenderComponent(value));
        console.log(renderComponent)
    }

    const changePage = (event) => {
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }
    //
    // const getPaginatedData = () => {
    //     const startIndex = currentPage * dataLimit - dataLimit;
    //     const endIndex = startIndex + dataLimit;
    //     return data.slice(startIndex, endIndex);
    // };
    //
    // const getPaginationGroup = () => {
    //     let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    //     return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    // };


    return (
        <div>
            <button onClick={goToPreviousPage}>prev</button>
            <button onClick={goToNextPage}>next</button>
           {/* <div className="dataContainer">*/}
           {/*      {getPaginatedData().map((d, idx) => (*/}
           {/*        <RenderComponent key={idx} data={d}/>*/}
           {/*    ))}*/}
           {/*</div>*/}
           {/*<div className="pagination">*/}
           {/*    <button*/}
           {/*        onClick={goToPreviousPage}*/}
           {/*        className={`prev ${currentPage === 1 ? 'disabled' : ''}`}*/}
           {/*    >*/}
           {/*        prev*/}
           {/*    </button>*/}
           {/*    {getPaginationGroup().map((item, index) => (*/}
           {/*        <button*/}
           {/*            key={index}*/}
           {/*            onClick={changePage}*/}
           {/*            className={`paginationItem ${currentPage === item ? 'active' : null}`}*/}
           {/*        >*/}
           {/*            <span>{item}</span>*/}
           {/*        </button>*/}
           {/*    ))}*/}
           {/*    <button*/}
           {/*        onClick={goToNextPage}*/}
           {/*        className={`next ${currentPage === pages ? 'disabled' : ''}`}*/}
           {/*    >*/}
           {/*        next*/}
           {/*    </button>*/}
           {/*</div>*/}
        </div>
    )
}
