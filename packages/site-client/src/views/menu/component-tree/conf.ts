export type TreeItem = {
  name: string;
  display_name: string;
  type: string;
  data?: TreeItem[];
};

export const data = [
  {
    name: '001',
    display_name: '001',
    type: 'string',
    data: [
      {
        name: '001',
        display_name: '001',
        type: 'string',
        data: [
          {
            name: '001',
            display_name: '001',
            type: 'string',
            data: [
              {
                name: '001',
                display_name: '001',
                type: 'string',
              },
            ],
          },
        ],
      },
    ],
  },
];

export const typeOptions = [
  {
    label: 'string',
    value: 'string',
  },
  {
    label: 'string',
    value: 'string',
  },
];
