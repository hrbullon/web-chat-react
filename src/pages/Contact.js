import { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';

import { CardContact } from '../components/CardContact';
import { InputSearch } from '../components/InputSearch';

import data from "../data/contacts";

export const Contact = () => {
  
    const [loading, setLoading] = useState(true);
    const [contacts, setContacts] = useState([]);
    
    useEffect(() => {
        getContacts();
    }, [])

    const getContacts = () => {
        setContacts(data);
        setLoading(false);
    }

    const handleSearch = (e) => {

        setLoading(true);

        if(e.target.value !== ""){
            let filter = e.target.value.toLowerCase();
            let filtered = data.filter( item => item.name.toLowerCase().indexOf(filter) !== -1);
            setContacts(filtered);
        }else{
            getContacts();
        }

        setLoading(false);
    }

    return (
    <>
        <div className="col col-12 mt-5 fixed">
            <InputSearch handleSearch={ handleSearch }/>
        </div>
        <div className='Main-fixed'>
            <div className="col col-12">
                {   loading &&
                    <Spinner animation="grow" />
                }
                { contacts.map( item => { 
                    return <CardContact contact={ item } key={ item.name }></CardContact>
                })}                      
            </div>
        </div>
    </>
  )
}
