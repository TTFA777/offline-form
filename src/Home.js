import LeadList from "./LeadList";
import useFetch from "./useFetch";

const Home = () => {
    const {data: leads, isPending} = useFetch('http://localhost:8000/leads');
    return(

        <div className="home">
            <h1>ALL LEADS!!</h1>
            {isPending && <div>Loading...</div>}
            {leads && <LeadList leads={leads}/>} 

        </div>
    );
}
export default Home;