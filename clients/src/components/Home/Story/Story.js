import React,{Component} from 'react';
import '../Universial.css';
import './Story.css';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DefaultPlayer as Video } from 'react-html5video';
import 'react-html5video/dist/styles.css';
import STORYVIDEO from '../../../assets/story.mp4'


//customize your slider
const sliderSettings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };


const sliderContentArray = [
  {
    title:'Our EquityRun developers are ahead of the curve',
    figure:'Erik Allebest',
    job:'CEO & Founder, Chess.com',
    video:STORYVIDEO
  },
  {
    title:'Our EquityRun developers are ahead of the curve',
    figure:'Erik Allebest',
    job:'CEO & Founder, Chess.com',
    video:STORYVIDEO
  },
  {
    title:'Our EquityRun developers are ahead of the curve',
    figure:'Erik Allebest',
    job:'CEO & Founder, Chess.com',
    video:STORYVIDEO
  },
  {
    title:'Our EquityRun developers are ahead of the curve',
    figure:'Erik Allebest',
    job:'CEO & Founder, Chess.com',
    video:STORYVIDEO
  }
]

class STORY extends Component {

    renderStoryContent = () => {
      return sliderContentArray.map((value,index) => {
        return(
          <div key={index} className='STORY-CONTENT'>
            <div>
              <h2>{value.title}</h2>
              <p>{value.figure}</p>
              <p>{value.job}</p>
            </div>
            <Video
              controls={['PlayPause', 'Seek', 'Time', 'Volume', 'Fullscreen']}
              onCanPlayThrough={() => {
              }}>
              <source src={value.video} type="video/mp4" />

          </Video>
          </div>
        )
      })
    }

    render() {
        return (
            <div className="GREY-BLOCK STORY">
                <h2 className='title'>Our Story</h2>
                <Slider {...sliderSettings}>
                  {this.renderStoryContent()}
                 </Slider>
            </div>
        );
    }
}

export default STORY;
