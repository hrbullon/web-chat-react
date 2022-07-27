import { useEffect, useState } from 'react';

import { FormContact } from './FormContact';
import { CardContact } from '../../components/CardContact';
import { InputSearch } from '../../components/InputSearch';

import data from "../../data/contacts";

export const Contact = () => {
  
    const [contacts, setContacts] = useState([]);
    
    useEffect(() => {
        getContacts();
    }, [])

    const getContacts = () => {
        setContacts(data);
    }

    const handleSearch = (e) => {
        if(e.target.value !== ""){
            let filter = e.target.value.toLowerCase();
            let filtered = data.filter( item => item.name.toLowerCase().indexOf(filter) !== -1);
            setContacts(filtered);
        }else{
            getContacts();
        }
    }

    return (
    <>
        <FormContact></FormContact>
        <div className="col col-12 mt-3">
            <InputSearch handleSearch={ handleSearch }/>
        </div>
        <div className='Main-fixed'>
            <div className="col col-12">
                { contacts.map( item => { 
                    return <CardContact contact={ item } key={ item.name }></CardContact>
                })}                      
            </div>
        </div>
    </>
  )
}
