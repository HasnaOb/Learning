import { css } from '@lit/reactive-element';

export const ImgCardStyle = [
  css`
    .img-card--container {
      width: 300px;
      border: 1px solid #ddd;
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      font-family: Arial, sans-serif;
      transition:
        transform 0.3s ease,
        box-shadow 0.3s ease;
      cursor: pointer;
      background-color: #fff;
    }

    .img-card--container:hover {
      transform: translateY(-5px);
      box-shadow: rgb(31 102 165 / 89%) 0px 8px 20px;
    }

    .img-card--image {
      width: 100%;
      height: auto;
      display: block;
      transition: transform 0.3s ease;
    }

    .img-card--container:hover .img-card--image {
      transform: scale(1.05);
    }

    .img-card--content {
      padding: 20px;
    }

    .img-card--title {
      font-size: 18px;
      margin: 0 0 8px 0;
      color: #333;
    }

    .img-card--subtitle {
      font-size: 14px;
      color: #666;
      margin: 0;
      line-height: 1.4;
    }
  `,
];
