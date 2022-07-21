import { useParams } from 'react-router-dom';
import { MessageChat } from '../components/MessageChat';

export const Chat = () => {
    
  const { code } = useParams();  

  const messages = [
    {
        type: "in",
        user: {
            name: "John Doe",
            profile : "https://th.bing.com/th/id/OIP.2rQpP-Im1HjdKNszihE2bwHaHa?pid=ImgDet&rs=1",
        },
        body: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem"
    },
    {
        type: "out",
        user: {
            name: "Mark Stone",
            profile : "https://th.bing.com/th/id/OIP.2rQpP-Im1HjdKNszihE2bwHaHa?pid=ImgDet&rs=1",
        },
        body: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem"
    }
  ];  

  return (
    <>
        <div class="card mt-2 h-100">
            <div class="card-body p-4">
            { 
                messages.map( msg => {
                return <MessageChat message={ msg }></MessageChat>
                })
            } 
            </div>
        </div>
        <div class="card mt-2">
            <div class="card-body">
                <div class="row">
                    <div class="col-12">
                        <input type="text" class="form-control"/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
