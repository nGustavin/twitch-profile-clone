import { ReactNode } from 'react';
import {FiSearch} from 'react-icons/fi'
import {CgCrown} from 'react-icons/cg'
import {BsInbox} from 'react-icons/bs'
import {HiOutlineChatAlt2} from 'react-icons/hi'
import TwitchIcon from '../../assets/twitch.svg'
import BitsIcon from '../../assets/bits.png'

import { Container, RightButtons, LeftButtons, Search, BitsButton } from './styles';

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
        <input type="text" placeholder="Search"/>
        <button >
          <FiSearch color={'#606064'} size={24} style={{fontWeight: 'bold'}}/>
        </button>
      </Search>
      <RightButtons>
        <button>
          <CgCrown size={22} color={'#efeff1'} />
        </button>
        <button >
          <BsInbox size={22} color={'#efeff1'} />
        </button>
        <button>
          <HiOutlineChatAlt2 size={22} color={'#efeff1'} />
        </button>
        <BitsButton>
          <h1>Buy Bits</h1>
        </BitsButton>
        <div>
          <img src="https://static-cdn.jtvnw.net/jtv_user_pictures/ca73fcbf-9428-4612-80eb-cddb341f315e-profile_image-70x70.png" alt="profile image"/>
          <div></div>
        </div>
      </RightButtons>
    </Container>
  );
};

export default Header;
