import volunteerData from './Volunteerdata';
import './Volunteer.css';


function Volunteer(){
    const list = volunteerData.map((volunteer) => {
        return(
            <li className="volunteer__item" key={volunteer.id}>
                
                <h2 className="volunteer__title">{volunteer.title}</h2>
                <img className="volunteer__pic" src={volunteer.path} alt={volunteer.alt}/>
              
            </li>
        );
    });


    return(
        <div className='volunteers'>
            <p className="volunteers__intro">
                Here are our volunteer programs:
            </p>
            <ul className='volunteers__list'>
                {list}
            </ul>
        </div>
    );
}

export default Volunteer;
