import { Base } from '.';
import mock from './mock';
import { GridText } from '../../components/GridText';
import gridMock from '../../components/GridText/mock';

export const MockBase = {
  children: (
    <>
      <GridText {...gridMock} background></GridText>
      <GridText {...gridMock}></GridText>
      <GridText {...gridMock} background></GridText>
      <GridText {...gridMock}></GridText>
    </>
  ),
  ...mock,
};

export default {
  title: 'Temaplates/Base',
  component: Base,
  args: MockBase,
};

export const Template = (args) => {
  return (
    <div>
      <Base {...args} />
    </div>
  );
};
