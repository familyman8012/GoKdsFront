import styled from '@emotion/styled';
import React from 'react';

export const SpinnerWrap = styled.span`
  display: flex;
  width: 70px;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  padding: 32px 0;

  .dot-elastic {
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #ffffff;
    animation: dot-elastic 1s infinite linear;
  }
  .dot-elastic::before,
  .dot-elastic::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
  }
  .dot-elastic::before {
    left: -15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #ffffff;
    animation: dot-elastic-before 1s infinite linear;
  }
  .dot-elastic::after {
    left: 15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #ffffff;
    animation: dot-elastic-after 1s infinite linear;
  }

  @keyframes dot-elastic-before {
    0% {
      transform: scale(1, 1);
    }
    25% {
      transform: scale(1, 1.5);
    }
    50% {
      transform: scale(1, 0.67);
    }
    75% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  }
  @keyframes dot-elastic {
    0% {
      transform: scale(1, 1);
    }
    25% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1, 1.5);
    }
    75% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  }
  @keyframes dot-elastic-after {
    0% {
      transform: scale(1, 1);
    }
    25% {
      transform: scale(1, 1);
    }
    50% {
      transform: scale(1, 0.67);
    }
    75% {
      transform: scale(1, 1.5);
    }
    100% {
      transform: scale(1, 1);
    }
  }
  /**
 * ==============================================
 * Dot Pulse
 * ==============================================
 */
  .dot-pulse {
    position: relative;
    left: -9999px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #ffffff !important;
    box-shadow: 9999px 0 0 -5px;
    animation: dot-pulse 1.5s infinite linear;
    animation-delay: 0.25s;
  }
  .dot-pulse::before,
  .dot-pulse::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #ffffff;
  }
  .dot-pulse::before {
    box-shadow: 9984px 0 0 -5px;
    animation: dot-pulse-before 1.5s infinite linear;
    animation-delay: 0s;
  }
  .dot-pulse::after {
    box-shadow: 10014px 0 0 -5px;
    animation: dot-pulse-after 1.5s infinite linear;
    animation-delay: 0.5s;
  }

  @keyframes dot-pulse-before {
    0% {
      box-shadow: 9984px 0 0 -5px;
    }
    30% {
      box-shadow: 9984px 0 0 2px;
    }
    60%,
    100% {
      box-shadow: 9984px 0 0 -5px;
    }
  }
  @keyframes dot-pulse {
    0% {
      box-shadow: 9999px 0 0 -5px;
    }
    30% {
      box-shadow: 9999px 0 0 2px;
    }
    60%,
    100% {
      box-shadow: 9999px 0 0 -5px;
    }
  }
  @keyframes dot-pulse-after {
    0% {
      box-shadow: 10014px 0 0 -5px;
    }
    30% {
      box-shadow: 10014px 0 0 2px;
    }
    60%,
    100% {
      box-shadow: 10014px 0 0 -5px;
    }
  }
  /**
 * ==============================================
 * Dot Flashing
 * ==============================================
 */
  .dot-flashing {
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #ffffff;
    animation: dot-flashing 1s infinite linear alternate;
    animation-delay: 0.5s;
  }
  .dot-flashing::before,
  .dot-flashing::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
  }
  .dot-flashing::before {
    left: -15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #ffffff;
    animation: dot-flashing 1s infinite alternate;
    animation-delay: 0s;
  }
  .dot-flashing::after {
    left: 15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #ffffff;
    animation: dot-flashing 1s infinite alternate;
    animation-delay: 1s;
  }

  @keyframes dot-flashing {
    0% {
      background-color: #ffffff;
    }
    50%,
    100% {
      background-color: rgba(152, 128, 255, 0.2);
    }
  }
  /**
 * ==============================================
 * Dot Collision
 * ==============================================
 */
  .dot-collision {
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #ffffff;
  }
  .dot-collision::before,
  .dot-collision::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
  }
  .dot-collision::before {
    left: -10px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #ffffff;
    animation: dot-collision-before 2s infinite ease-in;
  }
  .dot-collision::after {
    left: 10px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #ffffff;
    animation: dot-collision-after 2s infinite ease-in;
    animation-delay: 1s;
  }

  @keyframes dot-collision-before {
    0%,
    50%,
    75%,
    100% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-15px);
    }
  }
  @keyframes dot-collision-after {
    0%,
    50%,
    75%,
    100% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(15px);
    }
  }
  /**
 * ==============================================
 * Dot Revolution
 * ==============================================
 */
  .dot-revolution {
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #ffffff;
  }
  .dot-revolution::before,
  .dot-revolution::after {
    content: '';
    display: inline-block;
    position: absolute;
  }
  .dot-revolution::before {
    left: 0;
    top: -15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #ffffff;
    transform-origin: 5px 20px;
    animation: dot-revolution 1.4s linear infinite;
  }
  .dot-revolution::after {
    left: 0;
    top: -30px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #ffffff;
    transform-origin: 5px 35px;
    animation: dot-revolution 1s linear infinite;
  }

  @keyframes dot-revolution {
    0% {
      transform: rotateZ(0deg) translate3d(0, 0, 0);
    }
    100% {
      transform: rotateZ(360deg) translate3d(0, 0, 0);
    }
  }
  /**
 * ==============================================
 * Dot Carousel
 * ==============================================
 */
  .dot-carousel {
    position: relative;
    left: -9999px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #ffffff;
    box-shadow: 9984px 0 0 0 #ffffff, 9999px 0 0 0 #ffffff,
      10014px 0 0 0 #ffffff;
    animation: dot-carousel 1.5s infinite linear;
  }

  @keyframes dot-carousel {
    0% {
      box-shadow: 9984px 0 0 -1px #ffffff, 9999px 0 0 1px #ffffff,
        10014px 0 0 -1px #ffffff;
    }
    50% {
      box-shadow: 10014px 0 0 -1px #ffffff, 9984px 0 0 -1px #ffffff,
        9999px 0 0 1px #ffffff;
    }
    100% {
      box-shadow: 9999px 0 0 1px #ffffff, 10014px 0 0 -1px #ffffff,
        9984px 0 0 -1px #ffffff;
    }
  }
  /**
 * ==============================================
 * Dot Typing
 * ==============================================
 */
  .dot-typing {
    position: relative;
    left: -9999px;
    width: 8px;
    height: 8px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #ffffff;
    box-shadow: 9984px 0 0 0 #ffffff, 9999px 0 0 0 #ffffff,
      10014px 0 0 0 #ffffff;
    animation: dot-typing 1.5s infinite linear;
  }

  @keyframes dot-typing {
    0% {
      box-shadow: 9984px 0 0 0 #ffffff, 9999px 0 0 0 #ffffff,
        10014px 0 0 0 #ffffff;
    }
    16.667% {
      box-shadow: 9984px -10px 0 0 #ffffff, 9999px 0 0 0 #ffffff,
        10014px 0 0 0 #ffffff;
    }
    33.333% {
      box-shadow: 9984px 0 0 0 #ffffff, 9999px 0 0 0 #ffffff,
        10014px 0 0 0 #ffffff;
    }
    50% {
      box-shadow: 9984px 0 0 0 #ffffff, 9999px -10px 0 0 #ffffff,
        10014px 0 0 0 #ffffff;
    }
    66.667% {
      box-shadow: 9984px 0 0 0 #ffffff, 9999px 0 0 0 #ffffff,
        10014px 0 0 0 #ffffff;
    }
    83.333% {
      box-shadow: 9984px 0 0 0 #ffffff, 9999px 0 0 0 #ffffff,
        10014px -10px 0 0 #ffffff;
    }
    100% {
      box-shadow: 9984px 0 0 0 #ffffff, 9999px 0 0 0 #ffffff,
        10014px 0 0 0 #ffffff;
    }
  }
  /**
 * ==============================================
 * Dot Windmill
 * ==============================================
 */
  .dot-windmill {
    position: relative;
    top: -10px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #ffffff;
    transform-origin: 5px 15px;
    animation: dot-windmill 2s infinite linear;
  }
  .dot-windmill::before,
  .dot-windmill::after {
    content: '';
    display: inline-block;
    position: absolute;
  }
  .dot-windmill::before {
    left: -8.66254px;
    top: 15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #ffffff;
  }
  .dot-windmill::after {
    left: 8.66254px;
    top: 15px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #ffffff;
  }

  @keyframes dot-windmill {
    0% {
      transform: rotateZ(0deg) translate3d(0, 0, 0);
    }
    100% {
      transform: rotateZ(720deg) translate3d(0, 0, 0);
    }
  }
  /**
 * ==============================================
 * Dot Bricks
 * ==============================================
 */
  .dot-bricks {
    position: relative;
    top: 8px;
    left: -9999px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #ffffff;
    box-shadow: 9991px -16px 0 0 #ffffff, 9991px 0 0 0 #ffffff,
      10007px 0 0 0 #ffffff;
    animation: dot-bricks 2s infinite ease;
  }

  @keyframes dot-bricks {
    0% {
      box-shadow: 9991px -16px 0 0 #ffffff, 9991px 0 0 0 #ffffff,
        10007px 0 0 0 #ffffff;
    }
    8.333% {
      box-shadow: 10007px -16px 0 0 #ffffff, 9991px 0 0 0 #ffffff,
        10007px 0 0 0 #ffffff;
    }
    16.667% {
      box-shadow: 10007px -16px 0 0 #ffffff, 9991px -16px 0 0 #ffffff,
        10007px 0 0 0 #ffffff;
    }
    25% {
      box-shadow: 10007px -16px 0 0 #ffffff, 9991px -16px 0 0 #ffffff,
        9991px 0 0 0 #ffffff;
    }
    33.333% {
      box-shadow: 10007px 0 0 0 #ffffff, 9991px -16px 0 0 #ffffff,
        9991px 0 0 0 #ffffff;
    }
    41.667% {
      box-shadow: 10007px 0 0 0 #ffffff, 10007px -16px 0 0 #ffffff,
        9991px 0 0 0 #ffffff;
    }
    50% {
      box-shadow: 10007px 0 0 0 #ffffff, 10007px -16px 0 0 #ffffff,
        9991px -16px 0 0 #ffffff;
    }
    58.333% {
      box-shadow: 9991px 0 0 0 #ffffff, 10007px -16px 0 0 #ffffff,
        9991px -16px 0 0 #ffffff;
    }
    66.666% {
      box-shadow: 9991px 0 0 0 #ffffff, 10007px 0 0 0 #ffffff,
        9991px -16px 0 0 #ffffff;
    }
    75% {
      box-shadow: 9991px 0 0 0 #ffffff, 10007px 0 0 0 #ffffff,
        10007px -16px 0 0 #ffffff;
    }
    83.333% {
      box-shadow: 9991px -16px 0 0 #ffffff, 10007px 0 0 0 #ffffff,
        10007px -16px 0 0 #ffffff;
    }
    91.667% {
      box-shadow: 9991px -16px 0 0 #ffffff, 9991px 0 0 0 #ffffff,
        10007px -16px 0 0 #ffffff;
    }
    100% {
      box-shadow: 9991px -16px 0 0 #ffffff, 9991px 0 0 0 #ffffff,
        10007px 0 0 0 #ffffff;
    }
  }
  /**
 * ==============================================
 * Dot Floating
 * ==============================================
 */
  .dot-floating {
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #ffffff;
    animation: dot-floating 3s infinite cubic-bezier(0.15, 0.6, 0.9, 0.1);
  }
  .dot-floating::before,
  .dot-floating::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
  }
  .dot-floating::before {
    left: -12px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #ffffff;
    animation: dot-floating-before 3s infinite ease-in-out;
  }
  .dot-floating::after {
    left: -24px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #ffffff;
    animation: dot-floating-after 3s infinite cubic-bezier(0.4, 0, 1, 1);
  }

  @keyframes dot-floating {
    0% {
      left: calc(-50% - 5px);
    }
    75% {
      left: calc(50% + 105px);
    }
    100% {
      left: calc(50% + 105px);
    }
  }
  @keyframes dot-floating-before {
    0% {
      left: -50px;
    }
    50% {
      left: -12px;
    }
    75% {
      left: -50px;
    }
    100% {
      left: -50px;
    }
  }
  @keyframes dot-floating-after {
    0% {
      left: -100px;
    }
    50% {
      left: -24px;
    }
    75% {
      left: -100px;
    }
    100% {
      left: -100px;
    }
  }
  /**
 * ==============================================
 * Dot Fire
 * ==============================================
 */
  .dot-fire {
    position: relative;
    left: -9999px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #ffffff;
    box-shadow: 9999px 22.5px 0 -5px #ffffff;
    animation: dot-fire 1.5s infinite linear;
    animation-delay: -0.85s;
  }
  .dot-fire::before,
  .dot-fire::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #ffffff;
  }
  .dot-fire::before {
    box-shadow: 9999px 22.5px 0 -5px #ffffff;
    animation: dot-fire 1.5s infinite linear;
    animation-delay: -1.85s;
  }
  .dot-fire::after {
    box-shadow: 9999px 22.5px 0 -5px #ffffff;
    animation: dot-fire 1.5s infinite linear;
    animation-delay: -2.85s;
  }

  @keyframes dot-fire {
    1% {
      box-shadow: 9999px 22.5px 0 -5px #ffffff;
    }
    50% {
      box-shadow: 9999px -5.625px 0 2px #ffffff;
    }
    100% {
      box-shadow: 9999px -22.5px 0 -5px #ffffff;
    }
  }
  /**
 * ==============================================
 * Dot Spin
 * ==============================================
 */
  .dot-spin {
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: transparent;
    color: transparent;
    box-shadow: 0 -18px 0 0 #ffffff, 12.727926px -12.727926px 0 0 #ffffff,
      18px 0 0 0 #ffffff, 12.727926px 12.727926px 0 0 rgba(152, 128, 255, 0),
      0 18px 0 0 rgba(152, 128, 255, 0),
      -12.727926px 12.727926px 0 0 rgba(152, 128, 255, 0),
      -18px 0 0 0 rgba(152, 128, 255, 0),
      -12.727926px -12.727926px 0 0 rgba(152, 128, 255, 0);
    animation: dot-spin 1.5s infinite linear;
  }

  @keyframes dot-spin {
    0%,
    100% {
      box-shadow: 0 -18px 0 0 #ffffff, 12.727926px -12.727926px 0 0 #ffffff,
        18px 0 0 0 #ffffff,
        12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
        0 18px 0 -5px rgba(152, 128, 255, 0),
        -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
    }
    12.5% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.727926px -12.727926px 0 0 #ffffff, 18px 0 0 0 #ffffff,
        12.727926px 12.727926px 0 0 #ffffff,
        0 18px 0 -5px rgba(152, 128, 255, 0),
        -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
    }
    25% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0),
        18px 0 0 0 #ffffff, 12.727926px 12.727926px 0 0 #ffffff,
        0 18px 0 0 #ffffff,
        -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
    }
    37.5% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0),
        18px 0 0 -5px rgba(152, 128, 255, 0),
        12.727926px 12.727926px 0 0 #ffffff, 0 18px 0 0 #ffffff,
        -12.727926px 12.727926px 0 0 #ffffff,
        -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
    }
    50% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0),
        18px 0 0 -5px rgba(152, 128, 255, 0),
        12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
        0 18px 0 0 #ffffff, -12.727926px 12.727926px 0 0 #ffffff,
        -18px 0 0 0 #ffffff,
        -12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0);
    }
    62.5% {
      box-shadow: 0 -18px 0 -5px rgba(152, 128, 255, 0),
        12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0),
        18px 0 0 -5px rgba(152, 128, 255, 0),
        12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
        0 18px 0 -5px rgba(152, 128, 255, 0),
        -12.727926px 12.727926px 0 0 #ffffff, -18px 0 0 0 #ffffff,
        -12.727926px -12.727926px 0 0 #ffffff;
    }
    75% {
      box-shadow: 0 -18px 0 0 #ffffff,
        12.727926px -12.727926px 0 -5px rgba(152, 128, 255, 0),
        18px 0 0 -5px rgba(152, 128, 255, 0),
        12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
        0 18px 0 -5px rgba(152, 128, 255, 0),
        -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 0 #ffffff, -12.727926px -12.727926px 0 0 #ffffff;
    }
    87.5% {
      box-shadow: 0 -18px 0 0 #ffffff, 12.727926px -12.727926px 0 0 #ffffff,
        18px 0 0 -5px rgba(152, 128, 255, 0),
        12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
        0 18px 0 -5px rgba(152, 128, 255, 0),
        -12.727926px 12.727926px 0 -5px rgba(152, 128, 255, 0),
        -18px 0 0 -5px rgba(152, 128, 255, 0),
        -12.727926px -12.727926px 0 0 #ffffff;
    }
  }
  /**
 * ==============================================
 * Dot Falling
 * ==============================================
 */
  .dot-falling {
    position: relative;
    left: -9999px;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #ffffff;
    box-shadow: 9999px 0 0 0 #ffffff;
    animation: dot-falling 1s infinite linear;
    animation-delay: 0.1s;
  }
  .dot-falling::before,
  .dot-falling::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
  }
  .dot-falling::before {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #ffffff;
    animation: dot-falling-before 1s infinite linear;
    animation-delay: 0s;
  }
  .dot-falling::after {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #ffffff;
    animation: dot-falling-after 1s infinite linear;
    animation-delay: 0.2s;
  }

  @keyframes dot-falling {
    0% {
      box-shadow: 9999px -15px 0 0 rgba(152, 128, 255, 0);
    }
    25%,
    50%,
    75% {
      box-shadow: 9999px 0 0 0 #ffffff;
    }
    100% {
      box-shadow: 9999px 15px 0 0 rgba(152, 128, 255, 0);
    }
  }
  @keyframes dot-falling-before {
    0% {
      box-shadow: 9984px -15px 0 0 rgba(152, 128, 255, 0);
    }
    25%,
    50%,
    75% {
      box-shadow: 9984px 0 0 0 #ffffff;
    }
    100% {
      box-shadow: 9984px 15px 0 0 rgba(152, 128, 255, 0);
    }
  }
  @keyframes dot-falling-after {
    0% {
      box-shadow: 10014px -15px 0 0 rgba(152, 128, 255, 0);
    }
    25%,
    50%,
    75% {
      box-shadow: 10014px 0 0 0 #ffffff;
    }
    100% {
      box-shadow: 10014px 15px 0 0 rgba(152, 128, 255, 0);
    }
  }
  /**
 * ==============================================
 * Dot Stretching
 * ==============================================
 */
  .dot-stretching {
    position: relative;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #ffffff;
    transform: scale(1.25, 1.25);
    animation: dot-stretching 2s infinite ease-in;
  }
  .dot-stretching::before,
  .dot-stretching::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
  }
  .dot-stretching::before {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #ffffff;
    animation: dot-stretching-before 2s infinite ease-in;
  }
  .dot-stretching::after {
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #ffffff;
    color: #ffffff;
    animation: dot-stretching-after 2s infinite ease-in;
  }

  @keyframes dot-stretching {
    0% {
      transform: scale(1.25, 1.25);
    }
    50%,
    60% {
      transform: scale(0.8, 0.8);
    }
    100% {
      transform: scale(1.25, 1.25);
    }
  }
  @keyframes dot-stretching-before {
    0% {
      transform: translate(0) scale(0.7, 0.7);
    }
    50%,
    60% {
      transform: translate(-20px) scale(1, 1);
    }
    100% {
      transform: translate(0) scale(0.7, 0.7);
    }
  }
  @keyframes dot-stretching-after {
    0% {
      transform: translate(0) scale(0.7, 0.7);
    }
    50%,
    60% {
      transform: translate(20px) scale(1, 1);
    }
    100% {
      transform: translate(0) scale(0.7, 0.7);
    }
  }
  /**
 * ==============================================
 * Experimental: Gooey Effect
 * Dot Gathering
 * ==============================================
 */
  .dot-gathering {
    position: relative;
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: hsl(0deg, 100%, 0%);
    color: transparent;
    margin: -1px 0;
    filter: blur(2px);
  }
  .dot-gathering::before,
  .dot-gathering::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: -50px;
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: hsl(0deg, 100%, 0%);
    color: transparent;
    opacity: 0;
    filter: blur(2px);
    animation: dot-gathering 2s infinite ease-in;
  }
  .dot-gathering::after {
    animation-delay: 0.5s;
  }

  @keyframes dot-gathering {
    0% {
      opacity: 0;
      transform: translateX(0);
    }
    35%,
    60% {
      opacity: 1;
      transform: translateX(50px);
    }
    100% {
      opacity: 0;
      transform: translateX(100px);
    }
  }
  /**
 * ==============================================
 * Experimental: Gooey Effect
 * Dot Hourglass
 * ==============================================
 */
  .dot-hourglass {
    position: relative;
    top: -15px;
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: hsl(0deg, 100%, 0%);
    color: transparent;
    margin: -1px 0;
    filter: blur(2px);
    transform-origin: 5px 20px;
    animation: dot-hourglass 2.4s infinite ease-in-out;
    animation-delay: 0.6s;
  }
  .dot-hourglass::before,
  .dot-hourglass::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: hsl(0deg, 100%, 0%);
    color: transparent;
    filter: blur(2px);
  }
  .dot-hourglass::before {
    top: 30px;
  }
  .dot-hourglass::after {
    animation: dot-hourglass-after 2.4s infinite
      cubic-bezier(0.65, 0.05, 0.36, 1);
  }

  @keyframes dot-hourglass {
    0% {
      transform: rotateZ(0deg);
    }
    25% {
      transform: rotateZ(180deg);
    }
    50% {
      transform: rotateZ(180deg);
    }
    75% {
      transform: rotateZ(360deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
  @keyframes dot-hourglass-after {
    0% {
      transform: translateY(0);
    }
    25% {
      transform: translateY(30px);
    }
    50% {
      transform: translateY(30px);
    }
    75% {
      transform: translateY(0);
    }
    100% {
      transform: translateY(0);
    }
  }
  /**
 * ==============================================
 * Experimental: Gooey Effect
 * Dot Overtaking
 * ==============================================
 */
  .dot-overtaking {
    position: relative;
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: transparent;
    color: hsl(0deg, 100%, 0%);
    margin: -1px 0;
    box-shadow: 0 -20px 0 0;
    filter: blur(2px);
    animation: dot-overtaking 2s infinite cubic-bezier(0.2, 0.6, 0.8, 0.2);
  }
  .dot-overtaking::before,
  .dot-overtaking::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    left: 0;
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: transparent;
    color: hsl(0deg, 100%, 0%);
    box-shadow: 0 -20px 0 0;
    filter: blur(2px);
  }
  .dot-overtaking::before {
    animation: dot-overtaking 2s infinite cubic-bezier(0.2, 0.6, 0.8, 0.2);
    animation-delay: 0.3s;
  }
  .dot-overtaking::after {
    animation: dot-overtaking 1.5s infinite cubic-bezier(0.2, 0.6, 0.8, 0.2);
    animation-delay: 0.6s;
  }

  @keyframes dot-overtaking {
    0% {
      transform: rotateZ(0deg);
    }
    100% {
      transform: rotateZ(360deg);
    }
  }
  /**
 * ==============================================
 * Experimental: Gooey Effect
 * Dot Shuttle
 * ==============================================
 */
  .dot-shuttle {
    position: relative;
    left: -15px;
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: hsl(0deg, 100%, 0%);
    color: transparent;
    margin: -1px 0;
    filter: blur(2px);
  }
  .dot-shuttle::before,
  .dot-shuttle::after {
    content: '';
    display: inline-block;
    position: absolute;
    top: 0;
    width: 12px;
    height: 12px;
    border-radius: 6px;
    background-color: hsl(0deg, 100%, 0%);
    color: transparent;
    filter: blur(2px);
  }
  .dot-shuttle::before {
    left: 15px;
    animation: dot-shuttle 2s infinite ease-out;
  }
  .dot-shuttle::after {
    left: 30px;
  }

  @keyframes dot-shuttle {
    0%,
    50%,
    100% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(-45px);
    }
    75% {
      transform: translateX(45px);
    }
  }
  /**
 * ==============================================
 * Experimental: Emoji
 * Dot Bouncing
 * ==============================================
 */
  .dot-bouncing {
    position: relative;
    height: 10px;
    font-size: 10px;
  }
  .dot-bouncing::before {
    content: '⚽🏀🏐';
    display: inline-block;
    position: relative;
    animation: dot-bouncing 1s infinite;
  }

  @keyframes dot-bouncing {
    0% {
      top: -20px;
      animation-timing-function: ease-in;
    }
    34% {
      transform: scale(1, 1);
    }
    35% {
      top: 20px;
      animation-timing-function: ease-out;
      transform: scale(1.5, 0.5);
    }
    45% {
      transform: scale(1, 1);
    }
    90% {
      top: -20px;
    }
    100% {
      top: -20px;
    }
  }
  /**
 * ==============================================
 * Experimental: Emoji
 * Dot Rolling
 * ==============================================
 */
  .dot-rolling {
    position: relative;
    height: 10px;
    font-size: 10px;
  }
  .dot-rolling::before {
    content: '⚽';
    display: inline-block;
    position: relative;
    transform: translateX(-25px);
    animation: dot-rolling 3s infinite;
  }

  @keyframes dot-rolling {
    0% {
      content: '⚽';
      transform: translateX(-25px) rotateZ(0deg);
    }
    16.667% {
      content: '⚽';
      transform: translateX(25px) rotateZ(720deg);
    }
    33.333% {
      content: '⚽';
      transform: translateX(-25px) rotateZ(0deg);
    }
    34.333% {
      content: '🏀';
      transform: translateX(-25px) rotateZ(0deg);
    }
    50% {
      content: '🏀';
      transform: translateX(25px) rotateZ(720deg);
    }
    66.667% {
      content: '🏀';
      transform: translateX(-25px) rotateZ(0deg);
    }
    67.667% {
      content: '🏐';
      transform: translateX(-25px) rotateZ(0deg);
    }
    83.333% {
      content: '🏐';
      transform: translateX(25px) rotateZ(720deg);
    }
    100% {
      content: '🏐';
      transform: translateX(-25px) rotateZ(0deg);
    }
  }
`;

function Spinner() {
  return (
    <SpinnerWrap>
      <div className="dot-typing" />
    </SpinnerWrap>
  );
}

export default Spinner;
