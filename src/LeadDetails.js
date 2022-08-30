import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useHistory } from 'react-router-dom';


const LeadDetails = () => {
    const{id} = useParams();
    const{data: lead,isPending,error}=useFetch('http://localhost:8000/leads/'+ id);
    const history = useHistory();
    const handleClick= () => {
     fetch('http://localhost:8000/leads/' +lead.id, {
        method: 'DELETE'
     }).then(()=>{
        history.push('/Home');
     })
    }

    return (
        <div >
            {error && <div>{error}</div>}
            {isPending && <div> Loading...</div>}
            {lead &&(
                <div className="lead-details">
                     <img src={lead.profile_pic}/>
                     <h3>Name: {lead.name}</h3>
                     <h3>Surname: {lead.surname}</h3>
                     <h3>ID Number: {lead.id_num}</h3>
                     <h3>Physical Address: {lead.address}</h3>
                     <h3>City: {lead.city}</h3>
                     <h3>Zip Code: {lead.zip_code}</h3>
                     <h3>fingers:  <img  src={lead.fingers}/></h3>
                    <h1> </h1>
                     <button onClick = {handleClick}>Delete Form</button>
                </div>
            )}
        </div>
    );
}

export default LeadDetails