import { ReactNode } from 'react';
import {FiBell, FiArrowUpRight} from 'react-icons/fi'
import {BsPlayFill, BsVolumeMuteFill} from 'react-icons/bs'
import {RiSettings5Fill, RiFullscreenFill, RiHeartLine} from 'react-icons/ri'

import {IoMdMore} from 'react-icons/io'

import { Container, RecentActivity, Info, Status, Notifications, Player, TopStatus, PlayerControls, Left, Right, Channel, ChannelHeader, Title, Follow, More, ChannelTabs, About, Tabs, Schedule, Videos, Chat, Home} from './styles';

interface ProfilePageProps {
  children?: ReactNode;
}

function ProfilePage({ children }: ProfilePageProps) {
  return (
    <Container>

      <RecentActivity>
        <Info>
          <Status>OFFLINE</Status>
          <h1>Gustavinho is offline.</h1>
          <Notifications>
            <FiBell color={'#57575A'}/>
            <h1>Turn-on notifications</h1>
          </Notifications>
        </Info>
        <Player>
          <TopStatus>OFFLINE</TopStatus>
          <PlayerControls>
            <Left>
              <BsPlayFill fill={'#FFF'} size={26}/>
              <BsVolumeMuteFill fill={'#FFF'} size={26}/>
            </Left>
            <Right>
              <RiSettings5Fill fill={'#FFF'} size={22}/>
              <RiFullscreenFill fill={'#FFF'} size={22}/>
            </Right>
          </PlayerControls>
        </Player>
      </RecentActivity>

      <Channel>
        <ChannelHeader>
          <Title>
          <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/ca73fcbf-9428-4612-80eb-cddb341f315e-profile_image-70x70.png" alt="profile image"/>
            <div>
              <h1>Gustavinho</h1>
              <h2>7 Followers</h2>
            </div>
          </Title>
          <Follow>
            <div>
              <RiHeartLine fill={'#FFF'} size={22}/>
              Follow
            </div>
            <More>
              <IoMdMore fill={'white'} size={24}/>
            </More>
            
          </Follow>
        </ChannelHeader>

        <ChannelTabs>

          <Tabs>
            <Home/>
            <About/>
            <Schedule/>
            <Videos/>
            <FiArrowUpRight/>
            <Chat/>
          </Tabs>

          <div>
              <FiArrowUpRight fill={'#FFF'} size={22}/>
              Customize Channel
          </div>

        </ChannelTabs>
      </Channel>

    
    </Container>
  );
};

export default ProfilePage;
