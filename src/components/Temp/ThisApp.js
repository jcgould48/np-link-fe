import React, { Component } from 'react'
import axios from 'axios'
import Moment from 'react-moment'
import { Popup, Menu, Segment, Button, Icon, Dimmer, Label } from 'semantic-ui-react'
// import { ToastContainer, toast } from 'react-toastify';

import Main from './Main'
// import Game from './Game'
// import Footer  from './Footer'
import Gallery from './Gallery'
// import Photobooth from './Photobooth'
// import LoginModal  from './LoginModal'
// import { addToLocalStorage } from './utils/helpers/helperFunctions'
// import 'react-toastify/dist/ReactToastify.min.css';

export default class App extends Component {
   constructor(){
      super()
      this.state = { 
         email: '',
         picture: '',
         gamePicture: '',
         activeItem: 'main',
         momentFormat: 'LTS',
         logged: false,
         openLoginForm: false,
         numGalleryItems: 0,
         gallery:[],
         windowHeight: '',
         windowWidth: '',
      }
   }

   handleLoginClick = () => this.setState({openLoginForm: true})
   handleLoginClose = () => this.setState({openLoginForm: false})
   handleTimeClick = () => this.setState({momentFormat: this.state.momentFormat ==='LTS'? 'dddd' : 'LTS' })
   getGalleryNumber = () => this.setState({numGalleryItems: this.state.numGalleryItems+1})
   changeGamePic = (urls) => this.setState({activeItem: 'game', gamePicture: urls})
   

   handleItemClick = (e, { name }) => {
    //   addToLocalStorage('activeItem', name)
    //   this.setState({ activeItem: window.localStorage.getItem('activeItem') })
   }

   handleSignOut = () => {
      localStorage.clear()
      this.setState({
         openLoginForm: false,
         logged:false,
         email: '',
         activeItem: 'main',
      })
   }
   
   getRandomPic = () => {
      axios.get('/randompic').then(({data}) => {
         this.setState({
            picture: data, 
            gamePicture: {...data.picture.urls}
         })
      })
   }

   loggedIn = (message, user) => {
      if(message==='Success'){
         this.setState({
            logged: true, 
            openLoginForm: false, 
            email: user
         })
      }
   }

   getEmail = () => {
      const user = JSON.parse(window.localStorage.getItem('user'))
      if(window.localStorage.getItem('user')){
         this.setState({
            logged:true, 
            email: user.email
         })
      }
   }
   
   getActiveTab = () => {
      const activeTab = window.localStorage.getItem('activeItem')
      if(activeTab){
         this.setState({
            activeItem: activeTab
         })
      }
   }

   resetGalleryNumber = () => {
      setTimeout(() => {
         this.setState({
            numGalleryItems: 0
         })
      }, 1500);
   }
   
   sendToastMessage = (type,message) => {
      if(type==='error'){
         toast.error(message, {
            autoClose: 6000,
            position: toast.POSITION.TOP_RIGHT
         });
      }else{
         toast.success(message, {
            autoClose: 1500,
            position: toast.POSITION.TOP_CENTER
         });
      }
   };


   componentDidMount(){
      this.setState({height: window.innerHeight, width: window.innerWidth})
      this.getActiveTab()
      this.getEmail()
      this.getRandomPic()
   }

   render() {
      const { 
         logged, 
         activeItem, 
         data, 
         picture, 
         email, 
         numGalleryItems, 
         openLoginForm, 
         gamePicture, 
         momentFormat,
         height,
         width} = this.state
      return (
         <div>
            <Menu 
               tabular 
               attached='top' 
               style={{justifyContent:'center'}}>
            <Popup 
               trigger={
                  <Moment 
                     format={momentFormat} 
                     interval={1000} 
                     style={{
                        position: 'absolute', 
                        left:'0', 
                        padding:'.92857143em 1.42857143em', 
                        height:'',
                        cursor: 'pointer'}}
                     onClick={this.handleTimeClick}  
                     />}
               content="Click on here to switch between time and day of the week"
               wide='very'
               />
            <div 
               style={{
                  position: 'absolute', 
                  right:'0', 
                  padding:'.92857143em 1.42857143em', 
                  height:''}}>
               {this.state.email
               ? <Button 
                     compact 
                     color='blue' 
                     animated='vertical' 
                     style={{marginTop: '-10px'}}
                     onClick={this.handleSignOut}
                  >
                  <Button.Content visible>{email}</Button.Content>
                  <Button.Content hidden><Icon name='sign-out' />SIGN OUT</Button.Content>
               </Button>
               :<Button 
                  compact 
                  color='blue' 
                  animated='vertical' 
                  style={{marginTop: '-10px'}}
                  onClick={this.handleLoginClick}
                  >
                  <Button.Content visible>Login/Register</Button.Content>
                  <Button.Content hidden><Icon name='sign-in' /></Button.Content>
               </Button>
               }
            </div>
            {logged && 
               <Popup
                  trigger={
                     <Menu.Item
                        name='photobooth'
                        active={activeItem === 'photobooth'}
                        onClick={this.handleItemClick}
                     />}
                  content='click on video to take picture'
                  wide='very'
                  position='bottom center'
                  mouseEnterDelay={500}
                  mouseLeaveDelay={200}
            />}
            {logged && 
               <Popup
                  trigger={
                     <Menu.Item
                        name='gallery'
                        content={
                           <span>Gallery {
                              numGalleryItems===0
                              ? ''
                              : <Label 
                                 circular 
                                 color='red' 
                                 size='mini'>
                                    {numGalleryItems}
                              </Label>}
                           </span>}
                        active={activeItem === 'gallery'}
                        onClick={this.handleItemClick}
                     />}
                  content='pictures you liked/disliked'
                  wide='very'
                  position='bottom center'
                  mouseEnterDelay={500}
                  mouseLeaveDelay={200}
               />}
               <Popup
                  trigger={
                     <Menu.Item
                        name='main'
                        active={activeItem === 'main'}
                        onClick={this.handleItemClick}
                     />}
                  content='click on the picture to get more options'
                  wide='very'
                  position='bottom center'
                  mouseEnterDelay={500}
                  mouseLeaveDelay={200}
               />
               {logged && 
               <Popup
                  trigger={
                     <Menu.Item
                        name='game'
                        active={activeItem === 'game'}
                        onClick={this.handleItemClick}
                     />}
                  content='simple swap tile puzzle'
                  wide='very'
                  position='bottom center'
                  mouseEnterDelay={500}
                  mouseLeaveDelay={200}
               />}
            </Menu>

            <Segment attached='bottom'>
            <Dimmer.Dimmable 
               blurring 
               dimmed={openLoginForm}
            >
               <Dimmer 
               page
               active={openLoginForm} 
               onClickOutside={this.handleLoginClose} 
               />
               {activeItem === "gallery"
                  ?<Gallery 
                  email={email}
                  changeGamePic={this.changeGamePic} 
                  resetGalleryNumber={this.resetGalleryNumber}/>
                  :null}
               {activeItem === "photobooth"
                  ?<Photobooth 
                     height={height}
                     width={width}
                     changeGamePic={this.changeGamePic}
                     getGalleryNumber={this.getGalleryNumber}
                  />
                  :null}
            </Dimmer.Dimmable>
               {activeItem === "main"
                  ?<Main 
                  data={data} 
                  email={email}
                  randomPicture={picture} 
                  getRandomPic={this.getRandomPic}
                  handleSignOut={this.handleSignOut}
                  getGalleryNumber={this.getGalleryNumber}
                  />:null}
               {activeItem === "game"
                  ?<Game 
                  height={height}
                  gamePicture={gamePicture}
               />:null}
            </Segment>
            <ToastContainer />
            <LoginModal 
               open={this.state.openLoginForm} 
               loggedIn={this.loggedIn}
               handleLoginClose={this.handleLoginClose}
               sendToastMessage={this.sendToastMessage}
               />
            <Footer />
         </div>
      )
   }
}