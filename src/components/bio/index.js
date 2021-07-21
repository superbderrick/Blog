import React from 'react';
import ReactRotatingText from 'react-rotating-text';
import IconButtonBar from '../icon-button-bar';
import Image from '../image';

import './style.scss';

const Bio = ({ author, language = 'ko' }) => {
  const { bio, social, name } = author;

  if (!author) return null;
  return (
    <div className="bio-wrapper">
      <div className="bio">
        {language === 'ko' ? (
          <div className="introduction korean">
            <p className="title">
              안녕하세요.
              <br />
              <ReactRotatingText items={bio.description} />
              <br />
              {bio.role} <strong>{name}</strong>입니다.
              <br />
            </p>
            <div className="social-links">
              <IconButtonBar links={social} />
            </div>
          </div>
        ) : (
          <div className="introduction english">
            <p className="description">
              <ReactRotatingText items={bio.description} />
              <br />
              <br />
            </p>
            <p className="title">
              My name is <strong>{name}</strong>
              <br />
              Software Engineer in Seoul
            </p>
            
            <div className="social-links">
              <IconButtonBar links={social} />
            </div>
          </div>
        )}
        <Image className="thumbnail" src={bio.thumbnail} alt="thumbnail" />
      </div>
    </div>
  );
};

export default Bio;
