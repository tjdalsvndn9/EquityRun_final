import React,{Component} from 'react';

//components
import BACKGROUND from '../common/Background/Background'
import HERO from './Hero/Hero';
import BANNER from './Banner/Banner'
import SELECTION from './Selection/Selection'
import HOWITWORK from './HowItWork/HowItWork'
import SERVICE from './Service/Service';
import STORY from './Story/Story'
import AD from './Ad/Ad';
import FOOTER from './Footer/Footer';
import './Home.css';

class HOME extends Component {

    render() {
        return (
            <div className="HOME">
              <HERO/>
              <BANNER/>
              <SELECTION/>
              <HOWITWORK/>
              <SERVICE/>
              <STORY/>
              <AD/>
              <FOOTER/>
            </div>
        );
    }
}

export default HOME
