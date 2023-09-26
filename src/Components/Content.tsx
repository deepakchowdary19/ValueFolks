import React, { CSSProperties } from 'react';
import '../Styles/Content.css';
import ContentImage from '../Images/ContentImage.jpg';

type FlexDirection = 'row' | 'row-reverse' | 'column' | 'column-reverse';

interface StyleFlexDirection {
  flex_direction: FlexDirection;
}

interface ContentProps extends StyleFlexDirection {
  style?: CSSProperties;
  matterPText: string;
  matterSpanText: string;
}

export default function Content(props: ContentProps) {
  const styling: CSSProperties = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '10%',
    flexDirection: props.flex_direction,
    ...props.style,
  };

  return (
    <div style={styling}>
      <img src={ContentImage} alt='content' className='image1' />
      <div className='matter1'>
        <p style={{ color: '#121212', fontWeight: '600', fontSize: '25px', width: '70%', textAlign: 'left' ,marginLeft:'30px'}}>
          {props.matterPText}
        </p>
        <span style={{ color: '#121212', fontWeight: '600', fontSize: '18px', width: '80%', textAlign: 'left', paddingTop: '0px',marginLeft:'30px' }}>
          {props.matterSpanText}
        </span>
      </div>
    </div>
  );
}
