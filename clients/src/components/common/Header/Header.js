import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
   } from 'reactstrap';
import LOGO from '../../../assets/logo.png';
import './Header.css'
import {connect} from 'react-redux';
import {authenticate} from '../../../actions/auth';
import LOADER from '../../Util/Loader';





class HEADER extends Component {
      constructor(props) {
      super(props);
      this.state = {
        isOpen: false
      };
    }

    componentDidMount() {
      this.props.authenticate();
    }
    toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
    }




    roleDifference = () => {
      if(this.props.auth.profile !== undefined){
        if(this.props.auth.profile.role === 'entreprener'){
          return  <Link to='/post-job'><NavLink>Post a Job</NavLink></Link>
        }else{
           return <NavLink href="/components/">Find Work</NavLink>
        }
      }
    }

    authButton = () => {
      if(this.props.auth){
        return [
          <NavItem>
              <Link to='/setting/billing'><NavLink>Setting</NavLink></Link>
          </NavItem>,
          <NavItem>
              <NavLink href='/api/logout'>Signout</NavLink>
          </NavItem>
        ]
      }
      else return <Link to='/login'><NavLink>Login</NavLink></Link>
    }

    render() {
        return (
            <div className="HEADER">
            <Navbar color="faded" light expand="md">
               <Link to='/'><NavbarBrand><img src={LOGO} alt='EquityRun'/></NavbarBrand></Link>
               <NavbarToggler onClick={this.toggle} />
               <Collapse isOpen={this.state.isOpen} navbar>
                 <Nav className="ml-auto" navbar>

                   <NavItem>
                    {this.roleDifference()}
                   </NavItem>

                   <NavItem>
                     <NavLink href="/components/">Report</NavLink>
                   </NavItem>

                   <NavItem>
                     <Link to='/message'><NavLink>Messages</NavLink></Link>
                   </NavItem>

                     {this.authButton()}
                 </Nav>
               </Collapse>
             </Navbar>
            </div>
        );
    }
}

function mapStateToProps({auth}) {
  return{auth}
}

export default connect(mapStateToProps,{authenticate})(HEADER)
