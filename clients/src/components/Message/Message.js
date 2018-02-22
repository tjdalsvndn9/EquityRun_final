import React, {Component} from 'react';
import { Button, Comment, Form, Header,Input } from 'semantic-ui-react'
import './Message.css';
import AVATAR from '../../assets/avatar.jpg'


class MESSAGE extends Component {
  render() {
    return (

      <div className="MESSAGE">
        <div className='CHAT'>
          <div className='CHAT-LIST'>
          <Comment.Group>
           <Comment>
             <Comment.Avatar src={AVATAR} />
             <Comment.Content>
               <Comment.Author>Elliot Fu</Comment.Author>
             </Comment.Content>
           </Comment>
         </Comment.Group>
         <Comment.Group>
          <Comment>
            <Comment.Avatar src={AVATAR} />
            <Comment.Content>
              <Comment.Author>Soung Fu</Comment.Author>
            </Comment.Content>
          </Comment>
        </Comment.Group>
          </div>
          <div className='CHAT-ROOM'>
            <div className='CHAT-MESSAGE'>
                <Comment.Group>
                  <Comment>
                   <Comment.Content>
                     <Comment.Author>Me <span>Today at 5:42PM</span></Comment.Author>
                     <Comment.Text>How artistic!</Comment.Text>
                   </Comment.Content>
                 </Comment>
                </Comment.Group>
                <Comment.Group>
                  <Comment>
                   <Comment.Content>
                     <Comment.Author>Elliot <span>Today at 5:42PM</span></Comment.Author>
                     <Comment.Text>How dasfasdglajsdglk;sdgjasl;dgjdsl;!</Comment.Text>
                   </Comment.Content>
                 </Comment>
                </Comment.Group>
            </div>
            <div className='CHAT-CONTROL'>
              <Input placeholder='Type' />
              <Button content='video chat' />
              <Button content='Send' />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MESSAGE;
