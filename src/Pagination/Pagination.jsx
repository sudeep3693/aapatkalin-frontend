import RecordTable from '../Components/RecordTable';
import { useState, useEffect } from 'react';
import '../App.css';
import Pagination from './Pages';
import { Col, Container, Row } from 'react-bootstrap';

function Paginnation({ dataset, lang, databylang, lStatus, locationwise, setOpenDetailModal, selecteddata }) {
    const itemsPerPage = 10;
    const [currentPage, setCurrentPage] = useState(1);
    const [currentItems, setCurrentItems] = useState([]);

    useEffect(() => {
        let dataToUse = lStatus ? locationwise : dataset;
        if (!Array.isArray(dataToUse)) {
            dataToUse = [];
        }
        
        const firstIndex = (currentPage - 1) * itemsPerPage;
        const lastIndex = firstIndex + itemsPerPage;
        setCurrentItems(dataToUse.slice(firstIndex, lastIndex));
    }, [dataset, lStatus, locationwise, currentPage]);

    const totalPages = Math.ceil((lStatus ? locationwise.length : dataset.length) / itemsPerPage);

    return (
        <div>
            <RecordTable 
                data={currentItems} 
                searchBy="all" 
                lang={lang} 
                databylang={databylang} 
                lStatus={lStatus} 
                locationwise={locationwise} 
                setOpenDetailModal = {setOpenDetailModal}
                selecteddata={selecteddata}
            />
            <Pagination totalPages={totalPages} changePage={setCurrentPage} />
        </div>
    );
}

export default Paginnation;
