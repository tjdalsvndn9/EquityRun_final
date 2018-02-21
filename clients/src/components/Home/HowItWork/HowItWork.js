import React,{Component} from 'react';
import '../Universial.css'
import './HowItWork.css';
import CareImg from '../../../assets/care.png';
import CoinImg from '../../../assets/coins.png';
import GearImg from '../../../assets/gears.png';
import IdeaImg from '../../../assets/idea.png'


const assetArray = [
  {
    img:CareImg,
    title:'Care',
    text:"Post a job to tell us about your project. We'll quickly match you with the right freelancers."
  },
  {
    img:CoinImg,
    title:'Coin',
    text:"Browse profiles, reviews, and proposals then interview top candidates. Hire a favorite and begin your project."
  },
  {
    img:GearImg,
    title:'Gear',
    text:"Use the Upwork platform to chat, share files, and collaborate from your desktop or on the go."
  },
  {
    img:IdeaImg,
    title:'Idea',
    text:"Invoicing and payments happen through Upwork. With Upwork Protection, only pay for work you authorize."
  }
]

class HOWITWORK extends Component {


    renderAssets = () => {
      return assetArray.map((value,index) => {
        return (
          <div key={index} className='HOME-IMG'>
            <img src={value.img} alt='image'/>
            <h4>{value.title}</h4>
            <p>{value.text}</p>
          </div>
        )
      })
    }

    render() {
        return (
            <div className="HOWITWORK">
                <h2 className='title'>How It Works</h2>
                <div className='FLEX-ROW'>
                  {this.renderAssets()}
                </div>
            </div>
        );
    }
}

export default HOWITWORK
