import React from 'react';
import './styles.css';

interface Props {
  question?: string;
  message?: string;
}

const FooterField: React.FC<Props> = ({question, message}) => {
  return (
    <div className='Footer'>
      <p className='FooterParr'>{question}</p>
      <p className='FooterParr'>{message}</p>
    </div>
  );
};

export default FooterField;