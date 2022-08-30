import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('');
    const [id_num, setId] = useState(''); 
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [zip_code, setZip] = useState('');
    const [profile_pic,setProfilePic] = useState('');
    const [fingers,setFingers] = useState('');

    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const lead = {name,surname,id_num,address,city,zip_code,profile_pic,fingers};
        setIsPending(true);
        
       fetch('http://localhost:8000/leads',{
        method: 'POST',
        headers: {"Content-Type":"application/json"},
        body:JSON.stringify(lead)
       }).then(() =>{
       setIsPending(false);
       history.push('/Home');
       })
       
    } 

    return(
        <div className="create">
        <form onSubmit={handleSubmit}>
            <h1>Create New Lead</h1>
                <label>Name</label>
                <input
                    type="text"
                    required
                    value = {name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John"
                />
                <label>Surname</label>
                <input
                    type="text"
                    required
                    value = {surname}
                    onChange={(e) => setSurname(e.target.value)}
                    placeholder="Smith"
                />
                <label>ID Number</label>
                <input
                    type="number"
                    required
                    value = {id_num}
                    onChange={(e) => setId(e.target.value)}
                    placeholder="SA ID"
                />
                <label>Physical Address</label>
                <input
                    type="text"
                    required
                    value = {address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Ladanna 17 Bulwayo street"
                />
                <label>City</label>
                <input
                    type="text"
                    required
                    value = {city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Polokwane"
                />
                <label>Zip Code</label>
                <input
                    type="number"
                    required
                    value = {zip_code}
                    onChange={(e) => setZip(e.target.value)}
                    placeholder="0600"
                />
                <label>Profile Image</label>
                <input
                    type="file"
                    required
                    value = {profile_pic}
                    onChange={(e) => setProfilePic(e.target.value)}
                />
                <label>Fingers</label>
                <input
                    type="file"
                    required
                    value = {fingers}
                    onChange={(e) => setFingers(e.target.value)}
                />
                {!isPending && <button>Add Lead</button>}
                {isPending && <button disabled>Adding Lead...</button>}
            </form>
            </div>
    );
}
export default Create;