import { Link } from "react-router-dom";

const LeadList = ({leads}) => {
 
    return (
        <div className="lead_list">
            {leads.map((lead) => (
              <div className="leads-preview" key={lead.id}>
                <Link to={`/leadinfo/${lead.id}`}>
                <h2>{lead.name} {lead.surname}</h2>
                <h3>City: {lead.city}</h3>
                </Link>
                <img src={lead.profile_pic}/>
              </div>  
            ))}
        </div>
    );
}

export default LeadList;