import { ReactNode } from 'react';
import {FiBell} from 'react-icons/fi'
import {BsPlayFill, BsVolumeMuteFill} from 'react-icons/bs'
import {RiSettings5Fill, RiFullscreenFill} from 'react-icons/ri'

import { Container, RecentActivity, Info, Status, Notifications, Player, TopStatus, PlayerControls, Left, Right, Channel } from './styles';

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
        <h1>Canal</h1>
      </Channel>
      {children}
    </Container>
  );
};

export default ProfilePage;
