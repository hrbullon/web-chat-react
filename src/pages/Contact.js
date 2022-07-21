import { CardContact } from '../components/CardContact';

export const Contact = () => {
  
    const contacts = [
        {
            code: 1,
            name: "John Doe",
            profile : "https://th.bing.com/th/id/OIP.2rQpP-Im1HjdKNszihE2bwHaHa?pid=ImgDet&rs=1",
            text: "we here text"
        },
        {
            code: 2,
            name: "Mark Stone",
            profile : "https://th.bing.com/th/id/OIP.2rQpP-Im1HjdKNszihE2bwHaHa?pid=ImgDet&rs=1",
            text: "we here text"
        },
        {
            code: 3,
            name: "Steve Jobs",
            profile : "https://th.bing.com/th/id/OIP.2rQpP-Im1HjdKNszihE2bwHaHa?pid=ImgDet&rs=1",
            text: "we here text"
        }
    ]; 

    return (
    <>
        <div class="col col-12">
            { contacts.map( item => { 
                return <CardContact contact={ item } key={ item.name }></CardContact>
            })}      
        </div>
    </>
  )
}
