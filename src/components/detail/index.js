import React from 'react';
import ReactRotatingText from 'react-rotating-text';
import IconButtonBar from '../icon-button-bar';
import Image from '../image';

import './style.scss';

const Detail = ({ author, language = 'ko' }) => {
  const { bio, social, name } = author;

  if (!author) return null;
  return (
    <div className="bio-wrapper">
      <div className="bio">
        {language === 'ko' ? (
          <div className="introduction korean">
            <p className="title">
              
            </p>
            
          </div>
        ) : (
          <div className="detail">
          Currently I am working as a Software Engineer in Korea
I am an expert in Android and iOS App developments and video live streaming technologies areas and unity mobile technologies.
Especially I spent a lot of time on providing software development kit among various platforms in my career.
I have participated in several overseas exhibitions to study many cases from various industries technologies.
Nowadays I spend a lot of time on development in order to make cool stuffs with iOS and I am so excited about how I can make a good service with iOS and change the world better.
My vision is to enrich our lives with the latest technology therefore I am interested in new technologies and love to learn of new technologies.
My personal interests are table tennis and traveling (I have visited to 16 countries until now) I love new situations and to meet new people , especially I can be a close friend easily to any people regardless of nationality, race, age,gender, or different cultures.
          </div>
        )}
        
      </div>
    </div>
  );
};

export default Detail;
