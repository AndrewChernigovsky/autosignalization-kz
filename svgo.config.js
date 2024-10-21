export const svgoConfig = {
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          convertPathData: {
            floatPrecision: 2,
            forceAbsolutePath: false,
            utilizeAbsolute: false,
          },
          removeViewBox: false,
        },
      },
    },
    'removeDimensions', // Удаляет размеры из SVG
    {
      name: 'removeAttrs',
      params: {
        attrs: '(fill|stroke)', // Удаляет атрибут fill
      },
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: [
          { fill: 'currentColor' }, // Добавляет новый атрибут fill со значением currentColor
        ],
      },
    },
  ],
};