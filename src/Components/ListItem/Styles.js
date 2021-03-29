import { BlockPicker } from "react-color";
import styled from "styled-components";

export const ListItemContainer = styled.li`
  // max-height: 440px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0px 20px 30px -10px rgb(0 0 0 / 10%);
  max-width: 300px;
  min-width: 300px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: relative;
  transition: all 0.4s ease;
  margin: 15px 10px;

  &:before {
    height: 190px;
    width: calc(100% + 100px);
    content: "";
    position: absolute;
    background-image: linear-gradient(
      to top,
      ${(props) => props?.bgColor} 0%,
      #04befe 100%
    );
    // background-image: linear-gradient(to top, #4481eb 0%, #04befe 100%);
    border-radius: 4px 4px 100% 100%;
    transition: all 0.4s ease-out;
    top: 0;
  }

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0px 5px 10px -5px rgb(0 0 0 / 30%);
    &:before {
      height: 100%;
      border-radius: 4px;
    }

    .pic {
      box-shadow: 0px 0px 0px 8px rgb(255 255 255 / 30%);
      img {
        -webkit-filter: grayscale(0%);
        filter: grayscale(0%);
      }
    }

    .desc {
      color: white;
    }
  }

  article {
    z-index: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;

    h2 {
      color: white;
      margin: 0;
      padding: 40px 20px 10px 20px;
      font-weight: 500;
      font-size: 24px;
      letter-spacing: 0.5px;
    }

    .title {
      color: #ffffff9e;
      padding: 0px 20px;
      letter-spacing: 0.8px;
      transition: all 0.4s ease;
      font-size: smaller;
    }

    .company {
      color: white;
      padding: 5px 20px;
      letter-spacing: 0.8px;
      transition: all 0.4s ease;
    }

    .pic {
      width: 120px;
      height: 120px;
      overflow: hidden;
      border-radius: 100%;
      margin: 20px 0;
      box-shadow: 0px 0px 0px 0px rgb(255 255 255 / 30%);
      transition: all 0.6s ease;

      img {
        width: 100%;
        -webkit-filter: grayscale(100%);
        filter: grayscale(100%);
        background: #fff;
      }
    }

    .desc {
      padding: 10px 30px;
      font-size: 14px;
      text-align: center;
      line-height: 24px;
      color: #666;
      height: 90px;
      transition: all 0.4s ease-out;
      overflow-y: auto;
    }
  }

  .close {
    width: 18px;
    height: 18px;
    position: absolute;
    z-index: 2;
    cursor: pointer;
    top: 0;
    right: 0;
    margin: 10px;
    padding: 5px;
    transition: all 0.2s ease;
    color: #fff;
    font-size: 15px;
  }

  .actions {
    width: 100%;
    display: flex;
    justify-content: space-between;
    background: white;
    z-index: 1;

    .btn {
      border: 0;
      background-color: transparent;
      box-sizing: border-box;
      width: calc(100% - 1px);
      height: 36px;
      margin: 0;
      text-transform: uppercase;
      font-size: 10px;
      transition: all 0.6s ease-in-out;
      cursor: pointer;
      color: #4481eb;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      font-weight: 500;
      font-family: "Barlow", sans-serif;
      letter-spacing: 0.5px;
      background: rgba(68, 129, 235, 0.08);

      &::before {
        content: "";
        width: 100%;
        height: 0%;
        position: absolute;
        background: #4481eb;
        transition: all 0.4s ease;
        bottom: 0;
        opacity: 0.2;
      }

      &:hover {
        background-color: rgba(255, 255, 255, 0.5);
        :before {
          height: 100%;
        }

        span {
          opacity: 0;
          transition: all 0.3s ease-in-out;
        }

        .icon {
          width: 22px;
          opacity: 1;
          font-size: 26px;
          transition: all 0.4s ease-in-out;

          &::before {
            content: "Edit";
          }
        }
      }

      &.clicked {
        display: flex;
        justify-content: space-around;
        .icon {
          width: 22px;
          opacity: 1;
          animation: icon 0.5s ease forwards;
        }
        span {
          display: none;
        }
      }

      &:focus {
        outline: 0;
      }

      span {
        z-index: 1;
        opacity: 1;
        transition: all 0.4s ease-in-out;
        word-break: break-all;
      }

      .icon {
        width: 10px;
        opacity: 0;
        position: absolute;
        transition: all 0.2s ease-in-out;
      }
    }
  }

  * {
    white-space: break-spaces !important;
  }
`;

export const ListItemAvatar = styled.img`
  cursor: zoom-in;
  &.not-clickable {
    pointer-events: none;
  }
`;

export const ListItemColorPicker = styled(BlockPicker)`
  position: absolute !important;
  right: 5px;
  z-index: 2;
  top: 50px;
  transition: all 1s;
  opacity: 0;
  display: none;

  &.visible {
    opacity: 1;
    display: block;
  }

  &:before,
  &:after {
    bottom: 100%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }

  &:after {
    border-color: rgba(255, 255, 255, 0);
    border-bottom-color: ${(props) => props?.bgColor};
    border-width: 10px;
    right: 5%;
    margin-left: -10px;
  }

  &:before {
    border-color: rgba(113, 158, 206, 0);
    border-bottom-color: ${(props) => props?.bgColor};
    border-width: 10px;
    right: 5%;
    margin-left: -10px;
  }
`;

export const LabelInput = styled.input`
  z-index: 2;
  border-radius: 10px;
  border: none;
  &:focus {
    outline: none;
  }
`;
