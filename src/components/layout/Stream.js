import React from 'react';
import { TwitchEmbed } from 'react-twitch-embed';

const Stream = () => {
  return (
    <div>
      <TwitchEmbed
        channel='sourkoolaidshow'
        id='sourkoolaidshow'
        muted
        onVideoPause={() => console.log(':(')}
        theme='dark'
      />
    </div>
  );
};

export default Stream;
