import styled from 'styled-components';

export const Container = styled.div`
    background: #18181B;
    z-index: 10;
    width: 100vw;
    height: 50px;
    position: absolute;
    top: 0;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-shadow: 0px 0px 10px 2px black;
`;
export const LeftButtons = styled.div`
    display: flex;
    background: none;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: flex-start;
    gap: 30px;
    padding: 0px 10px;

    > img{
        width: 27px;
        cursor: pointer;
    }

    >h1{
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;
        color: #efeff1;
        &:hover{
                cursor: pointer;
                color: #a26bf4;
            }
    }

    >div{
        height: 28px;
        width: 28px;
        border-radius: 4px;
        background: none;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        overflow: hidden;

        >h1{
            font-size: 25px;
            color: white;
            font-weight: 500;
            line-height: 14px;
        }

        &:hover{
            background: #464649;
            cursor: pointer;
        }
    }
`
export const RightButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    gap: 18px;
    padding: 0px 10px;

    >button{
        width: 28px;
        height: 28px;
        border-radius: 3px;
        background: none;
        z-index: 2;
        &:hover{
            background: #464649;
            cursor: pointer;
        }

        >div {
            position: absolute;
            top: 6px;
            right: 13.7%;
            margin: 0;
            width: 16px;
            height: 16px;
            z-index: 10;
            border-radius: 8px;
            background: red;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0px 0px 0px 3px #18181B;
            
            > h1{
                color: white;
                font-size: 11px;
                font-weight: 900;
            }
        }
    }
    
   >div{
       display: flex;
       align-items: center;
       justify-content: center;

    >img{
        width: 30px;
        border-radius: 14px;

        ::after{
            width: 4px;
            height: 4px;
            background: green;
            border-radius: 2px;
        }
    }   

    >div{
        width: 6px;
        height: 6px;
        background: #00f593;
        border-radius: 3px;
        margin-bottom: -20px;
        margin-left: -6px;
    }
   }



`
    
export const Search = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    align-items: center;
    justify-content: center;
    gap: 1px;

    >input{
        background: #464649;
        width: 22rem;
        height: 70%;
        border-radius: 4px 0px 0px 4px;
        color: #87878a;
        font-size: 16px;
        font-weight: 600;
        padding: 10px;
        outline: none;

        &:focus{
            box-shadow: inset 0px 0px 0px 2px #a26bf4;
            background: #18181B;
            transition: 0.2s;
        }

        &:hover{
            box-shadow: inset 0px 0px 0px 2px #5e5e60;
            transition: 0.1s;

            &:focus{
                box-shadow: inset 0px 0px 0px 2px #a26bf4;
                background: #18181B;
                transition: 0.2s;
            }
        }
    }

    >button{
        background: #29292c;
        /* width: 40%; */
        height: 70%;
        width: 2rem;
        border-radius: 0px 4px 4px 0px;

        &:hover{
            background: #3a3a3d;
            cursor: pointer;
            transition: 0.2s;
        }
    }
`

export const BitsButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 28px;
    background: #3a3a3d;
    width: 100px;
    border-radius: 4px;

    >h1{
        font-size: 15px;
        font-weight: 600;  
        color:white;
    }

    &:hover{
        background: #464649;
        cursor: pointer;
    }
`