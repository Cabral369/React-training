import { Heading } from '.';

export default {
  title: 'Heading',
  component: Heading,
  args: {
    children: 'O texto esta escuro',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Light = (args) => {
  return (
    <div>
      <Heading {...args} />
    </div>
  );
};

export const Dark = (args) => {
  return (
    <div>
      <Heading {...args} light={true} />
    </div>
  );
};

Light.parameters = {
  backgrounds: { default: 'light' },
};

Dark.args = {
  children: 'O texto esta claro',
  colorDark: false,
};
