import { ReactNode } from 'react';
import {FiSearch} from 'react-icons/fi'
import {CgCrown} from 'react-icons/cg'
import {BsInbox} from 'react-icons/bs'
import {HiOutlineChatAlt2} from 'react-icons/hi'
import TwitchIcon from '../../assets/twitch.svg'
import BitsIcon from '../../assets/bits.png'

import { Container, RightButtons, LeftButtons, Search } from './styles';

interface HeaderProps {
  children?: ReactNode;
}

function Header({ children }: HeaderProps) {
  return (
    <Container>
      <LeftButtons>
        <img src={TwitchIcon} alt="twitchTv icon"/>
        <h1>Following</h1>
        <h1>Find</h1>
        <div>
          <h1>...</h1>
        </div>
      </LeftButtons>
      <Search>
        <input type="text"/>
        <button>
          <FiSearch/>
        </button>
      </Search>
      <RightButtons>
        <CgCrown/>
        <BsInbox/>
        <HiOutlineChatAlt2/>
        <button>
          <img src={BitsIcon} alt="buy bits"/>
          Buy Bits
        </button>
        <div>
          <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/ca73fcbf-9428-4612-80eb-cddb341f315e-profile_image-70x70.png" alt="profile image"/>
        </div>
      </RightButtons>
    </Container>
  );
};

export default Header;
