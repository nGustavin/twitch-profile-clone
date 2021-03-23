import styled from 'styled-components';

export const Container = styled.div`
    background: #18181B;
    width: 100vw;
    height: 50px;
    position: absolute;
    top: 0;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const LeftButtons = styled.div`
    display: flex;
    background: none;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;

    > img{
        width: 27px;
    }

    >h1{
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        color: #efeff1;
    }

    >div{
        height: 28px;
        width: 28px;
        border-radius: 4px;
        background: none;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        >h1{
            font-size: 25px;
            color: white;
            font-weight: 500;
        }

        &:hover{
            background: #464649;
            cursor: pointer;
        }
    }
`
export const RightButtons = styled.div`
    display: flex;
    background: blue;
    width: 100%;
    height: 100%;
`
    
export const Search = styled.div`
    display: flex;
    background: red;
    width: 100%;
    height: 100%;
`
