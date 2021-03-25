import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    background: #9147ff;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
`;

export const RecentActivity = styled.div`
    width: 100%;
    min-height: 30rem;
    padding-left: 26rem;
    padding-right: 8rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
`
export const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 320px;
    height: 300px;
    background: #232628;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 60px 20px 20px 30px;
    border-radius: 8px;

    >h1{
        color: #efeff1;
        font-weight: 400;
        font-size: 30px;
        margin-bottom: 5rem;
    }
`
export const Status = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #EFEFF1;
    width: 80px;
    height: 25px;
    font-size: 15px;
    color: #232628;
    font-weight: 600;
    border-radius: 4px;
    font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    margin-bottom: 10px;

`

export const Notifications = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 5px;

    &:hover{
        cursor: not-allowed;
    }

    >h1{
        font-size: 14px;
        color: #57575A;
        font-weight: 400;
    }
`
export const Player = styled.div`
    width: 530px;
    height: 300px;
    background: #000000;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
`
export const TopStatus = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 0px 35px 0px 0px;
    color: #EFEFF1;
    font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;


`
export const PlayerControls = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const Left = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    padding: 0px 20px;
    gap: 10px;
`
export const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    padding: 0px 20px;
    gap: 10px;
`
export const Channel = styled.div`
   width: calc(100% - 4rem);
   height: 100%;
   background: #0E0E10;
`