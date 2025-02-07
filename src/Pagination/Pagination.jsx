

import RecordTable from '../Components/RecordTable'
import { useState } from 'react';
import '../App.css';
import Pagination from './Pages';
import { Col, Container, Row } from 'react-bootstrap';


function Paginnation({ dataset, lang, databylang }) {

    const dataa = dataset;
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const firstIndex = currentPage * itemsPerPage - 10;
    const lastIndex = currentPage * itemsPerPage;

    const totalPages = Math.ceil(dataa.length / itemsPerPage);

    const currentItems = dataa.slice(firstIndex, lastIndex);

    return (


        <div>
            <div>
                <RecordTable data={currentItems} searchBy={"all"} lang={lang} databylang={databylang} />
                <Pagination totalPages={totalPages} changePage={setCurrentPage} />

            </div>
        </div>



    )
}
export default Paginnation;