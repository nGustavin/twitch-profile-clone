import styled from 'styled-components';

export const Container = styled.div`
    background: #1F1F23;
    width: 50px;
    height: 100vh;
    position: absolute;
    top: 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 60px 0px 0px 0px;
    gap: 5px;
    overflow: hidden;
    transition: 0.2s;

    &:hover{
        width: 240px;
        transition: 0.2s;
    }

`;

export const FollowingChannels = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 45px;
    max-height: 45px;
    white-space: nowrap;
    padding: 15px;
    gap: 45px;

    >h1{
        color: white;
        font-size: 16px;
        margin-left: -230px;
    }
`

export const Channel = styled.div`
    height: 45px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 10px;
   

    &:hover{
        background: #26262C;
        cursor: pointer;
    }
`
export const ChannelImage = styled.div`
    width: 30px;
    height: 30px;
    background: gold;
    border-radius: 15px;
    min-width: 30px;
    margin-right: 10px;
`

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    width: 55%;
    height: 100%;
    text-overflow: ellipsis;
`

export const ChannelName = styled.h1`
    color: white;
    font-size: 16px;
    max-width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: "...";
`

export const Game = styled.h1`
    color: white;
    font-size: 12px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: "...";
    width: 100%;
    max-width: 100%;
    font-weight: 400;
`
export const Watchers = styled.div`
    width: 100%;
    height: 100%;
    color: white;
    font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 14px;
    display: flex;
    align-items: flex-start;
    gap: 5px;
    justify-content: flex-end;
    max-width: 100%;

    >div{
        background: red;
        width: 6px;
        height: 6px;
        border-radius: 3px;
        margin-top: 7px;
    }
`
