import React from 'react'
import './ProfileScreen.css'
import Nav from './Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice'
import { auth } from '../firebase';

function ProfileScreen() {

  const user = useSelector(selectUser);

  return (
    <div className="profileScreen">
      <Nav />
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt="avatar-img" />

          <div className="profileScreen__details">
            <h2>{user.email}</h2>
            <div className="profileScreen__plans">
              
              <h3>Plans</h3>

              <h2 className="renewal_date">Renewal date</h2>

              <div className="standard__plan">
                <div className="standard__plan__1080">
                  <h1>Netflix Standard</h1>
                  <h2>1080p</h2>
                </div>

                <div>
                  <button className="profileScreen__signOut">Subscribe</button>
                </div>
              </div>

              <div className="standard__plan">
                <div className="standard__plan__1080">
                  <h1>Netflix Basic</h1>
                  <h2>480p</h2>
                </div>

                <div>
                  <button className="profileScreen__signOut">Subscribe</button>
                </div>
              </div>

              <div className="standard__plan">
                <div className="standard__plan__1080">
                  <h1>Netflix Premium</h1>
                  <h2>4K+HDR</h2>
                </div>

                <div>
                  <button className="current__package">Current Package</button>
                </div>
              </div>


              <button
                className="profileScreen__signOut"
                onClick={() => auth.signOut()}>Sign Out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen
