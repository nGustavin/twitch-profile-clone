import { ReactNode } from 'react';
import {BiArrowFromLeft} from 'react-icons/bi'
import { HiOutlineVideoCamera } from 'react-icons/hi'

import { Container, Channel, ChannelImage, ChannelName, Info, Game, Watchers, FollowingChannels} from './styles';

function SideBar() {
  return (
    <Container>
      <FollowingChannels>
        <h1>Following Channels</h1>
        <BiArrowFromLeft fill={'#FFF'} size={20}/>
      </FollowingChannels>
      <Channel>
        <ChannelImage/>
        <Info>
          <ChannelName>Gustavinho</ChannelName>
          <Game>Counter-Strike: Global Offensive</Game>
        </Info>
        <Watchers><div></div> 76,2k</Watchers>
      </Channel>
      <Channel>
        <ChannelImage/>
        <Info>
          <ChannelName>Lorena</ChannelName>
          <Game>Rainbow Six Siege</Game>
        </Info>
        <Watchers><div></div> 26,2k</Watchers>
      </Channel>
      <Channel>
        <ChannelImage/>
        <Info>
          <ChannelName>Peterso</ChannelName>
          <Game>Rocket League</Game>
        </Info>
        <Watchers><div></div> 36,2k</Watchers>
      </Channel>
      <Channel>
        <ChannelImage/>
        <Info>
          <ChannelName>Bruno</ChannelName>
          <Game>Fifa 21</Game>
        </Info>
        <Watchers><div></div> 646,2k</Watchers>
      </Channel>
      <Channel>
        <ChannelImage/>
        <Info>
          <ChannelName>Vrito</ChannelName>
          <Game>Players Unknown's Battlegrounds</Game>
        </Info>
        <Watchers><div></div> 226,2k</Watchers>
      </Channel>
      <Channel>
        <ChannelImage/>
        <Info>
          <ChannelName>Renanto</ChannelName>
          <Game>Mario 64</Game>
        </Info>
        <Watchers><div></div> 96,2k</Watchers>
      </Channel>
      <Channel>
        <ChannelImage/>
        <Info>
          <ChannelName>NomeMtoGrande</ChannelName>
          <Game>Just Talking</Game>
        </Info>
        <Watchers><div></div> 16,2k</Watchers>
      </Channel>

      <FollowingChannels>
        <h1>Sugested Channels</h1>
        <HiOutlineVideoCamera fill={'#FFF'} size={20}/>
      </FollowingChannels>

      <Channel>
        <ChannelImage/>
        <Info>
          <ChannelName>Gaules</ChannelName>
          <Game>Just Talking</Game>
        </Info>
        <Watchers><div></div> 16,2k</Watchers>
      </Channel>
    </Container>
  );
};

export default SideBar;
